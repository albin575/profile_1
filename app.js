/**
 * Albin Baby - Visual Journal Application
 * Interactive 3D Coverflow (Model 1) & Editorial Story View (Model 2)
 */

// Curated Journal Database for the 33 photographs
const journalData = [
  {
    id: 1,
    file: "682714156_18080511263453028_5958498540099066278_n.jpg",
    category: "moments",
    title: "Need Refreshing",
    quoteEn: "Standing at the peak, watching clouds dance over distant horizons. A longing to wander back into the misty mountains.",
    quoteMl: "മലമുകളിലെ കുളിർമഞ്ഞും കാറ്റും... വീണ്ടും ആ കാടുകളിലേക്ക്, മലനിരകളിലേക്ക് നടന്നു കയറാൻ കൊതിയാവുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/320s • ISO 50",
    archive: "Archive by Albin Baby",
    location: "Vagamon Pine Forest, Kerala",
    date: "Nov 08",
    tag: "Instastory | today",
    chapter: "Highlands | Part 1"
  },
  {
    id: 2,
    file: "670426207_18078834347453028_2271564453530594372_n.jpg",
    category: "places",
    title: "Silent Trails",
    quoteEn: "The road less traveled holds the quietest whispers of the earth. Every curve opens up a new breath.",
    quoteMl: "ജനക്കൂട്ടമില്ലാത്ത വഴികൾക്ക് ഭൂമിയുടെ ഉള്ളിലെ നിശബ്ദതയെ തൊട്ടറിയാൻ കഴിയും. ഓരോ വളവിലും പുതിയ കാഴ്ചകൾ.",
    camera: "Shoot on Smartphone",
    specs: "26mm • f/1.9 • 1/500s • ISO 64",
    archive: "Archive by Albin Baby",
    location: "Gap Road, Munnar",
    date: "Oct 24",
    tag: "Journal | memories",
    chapter: "Wanderlust | Part 2"
  },
  {
    id: 3,
    file: "820106890_18095988884453028_4649105561680879620_n.jpg",
    category: "nature",
    title: "Emerald Canopy",
    quoteEn: "Sunlight piercing through green leaves like liquid gold. The woods are calm, holding time still.",
    quoteMl: "ഇലപ്പടർപ്പുകൾക്കിടയിലൂടെ അരിച്ചിറങ്ങുന്ന സ്വർണ്ണവെയിൽ. കാട് ശാന്തമാണ്, സമയം അവിടെ നിശ്ചലമായി നിൽക്കുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "50mm • f/1.8 • 1/200s • ISO 100",
    archive: "Archive by Albin Baby",
    location: "Silent Valley Foothills",
    date: "Oct 19",
    tag: "Nature | wilderness",
    chapter: "Verdant | Part 1"
  },
  {
    id: 4,
    file: "704565031_18082826120453028_1847717598838751717_n.jpg",
    category: "moments",
    title: "Golden Hour Glow",
    quoteEn: "Late afternoon warmth painting everything in amber. A cup of black tea and friends by the roadside.",
    quoteMl: "വൈകുന്നേരത്തെ പൊൻവെയിൽ ഭൂമിയെ ചായം പൂശുന്നു. വഴിയോരത്തെ ചായക്കടയും മനസ്സ് നിറഞ്ഞ സൗഹൃദവും.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.7 • 1/640s • ISO 80",
    archive: "Archive by Albin Baby",
    location: "Fort Kochi Promenade",
    date: "Oct 12",
    tag: "Stories | golden",
    chapter: "Coastline | Part 3"
  },
  {
    id: 5,
    file: "654862792_18082424522453028_3160269812915683880_n.jpg",
    category: "nature",
    title: "Misty Horizon",
    quoteEn: "Where the sky melts softly into misty hills. Breathing in the chill, letting all worries dissolve.",
    quoteMl: "ആകാശവും മഞ്ഞണിഞ്ഞ മലനിരകളും പരസ്പരം പുണരുന്നയിടം. തണുത്ത കാറ്റിൽ മനസ്സിന്റെ ഭാരങ്ങളെല്ലാം അലിഞ്ഞുപോകുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "28mm • f/2.0 • 1/400s • ISO 125",
    archive: "Archive by Albin Baby",
    location: "Meesapulimala Peak",
    date: "Sep 29",
    tag: "Instastory | clouds",
    chapter: "Mountain Soul | Part 1"
  },
  {
    id: 6,
    file: "696272931_18082217204453028_2703843214821880413_n.jpg",
    category: "moments",
    title: "Candid Stillness",
    quoteEn: "A split second frozen in time. The unplanned frames always tell the most genuine stories.",
    quoteMl: "ചിന്തകൾക്കുമപ്പുറമുള്ള ഒരു നിമിഷം. മുൻകൂട്ടി പ്ലാൻ ചെയ്യാത്ത ചിത്രങ്ങളാണ് എപ്പോഴും ഉള്ളു തൊടുന്നത്.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/160s • ISO 200",
    archive: "Archive by Albin Baby",
    location: "Wayanad Countryside",
    date: "Sep 15",
    tag: "Frame | candid",
    chapter: "Diaries | Vol 2"
  },
  {
    id: 7,
    file: "671203116_18079568009453028_1008151517063336598_n.jpg",
    category: "nature",
    title: "Whispering Pines",
    quoteEn: "Tall trees standing as silent guardians. The fragrance of pine needles and damp earth.",
    quoteMl: "തലയുയർത്തി നിൽക്കുന്ന പൈൻ മരങ്ങൾ. തണുത്ത മണ്ണും പൈൻ ഇലകളുടെ ഗന്ധവും ചേരുന്ന ശാന്തത.",
    camera: "Shoot on Smartphone",
    specs: "26mm • f/1.9 • 1/250s • ISO 100",
    archive: "Archive by Albin Baby",
    location: "Kuttikkanam Valleys",
    date: "Sep 04",
    tag: "Instastory | pines",
    chapter: "Forest Echoes | Part 1"
  },
  {
    id: 8,
    file: "670644267_18078864395453028_8775113312888808134_n.jpg",
    category: "places",
    title: "Echoes of Cobblestone",
    quoteEn: "Historic streets carrying the patina of old memories. Every doorway has witnessed a thousand sunsets.",
    quoteMl: "പഴമയുടെ സ്പന്ദനമുള്ള തെരുവുകൾ. ഓരോ വാതിലുകളും എത്രയോ സായാഹ്നങ്ങൾക്ക് സാക്ഷ്യം വഹിച്ചിരിക്കുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/320s • ISO 80",
    archive: "Archive by Albin Baby",
    location: "Jew Town, Mattancherry",
    date: "Aug 28",
    tag: "Archive | heritage",
    chapter: "Old Town | Part 1"
  },
  {
    id: 9,
    file: "643005436_18073787924453028_4286240750217102482_n.jpg",
    category: "nature",
    title: "Twilight Reflections",
    quoteEn: "The surface of the lake turned into glass. Twilight reflects the quiet poetry of departing daylight.",
    quoteMl: "തടാകത്തിന്റെ ശാന്തമായ ജലോപരിതലം കണ്ണാടി പോലെ. സന്ധ്യാവെളിച്ചം പകലിന്റെ അവസാനത്തെ കവിത കുറിക്കുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "28mm • f/2.2 • 1/100s • ISO 250",
    archive: "Archive by Albin Baby",
    location: "Vembanad Backwaters",
    date: "Aug 16",
    tag: "Serene | dusk",
    chapter: "Waterways | Part 2"
  },
  {
    id: 10,
    file: "627912955_18072461948453028_1120487593822857481_n.jpg",
    category: "moments",
    title: "Midnight Solitude",
    quoteEn: "When the city sleeps and only streetlamps keep watch. A peaceful hour to reflect and breathe.",
    quoteMl: "നഗരം ഉറങ്ങുമ്പോൾ വീഥികളിൽ തെളിയുന്ന വിളക്കുകൾ. മനസ്സിനെ തിരിച്ചറിയാൻ കിട്ടുന്ന ഏറ്റവും ഏകാന്തമായ നിമിഷം.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.7 • 1/40s • ISO 800",
    archive: "Archive by Albin Baby",
    location: "Kaloor Bridge, Kochi",
    date: "Aug 02",
    tag: "Instastory | night",
    chapter: "Nocturne | Part 1"
  },
  {
    id: 11,
    file: "626216131_18071505287453028_8525997087375831090_n.jpg",
    category: "nature",
    title: "Morning Dew",
    quoteEn: "Droplets clinging to fresh blades of grass. Morning arrives softly, without a sound.",
    quoteMl: "പുൽനാമ്പുകളിൽ പറ്റിപ്പിടിച്ച മഞ്ഞുതുള്ളികൾ. ഒരു ശബ്ദവുമില്ലാതെ പ്രഭാതം പതുക്കെ ഉണരുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "35mm • f/2.0 • 1/320s • ISO 100",
    archive: "Archive by Albin Baby",
    location: "Ranipuram Hills",
    date: "Jul 21",
    tag: "Dawn | dew",
    chapter: "Highlands | Part 3"
  },
  {
    id: 12,
    file: "619763098_18070189568453028_3565392790270773229_n.jpg",
    category: "moments",
    title: "Friendship Chronicles",
    quoteEn: "Laughter echoed against the valley walls. The best journeys are made with people who feel like home.",
    quoteMl: "താഴ്‌വരകളിൽ ചിരിയുടെ അലയൊലികൾ. കൂടെയുള്ളവർ മനസ്സിന് പ്രിയപ്പെട്ടവരാകുമ്പോൾ യാത്രകൾ മനോഹരമാകുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "26mm • f/1.8 • 1/400s • ISO 64",
    archive: "Archive by Albin Baby",
    location: "Nelliyampathy Hills",
    date: "Jul 08",
    tag: "Stories | friends",
    chapter: "Chronicles | Vol 1"
  },
  {
    id: 13,
    file: "581689128_18064603373453028_4110664539708228941_n.jpg",
    category: "places",
    title: "Endless Highways",
    quoteEn: "Tarmac stretching straight into the sunset. The destination doesn't matter when the ride is pure soul.",
    quoteMl: "അസ്തമയത്തിലേക്ക് നീളുന്ന ഹൈവേ. വഴിയിലെ കാറ്റും കാഴ്ചകളുമാണ് എപ്പോഴും യാത്രയുടെ സൗന്ദര്യം.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/640s • ISO 50",
    archive: "Archive by Albin Baby",
    location: "NH 85, Bodimettu Pass",
    date: "Jun 27",
    tag: "OnTheRoad | highway",
    chapter: "Wayfarer | Part 3"
  },
  {
    id: 14,
    file: "581677098_18064516793453028_8064878307599736585_n.jpg",
    category: "nature",
    title: "Wilderness Solace",
    quoteEn: "In the heart of raw wilderness, thoughts find total stillness. The trees understand silence.",
    quoteMl: "കാടിന്റെ ഹൃദയത്തിൽ മനസ്സ് പൂർണ്ണമായും ശാന്തമാകുന്നു. പ്രകൃതിക്ക് നിശബ്ദതയുടെ ഭാഷ അറിയാം.",
    camera: "Shoot on Smartphone",
    specs: "28mm • f/2.2 • 1/250s • ISO 125",
    archive: "Archive by Albin Baby",
    location: "Periyar Tiger Reserve",
    date: "Jun 14",
    tag: "Nature | soul",
    chapter: "Wild | Part 1"
  },
  {
    id: 15,
    file: "546489922_18056940461453028_5967899359882619952_n.jpg",
    category: "moments",
    title: "Monsoon Melodies",
    quoteEn: "Rain dripping rhythmically from the tin roof. The smell of wet earth fills the entire valley.",
    quoteMl: "മേൽക്കൂരയിൽ താളത്തിൽ പെയ്യുന്ന മഴ. നനഞ്ഞ മണ്ണിന്റെ മണം താഴ്‌വരയെ മുഴുവൻ പൊതിയുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/125s • ISO 160",
    archive: "Archive by Albin Baby",
    location: "Vythiri, Wayanad",
    date: "May 30",
    tag: "Instastory | rain",
    chapter: "Monsoon | Vol 1"
  },
  {
    id: 16,
    file: "662230961_18111522058826044_8867794748609427057_n.jpg",
    category: "places",
    title: "Mountain Pass",
    quoteEn: "Curves cut into the ancient bedrock. Riding through clouds feels like drifting between dreams.",
    quoteMl: "പാറക്കെട്ടുകൾ വെട്ടിപ്പണിത മലമ്പാതകൾ. മേഘങ്ങൾക്കിടയിലൂടെയുള്ള യാത്ര ഒരു സ്വപ്നം പോലെയാണ്.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/500s • ISO 64",
    archive: "Archive by Albin Baby",
    location: "Thamarassery Churam",
    date: "May 18",
    tag: "Places | ghats",
    chapter: "Passage | Part 2"
  },
  {
    id: 17,
    file: "656274222_18109257424695616_6490286496815472439_n.jpg",
    category: "places",
    title: "Harbor Lights",
    quoteEn: "Boats docked in quiet waters, awaiting tomorrow's tide. The harbor breathes in peace.",
    quoteMl: "ശാന്തമായ വെള്ളത്തിൽ കെട്ടിയിട്ട വഞ്ചികൾ. പുലരിയുടെ തിരകൾക്കായി കാത്തുനിൽക്കുന്ന തുറമുഖം.",
    camera: "Shoot on Smartphone",
    specs: "26mm • f/1.9 • 1/80s • ISO 400",
    archive: "Archive by Albin Baby",
    location: "Kollam Port Harbor",
    date: "May 04",
    tag: "Places | coast",
    chapter: "Port | Part 1"
  },
  {
    id: 18,
    file: "801786329_18094612655453028_8790256811137567456_n.jpg",
    category: "words",
    title: "Silent Musings",
    quoteEn: "Some words are written not on paper, but left behind in places we loved and walked away from.",
    quoteMl: "ചില വാക്കുകൾ കടലാസിലല്ല എഴുതപ്പെടുന്നത്, നാം ഇഷ്ടപ്പെടുകയും പിന്നീട് നടന്നുപോവുകയും ചെയ്ത വഴികളിലാണ്.",
    camera: "Shoot on Smartphone",
    specs: "50mm • f/1.8 • 1/200s • ISO 100",
    archive: "Archive by Albin Baby",
    location: "Kumarakom Sanctuary",
    date: "Apr 22",
    tag: "Words | reflection",
    chapter: "Musings | Vol 1"
  },
  {
    id: 19,
    file: "775458563_18092025563453028_1024927670752839925_n.jpg",
    category: "words",
    title: "Between the Lines",
    quoteEn: "Travel teaches what stillness cannot. Find the quiet courage to be yourself anywhere.",
    quoteMl: "യാത്രകൾ നമ്മെ പഠിപ്പിക്കുന്നത് നിശബ്ദതയ്ക്ക് നൽകാനാവാത്ത ആഴമാണ്. എവിടെയും സ്വന്തം മനസ്സിനൊപ്പം നിൽക്കുക.",
    camera: "Shoot on Smartphone",
    specs: "35mm • f/2.0 • 1/250s • ISO 80",
    archive: "Archive by Albin Baby",
    location: "Idukki Arch Dam View",
    date: "Apr 11",
    tag: "Words | stillness",
    chapter: "Thoughtlines | Part 2"
  },
  {
    id: 20,
    file: "628280293_18426166822137902_7645477809693257077_n.jpg",
    category: "places",
    title: "Rust & Heritage",
    quoteEn: "Weathered walls and timeless iron beams. An ode to craftsmanship of forgotten times.",
    quoteMl: "കാലത്തിന്റെ അടയാളങ്ങൾ പേറുന്ന ഇരുമ്പ് പാലങ്ങളും പഴമയുടെ ഭംഗിയും. മറന്നുപോയ കരവിരുതുകൾ.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/320s • ISO 100",
    archive: "Archive by Albin Baby",
    location: "Kundannoor Bridge Old Piers",
    date: "Mar 30",
    tag: "Places | rust",
    chapter: "Timeless | Part 1"
  },
  {
    id: 21,
    file: "624551610_18101702479870325_5633699858154970660_n.jpg",
    category: "portrait",
    title: "The Wanderer",
    quoteEn: "Eyes that gaze into the distance, dreaming of the next mountain ridge to conquer.",
    quoteMl: "അകലേക്ക് നോക്കുന്ന കണ്ണുകൾ, കീഴടക്കാൻ ഇനിയുമേറെ മലനിരകളുണ്ടെന്ന് ഓർമ്മിപ്പിക്കുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "50mm • f/1.8 • 1/640s • ISO 50",
    archive: "Archive by Albin Baby",
    location: "Kolukkumalai Sunrise Point",
    date: "Mar 19",
    tag: "Portrait | wanderer",
    chapter: "Souls | Part 1"
  },
  {
    id: 22,
    file: "625524411_18194576884341807_7236843086742108009_n.jpg",
    category: "words",
    title: "Echo of Thoughts",
    quoteEn: "Leave nothing but footprints, take nothing but photographs, keep nothing but memories.",
    quoteMl: "കാൽപ്പാടുകളല്ലാതെ മറ്റൊന്നും അവിടെ ഉപേക്ഷിക്കരുത്, ഓർമ്മകളല്ലാതെ മറ്റൊന്നും കൂടെ കൊണ്ടുപോവരുത്.",
    camera: "Shoot on Smartphone",
    specs: "28mm • f/2.0 • 1/180s • ISO 160",
    archive: "Archive by Albin Baby",
    location: "Attappadi Hills",
    date: "Mar 07",
    tag: "Words | eco",
    chapter: "Echoes | Vol 3"
  },
  {
    id: 23,
    file: "653566724_17938869165016545_7607679158410242233_n.jpg",
    category: "places",
    title: "Hidden Creek",
    quoteEn: "Water flowing over mossy pebbles, murmuring secrets only the deep forest knows.",
    quoteMl: "പായൽ മൂടിയ ഉരുളൻ കല്ലുകൾക്കിടയിലൂടെ ഒഴുകുന്ന കാട്ടരുവി. ഉൾക്കാടിന്റെ രഹസ്യങ്ങൾ പേറുന്ന ശബ്ദം.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/100s • ISO 200",
    archive: "Archive by Albin Baby",
    location: "Athirappilly Stream",
    date: "Feb 23",
    tag: "Places | stream",
    chapter: "Cascades | Part 1"
  },
  {
    id: 24,
    file: "623989011_18074800388613346_2172342879668691028_n.jpg",
    category: "nature",
    title: "Cloud Blanket",
    quoteEn: "Looking down upon an ocean of white mist. You realize how vast and generous the sky is.",
    quoteMl: "വെള്ളപ്പഞ്ഞി പോലെയുള്ള മേഘക്കടലിന് മുകളിൽ നിന്ന് നോക്കുമ്പോൾ ആകാശത്തിന്റെ വിശാലത മനസ്സിലാവും.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/800s • ISO 50",
    archive: "Archive by Albin Baby",
    location: "Top Station, Munnar",
    date: "Feb 10",
    tag: "Instastory | clouds",
    chapter: "Above All | Part 2"
  },
  {
    id: 25,
    file: "632553470_18330540295175073_7310948058054793656_n.jpg",
    category: "words",
    title: "Heartbeat of Journey",
    quoteEn: "It is never about the miles on the odometer; it is about the beats of gratitude in your heart.",
    quoteMl: "ഓടിയ ദൂരത്തിലല്ല, കണ്ടുമുട്ടിയ മനുഷ്യരിലും ഹൃദയം നിറഞ്ഞ സന്തോഷത്തിലുമാണ് യാത്രയുടെ മൂല്യം.",
    camera: "Shoot on Smartphone",
    specs: "35mm • f/2.2 • 1/200s • ISO 100",
    archive: "Archive by Albin Baby",
    location: "Calicut Beach Pier",
    date: "Jan 28",
    tag: "Words | life",
    chapter: "Pulse | Vol 1"
  },
  {
    id: 26,
    file: "638856948_18378234589089346_3684438101607980047_n.jpg",
    category: "words",
    title: "Fragments of Light",
    quoteEn: "Even the darkest forest welcomes the brave little rays of sun. Hold onto hope.",
    quoteMl: "എത്ര ഇരുണ്ട കാട്ടിലും ഒരു ചെറിയ വെളിച്ചത്തിന് വഴികാട്ടാനാവും. പ്രതീക്ഷ കൈവിടാതിരിക്കുക.",
    camera: "Shoot on Smartphone",
    specs: "28mm • f/2.0 • 1/320s • ISO 80",
    archive: "Archive by Albin Baby",
    location: "Muthanga Wildlife Sanctuary",
    date: "Jan 15",
    tag: "Words | hope",
    chapter: "Fragments | Part 1"
  },
  {
    id: 27,
    file: "623977070_18084625699909341_8399940937816108440_n.jpg",
    category: "portrait",
    title: "Unspoken Gaze",
    quoteEn: "In silence, a portrait captures what a conversation often conceals.",
    quoteMl: "നിശബ്ദമായൊരു നോട്ടം, പലപ്പോഴും വാക്കുകളേക്കാൾ കൂടുതൽ കാര്യങ്ങൾ പറഞ്ഞുതരുന്നു.",
    camera: "Shoot on Smartphone",
    specs: "50mm • f/1.8 • 1/250s • ISO 160",
    archive: "Archive by Albin Baby",
    location: "Varkala Cliff Edge",
    date: "Jan 03",
    tag: "Portrait | mood",
    chapter: "Souls | Part 2"
  },
  {
    id: 28,
    file: "632317427_18401685343183651_8057383195862420204_n.jpg",
    category: "places",
    title: "Cliffside Sunset",
    quoteEn: "Red cliffs glowing against the roaring Arabian Sea. An evening etched in memory forever.",
    quoteMl: "ചുവന്ന പാറക്കെട്ടുകളിൽ വന്നലയ്ക്കുന്ന അറബിക്കടലിന്റെ തിരകൾ. മനസ്സിൽ എന്നും മായാതെ നിൽക്കുന്ന സായാഹ്നം.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/500s • ISO 64",
    archive: "Archive by Albin Baby",
    location: "Varkala North Cliff",
    date: "Dec 22",
    tag: "Places | cliffs",
    chapter: "Coastline | Part 1"
  },
  {
    id: 29,
    file: "637276878_18390298207149664_2793100212943653872_n.jpg",
    category: "nature",
    title: "Cascading Solitude",
    quoteEn: "Rushing waters falling gracefully down the rugged mountain face. Nature in its fiercest elegance.",
    quoteMl: "പാറക്കെട്ടുകളിലൂടെ പതഞ്ഞൊഴുകുന്ന വെള്ളച്ചാട്ടം. പ്രകൃതിയുടെ വന്യവും മനോഹരവുമായ ഭാവം.",
    camera: "Shoot on Smartphone",
    specs: "26mm • f/1.9 • 1/160s • ISO 100",
    archive: "Archive by Albin Baby",
    location: "Soochipara Falls, Wayanad",
    date: "Dec 10",
    tag: "Instastory | water",
    chapter: "Waters | Part 3"
  },
  {
    id: 30,
    file: "625248768_18098911777808244_1624790002477368954_n.webp",
    category: "words",
    title: "Quiet Pages",
    quoteEn: "Between every frame, there is an unwritten page waiting for your heart to read it.",
    quoteMl: "ഓരോ ചിത്രത്തിനും പിന്നിൽ എഴുതപ്പെടാത്ത ഒരു ഏടുണ്ട്, അത് വായിക്കാൻ മനസ്സ് മാത്രം മതി.",
    camera: "Shoot on Smartphone",
    specs: "35mm • f/2.0 • 1/120s • ISO 125",
    archive: "Archive by Albin Baby",
    location: "Alleppey Houseboat Deck",
    date: "Nov 28",
    tag: "Words | diary",
    chapter: "Unwritten | Part 1"
  },
  {
    id: 31,
    file: "651788662_18102284194904129_5544023190182052812_n.webp",
    category: "nature",
    title: "Tea Garden Waves",
    quoteEn: "Rolling emerald hills as far as the eye can see. Crisp cool air filled with tea leaf aroma.",
    quoteMl: "കണ്ണെത്താ ദൂരത്തോളം പരന്നുകിടക്കുന്ന തേയിലത്തോട്ടങ്ങൾ. കുളിർകാറ്റും പുതിയ തളിരിലകളുടെ ഗന്ധവും.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8 • 1/400s • ISO 50",
    archive: "Archive by Albin Baby",
    location: "Lockhart Gap, Munnar",
    date: "Nov 17",
    tag: "Nature | estate",
    chapter: "Emerald | Part 2"
  },
  {
    id: 32,
    file: "621136798_18134717107496952_5279723439753924635_n.jpg",
    category: "nature",
    title: "Valley of Whispers",
    quoteEn: "The winds howl tenderly through the gorges. You feel small, yet completely at peace.",
    quoteMl: "താഴ്‌വരകളിൽ കാറ്റിന്റെ മൃദുവായ സംഗീതം. പ്രകൃതിക്ക് മുന്നിൽ നാം ചെറുതാണെന്ന തിരിച്ചറിവ് നൽകുന്ന സമാധാനം.",
    camera: "Shoot on Smartphone",
    specs: "28mm • f/2.0 • 1/600s • ISO 64",
    archive: "Archive by Albin Baby",
    location: "Pothamedu Viewpoint",
    date: "Nov 02",
    tag: "Nature | valley",
    chapter: "Gorges | Part 1"
  },
  {
    id: 33,
    file: "624535835_18159623392414554_4641177018627862299_n.jpg",
    category: "moments",
    title: "Campfire Embers",
    quoteEn: "Sparks flying into the starry night sky. Cold winds and warm hearts around the dancing flames.",
    quoteMl: "നക്ഷത്രങ്ങൾ നിറഞ്ഞ ആകാശത്തേക്ക് പാറിപ്പറക്കുന്ന കനൽത്തരികൾ. തണുത്ത കാറ്റും തീകാഞ്ഞിരുന്ന കൂട്ടുകാരും.",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.7 • 1/30s • ISO 1200",
    archive: "Archive by Albin Baby",
    location: "Tent Camping, Suryanelli",
    date: "Oct 29",
    tag: "Moments | fire",
    chapter: "Campfire | Part 1"
  }
];

