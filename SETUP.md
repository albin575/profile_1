# Albin Baby private journal — payment setup

The public page shows a short introduction, a few dark-psychology awareness previews, and a ₹49 checkout. The full awareness notes and photo journal are served only after the server verifies a captured UPI payment. GPay and Paytm can be chosen from the UPI options shown by Razorpay Checkout when available.

## 1. Create and activate a merchant account

1. Open [Razorpay's official account signup](https://dashboard.razorpay.com/signup).
2. Create the account for the person or business that will receive the payments.
3. Complete the dashboard's account activation/KYC steps and add the bank account where settlements should arrive.
4. Ask Razorpay to enable UPI for Checkout if it is not already available on the account.

The supplied UPI ID (`albinbaby046-1@okhdfcbank`) is not used as a substitute for merchant activation. Gateway checkout settles to the bank account registered on the merchant account. Confirm the account and settlement destination are yours before going live.

## 2. Run a test checkout

1. Install Node.js 18 or newer.
2. Copy `.env.example` to `.env` in this folder.
3. In the Razorpay Dashboard, switch to **Test Mode**, create API keys, then put the test Key ID and Key Secret in `.env`.
4. Replace `SESSION_SECRET` with a long random value (at least 32 characters). Keep `.env` private; do not send the secret or an OTP in chat.
5. Start the site from this folder with `npm start` and open `http://localhost:3000`.
6. Complete a test payment. The server checks Razorpay's checkout signature and then fetches the payment status; it unlocks the journal only when the matching ₹49 payment is captured.

The fee is configured as `ACCESS_PRICE_PAISE=4900` (₹49). Change it only if the displayed fee and the server amount are meant to change together.

## 3. Go live

After Razorpay activates the account, create **Live Mode** keys and put them into the server's environment settings. Deploy this Node server on a host with HTTPS, set `COOKIE_SECURE=true`, and keep the source `images` directory behind the server routes. Do not deploy this folder through a static-only host or expose `.env` / `access-grants.json`.

The browser callback is verified on the server and the payment is checked with Razorpay before access is granted. The access cookie lasts `ACCESS_DAYS` (default 365) on that browser; this simple version has no customer login or account recovery.

## What's in the package

- `index.html`: bilingual, locked introduction and checkout entry.
- `journal.html`: the bilingual awareness notes and photo journal, served only by the authenticated route.
- `server.js`: order creation, server-side signature/status verification, short-lived session handling, and protected image routes.
- `images/`: supplied profile photo and journal posts. The server does not serve them before access is verified.
