/** Bilingual procedural text → scene description. No network, no API keys. */

const LEX = new Map();

function add(phrases, data) {
  for (const phrase of phrases) {
    const text = typeof phrase === "string" ? phrase : phrase.t;
    const record = { ...data };
    if (phrase && typeof phrase === "object") {
      if (phrase.plural) record.plural = true;
      if (phrase.variant) record.variant = phrase.variant;
    }
    const norm = normalize(text);
    LEX.set(norm, record);
    const stripped = norm
      .split(/\s+/)
      .map((w) => looseStrip(w))
      .join(" ");
    if (!LEX.has(stripped)) LEX.set(stripped, record);
  }
}

function looseStrip(token) {
  if (!/[\u0600-\u06FF]/.test(token)) return token;
  const multi = ["وبال", "وال", "بال", "فال", "كال", "ولل", "لل", "ال"];
  for (const p of multi) {
    if (token.startsWith(p) && token.length - p.length >= 2) return token.slice(p.length);
  }
  return token;
}

const object = (id, extra = {}) => ({ kind: "object", id, ...extra });
const system = (id) => ({ kind: "system", id });
const layer = (id) => ({ kind: "layer", id });
const color = (hex) => ({ kind: "color", hex });
const material = (id) => ({ kind: "material", id });

add(
  [
    "water filtration system",
    "filtration system",
    "water filter system",
    "purification system",
    "water purification",
    "water treatment",
    "filtration",
    "purifier",
    "water purifier",
    "نظام ترشيح مياه",
    "نظام ترشيح",
    "محطه معالجه",
    "معالجه المياه",
    "تنقيه المياه",
    "محطه تنقيه",
    "ترشيح",
    "تنقيه",
    "تصفيه",
  ],
  system("filtration"),
);
add(
  [
    "aquaponics system",
    "aquaponic system",
    "aquaponics",
    "aquaponic",
    "hydroponic system",
    "hydroponics",
    "hydroponic",
    "نظام زراعه مائيه",
    "زراعه مائيه",
    "نظام اكوابونيك",
    "اكوابونيك",
    "اكوابونكس",
    "نظام هيدروبونيك",
    "هيدروبونيك",
    "احواض زراعه",
  ],
  system("aquaponics"),
);