// App State Management
let currentPosts = [...journalData];
let activeIndex = 0;
let currentLanguage = 'en'; // 'en' or 'ml'
let currentMode = 'coverflow'; // 'coverflow' or 'feed'
let storyTimer = null;
let storyProgress = 0;
let isStoryPlaying = false;
let currentFilter = 'all';

// Bookmarks from localStorage
let bookmarkedIds = JSON.parse(localStorage.getItem('albin_saved_bookmarks') || '[]');

// Custom user-added journal entries
const savedCustomEntries = JSON.parse(localStorage.getItem('albin_custom_entries') || '[]');
if (savedCustomEntries.length > 0) {
  currentPosts.unshift(...savedCustomEntries);
}

// DOM Elements
const backdropEl = document.getElementById('dynamicBackdrop');
const coverflowTrack = document.getElementById('coverflowTrack');
const bottomLocation = document.getElementById('bottomLocation');
const bottomChapter = document.getElementById('bottomChapter');
const searchInput = document.getElementById('searchInput');
const feedView = document.getElementById('feedView');
const coverflowSection = document.getElementById('coverflowSection');
const storyOverlay = document.getElementById('storyOverlay');
const addModal = document.getElementById('addModal');
const shareModal = document.getElementById('shareModal');
const profileModal = document.getElementById('profileModal');
const toastEl = document.getElementById('toastNotice');

