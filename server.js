'use strict';

// Small, dependency-free Razorpay checkout server for the private journal.
// Keep .env private. Never serve this directory with a generic static server.
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const crypto = require('node:crypto');

const ROOT = __dirname;
const IMAGES = path.join(ROOT, 'images');
const GRANTS_FILE = path.join(ROOT, 'access-grants.json');

function loadEnv() {
  const file = path.join(ROOT, '.env');
  if (!fs.existsSync(file)) return;
  for (const line of fs.readFileSync(file, 'utf8').split(/\r?\n/)) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*?)\s*$/);
    if (!match || match[1] in process.env) continue;
    process.env[match[1]] = match[2].replace(/^(['"])(.*)\1$/, '$2');
  }
}
loadEnv();

const config = {
  port: Number(process.env.PORT || 3000),
  keyId: process.env.RAZORPAY_KEY_ID || '',
  keySecret: process.env.RAZORPAY_KEY_SECRET || '',
  accessPrice: Number(process.env.ACCESS_PRICE_PAISE || 4900),
  sessionSecret: process.env.SESSION_SECRET || '',
  secureCookie: process.env.COOKIE_SECURE === 'true',
  accessDays: Number(process.env.ACCESS_DAYS || 365)
};
const grants = new Map();

if (fs.existsSync(GRANTS_FILE)) {
  try {
    for (const [token, grant] of Object.entries(JSON.parse(fs.readFileSync(GRANTS_FILE, 'utf8')))) {
      if (grant.expiresAt > Date.now()) grants.set(token, grant);
    }
  } catch { console.error('Could not read access-grants.json; starting with an empty access list.'); }
}

function saveGrants() {
  const data = Object.fromEntries([...grants].filter(([, grant]) => grant.expiresAt > Date.now()));
  const temp = `${GRANTS_FILE}.tmp`;
  fs.writeFileSync(temp, JSON.stringify(data, null, 2), { mode: 0o600 });
  fs.renameSync(temp, GRANTS_FILE);
}

function sessionFrom(req) {
  const cookie = req.headers.cookie || '';
  const item = cookie.split(';').map(x => x.trim()).find(x => x.startsWith('journal_access='));
  if (!item) return null;
  const token = decodeURIComponent(item.slice('journal_access='.length));
  const [randomPart, signature] = token.split('.');
  if (!randomPart || !signature || !config.sessionSecret) return null;
  const expected = crypto.createHmac('sha256', config.sessionSecret).update(randomPart).digest('hex');
  if (!safeEqualHex(expected, signature)) return null;
  const grant = grants.get(token);
  if (!grant || grant.expiresAt <= Date.now()) { grants.delete(token); return null; }
  return { token, grant };
}

function setSession(res, token) {
  const expires = new Date(Date.now() + config.accessDays * 86400000).toUTCString();
  const secure = config.secureCookie ? '; Secure' : '';
  res.setHeader('Set-Cookie', `journal_access=${encodeURIComponent(token)}; Path=/; HttpOnly; SameSite=Lax; Expires=${expires}${secure}`);
}

function send(res, status, body, type = 'application/json; charset=utf-8', extraHeaders = {}) {
  res.writeHead(status, { 'Content-Type': type, 'X-Content-Type-Options': 'nosniff', 'Referrer-Policy': 'strict-origin-when-cross-origin', ...extraHeaders });
  res.end(type.startsWith('application/json') ? JSON.stringify(body) : body);
}

function readJson(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', chunk => { data += chunk; if (data.length > 16384) { reject(new Error('Request too large')); req.destroy(); } });
    req.on('end', () => { try { resolve(JSON.parse(data || '{}')); } catch { reject(new Error('Invalid JSON')); } });
    req.on('error', reject);
  });
}

function configured() {
  return config.keyId && config.keySecret && config.sessionSecret.length >= 32 &&
    !/replace|your_private/i.test(config.keyId) && !/replace|your_private/i.test(config.keySecret) &&
    !/replace/i.test(config.sessionSecret) && Number.isSafeInteger(config.accessPrice) && config.accessPrice > 0;
}

async function razorpayRequest(apiPath, method = 'GET', payload) {
  const auth = Buffer.from(`${config.keyId}:${config.keySecret}`).toString('base64');
  const response = await fetch(`https://api.razorpay.com/v1${apiPath}`, {
    method,
    headers: { Authorization: `Basic ${auth}`, ...(payload ? { 'Content-Type': 'application/json' } : {}) },
    ...(payload ? { body: JSON.stringify(payload) } : {})
  });
  const result = await response.json();
  if (!response.ok) throw new Error(result.error?.description || 'Payment service request failed.');
  return result;
}

