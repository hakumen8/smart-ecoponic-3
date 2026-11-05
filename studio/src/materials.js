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

function brickMap(hex) {
  return canvasTexture(`brick:${hex}`, (ctx, w, h) => {
    ctx.fillStyle = "#c9b8a4";
    ctx.fillRect(0, 0, w, h);
    const bw = 46;
    const bh = 22;
    for (let row = 0; row < h / bh + 1; row++) {
      const offset = row % 2 ? bw / 2 : 0;
      for (let col = -1; col < w / bw + 1; col++) {
        const x = col * bw + offset + 2;
        const y = row * bh + 2;
        ctx.fillStyle = hash(row * 17 + col) > 0.82 ? shade(hex, -1) : hash(row + col * 3) > 0.5 ? hex : shade(hex, 1);
        ctx.fillRect(x, y, bw - 4, bh - 4);
      }
    }
  });
}

function plasterMap(hex) {
  return canvasTexture(`plaster:${hex}`, (ctx, w, h) => {
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, w, h);
    for (let i = 0; i < 900; i++) {
      const x = hash(i + 1) * w;
      const y = hash(i + 4) * h;
      ctx.fillStyle = hash(i + 6) > 0.5 ? "rgba(255,255,255,0.09)" : "rgba(80,60,40,0.06)";
      ctx.fillRect(x, y, 1 + hash(i) * 2, 1 + hash(i + 2) * 2);
    }
    ctx.strokeStyle = "rgba(90,70,50,0.18)";
    ctx.strokeRect(8, 8, w - 16, h - 16);
  });
}

function ribMap(hex) {
  return canvasTexture(`rib:${hex}`, (ctx, w, h) => {
    for (let x = 0; x < w; x += 8) {
      const grad = ctx.createLinearGradient(x, 0, x + 8, 0);
      grad.addColorStop(0, shade(hex, -1));
      grad.addColorStop(0.45, hex);
      grad.addColorStop(1, shade(hex, 1));
      ctx.fillStyle = grad;
      ctx.fillRect(x, 0, 8, h);
    }
  });
}

function fabricMap(hex) {
  return canvasTexture(`fabric:${hex}`, (ctx, w, h) => {
    ctx.fillStyle = hex;
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "rgba(0,0,0,0.14)";
    for (let i = 0; i < w; i += 4) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, h);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(w, i);
      ctx.stroke();
    }
  });
}

function solarMap(hex) {
  return canvasTexture(`solar:${hex}`, (ctx, w, h) => {
    ctx.fillStyle = shade(hex, -1);
    ctx.fillRect(0, 0, w, h);
    const cols = 6;
    const rows = 8;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        ctx.fillStyle = hash(r * 9 + c) > 0.85 ? shade(hex, 1) : hex;
        ctx.fillRect(8 + c * ((w - 16) / cols), 6 + r * ((h - 12) / rows), (w - 16) / cols - 4, (h - 12) / rows - 3);
      }
    }
    ctx.strokeStyle = "#eceff1";
    ctx.lineWidth = 6;
    ctx.strokeRect(2, 2, w - 4, h - 4);
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
  if (materialKind === "metal" || materialKind === "gold" || materialKind === "copper") {
    let hex = color;
    let metal = materialKind === "gold" ? 1 : materialKind === "copper" ? 0.92 : 0.86;
    let rough = materialKind === "gold" ? 0.22 : materialKind === "copper" ? 0.3 : 0.28;
    if (materialKind === "gold") hex = spec.color || "#d4af37";
    if (materialKind === "copper") hex = spec.color || "#b87333";
    if (spec.finish === "polished") {
      rough = 0.1;
      metal = 1;
    } else if (spec.finish === "brushed") {
      rough = 0.48;
      metal = Math.min(metal, 0.74);
    } else if (spec.finish === "rusty") {
      rough = 0.94;
      metal = 0.22;
      hex = shade(hex, -1);
    }
    return metalMaterial(hex, metal, rough);
  }
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
  if (materialKind === "fabric") {
    return new MeshStandardMaterial({ color: "#ffffff", map: fabricMap(color), roughness: 0.94, metalness: 0 });
  }
  if (materialKind === "rubber") {
    return new MeshStandardMaterial({ color, roughness: 0.96, metalness: 0 });
  }
  if (materialKind === "ceramic") {
    return new MeshStandardMaterial({ color, roughness: 0.28, metalness: 0.04 });
  }
  return new MeshStandardMaterial({ color, roughness: 0.42, metalness: 0.06 });
}

export function windowGlass(tint = "#d7ecff") {
  if (isFast()) {
    return new MeshStandardMaterial({
      color: tint,
      emissive: "#ffd59a",
      emissiveIntensity: 0.55,
      roughness: 0.06,
      metalness: 0.12,
      transparent: true,
      opacity: 0.78,
    });
  }
  return new MeshPhysicalMaterial({
    color: tint,
    emissive: "#ffcc80",
    emissiveIntensity: 0.32,
    roughness: 0.04,
    metalness: 0.06,
    transmission: 0.72,
    thickness: 0.22,
    transparent: true,
    opacity: 0.92,
    envMapIntensity: 1,
  });
}

export function facadeMaterial(spec = {}, fallback = "#d9c7b0", style = "plaster") {
  const kind = spec.material;
  const color = shade(spec.color || fallback, spec.lightness || 0);
  if (spec.glow || kind === "glow") return glowingMaterial(color);
  if (kind === "glass" || style === "curtain") {
    return new MeshStandardMaterial({
      color,
      roughness: 0.14,
      metalness: 0.48,
      emissive: color,
      emissiveIntensity: 0.14,
    });
  }
  if (kind === "metal" || style === "metal") {
    return new MeshStandardMaterial({ color: "#ffffff", map: ribMap(color), metalness: 0.62, roughness: 0.38 });
  }
  if (kind === "wood" || style === "wood") return paint({ ...spec, color, material: "wood" }, color, "wood");
  if (kind === "stone" || style === "brick") {
    return new MeshStandardMaterial({ color: "#ffffff", map: brickMap(color), roughness: 0.92, metalness: 0.02 });
  }
  return new MeshStandardMaterial({ color: "#ffffff", map: plasterMap(color), roughness: 0.88, metalness: 0.02 });
}

export function solarCellMaterial(hex = "#1565c0") {
  return new MeshStandardMaterial({
    color: "#ffffff",
    map: solarMap(hex),
    roughness: 0.28,
    metalness: 0.45,
    emissive: hex,
    emissiveIntensity: 0.12,
  });
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
  drySand: "#e6b422",
  fineFilter: "#f4fbff",
  coarseFilter: "#1f6f99",
  sponge: "#f5a623",
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