const OBJECTS = [
  [["cube", "block", "مكعب", "مكعبات"], "cube"],
  [["crate", "صندوق", "صناديق"], "cube", { variant: "crate" }],
  [["dice", "die", "نرد"], "cube", { variant: "dice" }],
  [["sphere", "ball", "orb", "كره", "كرات", "كروي"], "sphere"],
  [["cylinder", "column", "pillar", "can", "اسطوانه", "اسطوانات", "عمود", "علبه"], "cylinder"],
  [["barrel", "برميل"], "cylinder", { variant: "barrel" }],
  [["cone", "مخروط", "قمع"], "cone"],
  [["arch", "archway", "قوس", "عقد", { t: "اقواس", plural: true }, { t: "عقود", plural: true }], "arch"],
  [["window", "windows", "نافذه", "شباك", { t: "نوافذ", plural: true }, { t: "شبابيك", plural: true }], "window"],
  [["door", "doors", "doorway", "باب", { t: "ابواب", plural: true }], "door"],
  [["dome", "قبه", { t: "قباب", plural: true }], "dome"],
  [["wall", "walls", "جدار", "حائط", { t: "جدران", plural: true }], "wall"],
  [["prism", "wedge", "موشور"], "prism"],
  [["torus", "ring", "donut", "doughnut", "حلقه", "خاتم", "دونات", "طوق"], "torus"],
  [["pyramid", "هرم", "اهرام", "اهرامات"], "pyramid"],
  [["capsule", "pill", "كبسوله"], "capsule"],
  [["star", "نجمه", "نجم", { t: "نجوم", plural: true }], "star"],
  [["heart", "قلب", "قلوب"], "heart"],
  [["water tank", "خزان مياه", "tank", "reservoir", "vessel", "خزان", "خزانات", "صهريج", "حاويه"], "tank"],
  [["pipe", "tube", "hose", "انبوب", "انابيب", "ماسوره", "مواسير", "خرطوم"], "pipe"],
  [["filter column", "filter cylinder", "عمود فلتر", "اسطوانه فلتر", "filter", "فلتر", "مرشح", "فلاتر", "مرشحات"], "filter"],
  [["pump", "مضخه", "مضخات", "طلمبه"], "pump"],
  [["house", "home", "villa", "cottage", "منزل", "بيت", "دار", "فيلا", "كوخ", "منازل", "بيوت"], "house"],
  [["table", "desk", "طاوله", "طاولات", "منضده", "مكتب"], "table"],
  [["chair", "كرسي", "كراسي", "مقعد"], "chair"],
  [["sofa", "couch", "اريكه", "كنبه", "كنب"], "sofa"],
  [["bed", "سرير", "اسره"], "bed"],
  [["car", "automobile", "taxi", "سياره", "سيارات", "عربه", "مركبه"], "car"],
  [["bus", "حافله", "باص"], "bus"],
  [["bicycle", "bike", "دراجه"], "bicycle"],
  [["tree", "شجره", "شجر"], "tree"],
  [["trees", { t: "اشجار", plural: true }], "tree"],
  [["palm", "palm tree", "نخله", "نخيل"], "tree", { variant: "palm" }],
  [["pine", "pine tree", "صنوبر"], "tree", { variant: "pine" }],
  [["robot", "android", "روبوت", "انسان الي"], "robot"],
  [["skyscraper", "ناطحه سحاب", "ناطحه"], "building", { variant: "skyscraper" }],
  [["tower", "برج", { t: "ابراج", plural: true }], "building", { variant: "tower" }],
  [["building", "مبني", "مباني", "عماره"], "building"],
  [["lamp", "lantern", "مصباح", "لمبه", "ابجوره", "فانوس"], "lamp"],
  [["rocket", "spaceship", "صاروخ", "مركبه فضائيه"], "rocket"],
  [["airplane", "plane", "aircraft", "طائره", "طائرات", "طياره"], "airplane"],
  [["boat", "ship", "sailboat", "yacht", "قارب", "سفينه", "مركب", "يخت"], "boat"],
  [["cup", "mug", "كوب", "فنجان", "كاس"], "cup"],
  [["bottle", "flask", "زجاجه", "قاروره", "قنينه"], "bottle"],
  [["flower", "rose", "tulip", "زهره", "ورده", "ازهار", "ورود"], "flower"],
  [["saturn", "زحل"], "planet", { variant: "saturn" }],
  [["earth", "الارض"], "planet", { variant: "earth" }],
  [["moon", "قمر"], "planet", { variant: "moon" }],
  [["planet", "كوكب", "كواكب"], "planet"],
  [["bridge", "جسر", "كوبري"], "bridge"],
  [["mountain", "hill", "جبل", "جبال", "تل"], "mountain"],
  [["snowman", "رجل ثلج", "رجل الثلج"], "snowman"],
  [["greenhouse", "بيت زجاجي", "صوبه"], "greenhouse"],
  [["fountain", "نافوره"], "fountain"],
  [["castle", "قلعه", "قصر"], "castle"],
  [["windmill", "طاحونه", "طاحونه هواء"], "windmill"],
  [["bench", "مقعد حديقه", "دكه"], "bench"],
  [["solar farm", "مزرعه شمسيه", "الواح شمسيه كثيره"], "solar", { variant: "farm" }],
  [["solar panel", "لوح شمسي", "الواح شمسيه"], "solar"],
  [["fence", "سياج", "سور"], "fence"],
  [["stairs", "staircase", "سلم", "درج"], "stairs"],
  [["well", "بئر"], "well"],
  [["cloud", "سحابه", "سحاب", "غيمه"], "cloud"],
  [["sun", "شمس"], "sun"],
  [["cactus", "صبار"], "cactus"],
  [["mushroom", "فطر", "عش الغراب"], "mushroom"],
  [["fish", "سمكه", "سمك", "اسماك"], "fish"],
  [["plant", "seedling", "نبات", "نبته", "نباتات"], "plant"],
  [["grow bed", "حوض زراعه", "حوض نباتات"], "planter"],
  [["person", "human", "man", "woman", "شخص", "انسان", "رجل", "امرأه"], "person"],
  [["gear", "cog", "ترس", "تروس"], "gear"],
  [["crown", "تاج"], "crown"],
  [["umbrella", "مظله"], "umbrella"],
  [["book", "كتاب", "كتب"], "book"],
  [["shelf", "bookshelf", "bookcase", "رف", { t: "رفوف", plural: true }, "مكتبه"], "shelf"],
  [["cabinet", "wardrobe", "closet", "خزانه", "دولاب"], "cabinet"],
  [["chessboard", "chess board", "checkerboard", "رقعه شطرنج", "شطرنج"], "chessboard"],
  [["school building", "school", "مبنى مدرسي", "مدرسه"], "building", { variant: "school" }],
  [["factory", "مصنع", "معمل"], "building", { variant: "factory" }],
  [["beaker", "دورق", "كأس مختبر"], "beaker"],
  [["atom", "ذره"], "atom"],
  [["microscope", "مجهر"], "microscope"],
  [["dam", "سد"], "dam"],
  [["wind turbine", "turbine", "توربين رياح", "توربين"], "turbine"],
  [["satellite", "قمر صناعي"], "satellite"],
  [["lighthouse", "مناره", "فنار"], "lighthouse"],
  [["river", "نهر"], "river"],
  [["lake", "بحيره"], "lake"],
  [["globe", "كره ارضيه", "مجسم الارض"], "planet", { variant: "earth" }],
];

