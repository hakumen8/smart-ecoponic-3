/** Rewrite a rough sentence into text the procedural parser understands. No network. */

import { objectName } from "./i18n.js";
import { normalize, parsePrompt } from "./parser.js";

const COLORS = [
  ["#e53935", "أحمر", "red"],
  ["#1e88e5", "أزرق", "blue"],
  ["#1a237e", "كحلي", "navy"],
  ["#43a047", "أخضر", "green"],
  ["#fdd835", "أصفر", "yellow"],
  ["#fb8c00", "برتقالي", "orange"],
  ["#8e24aa", "بنفسجي", "purple"],
  ["#ec407a", "وردي", "pink"],
  ["#212121", "أسود", "black"],
  ["#f5f5f5", "أبيض", "white"],
  ["#9e9e9e", "رمادي", "gray"],
  ["#795548", "بني", "brown"],
  ["#d4af37", "ذهبي", "gold"],
  ["#c0c0c0", "فضي", "silver"],
  ["#00bcd4", "سماوي", "cyan"],
  ["#d7c4a3", "بيج", "beige"],
  ["#00897b", "تركواز", "teal"],
];

const MATERIALS = {
  glass: ["زجاجي", "glass"],
  metal: ["معدني", "metal"],
  wood: ["خشبي", "wooden"],
  plastic: ["بلاستيكي", "plastic"],
  stone: ["حجري", "stone"],
  rubber: ["مطاطي", "rubber"],
  water: ["مائي", "water"],
  ceramic: ["سيراميك", "ceramic"],
  copper: ["نحاسي", "copper"],
  fabric: ["قماشي", "fabric"],
  gold: ["ذهبي", "gold"],
};

const EN_NUM = ["", "a", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];

const THEMES = [
  {
    keys: ["school", "classroom", "education", "lesson", "student", "مدرسه", "تعليم", "صف", "درس", "طلاب"],
    en: "a school building with 3 floors, a wooden door, four glass windows, a wooden table, a chair, a bookshelf and a globe",
    ar: "مبنى مدرسي من 3 طوابق وباب خشبي وأربع نوافذ زجاجية وطاولة خشبية وكرسي ورف كتب وكرة أرضية",
  },
  {
    keys: ["engineer", "engineering", "machine", "mechanical", "هندسه", "هندسي", "محرك", "اله"],
    en: "an engineering model with a metal gear, a metal pipe, a cylinder, a pump and a stone arch bridge",
    ar: "نموذج هندسي بترس معدني وأنبوب معدني وأسطوانة ومضخة وجسر حجري بقوس",
  },
  {
    keys: ["game", "games", "toy", "play", "board game", "لعبه", "العاب", "لعب"],
    en: "a game set with three red dice, a chessboard, a golden crown and a small castle",
    ar: "مجموعة ألعاب بثلاث نردات حمراء ورقعة شطرنج وتاج ذهبي وقلعة صغيرة",
  },
  {
    keys: ["furniture", "living room", "bedroom", "اثاث", "غرفه", "صالون", "مفروشات"],
    en: "a furniture set with a wooden table, two wooden chairs, a sofa, a lamp, a bed and a cabinet",
    ar: "طقم أثاث بطاولة خشبية وكرسيين خشبيين وأريكة ومصباح وسرير وخزانة",
  },
  {
    keys: ["lab", "laboratory", "science", "مختبر", "علوم"],
    en: "a microscope, a glass beaker and an atom",
    ar: "مجهر ودورق زجاجي وذرة",
  },
  {
    keys: ["renewable", "energy", "ecosystem", "environment", "طاقه", "بيئه"],
    en: "a wind turbine, a solar farm, a pine tree, a lake and a sun",
    ar: "توربين رياح ومزرعة شمسية وشجرة صنوبر وبحيرة وشمس",
  },
  {
    keys: ["coast", "harbor", "ساحل", "مناره"],
    en: "a white lighthouse, a blue boat and a cloud",
    ar: "منارة بيضاء وقارب أزرق وسحابة",
  },
];

function colorWord(hex, lang) {
  if (!hex) return "";
  const hit = COLORS.find((row) => row[0] === hex.toLowerCase());
  if (!hit) return "";
  return lang === "ar" ? hit[1] : hit[2];
}

function materialWord(id, lang) {
  const pair = MATERIALS[id];
  if (!pair) return "";
  return lang === "ar" ? pair[0] : pair[1];
}