// Audio Synthesizer (Generative Ambient Wind / Mountain Breeze with Web Audio API)
let audioCtx = null;
let isAudioPlaying = false;
let ambientNodes = [];
let audioAlwaysOn = true; // ALWAYS ON BY DEFAULT

function updateAudioUI(playing) {
  const btn = document.getElementById('btnAudioToggle');
  if (!btn) return;
  if (playing) {
    btn.classList.add('audio-active');
    btn.setAttribute('title', 'Background sound is ON (Click to mute)');
    btn.innerHTML = `
      <div class="sound-wave-bars">
        <span class="sound-bar"></span>
        <span class="sound-bar"></span>
        <span class="sound-bar"></span>
        <span class="sound-bar"></span>
      </div>
    `;
  } else {
    btn.classList.remove('audio-active');
    btn.setAttribute('title', 'Background sound is MUTED (Click to play)');
    btn.innerHTML = `
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="1" y1="1" x2="23" y2="23"></line>
        <path d="M9 18V5l12-2v13"></path>
        <circle cx="6" cy="18" r="3"></circle>
        <circle cx="18" cy="16" r="3"></circle>
      </svg>
    `;
  }
}

function initAmbientSound(autoStarted = false) {
  if (isAudioPlaying && !autoStarted) {
    stopAmbientSound();
    return;
  }
  if (isAudioPlaying && autoStarted) {
    return;
  }

  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!audioCtx) {
      audioCtx = new AudioContext();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (ambientNodes.length > 0) {
      isAudioPlaying = true;
      audioAlwaysOn = true;
      updateAudioUI(true);
      return;
    }

    // 1. Pink/Brown noise generator for gentle mountain breeze
    const bufferSize = audioCtx.sampleRate * 2;
    const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      output[i] *= 0.045; // Gentle soothing volume
      b6 = white * 0.115926;
    }

    const whiteNoise = audioCtx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter for low warm wind sound
    const filter = audioCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(320, audioCtx.currentTime);

    // LFO (Low Frequency Oscillator) to modulate wind intensity slowly (natural breathing breeze)
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.type = 'sine';
    lfo.frequency.setValueAtTime(0.12, audioCtx.currentTime); // 8s breeze cycle
    lfoGain.gain.setValueAtTime(120, audioCtx.currentTime);
    lfo.connect(filter.frequency);
    lfo.start();

    // Master ambient gain
    const masterGain = audioCtx.createGain();
    masterGain.gain.setValueAtTime(0.01, audioCtx.currentTime);
    masterGain.gain.exponentialRampToValueAtTime(0.3, audioCtx.currentTime + 2.5);

    whiteNoise.connect(filter);
    filter.connect(masterGain);

    // 2. Subtle peaceful harmonic drone (evoking misty mountain tranquility)
    const droneOsc = audioCtx.createOscillator();
    const droneGain = audioCtx.createGain();
    droneOsc.type = 'sine';
    droneOsc.frequency.setValueAtTime(216, audioCtx.currentTime); // 216Hz warm relaxing tone
    droneGain.gain.setValueAtTime(0.005, audioCtx.currentTime); // Very gentle
    droneOsc.connect(droneGain);
    droneGain.connect(masterGain);
    droneOsc.start();

    masterGain.connect(audioCtx.destination);
    whiteNoise.start();

    ambientNodes = [whiteNoise, filter, lfo, lfoGain, droneOsc, droneGain, masterGain];
    isAudioPlaying = true;
    audioAlwaysOn = true;
    updateAudioUI(true);

    if (!autoStarted) {
      showToast('🎵 Ambient mountain soundscape: ON');
    }
  } catch (e) {
    console.warn('Audio auto-start waiting for interaction', e);
  }
}