for (const [phrases, id, extra] of OBJECTS) add(phrases, object(id, extra));
add([{ t: "سيارات", plural: true }], object("car"));
add([{ t: "كرات", plural: true }], object("sphere"));
add([{ t: "مكعبات", plural: true }], object("cube"));
add([{ t: "صناديق", plural: true }], object("cube", { variant: "crate" }));
add([{ t: "منازل", plural: true }, { t: "بيوت", plural: true }], object("house"));
add([{ t: "كراسي", plural: true }], object("chair"));
add([{ t: "نباتات", plural: true }], object("plant"));
add([{ t: "اسماك", plural: true }], object("fish"));

add(
  ["sponge", "foam", "اسفنج"],
  layer("sponge"),
);
add(["cotton", "wool", "قطن"], layer("cotton"));
add(["filter cloth", "cloth", "قماش", "شاش"], layer("cloth"));
add(["fine sand", "رمل ناعم"], layer("sand"));
add(["coarse sand", "رمل خشن"], layer("coarseSand"));
add(["sand", "رمل", "رمال"], layer("sand"));
add(
  ["activated charcoal", "charcoal", "carbon", "فحم نشط", "فحم", "كربون"],
  layer("charcoal"),
);
add(["fine gravel", "حصى ناعم"], layer("gravel"));
add(["coarse gravel", "حصى خشن"], layer("coarseGravel"));
add(["gravel", "حصى", "حصا"], layer("gravel"));
add(["pebbles", "stones", "حجاره", "زلط"], layer("pebbles"));
add(["ceramic rings", "حلقات سيراميك", "سيراميك فلتر"], layer("ceramic"));
add(["bio balls", "bioballs", "كرات حيويه"], layer("bioballs"));

const COLORS = {
  "#e53935": ["red", "احمر", "حمراء", "حمرا", "قرمزي"],
  "#1e88e5": ["blue", "ازرق", "زرقاء", "زرقا"],
  "#1a237e": ["navy", "كحلي"],
  "#43a047": ["green", "اخضر", "خضراء", "خضرا"],
  "#fdd835": ["yellow", "اصفر", "صفراء", "صفرا", "ليموني"],
  "#fb8c00": ["orange", "برتقالي", "برتقاليه"],
  "#8e24aa": ["purple", "violet", "بنفسجي", "ارجواني", "موف"],
  "#ec407a": ["pink", "وردي", "زهري", "زهريه"],
  "#212121": ["black", "اسود", "سوداء", "سودا"],
  "#f5f5f5": ["white", "ابيض", "بيضاء", "بيضا"],
  "#9e9e9e": ["gray", "grey", "رمادي", "رصاصي"],
  "#795548": ["brown", "بني", "بنيه"],
  "#d4af37": ["gold", "ذهبي", "ذهبيه"],
  "#c0c0c0": ["silver", "فضي", "فضيه"],
  "#00bcd4": ["cyan", "sky blue", "سماوي", "تركوازي", "فيروزي"],
  "#d7c4a3": ["beige", "cream", "بيج", "كريمي"],
  "#00897b": ["teal", "تركواز"],
};

for (const [hex, phrases] of Object.entries(COLORS)) add(phrases, color(hex));

add(
  ["glass", "transparent", "clear", "crystal", "زجاج", "زجاجي", "زجاجيه", "شفاف", "شفافه", "شفافين", "كريستال", "بلور"],
  material("glass"),
);
add(
  ["metal", "metallic", "steel", "iron", "معدن", "معدني", "معدنيه", "حديد", "فولاذ", "ستانلس", "المنيوم", "كروم"],
  material("metal"),
);
add(["wood", "wooden", "خشب", "خشبي", "خشبيه"], material("wood"));
add(["plastic", "pvc", "بلاستيك"], material("plastic"));
add(["golden", "ذهب"], material("gold"));
add(["stone", "concrete", "marble", "rock", "حجر", "حجري", "حجريه", "خرسانه", "رخام", "اسمنت"], material("stone"));
add(["rubber", "matte", "مطاط"], material("rubber"));
add(["water", "ماء", "مياه"], material("water"));
add(["ceramic", "سيراميك"], material("ceramic"));
add(["copper", "نحاس", "نحاسي"], material("copper"));
add(["fabric", "قماش مفروشات"], material("fabric"));
add(
  ["glowing", "neon", "luminous", "shiny", "مضيء", "مضيء", "مضيئه", "متوهج", "نيون", "لامع", "منير", "مشع"],
  material("glow"),
);