function typeWord(spec, lang) {
  if (spec.type === "planet" && spec.variant === "saturn") return lang === "ar" ? "زحل" : "saturn";
  if (spec.type === "planet" && spec.variant === "earth") return lang === "ar" ? "كرة أرضية" : "globe";
  if (spec.type === "planet" && spec.variant === "moon") return lang === "ar" ? "قمر" : "moon";
  if (spec.type === "tree" && spec.variant === "palm") return lang === "ar" ? "نخلة" : "palm tree";
  if (spec.type === "tree" && spec.variant === "pine") return lang === "ar" ? "صنوبر" : "pine tree";
  if (spec.type === "door" && spec.variant === "arched") return lang === "ar" ? "باب مقوس" : "arched door";
  if (spec.type === "building" && spec.variant === "school") return lang === "ar" ? "مدرسة" : "school building";
  if (spec.type === "building" && spec.variant === "factory") return lang === "ar" ? "مصنع" : "factory";
  if (spec.type === "solar" && spec.variant === "farm") return lang === "ar" ? "مزرعة شمسية" : "solar farm";
  if (spec.type === "window" && spec.variant === "arched") return lang === "ar" ? "نافذة مقوسة" : "arched window";
  return objectName(lang, spec.type);
}

function phrase(spec, lang) {
  const count = spec.count > 1 ? (lang === "ar" ? `${spec.count} ` : `${EN_NUM[spec.count] || spec.count} `) : lang === "ar" ? "" : "a ";
  const size = spec.scale > 1.35 ? (lang === "ar" ? "كبيرة " : "large ") : spec.scale < 0.75 ? (lang === "ar" ? "صغيرة " : "small ") : "";
  const color = colorWord(spec.color, lang);
  const material = materialWord(spec.material, lang);
  const type = typeWord(spec, lang);
  const floors = spec.floors ? (lang === "ar" ? ` من ${spec.floors} طوابق` : ` with ${spec.floors} floors`) : "";
  const glow = spec.glow ? (lang === "ar" ? " مضيء" : " glowing") : "";
  if (lang === "ar") {
    return `${count}${type}${floors} ${material} ${color} ${size}${glow}`.replace(/\s+/g, " ").trim();
  }
  const colorBit = color ? `${color} ` : "";
  const matBit = material ? `${material} ` : "";
  return `${count}${size}${glow ? "glowing " : ""}${colorBit}${matBit}${type}${floors}`.replace(/\s+/g, " ").trim();
}

function joinPhrases(parts, lang) {
  if (parts.length === 1) return parts[0];
  if (lang === "ar") return parts.join(" و");
  return `${parts.slice(0, -1).join(", ")} and ${parts[parts.length - 1]}`;
}

function themeFor(norm) {
  return THEMES.find((theme) => theme.keys.some((key) => norm.includes(normalize(key))));
}

function filtrationText(tanks, lang) {
  const n = Math.max(1, Math.min(4, tanks || 2));
  if (lang === "ar") {
    const tanksPhrase = n === 2 ? "بخزانين شفافين" : `ب${n} خزانات شفافة`;
    return `نظام ترشيح مياه ${tanksPhrase} وأسطوانة فلتر من أربع طبقات متصلة: رمل جاف ثم فلتر ناعم ثم فلتر أكبر ثم إسفنج`;
  }
  const tankWord = n === 1 ? "one transparent tank" : `${n} transparent tanks`;
  return `Water filtration system with ${tankWord} and a four-layer filter column: dry sand, a fine filter, a larger filter, and a sponge`;
}

function aquaponicsText(spec, lang) {
  const fish = spec.aquaponics?.fish || 3;
  const plants = spec.aquaponics?.plants || 6;
  if (lang === "ar") return `نظام زراعة مائية مع ${fish} أسماك و${plants} نباتات وفلتر ومضخة`;
  return `aquaponics system with ${fish} fish and ${plants} plants, a filter and a pump`;
}

export function improvePrompt(text) {
  const raw = String(text || "").trim();
  const lang = /[\u0600-\u06FF]/.test(raw) ? "ar" : "en";
  if (!raw) {
    return lang === "ar"
      ? "كرة زجاجية زرقاء كبيرة فوق طاولة خشبية"
      : "a large blue glass sphere on a wooden table";
  }
  const spec = parsePrompt(raw);
  const norm = normalize(raw);
  if (spec.mode === "filtration") return filtrationText(spec.filtration?.tanks, lang);
  if (spec.mode === "aquaponics") return aquaponicsText(spec, lang);
  if (spec.unknown) {
    const theme = themeFor(norm);
    if (theme) return theme[lang];
    const color = colorWord(spec.objects[0]?.color, lang);
    if (color) {
      return lang === "ar" ? `مكعب ${color} وكرة زجاجية فوق طاولة خشبية` : `a ${color} cube and a glass sphere on a wooden table`;
    }
    return lang === "ar"
      ? "مكعب أحمر كبير وكرة زجاجية زرقاء فوق طاولة خشبية"
      : "a large red cube and a blue glass sphere on a wooden table";
  }
  const parts = (spec.objects || []).map((item) => phrase(item, lang)).filter(Boolean);
  if (!parts.length) return raw;
  return joinPhrases(parts, lang);
}