function stopAmbientSound() {
  if (ambientNodes.length > 0) {
    ambientNodes.forEach(n => {
      try { n.stop(); n.disconnect(); } catch (e) {}
    });
    ambientNodes = [];
  }
  if (audioCtx) {
    audioCtx.close();
    audioCtx = null;
  }
  isAudioPlaying = false;
  audioAlwaysOn = false;
  updateAudioUI(false);
  showToast('🔇 Ambient audio muted');
}

// Setup Background Sound to be ALWAYS ON
function setupAlwaysOnAudio() {
  // Update button UI immediately to show active state
  updateAudioUI(true);

  // Attempt initial playback immediately on load
  initAmbientSound(true);

  // Auto-resume / start on ANY user interaction if browser policy suspended audio initially
  const unlockEvents = ['click', 'keydown', 'touchstart', 'pointerdown', 'wheel', 'scroll'];
  const unlockAudio = () => {
    if (audioAlwaysOn && (!isAudioPlaying || (audioCtx && audioCtx.state === 'suspended'))) {
      initAmbientSound(true);
    }
  };

  unlockEvents.forEach(evt => {
    window.addEventListener(evt, unlockAudio, { passive: true });
    document.addEventListener(evt, unlockAudio, { passive: true });
  });

  // Re-resume if tab gains focus again
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden && audioAlwaysOn && audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
  });
}