add(["huge", "giant", "enormous", "ضخم", "عملاق", "هائل"], { kind: "size", s: 2.15 });
add(["big", "large", "كبير", "كبيره", "كبار"], { kind: "size", s: 1.5 });
add(["small", "little", "mini", "صغير", "صغيره", "صغار"], { kind: "size", s: 0.62 });
add(["tiny", "صغير جدا", "ضئيل", "دقيق"], { kind: "size", s: 0.4 });
add(["tall", "high", "طويل", "طويله", "مرتفع", "عالي", "عاليه"], { kind: "size", sy: 1.65 });
add(["short", "low", "flat", "قصير", "قصيره", "منخفض", "منخفضه"], { kind: "size", sy: 0.62 });
add(["wide", "broad", "عريض", "عريضه", "واسع"], { kind: "size", sx: 1.5 });
add(["narrow", "thin", "نحيف", "رفيع"], { kind: "size", sx: 0.7 });
add(["double", "twice", "ضعف"], { kind: "size", s: 2 });

add(["on top of", "on", "above", "over", "atop", "فوق", "علي", "اعلي", "اعلاه"], { kind: "relation", id: "on" });
add(["under", "below", "beneath", "تحت", "اسفل"], { kind: "relation", id: "under" });
add(["next to", "beside", "بجانب", "جانب", "قرب", "بجوار"], { kind: "relation", id: "beside" });
add(["behind", "خلف", "وراء"], { kind: "relation", id: "behind" });
add(["in front of", "in front", "امام"], { kind: "relation", id: "front" });
add(["left of", "left", "يسار"], { kind: "relation", id: "left" });
add(["right of", "right", "يمين"], { kind: "relation", id: "right" });

add(["light", "pale", "فاتح", "فاتحه"], { kind: "lightness", id: "light" });
add(["dark", "deep", "غامق", "غامقه", "داكن", "داكنه"], { kind: "lightness", id: "dark" });

add(["coarse", "rough", "خشن", "خشنه"], { kind: "modifier", id: "coarse" });
add(["fine", "ناعم", "ناعمه"], { kind: "modifier", id: "fine" });
add(["cutaway", "cross section", "section", "open", "مقطع", "مقطوع", "مقطوعه", "مفتوح"], { kind: "modifier", id: "cutaway" });
add(["closed", "مغلق", "مغلقه"], { kind: "modifier", id: "closed" });
add(["arched", "مقوس", "مقوسه"], { kind: "modifier", id: "arched" });

const SKIP = new Set([
  "a", "an", "the", "of", "with", "in", "from", "to", "for", "some", "my", "please",
  "showing", "show", "into", "by", "its", "it", "that", "this", "very",
  "من", "في", "الي", "عن", "مع", "ثم", "يظهر", "تظهر", "فيه", "فيها", "بها", "به",
  "هذا", "هذه", "ذلك", "طبقات", "طبقه", "داخل", "عليها", "عليه", "بعض", "اي",
]);

const FLOOR = new Set(["floor", "floors", "story", "stories", "storey", "storeys", "level", "levels", "طابق", "طوابق", "دور", "ادوار"]);

const UNIT_SCALE = {
  m: 1,
  meter: 1,
  meters: 1,
  metre: 1,
  metres: 1,
  cm: 0.01,
  centimeter: 0.01,
  centimeters: 0.01,
  mm: 0.001,
  متر: 1,
  امتار: 1,
  سم: 0.01,
};

const NUM_EN = {
  one: 1, single: 1, two: 2, pair: 2, couple: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, ten: 10, dozen: 12, several: 4, few: 3, many: 6,
};
const NUM_AR = {
  واحد: 1, واحده: 1, اثنان: 2, اثنين: 2, اثنتان: 2, اثنتين: 2, زوج: 2,
  ثلاث: 3, ثلاثه: 3, اربع: 4, اربعه: 4, خمس: 5, خمسه: 5, ست: 6, سته: 6,
  سبع: 7, سبعه: 7, ثماني: 8, ثمانيه: 8, ثمان: 8, تسع: 9, تسعه: 9, عشر: 10, عشره: 10,
  عده: 4, كثير: 6,
};

export function normalize(input) {
  return String(input || "")
    .replace(/[\u064B-\u0652\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/ؤ/g, "و")
    .replace(/ئ/g, "ي")
    .replace(/ء/g, "")
    .replace(/[٠-٩]/g, (d) => String("٠١٢٣٤٥٦٧٨٩".indexOf(d)))
    .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)))
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function knownStem(bare) {
  if (LEX.has(bare) || LEX.has(`${bare}ه`)) return true;
  for (const [suf, n] of [
    ["تين", 3],
    ["ين", 2],
    ["تان", 3],
    ["ان", 2],
    ["ات", 2],
  ]) {
    if (bare.endsWith(suf) && bare.length > n + 2) {
      const stem = bare.slice(0, -n);
      if (LEX.has(stem) || LEX.has(`${stem}ه`)) return true;
    }
  }
  return false;
}

