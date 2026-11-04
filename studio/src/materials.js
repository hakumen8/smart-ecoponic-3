import {
  CanvasTexture,
  Color,
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  SRGBColorSpace,
} from "three";

const textures = new Map();

function canvasTexture(key, draw, w = 256, h = 256) {
  if (textures.has(key)) return textures.get(key);
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  draw(canvas.getContext("2d"), w, h);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
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

export function layerTexture(id) {
  switch (id) {
    case "sponge":
      return canvasTexture("layer:sponge", (ctx, w, h) => {
        ctx.fillStyle = "#f3d27a";
        ctx.fillRect(0, 0, w, h);
        for (let i = 0; i < 70; i++) {
          ctx.fillStyle = hash(i) > 0.4 ? "#e2a83a" : "#fff4c4";
          ctx.beginPath();
          ctx.arc(hash(i + 2) * w, hash(i + 4) * h, 6 + hash(i + 6) * 16, 0, Math.PI * 2);
          ctx.fill();
        }
      });
    case "cotton":
      return grain("#f7f4ee", "#d9d3c5", 220, 2, 7);
    case "cloth":
      return canvasTexture("layer:cloth", (ctx, w, h) => {
        ctx.fillStyle = "#e6dcc4";
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = "#b7a98a";
        for (let i = 0; i < w; i += 8) {
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
    case "sand":
      return grain("#e7d3a1", "#a8884e", 900, 1, 2.4);
    case "coarseSand":
      return grain("#d1a866", "#6d5128", 420, 2, 5);
    case "charcoal":
      return grain("#2a2a2a", "#0d0d0d", 180, 4, 14);
    case "gravel":
      return grain("#b7b1a4", "#6e675c", 160, 5, 11);
    case "coarseGravel":
      return grain("#9a9286", "#4e463c", 70, 10, 22);
    case "pebbles":
      return grain("#c5bfb4", "#7d5a45", 80, 8, 18);
    case "ceramic":
      return canvasTexture("layer:ceramic", (ctx, w, h) => {
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
      });
    case "bioballs":
      return canvasTexture("layer:bio", (ctx, w, h) => {
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
      });
    default:
      return grain("#cccccc", "#888888", 200, 2, 5);
  }
}

export function glassMaterial(hex = "#e7f6ff") {
  return new MeshPhysicalMaterial({
    color: hex,
    metalness: 0,
    roughness: 0.06,
    transmission: 0.92,
    thickness: 0.45,
    ior: 1.5,
    transparent: true,
    opacity: 1,
    clearcoat: 1,
    clearcoatRoughness: 0.08,
    envMapIntensity: 1,
  });
}

export function waterMaterial(hex = "#4fc3f7", dirty = false) {
  return new MeshPhysicalMaterial({
    color: hex,
    metalness: 0,
    roughness: dirty ? 0.22 : 0.06,
    transmission: dirty ? 0.55 : 0.82,
    thickness: dirty ? 0.8 : 0.6,
    ior: 1.333,
    transparent: true,
    opacity: dirty ? 0.92 : 0.9,
    attenuationColor: hex,
    attenuationDistance: dirty ? 0.35 : 0.8,
    clearcoat: 0.4,
    envMapIntensity: 1,
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
  const map = layerTexture(id);
  return new MeshStandardMaterial({
    color: "#ffffff",
    map,
    roughness: id === "charcoal" ? 0.95 : 0.82,
    metalness: 0,
    emissive: accent || "#000000",
    emissiveIntensity: 0.04,
  });
}

export const LAYER_COLORS = {
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