// Subtle card click sound effect
function playCardFlipSound() {
  if (!isAudioPlaying || !audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(420, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(120, audioCtx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + 0.09);
  } catch(e) {}
}

// Toast helper
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  setTimeout(() => {
    toastEl.classList.remove('show');
  }, 2600);
}

// ==========================================================================
// 3D COVERFLOW RENDERER & INTERACTION (Model 1)
// ==========================================================================
function renderCoverflow() {
  coverflowTrack.innerHTML = '';
  if (currentPosts.length === 0) {
    coverflowTrack.innerHTML = '<div style="color:#fff;font-weight:700;">No memories found matching your search.</div>';
    return;
  }

  // Ensure activeIndex is valid
  if (activeIndex >= currentPosts.length) activeIndex = 0;
  if (activeIndex < 0) activeIndex = currentPosts.length - 1;

  currentPosts.forEach((post, idx) => {
    const card = document.createElement('div');
    card.className = `journal-card ${idx === activeIndex ? 'is-active' : ''}`;
    card.dataset.index = idx;

    card.innerHTML = `
      <img src="images/${post.file}" alt="${post.title}" loading="lazy">
      <div class="card-glass-gloss"></div>
      <div class="card-caption-overlay">
        <h4>${post.title}</h4>
        <span>${post.location} • ${post.date}</span>
      </div>
    `;

    card.addEventListener('click', () => {
      if (idx === activeIndex) {
        // Open Editorial Story View (Model 2)
        openStoryView(idx);
      } else {
        // Scroll card to active center
        setActiveCard(idx);
      }
    });

    coverflowTrack.appendChild(card);
  });

  updateCoverflowPositions();
  updateBackdropAndInfo();
}