function stripPrefixes(token) {
  if (!/[\u0600-\u06FF]/.test(token)) return token;
  let t = token;
  const multi = ["وبال", "وال", "بال", "فال", "كال", "ولل", "لل", "ال"];
  let guard = 0;
  while (guard++ < 3) {
    const p = multi.find((x) => t.startsWith(x) && t.length - x.length >= 2);
    if (!p) break;
    t = t.slice(p.length);
  }
  for (const p of ["و", "ب", "ل", "ف", "ك"]) {
    if (!t.startsWith(p) || t.length - p.length < 3) continue;
    const next = t.slice(p.length);
    if (knownStem(next)) return next;
  }
  return t;
}

function tokenize(text) {
  let s = normalize(text);
  s = s.replace(/\band\b/g, " | ");
  s = s.replace(/\sو\s/g, " | ");
  s = s.replace(/[,،;؛.!?]+/g, " | ");
  return s
    .split(/\s+/)
    .filter(Boolean)
    .map((n) => ({ n, sep: n === "|" }));
}

function isFloorToken(tok) {
  if (!tok || tok.sep) return false;
  return FLOOR.has(stripPrefixes(tok.n));
}

function stemHit(token) {
  const bare = stripPrefixes(token);
  if (LEX.has(bare)) return null;
  const dual = [
    ["تين", 3],
    ["ين", 2],
    ["تان", 3],
    ["ان", 2],
  ];
  for (const [suf, n] of dual) {
    if (!bare.endsWith(suf) || bare.length <= n + 2) continue;
    const stem = bare.slice(0, -n);
    const hit = LEX.get(stem) || LEX.get(`${stem}ه`);
    if (hit && (hit.kind === "object" || hit.kind === "system")) {
      return { ...hit, dual: true, plural: false };
    }
  }
  if (bare.endsWith("ات") && bare.length > 4) {
    const stem = bare.slice(0, -2);
    const hit = LEX.get(stem) || LEX.get(`${stem}ه`) || LEX.get(stem.slice(0, -1));
    if (hit && hit.kind === "object") return { ...hit, dual: false, plural: true };
  }
  return null;
}

function singularize(word) {
  if (word.endsWith("ies") && word.length > 4) return `${word.slice(0, -3)}y`;
  if (/(sses|shes|ches|xes|zes)$/.test(word)) return word.slice(0, -2);
  if (word.endsWith("s") && !word.endsWith("ss") && word.length > 3) return word.slice(0, -1);
  return word;
}

function matchAt(tokens, i) {
  for (let len = Math.min(4, tokens.length - i); len >= 1; len--) {
    const slice = tokens.slice(i, i + len);
    if (slice.some((t) => t.sep)) continue;
    const raw = slice.map((t) => t.n).join(" ");
    const stripped = slice.map((t) => stripPrefixes(t.n)).join(" ");
    const hit = LEX.get(raw) || LEX.get(stripped);
    if (hit) {
      const sing = singularize(tokens[i].n);
      const plural =
        !!hit.plural ||
        (len === 1 && sing !== tokens[i].n && LEX.get(sing)?.id === hit.id && LEX.get(sing)?.kind === hit.kind);
      return { ...hit, len, dual: false, plural };
    }
  }
  if (!tokens[i].sep) {
    const sing = singularize(tokens[i].n);
    if (sing !== tokens[i].n) {
      const hit = LEX.get(sing);
      if (hit && (hit.kind === "object" || hit.kind === "layer" || hit.kind === "system")) {
        return { ...hit, len: 1, dual: false, plural: true };
      }
    }
    const stemmed = stemHit(tokens[i].n);
    if (stemmed) return { ...stemmed, len: 1 };
  }
  return null;
}

function blankObject(it, text) {
  return {
    type: it.id,
    token: it.i,
    clause: it.clause,
    count: it.dual ? 2 : it.plural ? 3 : 1,
    explicitCount: false,
    color: null,
    material: null,
    scale: 1,
    sx: 1,
    sy: 1,
    glow: false,
    lightness: 0,
    floors: null,
    on: null,
    anchor: null,
    slot: null,
    variant: it.variant || null,
    seed: hashString(`${text}:${it.i}:${it.id}`),
  };
}