function safeEqualHex(left, right) {
  if (!/^[a-f0-9]{64}$/i.test(left) || !/^[a-f0-9]{64}$/i.test(right)) return false;
  return crypto.timingSafeEqual(Buffer.from(left, 'hex'), Buffer.from(right, 'hex'));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
  try {
    if (req.method === 'GET' && url.pathname === '/') {
      return send(res, 200, fs.readFileSync(path.join(ROOT, 'index.html')), 'text/html; charset=utf-8', { 'Cache-Control': 'no-store' });
    }
    if (req.method === 'GET' && url.pathname === '/api/access') {
      return send(res, 200, { unlocked: Boolean(sessionFrom(req)) }, 'application/json; charset=utf-8', { 'Cache-Control': 'no-store' });
    }
    if (req.method === 'POST' && url.pathname === '/api/create-order') {
      if (!configured()) return send(res, 503, { error: 'Secure payment setup is not finished yet.' });
      const receipt = `journal_${Date.now()}_${crypto.randomBytes(5).toString('hex')}`;
      const order = await razorpayRequest('/orders', 'POST', { amount: config.accessPrice, currency: 'INR', receipt, notes: { product: 'albin-baby-private-journal' } });
      return send(res, 200, { keyId: config.keyId, amount: order.amount, currency: order.currency, orderId: order.id }, 'application/json; charset=utf-8', { 'Cache-Control': 'no-store' });
    }
    if (req.method === 'POST' && url.pathname === '/api/verify-payment') {
      if (!configured()) return send(res, 503, { verified: false, error: 'Secure payment setup is not finished yet.' });
      const payment = await readJson(req);
      const { razorpay_order_id: orderId, razorpay_payment_id: paymentId, razorpay_signature: signature } = payment;
      if (![orderId, paymentId, signature].every(x => typeof x === 'string' && x.length < 160)) return send(res, 400, { verified: false, error: 'Payment details are incomplete.' });
      const expected = crypto.createHmac('sha256', config.keySecret).update(`${orderId}|${paymentId}`).digest('hex');
      if (!safeEqualHex(expected, signature)) return send(res, 400, { verified: false, error: 'Payment signature could not be verified.' });
      const [order, paymentStatus] = await Promise.all([razorpayRequest(`/orders/${encodeURIComponent(orderId)}`), razorpayRequest(`/payments/${encodeURIComponent(paymentId)}`)]);
      if (order.amount !== config.accessPrice || order.currency !== 'INR' || order.receipt?.startsWith('journal_') !== true || paymentStatus.order_id !== order.id || paymentStatus.amount !== config.accessPrice || paymentStatus.currency !== 'INR' || paymentStatus.status !== 'captured' || paymentStatus.method !== 'upi') {
        return send(res, 402, { verified: false, error: 'Payment is not captured for this journal access.' });
      }
      const randomPart = crypto.randomBytes(32).toString('hex');
      const signature = crypto.createHmac('sha256', config.sessionSecret).update(randomPart).digest('hex');
      const token = `${randomPart}.${signature}`;
      grants.set(token, { orderId: order.id, paymentId, expiresAt: Date.now() + config.accessDays * 86400000 });
      saveGrants(); setSession(res, token);
      return send(res, 200, { verified: true }, 'application/json; charset=utf-8', { 'Cache-Control': 'no-store' });
    }
    if (req.method === 'GET' && url.pathname === '/journal') {
      if (!sessionFrom(req)) return res.writeHead(302, { Location: '/' }).end();
      return send(res, 200, fs.readFileSync(path.join(ROOT, 'journal.html')), 'text/html; charset=utf-8', { 'Cache-Control': 'private, no-store', 'X-Robots-Tag': 'noindex, nofollow' });
    }
    if (req.method === 'GET' && url.pathname.startsWith('/images/')) {
      if (!sessionFrom(req)) return send(res, 403, { error: 'Journal access required.' });
      const filename = path.basename(decodeURIComponent(url.pathname.slice('/images/'.length)));
      if (filename !== decodeURIComponent(url.pathname.slice('/images/'.length))) return send(res, 400, { error: 'Invalid image path.' });
      const filePath = path.join(IMAGES, filename);
      if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return send(res, 404, { error: 'Image not found.' });
      const ext = path.extname(filename).toLowerCase();
      const type = ext === '.webp' ? 'image/webp' : ext === '.png' ? 'image/png' : 'image/jpeg';
      res.writeHead(200, { 'Content-Type': type, 'Cache-Control': 'private, max-age=86400', 'X-Content-Type-Options': 'nosniff' });
      return fs.createReadStream(filePath).pipe(res);
    }
    if (req.method === 'POST' && url.pathname === '/api/logout') {
      const session = sessionFrom(req); if (session) { grants.delete(session.token); saveGrants(); }
      res.setHeader('Set-Cookie', 'journal_access=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0');
      return send(res, 200, { ok: true });
    }
    return send(res, 404, { error: 'Not found.' });
  } catch (error) {
    console.error(error);
    if (!res.headersSent) send(res, 500, { error: 'The request could not be completed. Please try again.' });
    else res.destroy();
  }
});

server.listen(config.port, () => {
  console.log(`Private journal is listening on http://localhost:${config.port}`);
  if (!configured()) console.log('Payment is locked until .env contains active Razorpay keys and a 32+ character SESSION_SECRET.');
});