function updateCoverflowPositions() {
  const cards = coverflowTrack.querySelectorAll('.journal-card');
  const count = cards.length;
  if (count === 0) return;

  const isMobile = window.innerWidth < 768;
  const spreadX = isMobile ? 140 : 210;
  const depthZ = isMobile ? 60 : 90;

  cards.forEach((card, idx) => {
    const offset = idx - activeIndex;
    const absOffset = Math.abs(offset);

    if (absOffset > 3) {
      // Hide cards that are far away from view
      card.style.transform = `translateX(${offset * spreadX}px) translateZ(-400px) scale(0.6)`;
      card.style.opacity = '0';
      card.style.pointerEvents = 'none';
      card.style.zIndex = '0';
      return;
    }

    card.style.pointerEvents = 'auto';

    if (offset === 0) {
      // Active center card
      card.className = 'journal-card is-active';
      card.style.transform = `translateX(0px) translateZ(${depthZ}px) rotateY(0deg) scale(1.12)`;
      card.style.opacity = '1';
      card.style.zIndex = '20';
    } else if (offset < 0) {
      // Left cards
      card.className = 'journal-card';
      const rotate = Math.min(22, 12 + absOffset * 6);
      const scale = Math.max(0.72, 1 - absOffset * 0.12);
      const opacity = Math.max(0.45, 1 - absOffset * 0.22);
      card.style.transform = `translateX(${offset * spreadX}px) translateZ(${-absOffset * 50}px) rotateY(${rotate}deg) scale(${scale})`;
      card.style.opacity = opacity.toString();
      card.style.zIndex = (15 - absOffset).toString();
    } else {
      // Right cards
      card.className = 'journal-card';
      const rotate = -Math.min(22, 12 + absOffset * 6);
      const scale = Math.max(0.72, 1 - absOffset * 0.12);
      const opacity = Math.max(0.45, 1 - absOffset * 0.22);
      card.style.transform = `translateX(${offset * spreadX}px) translateZ(${-absOffset * 50}px) rotateY(${rotate}deg) scale(${scale})`;
      card.style.opacity = opacity.toString();
      card.style.zIndex = (15 - absOffset).toString();
    }
  });
}

function setActiveCard(newIndex) {
  if (newIndex < 0) newIndex = currentPosts.length - 1;
  if (newIndex >= currentPosts.length) newIndex = 0;
  activeIndex = newIndex;
  playCardFlipSound();
  updateCoverflowPositions();
  updateBackdropAndInfo();
}

function updateBackdropAndInfo() {
  if (currentPosts.length === 0) return;
  const activePost = currentPosts[activeIndex];
  if (!activePost) return;

  // Atmospheric frosted dynamic backdrop
  backdropEl.style.backgroundImage = `url('images/${activePost.file}')`;

  // Update bottom floating info dock
  if (bottomLocation) {
    bottomLocation.innerHTML = `<span class="pulse-dot"></span> <span>${activePost.location}</span>`;
  }
  if (bottomChapter) {
    const parts = (activePost.chapter || 'Wayfarer | Story 01').split('|');
    const partName = parts[0] ? parts[0].trim() : 'Wayfarer';
    const volName = parts[1] ? parts[1].trim() : `Frame ${String(activeIndex + 1).padStart(2, '0')}`;
    bottomChapter.innerHTML = `<span>${partName}</span> <span class="red-vertical-bar"></span> <span>${volName}</span>`;
  }
}

// Next & Prev Navigation
document.getElementById('carouselNextBtn').addEventListener('click', () => {
  setActiveCard(activeIndex + 1);
});

document.getElementById('carouselPrevBtn').addEventListener('click', () => {
  setActiveCard(activeIndex - 1);
});

// Keyboard Navigation
window.addEventListener('keydown', (e) => {
  if (storyOverlay.classList.contains('active')) {
    if (e.key === 'ArrowRight' || e.key === ' ') {
      nextStory();
    } else if (e.key === 'ArrowLeft') {
      prevStory();
    } else if (e.key === 'Escape') {
      closeStoryView();
    }
    return;
  }

  if (e.key === 'ArrowRight') {
    setActiveCard(activeIndex + 1);
  } else if (e.key === 'ArrowLeft') {
    setActiveCard(activeIndex - 1);
  } else if (e.key === 'Enter') {
    openStoryView(activeIndex);
  }
});