function bind(objs, mod, lang, pred = () => true, window = 8) {
  let best = null;
  let score = 1e9;
  for (const o of objs) {
    if (!pred(o)) continue;
    let s = Math.abs(o.token - mod.i);
    if (o.clause !== mod.clause) s += 7;
    if (lang === "ar" && mod.i < o.token) s += 1.15;
    if (lang !== "ar" && mod.i > o.token) s += 1.15;
    if (s < score) {
      score = s;
      best = o;
    }
  }
  if (!best || score > window) return null;
  return best;
}

function nearestItem(items, from, pred) {
  let best = null;
  let score = 1e9;
  for (const it of items) {
    if (!pred(it)) continue;
    const s = Math.abs(it.i - from.i) + (it.clause === from.clause ? 0 : 6);
    if (s < score) {
      score = s;
      best = it;
    }
  }
  return score <= 4 ? best : null;
}

function clamp(n, a, b) {
  return Math.max(a, Math.min(b, n));
}

const LAYER_ORDER = ["sponge", "cloth", "cotton", "sand", "charcoal", "coarseSand", "gravel", "pebbles", "coarseGravel", "ceramic", "bioballs"];
const DEFAULT_LAYERS = ["sponge", "sand", "charcoal", "coarseSand", "gravel", "coarseGravel"];

