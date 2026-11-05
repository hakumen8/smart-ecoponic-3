import {
  CanvasTexture,
  Color,
  DoubleSide,
  FrontSide,
  LinearSRGBColorSpace,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  SRGBColorSpace,
} from "three";
import { isFast } from "./quality.js";

const textures = new Map();

function canvasTexture(key, draw, w = 256, h = 256, colorSpace = SRGBColorSpace) {
  if (textures.has(key)) return textures.get(key);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext("2d"), w, h);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = colorSpace;
  tex.anisotropy = 8;
  textures.set(key, tex);
  return tex;
}

function hash(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

export function shade(hex, lightness) {
  const c = new Color(hex || "#cccccc");
  if (lightness > 0) c.lerp(new Color("#ffffff"), 0.38);
  if (lightness < 0) c.lerp(new Color("#000000"), 0.4);
  return `#${c.getHexString()}`;
}

function grain(base, speck, count, rMin, rMax) {
  return canvasTexture(`grain:${base}:${speck}:${count}:${rMax}`, (ctx, w, h) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < count; i++) {
      const x = hash(i + 1) * w;
      const y = hash(i + 9) * h;
      const r = rMin + hash(i + 3) * (rMax - rMin);
      ctx.fillStyle = hash(i + 5) > 0.5 ? speck : shade(speck, hash(i) > 0.5 ? 1 : -1);
      ctx.beginPath();
      ctx.ellipse(x, y, r, r * (0.7 + hash(i + 4) * 0.5), hash(i) * 6, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

function woodMap(hex) {
  return canvasTexture(`wood:${hex}`, (ctx, w, h) => {
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, w, h);
    for (let y = 0; y < h; y += 3) {
      ctx.fillStyle = `rgba(40,20,8,${0.05 + (y % 18 === 0 ? 0.18 : 0.04)})`;
      ctx.fillRect(0, y, w, 1 + (y % 12 === 0 ? 2 : 0));
    }
    ctx.strokeStyle = "rgba(60,30,10,0.25)";
    ctx.beginPath();
    ctx.moveTo(40, 0);
    ctx.bezierCurveTo(80, h * 0.3, 20, h * 0.6, 70, h);
    ctx.stroke();
  });
}

function poreField(count, size) {
  const pores = [];
  for (let i = 0; i < count; i++) {
    pores.push({
      x: hash(i + 2) * size,
      y: hash(i + 4) * size,
      r: 8 + hash(i + 6) * (size > 400 ? 34 : 18),
    });
  }
  return pores;
}

function drawSponge(ctx, w, h, pores, { bump = false } = {}) {
  ctx.fillStyle = bump ? "#8d8d8d" : "#f0c14b";
  ctx.fillRect(0, 0, w, h);
  for (const p of pores) {
    const grad = ctx.createRadialGradient(p.x, p.y, p.r * 0.12, p.x, p.y, p.r);
    if (bump) {
      grad.addColorStop(0, "#141414");
      grad.addColorStop(0.55, "#5c5c5c");
      grad.addColorStop(1, "#c8c8c8");
    } else {
      grad.addColorStop(0, "#5a3a0c");
      grad.addColorStop(0.45, "#c4842a");
      grad.addColorStop(1, "#ffe7a3");
    }
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

function drawScreen(ctx, w, h) {
  ctx.fillStyle = "#f4efe6";
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = "#8d7b5e";
  ctx.lineWidth = 3;
  for (let i = 0; i <= w; i += 14) {
    ctx.beginPath();
    ctx.moveTo(i, 0);
    ctx.lineTo(i, h);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(0, i);
    ctx.lineTo(w, i);
    ctx.stroke();
  }
  ctx.fillStyle = "#5c4a32";
  for (let y = 7; y < h; y += 14) {
    for (let x = 7; x < w; x += 14) {
      ctx.beginPath();
      ctx.arc(x, y, 2.4, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function sandPair(key, base, dark, light, count, rMin, rMax) {
  const size = 512;
  const specks = [];
  for (let i = 0; i < count; i++) {
    specks.push({
      x: hash(i + 1) * size,
      y: hash(i + 9) * size,
      r: rMin + hash(i + 3) * (rMax - rMin),
      rot: hash(i) * 6,
      tone: hash(i + 5),
    });
  }
  const map = canvasTexture(`sand:${key}`, (ctx, w, h) => {
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, w, h);
    for (const s of specks) {
      ctx.fillStyle = s.tone > 0.66 ? light : s.tone > 0.33 ? base : dark;
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, s.r, s.r * (0.62 + (s.tone % 0.2)), s.rot, 0, Math.PI * 2);
      ctx.fill();
    }
  }, size, size);
  const bump = canvasTexture(`sand-bump:${key}`, (ctx, w, h) => {
    ctx.fillStyle = "#7a7a7a";
    ctx.fillRect(0, 0, w, h);
    for (const s of specks) {
      const grad = ctx.createRadialGradient(s.x, s.y, s.r * 0.15, s.x, s.y, s.r);
      grad.addColorStop(0, "#ffffff");
      grad.addColorStop(1, "#6e6e6e");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.ellipse(s.x, s.y, s.r, s.r * 0.7, s.rot, 0, Math.PI * 2);
      ctx.fill();
    }
  }, size, size, LinearSRGBColorSpace);
  return { map, bump, bumpScale: 0.16 };
}

const layerCache = new Map();

function layerMaps(id) {
  if (layerCache.has(id)) return layerCache.get(id);
  let maps;
  switch (id) {
    case "sponge": {
      const pores = poreField(120, 512);
      maps = {
        map: canvasTexture("layer:sponge:v3", (ctx, w, h) => drawSponge(ctx, w, h, pores), 512, 512),
        bump: canvasTexture("layer:sponge:bump:v3", (ctx, w, h) => drawSponge(ctx, w, h, pores, { bump: true }), 512, 512, LinearSRGBColorSpace),
        bumpScale: 0.55,
      };
      break;
    }
    case "cotton":
      maps = { map: grain("#f7f4ee", "#d9d3c5", 220, 2, 7), bump: null, bumpScale: 0 };
      break;
    case "cloth":
      maps = {
        map: canvasTexture("layer:cloth:v2", (ctx, w, h) => {
          ctx.fillStyle = "#f3ead6";
          ctx.fillRect(0, 0, w, h);
          ctx.strokeStyle = "#a89068";
          ctx.lineWidth = 2;
          for (let i = 0; i < w; i += 7) {
            ctx.beginPath();
            ctx.moveTo(i, 0);
            ctx.lineTo(i, h);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(0, i);
            ctx.lineTo(w, i);
            ctx.stroke();
          }
        }, 256, 256),
        bump: null,
        bumpScale: 0,
      };
      break;
    case "screen":
      maps = { map: canvasTexture("layer:screen", (ctx, w, h) => drawScreen(ctx, w, h), 256, 256), bump: null, bumpScale: 0 };
      break;
    case "sand":
      maps = sandPair("fine", "#e7c98a", "#8a5a28", "#fff1c9", 780, 2.2, 6.5);
      break;
    case "coarseSand":
      maps = sandPair("coarse", "#d1a25a", "#6a4218", "#f0d7a0", 420, 4, 11);
      maps.bumpScale = 0.22;
      break;
    case "charcoal":
      maps = { map: grain("#2a2a2a", "#0d0d0d", 180, 4, 14), bump: null, bumpScale: 0 };
      break;
    case "gravel":
      maps = { map: grain("#b7b1a4", "#6e675c", 160, 5, 11), bump: null, bumpScale: 0 };
      break;
    case "coarseGravel":
      maps = { map: grain("#9a9286", "#4e463c", 70, 10, 22), bump: null, bumpScale: 0 };
      break;
    case "pebbles":
      maps = { map: grain("#c5bfb4", "#7d5a45", 80, 8, 18), bump: null, bumpScale: 0 };
      break;
    case "ceramic":
      maps = {
        map: canvasTexture("layer:ceramic", (ctx, w, h) => {
          ctx.fillStyle = "#efe6d8";
          ctx.fillRect(0, 0, w, h);
          for (let y = 16; y < h; y += 28) {
            for (let x = 16; x < w; x += 28) {
              ctx.strokeStyle = "#c4553a";
              ctx.lineWidth = 3;
              ctx.beginPath();
              ctx.arc(x, y, 8, 0, Math.PI * 2);
              ctx.stroke();
            }
          }
        }),
        bump: null,
        bumpScale: 0,
      };
      break;
    case "bioballs":
      maps = {
        map: canvasTexture("layer:bio", (ctx, w, h) => {
          ctx.fillStyle = "#e9eef2";
          ctx.fillRect(0, 0, w, h);
          for (let i = 0; i < 40; i++) {
            const x = hash(i + 1) * w;
            const y = hash(i + 2) * h;
            ctx.strokeStyle = "#90a4ae";
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(x - 8, y);
            ctx.lineTo(x + 8, y);
            ctx.moveTo(x, y - 8);
            ctx.lineTo(x, y + 8);
            ctx.stroke();
          }
        }),
        bump: null,
        bumpScale: 0,
      };
      break;
    default:
      maps = { map: grain("#cccccc", "#888888", 200, 2, 5), bump: null, bumpScale: 0 };
  }
  layerCache.set(id, maps);
  return maps;
}

export function layerTexture(id) {
  return layerMaps(id).map;
}

export function glassMaterial(hex = "#e7f6ff") {
  if (isFast()) {
    return new MeshStandardMaterial({
      color: hex,
      metalness: 0.04,
      roughness: 0.08,
      transparent: true,
      opacity: 0.28,
      depthWrite: false,
      envMapIntensity: 0.6,
    });
  }
  return new MeshPhysicalMaterial({
    color: hex,
    metalness: 0,
    roughness: 0.05,
    transmission: 0.94,
    thickness: 0.55,
    ior: 1.5,
    transparent: true,
    opacity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.05,
    envMapIntensity: 1.15,
  });
}

export function waterMaterial(hex = "#4fc3f7", dirty = false) {
  if (isFast()) {
    return new MeshStandardMaterial({
      color: hex,
      roughness: dirty ? 0.35 : 0.12,
      metalness: 0.02,
      transparent: true,
      opacity: dirty ? 0.78 : 0.62,
      depthWrite: false,
      emissive: hex,
      emissiveIntensity: dirty ? 0.05 : 0.12,
    });
  }
  return new MeshPhysicalMaterial({
    color: hex,
    metalness: 0,
    roughness: dirty ? 0.18 : 0.04,
    transmission: dirty ? 0.62 : 0.88,
    thickness: dirty ? 0.9 : 0.7,
    ior: 1.333,
    transparent: true,
    opacity: dirty ? 0.94 : 0.92,
    attenuationColor: hex,
    attenuationDistance: dirty ? 0.28 : 0.9,
    clearcoat: 0.55,
    envMapIntensity: 1.2,
    emissive: hex,
    emissiveIntensity: dirty ? 0.02 : 0.06,
  });
}

export function metalMaterial(hex, metalness = 0.86, roughness = 0.28) {
  return new MeshStandardMaterial({
    color: hex,
    metalness,
    roughness,
    envMapIntensity: 1,
  });
}

export function glowingMaterial(hex) {
  return new MeshStandardMaterial({
    color: hex,
    emissive: hex,
    emissiveIntensity: 0.85,
    roughness: 0.35,
    metalness: 0.15,
  });
}

export function paint(spec = {}, fallback = "#90a4c8", kind) {
  const materialKind = spec.material || kind || "plastic";
  let color = spec.color || fallback;
  if (spec.lightness) color = shade(color, spec.lightness);
  if (spec.glow || materialKind === "glow") return glowingMaterial(color);
  if (materialKind === "glass") return glassMaterial(color);
  if (materialKind === "water") return waterMaterial(color, false);
  if (materialKind === "metal") return metalMaterial(color);
  if (materialKind === "gold") return metalMaterial(spec.color || "#d4af37", 1, 0.22);
  if (materialKind === "copper") return metalMaterial(spec.color || "#b87333", 0.92, 0.3);
  if (materialKind === "wood") {
    return new MeshStandardMaterial({
      color: "#ffffff",
      map: woodMap(color),
      roughness: 0.72,
      metalness: 0.04,
    });
  }
  if (materialKind === "stone") {
    return new MeshStandardMaterial({
      color: "#ffffff",
      map: grain(color, "#5c5348", 500, 1, 3),
      roughness: 0.92,
      metalness: 0.02,
    });
  }
  if (materialKind === "rubber" || materialKind === "fabric") {
    return new MeshStandardMaterial({ color, roughness: 0.96, metalness: 0 });
  }
  if (materialKind === "ceramic") {
    return new MeshStandardMaterial({ color, roughness: 0.32, metalness: 0.05 });
  }
  return new MeshStandardMaterial({ color, roughness: 0.4, metalness: 0.05 });
}

export function layerMaterial(id, accent) {
  const maps = layerMaps(id);
  const porous = id === "sponge" || id === "cloth" || id === "cotton" || id === "screen";
  return new MeshStandardMaterial({
    color: "#ffffff",
    map: maps.map,
    bumpMap: maps.bump || null,
    bumpScale: maps.bumpScale || 0,
    roughness: id === "charcoal" ? 0.95 : id === "sponge" ? 0.68 : id === "screen" ? 0.5 : 0.86,
    metalness: id === "screen" ? 0.08 : 0,
    emissive: accent || "#000000",
    emissiveIntensity: 0.04,
    side: porous ? DoubleSide : FrontSide,
  });
}

export const LAYER_COLORS = {
  drySand: "#e8d7a4",
  fineFilter: "#e7eef2",
  coarseFilter: "#8fb4c6",
  sponge: "#f3d27a",
  cotton: "#f4f1ea",
  cloth: "#e6dcc4",
  sand: "#e7d3a1",
  coarseSand: "#d1a866",
  charcoal: "#3a3a3a",
  gravel: "#b7b1a4",
  coarseGravel: "#8d8578",
  pebbles: "#c5bfb4",
  ceramic: "#e8d2c4",
  bioballs: "#d5dee6",
};