// Touch Swipe on Coverflow
let touchStartX = 0;
let touchEndX = 0;
coverflowTrack.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

coverflowTrack.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  if (touchStartX - touchEndX > 50) {
    setActiveCard(activeIndex + 1);
  } else if (touchEndX - touchStartX > 50) {
    setActiveCard(activeIndex - 1);
  }
}, { passive: true });

// Mouse Wheel Navigation
let wheelDebounce = false;
coverflowTrack.addEventListener('wheel', (e) => {
  e.preventDefault();
  if (wheelDebounce) return;
  wheelDebounce = true;
  if (e.deltaY > 0 || e.deltaX > 0) {
    setActiveCard(activeIndex + 1);
  } else {
    setActiveCard(activeIndex - 1);
  }
  setTimeout(() => { wheelDebounce = false; }, 240);
}, { passive: false });

// ==========================================================================
// MODEL 2: EDITORIAL STORY VIEW (photo_2026-10-30_18-06-03.jpg Style)
// ==========================================================================
function openStoryView(index) {
  activeIndex = index;
  renderStoryCard();
  storyOverlay.classList.add('active');
  startStoryProgress();
}

function closeStoryView() {
  storyOverlay.classList.remove('active');
  stopStoryProgress();
}

function renderStoryCard() {
  const post = currentPosts[activeIndex];
  if (!post) return;

  const cardContainer = document.getElementById('storyCardCanvas');
  const isBookmarked = bookmarkedIds.includes(post.id);

  // Dynamic language quote
  const currentQuote = currentLanguage === 'ml' ? post.quoteMl : post.quoteEn;
  const quoteClass = currentLanguage === 'ml' ? 'story-quote ml-quote' : 'story-quote';

  cardContainer.innerHTML = `
    <!-- Top Image Frame with Rounded Border (Model 2) -->
    <div class="story-image-frame">
      <img src="images/${post.file}" alt="${post.title}">
      <div class="story-badge-pill">
        <span class="category-text">${post.category.toUpperCase()}</span>
        <span class="pill-divider"></span>
        <span>today</span>
      </div>
    </div>

    <!-- Story Body Content with Bold Display Typography -->
    <div class="story-body-content">
      <div style="display:flex; justify-content:space-between; align-items:flex-start;">
        <h2 class="story-headline">${post.title}</h2>
        <button class="lang-toggle-badge" id="btnStoryLangToggle" title="Toggle English / Malayalam">
          <span>🌐 ${currentLanguage === 'en' ? 'മലയാളം' : 'English'}</span>
        </button>
      </div>

      <p class="${quoteClass}">${currentQuote}</p>

      <!-- Technical Meta Row -->
      <div class="story-meta-row">
        <div class="story-specs">
          <div class="camera-tag">${post.camera}</div>
          <div class="archive-tag">${post.archive} • ${post.location}</div>
        </div>

        <div class="story-date-bookmark">
          <span class="story-date-text">${post.date}</span>
          <button class="bookmark-ribbon-btn ${isBookmarked ? 'saved' : ''}" id="btnStoryBookmark" title="Save to Favorites">
            <svg viewBox="0 0 24 24" width="22" height="22">
              <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `;

  // Language toggle inside story card
  document.getElementById('btnStoryLangToggle').addEventListener('click', (e) => {
    e.stopPropagation();
    currentLanguage = currentLanguage === 'en' ? 'ml' : 'en';
    renderStoryCard();
  });

  // Bookmark toggle
  document.getElementById('btnStoryBookmark').addEventListener('click', (e) => {
    e.stopPropagation();
    toggleBookmark(post.id);
  });

  // Render progress strip
  renderProgressStrip();
}

function renderProgressStrip() {
  const strip = document.getElementById('storyProgressStrip');
  strip.innerHTML = '';
  currentPosts.forEach((_, idx) => {
    const seg = document.createElement('div');
    seg.className = `progress-bar-segment ${idx < activeIndex ? 'done' : ''}`;
    const fill = document.createElement('div');
    fill.className = 'progress-bar-fill';
    if (idx === activeIndex) {
      fill.id = 'activeProgressFill';
    }
    seg.appendChild(fill);
    strip.appendChild(seg);
  });
}

function startStoryProgress() {
  stopStoryProgress();
  isStoryPlaying = true;
  storyProgress = 0;
  const fillEl = document.getElementById('activeProgressFill');

  storyTimer = setInterval(() => {
    storyProgress += 2;
    if (fillEl) fillEl.style.width = `${storyProgress}%`;

    if (storyProgress >= 100) {
      nextStory();
    }
  }, 100); // 5 seconds per story
}

function stopStoryProgress() {
  if (storyTimer) clearInterval(storyTimer);
  isStoryPlaying = false;
}

function nextStory() {
  if (activeIndex < currentPosts.length - 1) {
    activeIndex++;
    renderStoryCard();
    startStoryProgress();
  } else {
    closeStoryView();
  }
}

function prevStory() {
  if (activeIndex > 0) {
    activeIndex--;
    renderStoryCard();
    startStoryProgress();
  }
}

// Bookmark toggler
function toggleBookmark(id) {
  if (bookmarkedIds.includes(id)) {
    bookmarkedIds = bookmarkedIds.filter(x => x !== id);
    showToast('Removed from Bookmarks');
  } else {
    bookmarkedIds.push(id);
    showToast('🔖 Saved to your Journal Bookmarks');
  }
  localStorage.setItem('albin_saved_bookmarks', JSON.stringify(bookmarkedIds));

  // Update story bookmark state
  const bookmarkBtn = document.getElementById('btnStoryBookmark');
  if (bookmarkBtn) {
    bookmarkBtn.classList.toggle('saved', bookmarkedIds.includes(id));
  }

  // If in feed mode and filtered by saved, re-render feed
  if (currentFilter === 'saved') {
    renderFeed();
  }
}

// Story Overlay Controls
document.getElementById('closeStoryBtn').addEventListener('click', closeStoryView);
document.getElementById('storyNavLeft').addEventListener('click', prevStory);
document.getElementById('storyNavRight').addEventListener('click', nextStory);