function orderLayers(list) {
  return [...list].sort((a, b) => {
    const ia = LAYER_ORDER.indexOf(a);
    const ib = LAYER_ORDER.indexOf(b);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
}

function collectLayers(items) {
  const layers = [];
  for (const it of items.filter((i) => i.kind === "layer")) {
    let id = it.id;
    const mod = nearestItem(items, it, (x) => x.kind === "modifier" && (x.id === "coarse" || x.id === "fine"));
    if ((id === "sand" || id === "gravel") && mod?.id === "coarse") {
      id = id === "sand" ? "coarseSand" : "coarseGravel";
    }
    if (!layers.includes(id)) layers.push(id);
  }
  return layers;
}

function tankCount(items, objs) {
  const tanks = objs.filter((o) => o.type === "tank");
  if (!tanks.length) return 2;
  let n = 0;
  for (const tank of tanks) {
    const num = nearestItem(
      items,
      { i: tank.token, clause: tank.clause },
      (x) => x.kind === "number",
    );
    const c = num ? num.value : tank.count;
    n = Math.max(n, c);
  }
  return clamp(n || 2, 1, 4);
}

function baseSpec(lang, text) {
  return {
    mode: "scene",
    lang,
    text,
    unknown: false,
    objects: [],
    filtration: null,
    aquaponics: null,
  };
}

function assemble(items, lang, text) {
  const spec = baseSpec(lang, text);
  const systems = items.filter((i) => i.kind === "system");
  const hasAqua = systems.some((s) => s.id === "aquaponics");
  const hasFilt = systems.some((s) => s.id === "filtration");
  const objectItems = items.filter((i) => i.kind === "object" && i.id !== "filtration" && i.id !== "aquaponics");
  const objs = objectItems.map((it) => blankObject(it, text));
  const layers = collectLayers(items);
  const hasFilter = objs.some((o) => o.type === "filter");
  const hasTank = objs.some((o) => o.type === "tank");

  let mode = "scene";
  if (hasAqua && !hasFilt) mode = "aquaponics";
  else if (hasFilt && !hasAqua) mode = "filtration";
  else if (hasAqua && hasFilt) mode = items.find((i) => i.kind === "system").id === "aquaponics" ? "aquaponics" : "filtration";
  else if ((hasFilter && (hasTank || layers.length >= 2)) || layers.length >= 3) mode = "filtration";

  const cutaway = !items.some((i) => i.kind === "modifier" && i.id === "closed");
  const used = new Set();

  for (const mod of items) {
    if (mod.kind === "color") {
      const o = bind(objs, mod, lang, (x) => !x.color);
      if (o) o.color = mod.hex;
    } else if (mod.kind === "material") {
      const o = bind(objs, mod, lang);
      if (!o) continue;
      if (mod.id === "glow") o.glow = true;
      else if (mod.id === "gold") {
        o.material = "metal";
        o.color = o.color || "#d4af37";
      } else if (!o.material) o.material = mod.id;
    } else if (mod.kind === "size") {
      const o = bind(objs, mod, lang);
      if (!o) continue;
      if (mod.s) o.scale *= mod.s;
      if (mod.sy) o.sy *= mod.sy;
      if (mod.sx) o.sx *= mod.sx;
    } else if (mod.kind === "lightness") {
      const o = bind(objs, mod, lang);
      if (o) o.lightness = mod.id === "light" ? 1 : -1;
    } else if (mod.kind === "dimension") {
      const o = bind(objs, mod, lang, () => true, 6);
      if (o) o.scale = clamp(mod.meters, 0.3, 2.8);
    } else if (mod.kind === "number" && !used.has(mod)) {
      const o = bind(objs, mod, lang, (x) => !x.explicitCount, 5);
      if (!o) continue;
      o.count = clamp(mod.value, 1, 24);
      o.explicitCount = true;
      used.add(mod);
    } else if (mod.kind === "floors") {
      const o = bind(objs, mod, lang, (x) => ["building", "castle", "house"].includes(x.type), 8);
      if (o) o.floors = clamp(mod.value, 1, 60);
    }
  }

  for (const rel of items.filter((i) => i.kind === "relation")) {
    const before = [...objs].reverse().find((o) => o.token < rel.i);
    const after = objs.find((o) => o.token > rel.i);
    if (!before || !after || before === after) continue;
    const ai = objs.indexOf(after);
    if (rel.id === "on") {
      before.on = ai;
      before.slot = "on";
    } else if (rel.id === "under") {
      before.on = ai;
      before.slot = "under";
    } else {
      before.anchor = ai;
      before.slot = rel.id;
    }
  }

  for (const mod of items) {
    if (mod.kind !== "modifier" || mod.id !== "arched") continue;
    const o = bind(objs, mod, lang, (x) => ["door", "window", "bridge", "wall", "house"].includes(x.type), 5);
    if (o && !o.variant) o.variant = "arched";
  }

  for (const o of objs) {
    if ((o.color === "#c0c0c0" || o.color === "#d4af37") && !o.material) o.material = "metal";
    if (o.type === "building" && !o.floors) {
      o.floors =
        o.variant === "skyscraper" ? 22 : o.variant === "tower" ? 12 : o.variant === "school" ? 3 : o.variant === "factory" ? 2 : 8;
    }
    if (o.type === "castle" && !o.floors) o.floors = 3;
  }

  if (mode === "filtration") {
    spec.mode = "filtration";
    spec.filtration = {
      layers: orderLayers(layers.length >= 2 ? layers : DEFAULT_LAYERS.slice()),
      tanks: tankCount(items, objs),
      cutaway: cutaway || items.some((i) => i.kind === "modifier" && i.id === "cutaway"),
      orderHint: LAYER_ORDER,
    };
    spec.objects = objs.filter((o) => !["tank", "filter", "pipe", "pump"].includes(o.type));
    return spec;
  }

  if (mode === "aquaponics") {
    spec.mode = "aquaponics";
    const plants = objs.find((o) => o.type === "plant" || o.type === "planter");
    const fish = objs.find((o) => o.type === "fish");
    spec.aquaponics = {
      plants: clamp(plants?.count || 6, 3, 12),
      fish: clamp(fish?.count || 3, 1, 8),
      withFilter: hasFilter || hasFilt || layers.length > 0,
      layers: orderLayers(layers.length ? layers : ["sponge", "ceramic", "bioballs"]),
    };
    spec.objects = objs.filter((o) => !["tank", "filter", "pipe", "pump", "fish", "plant", "planter"].includes(o.type));
    return spec;
  }

  if (!objs.length) {
    const col = items.find((i) => i.kind === "color");
    const mat = items.find((i) => i.kind === "material");
    spec.unknown = true;
    spec.objects = [
      {
        type: "abstract",
        token: 0,
        clause: 0,
        count: 1,
        color: col?.hex || null,
        material: mat && mat.id !== "glow" ? mat.id : null,
        scale: 1,
        sx: 1,
        sy: 1,
        glow: mat?.id === "glow",
        lightness: 0,
        floors: null,
        on: null,
        anchor: null,
        slot: null,
        variant: null,
        seed: hashString(text),
      },
    ];
    return spec;
  }

  spec.objects = objs;
  return spec;
}

export function parsePrompt(text) {
  const raw = String(text || "");
  const lang = /[\u0600-\u06FF]/.test(raw) ? "ar" : "en";
  const tokens = tokenize(raw);
  const items = [];
  let clause = 0;
  for (let i = 0; i < tokens.length; ) {
    const tok = tokens[i];
    if (tok.sep) {
      clause += 1;
      i += 1;
      continue;
    }
    if (SKIP.has(tok.n) || SKIP.has(stripPrefixes(tok.n))) {
      i += 1;
      continue;
    }
    const grid = tok.n.match(/^(\d+)x(\d+)$/);
    if (grid) {
      items.push({
        kind: "number",
        value: clamp(Number(grid[1]) * Number(grid[2]), 1, 24),
        clause,
        i,
        len: 1,
      });
      i += 1;
      continue;
    }
    if (/^\d+(?:\.\d+)?$/.test(tok.n)) {
      const value = Number.parseFloat(tok.n);
      const next = tokens[i + 1];
      const unit = next && !next.sep ? UNIT_SCALE[stripPrefixes(next.n)] : undefined;
      if (unit) {
        items.push({ kind: "dimension", meters: value * unit, clause, i, len: 2 });
        i += 2;
        continue;
      }
      if (!Number.isInteger(value)) {
        i += 1;
        continue;
      }
      const whole = Math.round(value);
      const floorish = isFloorToken(tokens[i + 1]);
      items.push({ kind: floorish ? "floors" : "number", value: whole, clause, i, len: 1 });
      i += floorish ? 2 : 1;
      continue;
    }
    const wordNum = NUM_EN[tok.n] || NUM_AR[stripPrefixes(tok.n)];
    if (wordNum) {
      const next = tokens[i + 1];
      const unit = next && !next.sep ? UNIT_SCALE[stripPrefixes(next.n)] : undefined;
      if (unit) {
        items.push({ kind: "dimension", meters: wordNum * unit, clause, i, len: 2 });
        i += 2;
        continue;
      }
      const floorish = isFloorToken(tokens[i + 1]);
      items.push({ kind: floorish ? "floors" : "number", value: wordNum, clause, i, len: 1 });
      i += floorish ? 2 : 1;
      continue;
    }
    if (isFloorToken(tok)) {
      i += 1;
      continue;
    }
    if (tok.n === "light" || tok.n === "lights") {
      const nxt = tokens[i + 1];
      const nxtHit = nxt && !nxt.sep && !SKIP.has(nxt.n) ? matchAt(tokens, i + 1) : null;
      const descriptive = nxtHit && ["color", "material", "size", "object", "layer"].includes(nxtHit.kind);
      if (!descriptive) {
        items.push({
          kind: "object",
          id: "lamp",
          len: 1,
          dual: false,
          plural: tok.n === "lights",
          clause,
          i,
          variant: null,
        });
        i += 1;
        continue;
      }
    }
    const hit = matchAt(tokens, i);
    if (hit) {
      items.push({ ...hit, clause, i });
      i += hit.len;
      continue;
    }
    i += 1;
  }
  return assemble(items, lang, raw);
}

export function hashString(s) {
  let h = 2166136261;
  const str = String(s);
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (Math.imul(1664525, s) + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

const SUGGEST_EN = [
  "cube", "sphere", "cylinder", "cone", "arch", "window", "door", "dome", "pyramid", "torus", "prism",
  "red", "blue", "green", "yellow", "glass", "metal", "wood", "stone", "wooden",
  "house", "table", "chair", "sofa", "bed", "cabinet", "bookshelf", "lamp",
  "car", "bridge", "gear", "pipe", "pump", "robot", "castle", "chessboard", "dice", "crown",
  "tree", "building", "rocket", "planet", "globe", "aquaponics",
  "water filtration system", "wooden door", "glass window", "stone arch", "metal gear", "wooden table",
  "arched door", "school building", "four glass windows",
  "beaker", "atom", "microscope", "dam", "wind turbine", "satellite", "lighthouse", "river", "lake", "solar farm",
];

const SUGGEST_AR = [
  "مكعب", "كره", "اسطوانه", "مخروط", "قوس", "نافذه", "باب", "قبه", "هرم", "حلقة",
  "احمر", "ازرق", "اخضر", "اصفر", "زجاج", "معدن", "خشب", "حجر", "خشبي",
  "منزل", "طاوله", "كرسي", "اريكه", "سرير", "خزانه", "رف", "مصباح",
  "سياره", "جسر", "ترس", "انبوب", "مضخه", "روبوت", "قلعه", "شطرنج", "نرد", "تاج",
  "شجره", "مبني", "صاروخ", "كوكب", "نظام ترشيح", "زراعه مائيه",
  "باب خشبي", "نافذه زجاجيه", "قوس حجري", "طاوله خشبيه",
  "دورق", "ذره", "مجهر", "سد", "توربين", "قمر صناعي", "مناره", "نهر", "بحيره", "مزرعه شمسيه", "مدرسه", "مصنع",
];

export function suggestPrompt(text, langHint) {
  const raw = String(text || "");
  const lang = langHint || (/[\u0600-\u06FF]/.test(raw) ? "ar" : "en");
  const typing = raw.length > 0 && !/\s$/.test(raw);
  if (!typing) return [];
  const last = raw.trimEnd().split(/\s+/).pop() || "";
  const stem = normalize(last);
  if (stem.length < 1) return [];
  const pool = lang === "ar" ? SUGGEST_AR : SUGGEST_EN;
  const hits = [];
  for (const label of pool) {
    const norm = normalize(label);
    if (norm.startsWith(stem) && norm !== stem) hits.push(label);
    if (hits.length >= 6) break;
  }
  return hits;
}

export { DEFAULT_LAYERS, LAYER_ORDER };