// ==========================================================================
// FULL GALLERY GRID / EDITORIAL FEED VIEW
// ==========================================================================
function renderFeed() {
  const grid = document.getElementById('journalGrid');
  grid.innerHTML = '';

  let filtered = currentPosts;
  if (currentFilter === 'saved') {
    filtered = currentPosts.filter(p => bookmarkedIds.includes(p.id));
  } else if (currentFilter !== 'all') {
    filtered = currentPosts.filter(p => p.category === currentFilter);
  }

  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align:center; padding: 40px; color:#fff;">No journal frames in this section yet.</div>';
    return;
  }

  filtered.forEach(post => {
    const card = document.createElement('div');
    card.className = 'grid-card-item';
    card.innerHTML = `
      <div class="grid-card-thumb">
        <img src="images/${post.file}" alt="${post.title}" loading="lazy">
      </div>
      <div class="grid-card-content">
        <div class="grid-card-header">
          <span class="grid-tag">${post.category}</span>
          <span class="grid-date">${post.date}</span>
        </div>
        <h3 class="grid-title">${post.title}</h3>
        <p class="grid-excerpt">${currentLanguage === 'ml' ? post.quoteMl : post.quoteEn}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      const idx = currentPosts.findIndex(p => p.id === post.id);
      openStoryView(idx !== -1 ? idx : 0);
    });

    grid.appendChild(card);
  });
}

// Filter Tab Click Handlers
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    currentFilter = tab.dataset.filter;
    renderFeed();
  });
});

// View Mode Switcher (Coverflow vs Stories Feed)
function setViewMode(mode) {
  currentMode = mode;
  document.getElementById('btnModeCoverflow').classList.toggle('active', mode === 'coverflow');
  document.getElementById('btnModeFeed').classList.toggle('active', mode === 'feed');

  // Update Left Dock Active Buttons
  document.getElementById('dockHome').classList.toggle('active', mode === 'coverflow');
  document.getElementById('dockExplore').classList.toggle('active', mode === 'feed');

  if (mode === 'coverflow') {
    coverflowSection.style.display = 'flex';
    feedView.classList.remove('active');
    updateCoverflowPositions();
  } else {
    coverflowSection.style.display = 'none';
    feedView.classList.add('active');
    renderFeed();
  }
}

document.getElementById('btnModeCoverflow').addEventListener('click', () => setViewMode('coverflow'));
document.getElementById('btnModeFeed').addEventListener('click', () => setViewMode('feed'));
document.getElementById('dockHome').addEventListener('click', () => setViewMode('coverflow'));
document.getElementById('dockExplore').addEventListener('click', () => setViewMode('feed'));

// Left Dock Bookmarks Quick Filter
document.getElementById('dockSaved').addEventListener('click', () => {
  setViewMode('feed');
  document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
  const savedTab = document.querySelector('.filter-tab[data-filter="saved"]');
  if (savedTab) savedTab.classList.add('active');
  currentFilter = 'saved';
  renderFeed();
});

// Live Search Filter
searchInput.addEventListener('input', (e) => {
  const query = e.target.value.toLowerCase().trim();
  if (!query) {
    currentPosts = [...journalData, ...savedCustomEntries];
  } else {
    currentPosts = [...journalData, ...savedCustomEntries].filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.location.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query) ||
      p.quoteEn.toLowerCase().includes(query)
    );
  }
  activeIndex = 0;
  renderCoverflow();
  if (currentMode === 'feed') renderFeed();
});

// Topbar Mic Button Feature
document.getElementById('btnMicVoice').addEventListener('click', () => {
  showToast('🎙️ Voice search ready: Speak memory or location...');
  setTimeout(() => {
    searchInput.focus();
  }, 400);
});

// Audio Toggle Button
document.getElementById('btnAudioToggle').addEventListener('click', initAmbientSound);

// ==========================================================================
// MODALS LOGIC: ADD ENTRY, SHARE, PROFILE
// ==========================================================================

// Add Entry Modal
document.getElementById('btnAddEntry').addEventListener('click', () => {
  addModal.classList.add('active');
});
document.getElementById('closeAddModal').addEventListener('click', () => {
  addModal.classList.remove('active');
});

// Add Entry Form Submit
document.getElementById('addEntryForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('newTitle').value.trim();
  const quote = document.getElementById('newQuote').value.trim();
  const location = document.getElementById('newLocation').value.trim();
  const category = document.getElementById('newCategory').value;
  const imageInput = document.getElementById('newImage');

  let fileName = "682714156_18080511263453028_5958498540099066278_n.jpg"; // fallback
  if (imageInput.files && imageInput.files[0]) {
    fileName = imageInput.files[0].name;
  }

  const newPost = {
    id: Date.now(),
    file: fileName,
    category: category,
    title: title || "New Horizon",
    quoteEn: quote || "A newly added memory in the journal.",
    quoteMl: "പുതിയ ഓർമ്മക്കുറിപ്പ്...",
    camera: "Shoot on Smartphone",
    specs: "24mm • f/1.8",
    archive: "Archive by Albin Baby",
    location: location || "Kerala, India",
    date: "Just Now",
    tag: "Journal | new",
    chapter: "New Stories | Vol 1"
  };

  savedCustomEntries.unshift(newPost);
  localStorage.setItem('albin_custom_entries', JSON.stringify(savedCustomEntries));
  currentPosts.unshift(newPost);

  activeIndex = 0;
  renderCoverflow();
  if (currentMode === 'feed') renderFeed();

  addModal.classList.remove('active');
  document.getElementById('addEntryForm').reset();
  showToast('✨ New journal entry added successfully!');
});

// Share Modal
document.getElementById('btnShare').addEventListener('click', () => {
  shareModal.classList.add('active');
});
document.getElementById('closeShareModal').addEventListener('click', () => {
  shareModal.classList.remove('active');
});

// Copy Journal Link
document.getElementById('btnCopyLink').addEventListener('click', () => {
  navigator.clipboard.writeText(window.location.href);
  showToast('🔗 Link copied to clipboard!');
});

// Profile Modal
document.getElementById('dockProfile').addEventListener('click', () => {
  profileModal.classList.add('active');
});
document.getElementById('authorPillTrigger').addEventListener('click', () => {
  profileModal.classList.add('active');
});
document.getElementById('closeProfileModal').addEventListener('click', () => {
  profileModal.classList.remove('active');
});

// Close modals on overlay backdrop click
[addModal, shareModal, profileModal].forEach(modal => {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });
});

// Initialize on Load
window.addEventListener('DOMContentLoaded', () => {
  renderCoverflow();
  renderFeed();
  setupAlwaysOnAudio();
});

// Also trigger immediately in case DOM is already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setupAlwaysOnAudio();
}
