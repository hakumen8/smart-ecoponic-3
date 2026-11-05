import {
  BoxGeometry,
  BufferGeometry,
  CanvasTexture,
  CapsuleGeometry,
  CatmullRomCurve3,
  CircleGeometry,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DoubleSide,
  ExtrudeGeometry,
  Group,
  InstancedMesh,
  LatheGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshStandardMaterial,
  Object3D,
  PlaneGeometry,
  Shape,
  SphereGeometry,
  SRGBColorSpace,
  TorusGeometry,
  TubeGeometry,
  Vector2,
  Vector3,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { FILTER_STACK } from "./i18n.js";
import { buildFilterColumn, addFlow, buildWasteBin } from "./filter-scene.js";
import { glassMaterial, glowingMaterial, layerMaterial, metalMaterial, paint, waterMaterial } from "./materials.js";
import { rng } from "./parser.js";
import { isFast, seg } from "./quality.js";

const UP = new Vector3(0, 1, 0);

export function M(geo, mat, x = 0, y = 0, z = 0) {
  const mesh = new Mesh(geo, mat);
  mesh.position.set(x, y, z);
  const transmission = mat && mat.transmission > 0;
  mesh.castShadow = !transmission;
  mesh.receiveShadow = true;
  return mesh;
}

export function G(name, ...kids) {
  const g = new Group();
  g.name = name;
  for (const k of kids.flat()) if (k) g.add(k);
  return g;
}

let editSerial = 1;

export function resetEditIds() {
  editSerial = 1;
}

export function tagEdit(group, { label, color } = {}) {
  group.userData.edit = {
    id: `part-${editSerial++}`,
    label: label || group.name || "Part",
    color: color || null,
    factor: 1,
  };
  group.userData.baseScale = group.scale.clone();
  return group;
}

export function spin(mesh, x = 0, y = 0, z = 0) {
  mesh.rotation.set(x, y, z);
  return mesh;
}

function rod(a, b, radius, mat) {
  const dir = new Vector3().subVectors(b, a);
  const len = Math.max(dir.length(), 0.001);
  const mesh = M(new CylinderGeometry(radius, radius, len, 14), mat);
  mesh.position.copy(a).add(b).multiplyScalar(0.5);
  mesh.quaternion.setFromUnitVectors(UP, dir.normalize());
  return mesh;
}

export function label(text, { rtl = false, accent = "#5ad1ff", width = 0.86 } = {}) {
  const canvas = document.createElement("canvas");
  canvas.width = 640;
  canvas.height = 160;
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, 640, 160);
  ctx.fillStyle = "rgba(8,14,28,0.78)";
  roundRect(ctx, 8, 28, 624, 104, 28);
  ctx.fill();
  ctx.fillStyle = accent;
  ctx.fillRect(8, 28, 624, 6);
  ctx.font = '600 52px "IBM Plex Sans Arabic", "Noto Naskh Arabic", Tahoma, sans-serif';
  ctx.fillStyle = "#f4f7ff";
  ctx.direction = rtl ? "rtl" : "ltr";
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText(String(text).slice(0, 42), 320, 86);
  const tex = new CanvasTexture(canvas);
  tex.colorSpace = SRGBColorSpace;
  const mesh = new Mesh(
    new PlaneGeometry(width, width * 0.25),
    new MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false }),
  );
  mesh.userData.isLabel = true;
  return mesh;
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

function wheel(mat, x, y, z, r = 0.22) {
  const tire = M(new CylinderGeometry(r, r, 0.14, 24), mat || paint({}, "#222", "rubber"), x, y, z);
  spin(tire, 0, 0, Math.PI / 2);
  const hub = M(new CylinderGeometry(r * 0.45, r * 0.45, 0.16, 16), metalMaterial("#cfd8dc", 0.8, 0.3), x, y, z);
  spin(hub, 0, 0, Math.PI / 2);
  return [tire, hub];
}

function foliage(color, x, y, z, s = 0.45) {
  const mat = paint({}, color, "rubber");
  return [
    M(new SphereGeometry(s, 22, 16), mat, x, y, z),
    M(new SphereGeometry(s * 0.75, 18, 14), mat, x + s * 0.55, y + s * 0.15, z),
    M(new SphereGeometry(s * 0.7, 18, 14), mat, x - s * 0.4, y + s * 0.05, z + s * 0.2),
  ];
}

function plant(x, y, z, h = 0.34, color = "#43a047") {
  const stem = M(new CylinderGeometry(0.015, 0.02, h, 8), paint({}, "#2e7d32"), x, y + h / 2, z);
  const leaf = paint({}, color, "rubber");
  return [
    stem,
    M(new SphereGeometry(0.07, 12, 10), leaf, x, y + h, z),
    M(new SphereGeometry(0.045, 10, 8), leaf, x + 0.05, y + h * 0.7, z),
    M(new SphereGeometry(0.04, 10, 8), leaf, x - 0.04, y + h * 0.62, z + 0.03),
  ];
}

function fishMesh(color = "#ff8a65") {
  const g = G("Fish");
  const body = M(new SphereGeometry(0.11, 20, 14), paint({}, color));
  body.scale.set(1.7, 0.62, 0.48);
  const tail = M(new ConeGeometry(0.07, 0.14, 4), paint({}, color), -0.2, 0, 0);
  spin(tail, 0, 0, Math.PI / 2);
  const eye = M(new SphereGeometry(0.016, 10, 8), paint({}, "#fff"), 0.12, 0.03, 0.04);
  const pupil = M(new SphereGeometry(0.008, 8, 8), paint({}, "#111"), 0.132, 0.03, 0.04);
  g.add(body, tail, eye, pupil);
  return g;
}

function windowGrid(floors, cols, w, h, d, y0) {
  const fw = w / (cols + 0.4);
  const fh = 0.1;
  const mat = new MeshStandardMaterial({
    color: "#d7ecff",
    emissive: "#ffcc80",
    emissiveIntensity: 0.35,
    roughness: 0.15,
    metalness: 0.05,
  });
  const geo = new BoxGeometry(fw * 0.55, fh, 0.03);
  const count = floors * cols * 2;
  const inst = new InstancedMesh(geo, mat, count);
  inst.castShadow = false;
  inst.receiveShadow = false;
  const dummy = new Object3D();
  let n = 0;
  for (let f = 0; f < floors; f++) {
    for (let c = 0; c < cols; c++) {
      const x = -w / 2 + fw * 0.7 + c * fw;
      const y = y0 + f * (h / floors) + h / floors * 0.55;
      dummy.position.set(x, y, d / 2 + 0.02);
      dummy.updateMatrix();
      inst.setMatrixAt(n++, dummy.matrix);
      dummy.position.set(x, y, -d / 2 - 0.02);
      dummy.rotation.y = Math.PI;
      dummy.updateMatrix();
      inst.setMatrixAt(n++, dummy.matrix);
      dummy.rotation.y = 0;
    }
  }
  inst.count = n;
  return inst;
}

export function makeLabel(text, opts) {
  return label(text, opts);
}

function cube(spec) {
  if (spec.variant === "dice") {
    const body = M(new RoundedBoxGeometry(0.9, 0.9, 0.9, 3, 0.08), paint(spec, "#f5f5f5"));
    body.position.y = 0.45;
    const pip = paint({}, "#222");
    const dots = [
      [0, 0.45, 0.46],
      [-0.18, 0.62, 0.46],
      [0.18, 0.28, 0.46],
    ].map(([x, y, z]) => M(new SphereGeometry(0.06, 12, 10), pip, x, y, z));
    return G("Dice", body, dots);
  }
  const mat = paint(spec, spec.variant === "crate" ? "#a97142" : "#5b8def", spec.variant === "crate" ? "wood" : undefined);
  const body = M(new RoundedBoxGeometry(1, 1, 1, 3, 0.06), mat, 0, 0.5, 0);
  if (spec.variant !== "crate") return G("Cube", body);
  const edge = paint({}, "#6d4c41", "wood");
  const slats = [
    M(new BoxGeometry(1.04, 0.08, 0.08), edge, 0, 0.2, 0.5),
    M(new BoxGeometry(1.04, 0.08, 0.08), edge, 0, 0.8, 0.5),
    M(new BoxGeometry(1.04, 0.08, 0.08), edge, 0, 0.2, -0.5),
    M(new BoxGeometry(1.04, 0.08, 0.08), edge, 0, 0.8, -0.5),
  ];
  return G("Crate", body, slats);
}

function sphere(spec) {
  return G("Sphere", M(new SphereGeometry(0.55, seg(48, 22), seg(32, 16)), paint(spec, "#ff6b6b"), 0, 0.55, 0));
}

function cylinder(spec) {
  if (spec.variant === "barrel") {
    const wood = paint(spec, "#8d5a32", "wood");
    const band = metalMaterial("#9aa4ad", 0.8, 0.35);
    const body = M(new CylinderGeometry(0.42, 0.42, 1.05, 32), wood, 0, 0.55, 0);
    return G(
      "Barrel",
      body,
      M(new TorusGeometry(0.44, 0.035, 8, 30), band, 0, 0.85, 0),
      M(new TorusGeometry(0.44, 0.035, 8, 30), band, 0, 0.28, 0),
    );
  }
  return G("Cylinder", M(new CylinderGeometry(0.42, 0.42, 1.15, seg(40, 18)), paint(spec, "#38bdf8"), 0, 0.58, 0));
}

function cone(spec) {
  return G("Cone", M(new ConeGeometry(0.55, 1.15, seg(40, 16)), paint(spec, "#fb923c"), 0, 0.58, 0));
}

function torus(spec) {
  const mesh = M(new TorusGeometry(0.48, 0.16, seg(24, 10), seg(64, 28)), paint(spec, "#a78bfa"));
  spin(mesh, Math.PI / 2, 0, 0);
  mesh.position.y = 0.2;
  return G("Torus", mesh);
}

function pyramid(spec) {
  const mesh = M(new ConeGeometry(0.72, 1.05, 4), paint(spec, "#e0b354", spec.material || "stone"));
  mesh.rotation.y = Math.PI / 4;
  mesh.position.y = 0.52;
  return G("Pyramid", mesh);
}

function capsule(spec) {
  return G("Capsule", M(new CapsuleGeometry(0.32, 0.7, 8, 24), paint(spec, "#34d399"), 0, 0.67, 0));
}

function star(spec) {
  const shape = new Shape();
  for (let i = 0; i < 10; i++) {
    const r = i % 2 ? 0.22 : 0.55;
    const a = (i / 10) * Math.PI * 2 + Math.PI / 2;
    const x = Math.cos(a) * r;
    const y = Math.sin(a) * r;
    if (i === 0) shape.moveTo(x, y);
    else shape.lineTo(x, y);
  }
  const geo = new ExtrudeGeometry(shape, { depth: 0.16, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.03, bevelSegments: 2 });
  geo.center();
  const mesh = M(geo, paint(spec, "#facc15"));
  mesh.position.y = 0.62;
  return G("Star", mesh);
}

function heart(spec) {
  const s = new Shape();
  s.moveTo(0, 0.35);
  s.bezierCurveTo(0, 0.55, -0.45, 0.55, -0.45, 0.15);
  s.bezierCurveTo(-0.45, -0.15, 0, -0.25, 0, -0.55);
  s.bezierCurveTo(0, -0.25, 0.45, -0.15, 0.45, 0.15);
  s.bezierCurveTo(0.45, 0.55, 0, 0.55, 0, 0.35);
  const geo = new ExtrudeGeometry(s, { depth: 0.22, bevelEnabled: true, bevelThickness: 0.04, bevelSize: 0.03, bevelSegments: 2 });
  geo.center();
  const mesh = M(geo, paint(spec, "#ef4444"));
  mesh.position.y = 0.55;
  return G("Heart", mesh);
}

function tank(spec) {
  return buildVessel({
    radius: 0.5,
    height: 1.15,
    water: spec.color || "#4fc3f7",
    dirty: false,
    glass: spec.material === "metal" ? metalMaterial(spec.color || "#90a4ae", 0.7, 0.35) : glassMaterial("#e7f8ff"),
  });
}

export function buildVessel({ radius = 0.48, height = 1.15, water = "#4fc3f7", dirty = false, glass }) {
  const g = G("Tank");
  const wall = M(new CylinderGeometry(radius, radius, height, seg(48, 22), 1, true), glass || glassMaterial("#e7f8ff"), 0, height / 2 + 0.08, 0);
  wall.material.side = DoubleSide;
  const base = M(new CylinderGeometry(radius * 1.05, radius * 1.08, 0.08, 32), metalMaterial("#546e7a", 0.7, 0.4), 0, 0.04, 0);
  const waterH = height * (dirty ? 0.78 : 0.7);
  const liquid = M(
    new CylinderGeometry(radius * 0.9, radius * 0.9, waterH, seg(36, 16)),
    waterMaterial(water, dirty),
    0,
    0.1 + waterH / 2,
    0,
  );
  liquid.userData.baseY = liquid.position.y;
  liquid.userData.tick = (t) => {
    liquid.position.y = liquid.userData.baseY + Math.sin(t * 1.7) * 0.012;
  };
  const rim = M(new TorusGeometry(radius, 0.028, 10, 40), metalMaterial("#b0bec5", 0.75, 0.3), 0, height + 0.08, 0);
  spin(rim, Math.PI / 2, 0, 0);
  g.add(base, wall, liquid, rim);
  if (dirty) {
    const speck = paint({}, "#5d4037", "rubber");
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * Math.PI * 2;
      g.add(M(new SphereGeometry(0.03, 8, 8), speck, Math.cos(a) * radius * 0.45, 0.25 + (i % 3) * 0.18, Math.sin(a) * radius * 0.45));
    }
  }
  g.userData.top = height + 0.08;
  g.userData.radius = radius;
  g.userData.inlet = new Vector3(radius, height * 0.62, 0);
  g.userData.outlet = new Vector3(-radius, height * 0.9, 0);
  return g;
}

function pipe(spec) {
  const mat = paint(spec, "#cfd8dc", spec.material || "metal");
  const curve = new CatmullRomCurve3([
    new Vector3(-0.8, 0.2, 0),
    new Vector3(-0.3, 0.2, 0),
    new Vector3(0, 0.55, 0),
    new Vector3(0.35, 0.95, 0),
    new Vector3(0.85, 0.95, 0),
  ]);
  const tube = new Mesh(new TubeGeometry(curve, 60, 0.07, 16, false), mat);
  tube.castShadow = true;
  const flange = metalMaterial("#90a4ae", 0.8, 0.3);
  return G(
    "Pipe",
    tube,
    spin(M(new CylinderGeometry(0.12, 0.12, 0.05, 20), flange, -0.8, 0.2, 0), 0, 0, Math.PI / 2),
    spin(M(new CylinderGeometry(0.12, 0.12, 0.05, 20), flange, 0.85, 0.95, 0), 0, 0, Math.PI / 2),
  );
}

function pump(spec) {
  const body = paint(spec, "#1e88e5", spec.material || "metal");
  const g = G("Pump");
  g.add(M(new RoundedBoxGeometry(0.55, 0.28, 0.4, 3, 0.04), metalMaterial("#37474f"), 0, 0.14, 0));
  const motor = M(new CylinderGeometry(0.16, 0.16, 0.42, 24), body, 0, 0.36, 0);
  spin(motor, 0, 0, Math.PI / 2);
  g.add(motor);
  const indicator = M(new BoxGeometry(0.08, 0.16, 0.08), glowingMaterial("#7ee0ff"), 0, 0.5, 0.12);
  indicator.name = "PumpLamp";
  g.add(indicator);
  g.userData.inlet = new Vector3(-0.28, 0.36, 0);
  g.userData.outlet = new Vector3(0.28, 0.36, 0);
  return g;
}

function house(spec) {
  const wall = paint(spec, "#f4ead7");
  const roof = paint({}, "#b5442f", "stone");
  const wood = paint({}, "#6b4226", "wood");
  const glass = glassMaterial("#c8ecff");
  const body = M(new RoundedBoxGeometry(1.55, 0.95, 1.25, 3, 0.04), wall, 0, 0.5, 0);
  const shape = new Shape([new Vector2(-0.95, 0), new Vector2(0, 0.62), new Vector2(0.95, 0)]);
  const roofGeo = new ExtrudeGeometry(shape, { depth: 1.45, bevelEnabled: false });
  const roofMesh = new Mesh(roofGeo, roof);
  roofMesh.position.set(0, 0.98, -0.72);
  roofMesh.castShadow = true;
  const door = M(new BoxGeometry(0.32, 0.52, 0.05), wood, 0, 0.3, 0.64);
  const knob = M(new SphereGeometry(0.03, 10, 8), metalMaterial("#d4af37", 1, 0.25), 0.1, 0.3, 0.68);
  const winMat = new MeshStandardMaterial({ color: "#b9e6ff", emissive: "#ffd59a", emissiveIntensity: 0.25, roughness: 0.12 });
  return G(
    "House",
    body,
    roofMesh,
    door,
    knob,
    M(new BoxGeometry(0.32, 0.28, 0.05), winMat, -0.48, 0.58, 0.64),
    M(new BoxGeometry(0.32, 0.28, 0.05), winMat, 0.48, 0.58, 0.64),
    M(new BoxGeometry(0.18, 0.4, 0.18), paint({}, "#8d6e63", "stone"), 0.48, 1.35, -0.15),
    M(new BoxGeometry(0.55, 0.06, 0.28), paint({}, "#9e9e9e", "stone"), 0, 0.04, 0.78),
  );
}

function table(spec) {
  const wood = paint(spec, "#a97142", spec.material || "wood");
  const top = M(new RoundedBoxGeometry(1.55, 0.08, 0.9, 2, 0.02), wood, 0, 0.78, 0);
  const legs = [
    [-0.68, -0.36],
    [0.68, -0.36],
    [-0.68, 0.36],
    [0.68, 0.36],
  ].map(([x, z]) => M(new BoxGeometry(0.08, 0.74, 0.08), wood, x, 0.37, z));
  return G("Table", top, legs);
}

function chair(spec) {
  const wood = paint(spec, "#8d5a3b", spec.material || "wood");
  return G(
    "Chair",
    M(new RoundedBoxGeometry(0.48, 0.06, 0.48, 2, 0.02), wood, 0, 0.48, 0),
    M(new RoundedBoxGeometry(0.48, 0.5, 0.06, 2, 0.02), wood, 0, 0.75, -0.21),
    ...[
      [-0.2, -0.2],
      [0.2, -0.2],
      [-0.2, 0.2],
      [0.2, 0.2],
    ].map(([x, z]) => M(new CylinderGeometry(0.025, 0.025, 0.48, 10), wood, x, 0.24, z)),
  );
}

function sofa(spec) {
  const fab = paint(spec, "#5c6d92", spec.material || "fabric");
  const wood = paint({}, "#4e342e", "wood");
  return G(
    "Sofa",
    M(new RoundedBoxGeometry(1.8, 0.38, 0.78, 3, 0.06), fab, 0, 0.32, 0),
    M(new RoundedBoxGeometry(1.8, 0.5, 0.2, 3, 0.05), fab, 0, 0.62, -0.28),
    M(new RoundedBoxGeometry(0.2, 0.42, 0.78, 3, 0.05), fab, -0.85, 0.46, 0),
    M(new RoundedBoxGeometry(0.2, 0.42, 0.78, 3, 0.05), fab, 0.85, 0.46, 0),
    M(new CylinderGeometry(0.04, 0.04, 0.12, 10), wood, -0.75, 0.06, 0.28),
    M(new CylinderGeometry(0.04, 0.04, 0.12, 10), wood, 0.75, 0.06, 0.28),
  );
}

function bed(spec) {
  const wood = paint({}, "#8d6e63", "wood");
  const linen = paint(spec, "#f7f7f7", spec.material || "fabric");
  return G(
    "Bed",
    M(new BoxGeometry(1.3, 0.28, 2), wood, 0, 0.2, 0),
    M(new BoxGeometry(1.3, 0.7, 0.08), wood, 0, 0.55, -0.96),
    M(new RoundedBoxGeometry(1.15, 0.18, 1.75, 2, 0.04), linen, 0, 0.42, 0.04),
    M(new BoxGeometry(0.35, 0.1, 0.22), paint({}, "#ffffff"), -0.3, 0.56, -0.7),
    M(new BoxGeometry(0.35, 0.1, 0.22), paint({}, "#ffffff"), 0.3, 0.56, -0.7),
  );
}

function car(spec) {
  const body = paint(spec, "#e53935");
  const glass = glassMaterial("#d7f1ff");
  const g = G("Car");
  g.add(M(new RoundedBoxGeometry(1.9, 0.38, 0.86, 3, 0.08), body, 0, 0.42, 0));
  g.add(M(new RoundedBoxGeometry(1.05, 0.36, 0.78, 3, 0.08), body, -0.05, 0.74, 0));
  g.add(M(new BoxGeometry(0.85, 0.22, 0.8), glass, -0.05, 0.78, 0));
  g.add(M(new SphereGeometry(0.05, 12, 10), glowingMaterial("#fff6cc"), 0.9, 0.42, 0.28));
  g.add(M(new SphereGeometry(0.05, 12, 10), glowingMaterial("#fff6cc"), 0.9, 0.42, -0.28));
  g.add(M(new SphereGeometry(0.04, 10, 8), glowingMaterial("#ff5555"), -0.92, 0.42, 0.28));
  g.add(M(new SphereGeometry(0.04, 10, 8), glowingMaterial("#ff5555"), -0.92, 0.42, -0.28));
  g.add(...[wheel(null, 0.62, 0.22, 0.42), wheel(null, -0.62, 0.22, 0.42), wheel(null, 0.62, 0.22, -0.42), wheel(null, -0.62, 0.22, -0.42)].flat());
  return g;
}

function bus(spec) {
  const body = paint(spec, "#fdd835");
  const g = G("Bus");
  g.add(M(new RoundedBoxGeometry(2.4, 0.85, 0.9, 3, 0.06), body, 0, 0.7, 0));
  g.add(windowGrid(1, 5, 2.1, 0.85, 0.9, 0.35));
  g.add(...[wheel(null, 0.75, 0.24, 0.42, 0.24), wheel(null, -0.75, 0.24, 0.42, 0.24), wheel(null, 0.75, 0.24, -0.42, 0.24), wheel(null, -0.75, 0.24, -0.42, 0.24)].flat());
  return g;
}

function bicycle(spec) {
  const metal = paint(spec, "#42a5f5", spec.material || "metal");
  const g = G("Bicycle");
  const w1 = M(new TorusGeometry(0.32, 0.035, 10, 28), paint({}, "#222", "rubber"), -0.55, 0.32, 0);
  const w2 = w1.clone();
  w2.position.x = 0.55;
  g.add(w1, w2);
  g.add(rod(new Vector3(-0.55, 0.32, 0), new Vector3(0, 0.32, 0), 0.02, metal));
  g.add(rod(new Vector3(0, 0.32, 0), new Vector3(0.55, 0.32, 0), 0.02, metal));
  g.add(rod(new Vector3(0, 0.32, 0), new Vector3(-0.15, 0.7, 0), 0.02, metal));
  g.add(rod(new Vector3(0.35, 0.32, 0), new Vector3(0.15, 0.62, 0), 0.02, metal));
  g.add(M(new BoxGeometry(0.12, 0.04, 0.1), paint({}, "#333", "rubber"), -0.12, 0.74, 0));
  g.add(M(new CylinderGeometry(0.02, 0.02, 0.28, 8), metal, 0.5, 0.5, 0));
  return g;
}

function tree(spec) {
  const g = G("Tree");
  const trunk = M(new CylinderGeometry(0.08, 0.12, 0.7, 12), paint({}, "#6d4c41", "wood"), 0, 0.35, 0);
  g.add(trunk);
  if (spec.variant === "palm") {
    g.add(M(new CylinderGeometry(0.07, 0.09, 1.3, 10), paint({}, "#8d6e63", "wood"), 0, 0.7, 0));
    const leaf = paint(spec, "#2e7d32", "rubber");
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      const frond = M(new BoxGeometry(0.55, 0.03, 0.12), leaf, Math.cos(a) * 0.28, 1.35, Math.sin(a) * 0.28);
      frond.rotation.y = -a;
      frond.rotation.z = 0.5;
      g.add(frond);
    }
    return g;
  }
  if (spec.variant === "pine") {
    const green = paint(spec, "#2e7d32", "rubber");
    g.add(M(new ConeGeometry(0.48, 0.7, 12), green, 0, 0.95, 0));
    g.add(M(new ConeGeometry(0.36, 0.55, 12), green, 0, 1.35, 0));
    return g;
  }
  g.add(...foliage(spec.color || "#43a047", 0, 1.05, 0, 0.42));
  return g;
}

function robot(spec) {
  const metal = paint(spec, "#cfd8dc", spec.material || "metal");
  const eye = glowingMaterial(spec.glow ? spec.color || "#7ef9ff" : "#7ef9ff");
  const g = G("Robot");
  g.add(M(new RoundedBoxGeometry(0.7, 0.8, 0.4, 3, 0.06), metal, 0, 0.85, 0));
  g.add(M(new RoundedBoxGeometry(0.46, 0.36, 0.38, 3, 0.05), metal, 0, 1.45, 0));
  g.add(M(new SphereGeometry(0.06, 12, 10), eye, -0.1, 1.48, 0.18));
  g.add(M(new SphereGeometry(0.06, 12, 10), eye, 0.1, 1.48, 0.18));
  g.add(M(new CylinderGeometry(0.02, 0.02, 0.18, 8), metal, 0, 1.72, 0));
  g.add(M(new SphereGeometry(0.04, 10, 8), eye, 0, 1.84, 0));
  g.add(M(new CapsuleGeometry(0.07, 0.4, 4, 10), metal, -0.48, 0.85, 0));
  g.add(M(new CapsuleGeometry(0.07, 0.4, 4, 10), metal, 0.48, 0.85, 0));
  g.add(M(new CapsuleGeometry(0.09, 0.35, 4, 10), metal, -0.18, 0.32, 0));
  g.add(M(new CapsuleGeometry(0.09, 0.35, 4, 10), metal, 0.18, 0.32, 0));
  return g;
}

function building(spec) {
  const floors = Math.max(1, spec.floors || (spec.variant === "skyscraper" ? 22 : spec.variant === "tower" ? 12 : 8));
  const w = spec.variant === "tower" ? 0.72 : spec.variant === "skyscraper" ? 1.2 : 1.05;
  const d = spec.variant === "tower" ? 0.72 : 0.86;
  const fh = spec.variant === "skyscraper" ? 0.22 : 0.26;
  const h = floors * fh;
  const body = paint(spec, spec.variant === "skyscraper" ? "#c5d0dc" : "#7f93b5", spec.material || "stone");
  const g = G("Building");
  g.add(M(new BoxGeometry(w, h, d), body, 0, h / 2, 0));
  g.add(windowGrid(floors, spec.variant === "tower" ? 2 : 4, w, h, d, 0));
  g.add(M(new BoxGeometry(w * 0.22, fh * 0.7, 0.04), paint({}, "#4e342e", "wood"), 0, fh * 0.4, d / 2 + 0.02));
  if (spec.variant === "tower" || spec.variant === "skyscraper") {
    g.add(M(new CylinderGeometry(0.03, 0.03, 0.45, 8), metalMaterial("#eceff1"), 0, h + 0.22, 0));
    g.add(M(new SphereGeometry(0.05, 10, 8), glowingMaterial("#ff5252"), 0, h + 0.48, 0));
  } else {
    g.add(M(new BoxGeometry(w + 0.08, 0.06, d + 0.08), paint({}, "#546e7a", "stone"), 0, h + 0.03, 0));
  }
  return g;
}

function lamp(spec) {
  const metal = paint(spec, "#b0bec5", "metal");
  const shade = paint(spec, "#f5e6c8", spec.material || "fabric");
  const g = G("Lamp");
  g.add(M(new CylinderGeometry(0.16, 0.2, 0.06, 20), metal, 0, 0.03, 0));
  g.add(M(new CylinderGeometry(0.025, 0.025, 0.7, 10), metal, 0, 0.4, 0));
  g.add(M(new ConeGeometry(0.22, 0.2, 24, 1, true), shade, 0, 0.78, 0));
  const bulb = M(new SphereGeometry(0.06, 16, 12), glowingMaterial("#fff4cc"), 0, 0.75, 0);
  g.add(bulb);
  return g;
}

function rocket(spec) {
  const body = paint(spec, "#eceff1", spec.material || "metal");
  const g = G("Rocket");
  g.add(M(new CylinderGeometry(0.22, 0.22, 1.1, 28), body, 0, 0.7, 0));
  g.add(M(new ConeGeometry(0.22, 0.4, 28), paint(spec, "#e53935"), 0, 1.45, 0));
  for (const z of [-0.16, 0.16]) {
    const fin = M(new BoxGeometry(0.28, 0.22, 0.04), paint({}, "#e53935"), 0, 0.28, z);
    g.add(fin);
  }
  const finX = M(new BoxGeometry(0.04, 0.22, 0.28), paint({}, "#e53935"), 0, 0.28, 0);
  g.add(finX);
  g.add(M(new SphereGeometry(0.07, 16, 12), glassMaterial("#9ad7ff"), 0, 0.95, 0.18));
  const flame = M(new ConeGeometry(0.1, 0.28, 16), glowingMaterial("#ffb74d"), 0, 0.05, 0);
  flame.rotation.x = Math.PI;
  flame.userData.tick = (t) => {
    flame.scale.setScalar(0.85 + Math.sin(t * 18) * 0.12);
  };
  g.add(flame);
  return g;
}

function airplane(spec) {
  const body = paint(spec, "#eceff1", spec.material || "metal");
  const g = G("Airplane");
  const fuse = M(new CapsuleGeometry(0.16, 1.15, 6, 16), body, 0, 0.55, 0);
  fuse.rotation.z = Math.PI / 2;
  g.add(fuse);
  g.add(M(new BoxGeometry(1.5, 0.04, 0.28), body, 0.05, 0.55, 0));
  g.add(M(new BoxGeometry(0.35, 0.04, 0.22), body, -0.55, 0.7, 0));
  g.add(M(new BoxGeometry(0.04, 0.22, 0.22), body, -0.7, 0.66, 0));
  g.add(M(new CylinderGeometry(0.07, 0.08, 0.2, 16), metalMaterial("#90a4ae"), 0.28, 0.42, 0.18));
  g.add(M(new CylinderGeometry(0.07, 0.08, 0.2, 16), metalMaterial("#90a4ae"), 0.28, 0.42, -0.18));
  return g;
}

function boat(spec) {
  const hullMat = paint(spec, "#1565c0");
  const g = G("Boat");
  const hull = M(new SphereGeometry(0.55, 28, 16), hullMat, 0, 0.32, 0);
  hull.scale.set(1.8, 0.55, 0.75);
  g.add(hull);
  g.add(M(new BoxGeometry(0.45, 0.28, 0.32), paint({}, "#ffffff"), 0.15, 0.55, 0));
  g.add(M(new CylinderGeometry(0.02, 0.02, 0.9, 8), paint({}, "#6d4c41", "wood"), -0.15, 0.9, 0));
  const sail = M(new BoxGeometry(0.02, 0.55, 0.38), paint({}, "#fafafa", "fabric"), -0.05, 0.95, 0);
  g.add(sail);
  return g;
}

function cup(spec) {
  const mat = paint(spec, "#f5f5f5", spec.material || "ceramic");
  const g = G("Cup");
  const wall = M(new CylinderGeometry(0.22, 0.18, 0.42, 28, 1, true), mat, 0, 0.24, 0);
  wall.material.side = DoubleSide;
  g.add(wall);
  const bottom = M(new CircleGeometry(0.18, 24), mat, 0, 0.04, 0);
  bottom.rotation.x = -Math.PI / 2;
  g.add(bottom);
  const handle = M(new TorusGeometry(0.1, 0.025, 8, 18), mat, 0, 0.26, 0);
  handle.position.x = 0.24;
  g.add(handle);
  return g;
}

function bottle(spec) {
  const pts = [];
  const profile = [
    [0, 0],
    [0.16, 0],
    [0.18, 0.08],
    [0.18, 0.55],
    [0.1, 0.68],
    [0.07, 0.95],
    [0.08, 1.02],
    [0, 1.02],
  ];
  for (const [x, y] of profile) pts.push(new Vector2(x, y));
  const geo = new LatheGeometry(pts, 28);
  return G("Bottle", M(geo, paint(spec, "#7e57c2", spec.material || "glass")));
}

function flower(spec) {
  const g = G("Flower");
  g.add(M(new CylinderGeometry(0.015, 0.02, 0.55, 8), paint({}, "#2e7d32"), 0, 0.28, 0));
  const petal = paint(spec, "#ec407a");
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2;
    g.add(M(new SphereGeometry(0.09, 12, 10), petal, Math.cos(a) * 0.1, 0.58, Math.sin(a) * 0.1));
  }
  g.add(M(new SphereGeometry(0.06, 12, 10), paint({}, "#fdd835"), 0, 0.6, 0));
  return g;
}

function planet(spec) {
  const g = G("Planet");
  let color = spec.color || "#42a5f5";
  if (spec.variant === "saturn") color = spec.color || "#e6c07b";
  if (spec.variant === "moon") color = spec.color || "#d7d2c8";
  if (spec.variant === "earth") color = spec.color || "#1e88e5";
  g.add(M(new SphereGeometry(0.55, 40, 28), paint({ ...spec, color }, color, spec.material || "stone"), 0, 0.6, 0));
  if (spec.variant === "earth") {
    g.add(M(new SphereGeometry(0.16, 14, 10), paint({}, "#43a047", "rubber"), 0.22, 0.78, 0.32));
  }
  if (spec.variant === "saturn") {
    const ring = M(new TorusGeometry(0.86, 0.05, 8, 70), paint({}, "#f3e2b3", "stone"), 0, 0.6, 0);
    spin(ring, Math.PI / 2.5, 0.2, 0);
    g.add(ring);
  }
  return g;
}

function bridge(spec) {
  const mat = paint(spec, "#b0bec5", spec.material || "stone");
  const g = G("Bridge");
  const deck = M(new BoxGeometry(2.4, 0.08, 0.55), mat, 0, 0.55, 0);
  g.add(deck);
  g.add(M(new BoxGeometry(0.12, 0.7, 0.55), mat, -1.0, 0.35, 0));
  g.add(M(new BoxGeometry(0.12, 0.7, 0.55), mat, 1.0, 0.35, 0));
  const arch = M(new TorusGeometry(0.7, 0.045, 8, 30, Math.PI), mat, 0, 0.45, 0);
  spin(arch, 0, 0, Math.PI);
  g.add(arch);
  for (const x of [-0.7, 0.7]) {
    g.add(rod(new Vector3(x, 0.95, 0), new Vector3(x * 0.3, 0.6, 0), 0.012, metalMaterial("#90a4ae")));
  }
  g.add(M(new BoxGeometry(0.08, 0.45, 0.08), mat, -1.05, 0.95, 0));
  g.add(M(new BoxGeometry(0.08, 0.45, 0.08), mat, 1.05, 0.95, 0));
  g.add(rod(new Vector3(-1.05, 1.15, 0), new Vector3(1.05, 1.15, 0), 0.02, paint(spec, "#e53935")));
  return g;
}

function mountain(spec) {
  const rock = paint(spec, "#8d8f86", spec.material || "stone");
  const snow = paint({}, "#f7f7f7");
  const g = G("Mountain");
  g.add(M(new ConeGeometry(1.1, 1.5, 6), rock, 0, 0.75, 0));
  g.add(M(new ConeGeometry(0.38, 0.4, 6), snow, 0, 1.4, 0));
  g.add(M(new ConeGeometry(0.55, 0.8, 5), rock, 0.7, 0.4, 0.2));
  return g;
}

function snowman(spec) {
  const snow = paint(spec, "#f7fbff");
  const g = G("Snowman");
  g.add(M(new SphereGeometry(0.38, 24, 18), snow, 0, 0.38, 0));
  g.add(M(new SphereGeometry(0.28, 24, 18), snow, 0, 0.92, 0));
  g.add(M(new SphereGeometry(0.2, 24, 16), snow, 0, 1.32, 0));
  g.add(M(new CylinderGeometry(0.16, 0.18, 0.08, 16), paint({}, "#212121"), 0, 1.52, 0));
  g.add(M(new CylinderGeometry(0.22, 0.22, 0.28, 16), paint({}, "#212121"), 0, 1.68, 0));
  const nose = M(new ConeGeometry(0.03, 0.16, 8), paint({}, "#fb8c00"), 0, 1.32, 0.18);
  nose.rotation.x = Math.PI / 2;
  g.add(nose);
  g.add(M(new SphereGeometry(0.025, 8, 8), paint({}, "#212121"), -0.06, 1.38, 0.16));
  g.add(M(new SphereGeometry(0.025, 8, 8), paint({}, "#212121"), 0.06, 1.38, 0.16));
  return g;
}

function greenhouse(spec) {
  const frame = metalMaterial(spec.color || "#cfd8dc", 0.75, 0.3);
  const glass = glassMaterial("#e5f8ff");
  const g = G("Greenhouse");
  g.add(M(new BoxGeometry(1.6, 0.06, 1), paint({}, "#6d4c41", "wood"), 0, 0.03, 0));
  g.add(M(new BoxGeometry(1.5, 0.7, 0.02), glass, 0, 0.45, 0.45));
  g.add(M(new BoxGeometry(1.5, 0.7, 0.02), glass, 0, 0.45, -0.45));
  g.add(M(new BoxGeometry(0.02, 0.7, 0.9), glass, 0.75, 0.45, 0));
  g.add(M(new BoxGeometry(0.02, 0.7, 0.9), glass, -0.75, 0.45, 0));
  const roof = M(new BoxGeometry(1.55, 0.02, 0.55), glass, 0, 0.95, 0.22);
  roof.rotation.x = 0.45;
  const roof2 = roof.clone();
  roof2.position.z = -0.22;
  roof2.rotation.x = -0.45;
  g.add(roof, roof2);
  g.add(M(new BoxGeometry(1.55, 0.04, 0.04), frame, 0, 0.8, 0));
  for (let i = 0; i < 4; i++) g.add(...plant(-0.45 + i * 0.3, 0.06, 0, 0.28));
  return g;
}

function fountain(spec) {
  const stone = paint(spec, "#b0bec5", spec.material || "stone");
  const g = G("Fountain");
  g.add(M(new CylinderGeometry(0.7, 0.78, 0.22, 32), stone, 0, 0.11, 0));
  g.add(M(new CylinderGeometry(0.55, 0.55, 0.12, 28), waterMaterial("#4fc3f7"), 0, 0.2, 0));
  g.add(M(new CylinderGeometry(0.08, 0.1, 0.45, 16), stone, 0, 0.4, 0));
  const jet = M(new CylinderGeometry(0.02, 0.04, 0.35, 8), waterMaterial("#b3e5fc"), 0, 0.75, 0);
  jet.userData.tick = (t) => {
    jet.scale.y = 0.8 + Math.sin(t * 4) * 0.15;
  };
  g.add(jet);
  return g;
}

function castle(spec) {
  const stone = paint(spec, "#9e9e9e", spec.material || "stone");
  const g = G("Castle");
  g.add(M(new BoxGeometry(1.5, 0.7, 1.1), stone, 0, 0.35, 0));
  for (const [x, z] of [
    [-0.7, -0.5],
    [0.7, -0.5],
    [-0.7, 0.5],
    [0.7, 0.5],
  ]) {
    g.add(M(new CylinderGeometry(0.18, 0.2, 1.15, 12), stone, x, 0.55, z));
    g.add(M(new ConeGeometry(0.24, 0.28, 12), paint(spec, "#b5442f"), x, 1.2, z));
  }
  g.add(M(new BoxGeometry(0.28, 0.4, 0.06), paint({}, "#5d4037", "wood"), 0, 0.22, 0.56));
  return g;
}

function windmill(spec) {
  const body = paint(spec, "#efe6d2", spec.material || "stone");
  const g = G("Windmill");
  g.add(M(new CylinderGeometry(0.28, 0.4, 1.3, 8), body, 0, 0.65, 0));
  g.add(M(new ConeGeometry(0.34, 0.35, 8), paint({}, "#8d6e63", "wood"), 0, 1.4, 0));
  const blades = new Group();
  blades.position.set(0, 1.15, 0.28);
  const bladeMat = paint({}, "#f5f5f5");
  for (let i = 0; i < 4; i++) {
    const holder = new Group();
    holder.rotation.z = (i * Math.PI) / 2;
    holder.add(M(new BoxGeometry(0.08, 0.65, 0.03), bladeMat, 0, 0.38, 0));
    blades.add(holder);
  }
  blades.userData.tick = (t) => {
    blades.rotation.z = t * 0.8;
  };
  g.add(blades);
  return g;
}

function bench(spec) {
  const wood = paint(spec, "#a1887f", spec.material || "wood");
  const metal = metalMaterial("#546e7a");
  return G(
    "Bench",
    M(new BoxGeometry(1.3, 0.06, 0.4), wood, 0, 0.45, 0),
    M(new BoxGeometry(1.3, 0.4, 0.06), wood, 0, 0.7, -0.17),
    M(new BoxGeometry(0.06, 0.45, 0.36), metal, -0.55, 0.22, 0),
    M(new BoxGeometry(0.06, 0.45, 0.36), metal, 0.55, 0.22, 0),
  );
}

function solar(spec) {
  const g = G("SolarPanel");
  const panel = M(
    new BoxGeometry(1.1, 0.05, 0.6),
    new MeshStandardMaterial({ color: spec.color || "#1565c0", emissive: "#0d47a1", emissiveIntensity: 0.25, metalness: 0.4, roughness: 0.3 }),
  );
  panel.position.set(0, 0.7, 0);
  panel.rotation.x = -0.6;
  g.add(panel);
  g.add(M(new BoxGeometry(0.06, 0.55, 0.06), metalMaterial("#cfd8dc"), 0, 0.28, 0));
  g.add(M(new BoxGeometry(0.4, 0.04, 0.25), metalMaterial("#90a4ae"), 0, 0.04, 0));
  return g;
}

function fence(spec) {
  const wood = paint(spec, "#bcaaa4", spec.material || "wood");
  const g = G("Fence");
  for (let i = 0; i < 5; i++) {
    g.add(M(new BoxGeometry(0.08, 0.7, 0.08), wood, -0.8 + i * 0.4, 0.35, 0));
  }
  g.add(M(new BoxGeometry(1.7, 0.06, 0.04), wood, 0, 0.55, 0));
  g.add(M(new BoxGeometry(1.7, 0.06, 0.04), wood, 0, 0.25, 0));
  return g;
}

function stairs(spec) {
  const mat = paint(spec, "#bdbdbd", spec.material || "stone");
  const g = G("Stairs");
  for (let i = 0; i < 6; i++) {
    g.add(M(new BoxGeometry(0.8, 0.1, 0.28), mat, 0, 0.05 + i * 0.1, -0.7 + i * 0.26));
  }
  return g;
}

function well(spec) {
  const stone = paint(spec, "#9e9e9e", spec.material || "stone");
  const g = G("Well");
  const wall = M(new CylinderGeometry(0.4, 0.42, 0.55, 24, 1, true), stone, 0, 0.32, 0);
  wall.material.side = DoubleSide;
  g.add(wall);
  const water = M(new CircleGeometry(0.36, 20), waterMaterial("#4fc3f7"), 0, 0.2, 0);
  water.rotation.x = -Math.PI / 2;
  g.add(water);
  g.add(M(new BoxGeometry(0.06, 0.7, 0.06), paint({}, "#6d4c41", "wood"), -0.28, 0.75, 0));
  g.add(M(new BoxGeometry(0.06, 0.7, 0.06), paint({}, "#6d4c41", "wood"), 0.28, 0.75, 0));
  const roof = M(new ConeGeometry(0.4, 0.28, 4), paint({}, "#b5442f"), 0, 1.2, 0);
  roof.rotation.y = Math.PI / 4;
  g.add(roof);
  return g;
}

function cloud(spec) {
  const mat = paint(spec, "#f7fbff");
  return G(
    "Cloud",
    M(new SphereGeometry(0.32, 18, 14), mat, 0, 0.55, 0),
    M(new SphereGeometry(0.24, 16, 12), mat, 0.28, 0.5, 0),
    M(new SphereGeometry(0.22, 16, 12), mat, -0.26, 0.48, 0.05),
    M(new SphereGeometry(0.18, 14, 10), mat, 0.08, 0.68, -0.05),
  );
}

function sun(spec) {
  const g = G("Sun");
  const core = M(new SphereGeometry(0.45, 32, 24), glowingMaterial(spec.color || "#ffd54f"), 0, 0.55, 0);
  g.add(core);
  const ring = M(new TorusGeometry(0.62, 0.03, 8, 40), glowingMaterial("#ffe082"), 0, 0.55, 0);
  g.add(ring);
  core.userData.tick = (t) => {
    ring.rotation.x = t * 0.4;
    ring.rotation.y = t * 0.3;
  };
  return g;
}

function cactus(spec) {
  const mat = paint(spec, "#43a047", "rubber");
  const g = G("Cactus");
  g.add(M(new CapsuleGeometry(0.12, 0.7, 6, 12), mat, 0, 0.5, 0));
  g.add(spin(M(new CapsuleGeometry(0.07, 0.28, 4, 10), mat, 0.2, 0.55, 0), 0, 0, Math.PI / 2));
  g.add(spin(M(new CapsuleGeometry(0.06, 0.22, 4, 10), mat, -0.18, 0.4, 0), 0, 0, Math.PI / 2));
  return g;
}

function mushroom(spec) {
  return G(
    "Mushroom",
    M(new CylinderGeometry(0.06, 0.08, 0.35, 12), paint({}, "#efebe9"), 0, 0.18, 0),
    M(new SphereGeometry(0.22, 20, 12, 0, Math.PI * 2, 0, Math.PI / 2), paint(spec, "#e53935"), 0, 0.34, 0),
  );
}

function fish(spec) {
  const g = fishMesh(spec.color || "#ff8a65");
  g.position.y = 0.2;
  g.userData.tick = (t) => {
    g.position.y = 0.25 + Math.sin(t * 2) * 0.05;
    g.rotation.y = Math.sin(t) * 0.4;
  };
  return g;
}

function plantObj(spec) {
  return G("Plant", ...plant(0, 0, 0, 0.45, spec.color || "#43a047"));
}

function planter(spec) {
  const g = G("GrowBed");
  g.add(M(new BoxGeometry(1.2, 0.16, 0.55), paint({}, "#6d4c41", "wood"), 0, 0.2, 0));
  g.add(M(new BoxGeometry(1.1, 0.06, 0.46), layerMaterial("pebbles"), 0, 0.28, 0));
  const n = 5;
  for (let i = 0; i < n; i++) g.add(...plant(-0.4 + i * 0.2, 0.3, 0, 0.28, spec.color || "#43a047"));
  return g;
}

function person(spec) {
  const cloth = paint(spec, "#5c6bc0", spec.material || "fabric");
  const skin = paint({}, "#f1c27d");
  return G(
    "Person",
    M(new CapsuleGeometry(0.16, 0.45, 4, 12), cloth, 0, 0.55, 0),
    M(new SphereGeometry(0.16, 18, 14), skin, 0, 1.05, 0),
    M(new CapsuleGeometry(0.05, 0.28, 3, 8), cloth, -0.24, 0.6, 0),
    M(new CapsuleGeometry(0.05, 0.28, 3, 8), cloth, 0.24, 0.6, 0),
    M(new CapsuleGeometry(0.06, 0.35, 3, 8), paint({}, "#37474f"), -0.08, 0.22, 0),
    M(new CapsuleGeometry(0.06, 0.35, 3, 8), paint({}, "#37474f"), 0.08, 0.22, 0),
  );
}

function gear(spec) {
  const mat = paint(spec, "#90a4ae", spec.material || "metal");
  const g = G("Gear");
  const disc = M(new CylinderGeometry(0.32, 0.32, 0.08, 24), mat, 0, 0.2, 0);
  g.add(disc);
  g.add(M(new CylinderGeometry(0.08, 0.08, 0.1, 16), metalMaterial("#eceff1"), 0, 0.2, 0));
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2;
    const tooth = M(new BoxGeometry(0.1, 0.1, 0.1), mat, Math.cos(a) * 0.38, 0.2, Math.sin(a) * 0.38);
    g.add(tooth);
  }
  return g;
}

function crown(spec) {
  const gold = paint(spec, "#d4af37", "metal");
  const g = G("Crown");
  g.add(M(new CylinderGeometry(0.28, 0.32, 0.16, 8), gold, 0, 0.16, 0));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    g.add(M(new ConeGeometry(0.06, 0.18, 6), gold, Math.cos(a) * 0.24, 0.32, Math.sin(a) * 0.24));
  }
  g.add(M(new SphereGeometry(0.05, 10, 8), glowingMaterial("#ef5350"), 0, 0.28, 0.26));
  return g;
}

function umbrella(spec) {
  const g = G("Umbrella");
  g.add(M(new CylinderGeometry(0.02, 0.02, 0.9, 8), paint({}, "#6d4c41", "wood"), 0, 0.45, 0));
  const canopy = M(new ConeGeometry(0.45, 0.22, 18, 1, true), paint(spec, "#e53935"), 0, 0.9, 0);
  canopy.material.side = DoubleSide;
  g.add(canopy);
  return g;
}

function book(spec) {
  const cover = paint(spec, "#5c6bc0");
  const g = G("Book");
  g.add(M(new BoxGeometry(0.55, 0.08, 0.4), cover, 0, 0.06, 0));
  g.add(M(new BoxGeometry(0.5, 0.05, 0.36), paint({}, "#fff8e1"), 0, 0.1, 0));
  return g;
}

function arch(spec) {
  const mat = paint(spec, "#b0bec5", spec.material || "stone");
  const g = G("Arch");
  const ring = M(new TorusGeometry(0.55, 0.09, seg(12, 6), seg(28, 16), Math.PI), mat, 0, 0.72, 0);
  spin(ring, 0, 0, Math.PI);
  g.add(ring);
  g.add(M(new BoxGeometry(0.16, 0.72, 0.18), mat, -0.55, 0.36, 0));
  g.add(M(new BoxGeometry(0.16, 0.72, 0.18), mat, 0.55, 0.36, 0));
  g.add(M(new BoxGeometry(0.16, 0.08, 0.18), mat, 0, 0.04, 0));
  return g;
}

function windowObj(spec) {
  const framed = spec.material === "glass" ? "wood" : spec.material || "wood";
  const frame = paint({ ...spec, material: framed, color: spec.material === "glass" ? null : spec.color }, "#efe6d2", framed);
  const glass = glassMaterial(spec.material === "glass" ? spec.color || "#d7f1ff" : "#d7f1ff");
  const g = G("Window");
  g.add(M(new BoxGeometry(0.78, 0.04, 0.08), frame, 0, 0.08, 0));
  g.add(M(new BoxGeometry(0.78, 0.04, 0.08), frame, 0, 1.02, 0));
  g.add(M(new BoxGeometry(0.06, 0.98, 0.08), frame, -0.36, 0.55, 0));
  g.add(M(new BoxGeometry(0.06, 0.98, 0.08), frame, 0.36, 0.55, 0));
  g.add(M(new BoxGeometry(0.04, 0.9, 0.05), frame, 0, 0.55, 0));
  g.add(M(new BoxGeometry(0.62, 0.04, 0.05), frame, 0, 0.55, 0));
  g.add(M(new BoxGeometry(0.28, 0.38, 0.03), glass, -0.16, 0.76, 0.02));
  g.add(M(new BoxGeometry(0.28, 0.38, 0.03), glass, 0.16, 0.76, 0.02));
  g.add(M(new BoxGeometry(0.28, 0.38, 0.03), glass, -0.16, 0.32, 0.02));
  g.add(M(new BoxGeometry(0.28, 0.38, 0.03), glass, 0.16, 0.32, 0.02));
  if (spec.variant === "arched") {
    const cap = M(new TorusGeometry(0.36, 0.035, seg(8, 5), seg(18, 12), Math.PI), frame, 0, 1.02, 0);
    spin(cap, Math.PI / 2, 0, 0);
    g.add(cap);
  }
  return g;
}

function door(spec) {
  const wood = paint(spec, "#6b4226", spec.material || "wood");
  const g = G("Door");
  g.add(M(new BoxGeometry(0.7, 1.28, 0.06), paint({}, "#4e342e", "wood"), 0, 0.66, -0.02));
  const slab = M(new BoxGeometry(0.56, 1.12, 0.05), wood, 0, 0.62, 0.02);
  g.add(slab);
  g.add(M(new BoxGeometry(0.42, 0.42, 0.02), paint({}, "#5d4037", "wood"), 0, 0.42, 0.05));
  g.add(M(new BoxGeometry(0.22, 0.28, 0.02), glassMaterial("#d7ecff"), 0, 0.92, 0.05));
  g.add(M(new SphereGeometry(0.03, seg(12, 8), seg(10, 6)), metalMaterial("#d4af37", 1, 0.25), 0.18, 0.58, 0.06));
  if (spec.variant === "arched") {
    const cap = M(new SphereGeometry(0.28, seg(20, 12), seg(12, 8), 0, Math.PI * 2, 0, Math.PI / 2), wood, 0, 1.16, 0.02);
    g.add(cap);
  }
  return g;
}

function dome(spec) {
  const mat = paint(spec, "#eceff1", spec.material || "stone");
  const g = G("Dome");
  g.add(M(new CylinderGeometry(0.62, 0.68, 0.36, seg(28, 14)), mat, 0, 0.18, 0));
  g.add(M(new SphereGeometry(0.58, seg(32, 16), seg(18, 10), 0, Math.PI * 2, 0, Math.PI / 2), mat, 0, 0.34, 0));
  g.add(M(new SphereGeometry(0.08, seg(12, 8), seg(10, 6)), paint(spec, "#d4af37", "metal"), 0, 0.92, 0));
  return g;
}

function wall(spec) {
  const mat = paint(spec, "#d7ccc8", spec.material || "stone");
  const g = G("Wall");
  g.add(M(new BoxGeometry(1.7, 1.15, 0.16), mat, 0, 0.58, 0));
  g.add(M(new BoxGeometry(0.16, 1.15, 0.2), mat, -0.85, 0.58, 0));
  g.add(M(new BoxGeometry(0.16, 1.15, 0.2), mat, 0.85, 0.58, 0));
  g.add(M(new BoxGeometry(0.36, 0.4, 0.04), glassMaterial("#d7ecff"), 0.28, 0.7, 0.09));
  if (spec.variant === "arched") {
    const ring = M(new TorusGeometry(0.22, 0.04, 6, 14, Math.PI), mat, 0.28, 0.9, 0.1);
    spin(ring, Math.PI / 2, 0, 0);
    g.add(ring);
  }
  return g;
}

function prism(spec) {
  const mesh = M(new CylinderGeometry(0.42, 0.42, 0.9, 3), paint(spec, "#7e57c2"));
  mesh.rotation.y = Math.PI / 6;
  mesh.position.y = 0.45;
  return G("Prism", mesh);
}

function shelf(spec) {
  const wood = paint(spec, "#a97142", spec.material || "wood");
  const g = G("Shelf");
  g.add(M(new BoxGeometry(0.08, 1.2, 0.32), wood, -0.42, 0.6, 0));
  g.add(M(new BoxGeometry(0.08, 1.2, 0.32), wood, 0.42, 0.6, 0));
  g.add(M(new BoxGeometry(0.08, 1.2, 0.32), wood, 0, 0.6, -0.12));
  for (let i = 0; i < 4; i++) g.add(M(new BoxGeometry(0.84, 0.04, 0.3), wood, 0, 0.12 + i * 0.32, 0));
  const covers = ["#5c6bc0", "#e53935", "#00897b", "#f9a825", "#6d4c41"];
  covers.forEach((color, i) => {
    g.add(M(new BoxGeometry(0.07, 0.22, 0.18), paint({}, color), -0.28 + i * 0.09, 0.28, 0.02));
  });
  return g;
}

function cabinet(spec) {
  const wood = paint(spec, "#8d6e63", spec.material || "wood");
  const g = G("Cabinet");
  g.add(M(new RoundedBoxGeometry(0.95, 1.25, 0.48, 2, 0.03), wood, 0, 0.66, 0));
  g.add(M(new BoxGeometry(0.4, 1.02, 0.02), paint({}, "#6d4c41", "wood"), -0.21, 0.7, 0.25));
  g.add(M(new BoxGeometry(0.4, 1.02, 0.02), paint({}, "#6d4c41", "wood"), 0.21, 0.7, 0.25));
  const knob = metalMaterial("#d4af37", 1, 0.25);
  g.add(M(new SphereGeometry(0.025, 8, 8), knob, -0.04, 0.7, 0.27));
  g.add(M(new SphereGeometry(0.025, 8, 8), knob, 0.04, 0.7, 0.27));
  g.add(M(new BoxGeometry(0.9, 0.06, 0.5), paint({}, "#5d4037", "wood"), 0, 0.06, 0));
  return g;
}

function chessboard(spec) {
  const g = G("Chessboard");
  g.add(M(new BoxGeometry(1.12, 0.06, 1.12), paint({}, "#5d4037", "wood"), 0, 0.04, 0));
  const light = new MeshStandardMaterial({ color: "#ffffff", roughness: 0.7 });
  const squares = isFast() ? 1 : 64;
  if (isFast()) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");
    for (let r = 0; r < 8; r++) {
      for (let c = 0; c < 8; c++) {
        ctx.fillStyle = (r + c) % 2 ? "#3e2723" : "#f5f0e6";
        ctx.fillRect(c * 32, r * 32, 32, 32);
      }
    }
    const tex = new CanvasTexture(canvas);
    tex.colorSpace = SRGBColorSpace;
    g.add(M(new BoxGeometry(0.96, 0.02, 0.96), new MeshStandardMaterial({ map: tex, roughness: 0.7 }), 0, 0.08, 0));
    return g;
  }
  const geo = new BoxGeometry(0.11, 0.02, 0.11);
  const mesh = new InstancedMesh(geo, light, squares);
  const dummy = new Object3D();
  const color = new Color();
  let n = 0;
  for (let r = 0; r < 8; r++) {
    for (let c = 0; c < 8; c++) {
      dummy.position.set(-0.385 + c * 0.11, 0.08, -0.385 + r * 0.11);
      dummy.updateMatrix();
      mesh.setMatrixAt(n, dummy.matrix);
      color.set((r + c) % 2 ? "#3e2723" : spec.color || "#f5f0e6");
      mesh.setColorAt(n, color);
      n += 1;
    }
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  g.add(mesh);
  return g;
}

function abstract(spec) {
  const rand = rng(spec.seed || 1);
  const g = G("Abstract");
  const kinds = [() => new SphereGeometry(0.35, 24, 16), () => new BoxGeometry(0.55, 0.55, 0.55), () => new TorusGeometry(0.28, 0.1, 12, 24), () => new ConeGeometry(0.3, 0.6, 4)];
  for (let i = 0; i < 4; i++) {
    const geo = kinds[i % kinds.length]();
    const mesh = M(geo, paint({ ...spec, color: spec.color }, i % 2 ? "#7c4dff" : "#26c6da"));
    mesh.position.set((rand() - 0.5) * 0.8, 0.35 + rand() * 0.7, (rand() - 0.5) * 0.8);
    mesh.rotation.set(rand(), rand(), rand());
    g.add(mesh);
  }
  return g;
}

export function buildFiltration(spec, ctx) {
  const lang = ctx.lang || spec.lang || "en";
  const tr = ctx.tr || ((k) => k);
  const tanks = spec.filtration.tanks;
  const g = G("FiltrationSystem");
  const left = Math.floor(tanks / 2);
  const right = tanks - left;
  const gap = 2.05;
  const nodes = [];
  for (let i = 0; i < left; i++) nodes.push({ kind: "tank", role: i === 0 ? "dirty" : "settle" });
  nodes.push({ kind: "filter" });
  for (let i = 0; i < right; i++) nodes.push({ kind: "tank", role: i === right - 1 ? "clean" : "storage" });
  const width = Math.max((nodes.length - 1) * gap, 0);
  nodes.forEach((node, i) => {
    node.x = -width / 2 + i * gap;
  });
  nodes.forEach((node) => {
    if (node.kind === "filter") {
      const column = buildFilterColumn({
        layers: FILTER_STACK,
        profile: "stack4",
        lang,
        radius: 0.5,
        cutaway: spec.filtration.cutaway !== false,
        tr,
        layerLabel: ctx.layer,
        labelX: -width / 2 - 1.28,
      });
      column.position.x = node.x;
      tagEdit(column, { label: tr("filterColumn"), color: "#e7f6ff" });
      g.add(column);
      node.ref = column;
    } else {
      const dirty = node.role === "dirty" || node.role === "settle";
      const clean = node.role === "clean";
      const vessel = buildVessel({
        radius: clean ? 0.58 : 0.48,
        height: clean ? 1.5 : 1.28,
        water: dirty ? "#8d6e63" : "#4fc3f7",
        dirty,
      });
      vessel.position.x = node.x;
      const key = node.role === "dirty" ? "dirtyTank" : node.role === "clean" ? "cleanTank" : node.role === "settle" ? "settleTank" : "storageTank";
      tagEdit(vessel, { label: tr(key), color: dirty ? "#8d6e63" : "#4fc3f7" });
      g.add(vessel);
      const tag = label(tr(key), { rtl: lang === "ar", accent: dirty ? "#d7ccc8" : "#81d4fa", width: clean ? 1.05 : 0.92 });
      tag.position.set(node.x, (vessel.userData.top || 1.3) + 0.28, 0.55);
      g.add(tag);
      node.ref = vessel;
    }
  });

  const filterNode = nodes.find((node) => node.kind === "filter");
  const fi = nodes.indexOf(filterNode);
  const fx = filterNode.x;
  const ud = filterNode.ref.userData;
  for (let i = 0; i < nodes.length - 1; i++) {
    if (i === fi || i + 1 === fi) continue;
    const a = nodes[i];
    const b = nodes[i + 1];
    const dirtySide = a.role === "dirty" || a.role === "settle";
    const start = new Vector3(a.x + a.ref.userData.radius * 0.85, (a.ref.userData.top || 1) * 0.68, 0);
    const end = new Vector3(b.x - b.ref.userData.radius * 0.85, (b.ref.userData.top || 1) * 0.6, 0);
    const lift = Math.max(start.y, end.y) + 0.24;
    addFlow(g, [start, new Vector3(start.x, lift, 0), new Vector3(end.x, lift, 0), end], 4, {
      color: dirtySide ? "#a1887f" : "#4fc3f7",
      speed: 0.16,
      tubeRadius: 0.04,
      arrowColor: dirtySide ? "#bcaaa4" : "#81d4fa",
    });
  }

  const fallTop = ud.fallTop.clone();
  fallTop.x += fx;
  const fallBottom = ud.fallBottom.clone();
  fallBottom.x += fx;
  const wasteJoin = ud.wasteJoin.clone();
  wasteJoin.x += fx;
  const prev = nodes[fi - 1];
  const pumpMesh = pump({ color: "#1e88e5", material: "metal" });
  const pumpX = prev ? (prev.x + fx) * 0.5 : fx - 0.95;
  pumpMesh.position.set(pumpX, 0, 0.82);
  pumpMesh.scale.setScalar(0.9);
  tagEdit(pumpMesh, { label: tr("pump"), color: "#1e88e5" });
  g.add(pumpMesh);
  const pumpTag = label(tr("pump"), { rtl: lang === "ar", width: 0.72 });
  pumpTag.position.set(pumpX, 0.98, 0.82);
  g.add(pumpTag);
  const lampMesh = pumpMesh.getObjectByName("PumpLamp");
  if (lampMesh) {
    pumpMesh.userData.flowTick = (t, live) => {
      lampMesh.material.emissiveIntensity = live ? 0.35 + Math.sin(t * 7) * 0.5 : 0.7;
    };
  }

  const above = (ud.top || fallTop.y) + 0.14;
  const source = prev
    ? new Vector3(prev.x + prev.ref.userData.radius * 0.75, (prev.ref.userData.top || 1.2) * 0.58, 0.08)
    : new Vector3(pumpX - 0.2, 0.72, 0.82);
  addFlow(
    g,
    [
      source,
      new Vector3(pumpX - 0.24, 0.42, 0.82),
      new Vector3(pumpX + 0.24, 0.42, 0.82),
      new Vector3(pumpX + 0.24, above, 0.42),
      new Vector3(fallTop.x, above, fallTop.z),
      fallTop,
    ],
    6,
    { color: "#e08a3c", speed: 0.13, radius: 0.046, tubeRadius: 0.04, arrowColor: "#e0b080" },
  );

  const fallMid = fallTop.clone().lerp(fallBottom, 0.5);
  fallMid.x += 0.012;
  addFlow(g, [fallTop, fallMid, fallBottom], isFast() ? 7 : 14, {
    color: "#ff8a3d",
    colorTo: "#7ee7ff",
    tube: false,
    stream: true,
    streamRadius: 0.07,
    dirty: true,
    speed: 0.22,
    radius: 0.085,
    arrows: isFast() ? 3 : 5,
    arrowColor: "#e7f6ff",
    arrowLength: 0.12,
    wobble: 0.02,
  });

  const bin = buildWasteBin();
  bin.position.set(fx + ud.wasteBin.x, 0, ud.wasteBin.z);
  tagEdit(bin, { label: tr("wasteBin"), color: "#6d4c41" });
  g.add(bin);
  const wasteTag = label(tr("wasteBin"), { rtl: lang === "ar", accent: "#bcaaa4", width: 1.02 });
  wasteTag.position.set(bin.position.x, bin.userData.top + 0.34, bin.position.z);
  g.add(wasteTag);
  const outFront = new Vector3(wasteJoin.x, wasteJoin.y, wasteJoin.z + 0.55);
  const wasteEnd = new Vector3(bin.position.x, bin.userData.top - 0.03, bin.position.z);
  addFlow(
    g,
    [
      wasteJoin,
      outFront,
      new Vector3(bin.position.x, wasteJoin.y + 0.08, bin.position.z + 0.08),
      new Vector3(bin.position.x, bin.userData.top + 0.14, bin.position.z),
      wasteEnd,
    ],
    5,
    { color: "#c4622d", speed: 0.2, radius: 0.048, tubeRadius: 0.03, arrowColor: "#e09a6a", stream: true, streamRadius: 0.02, dirty: true, wobble: 0.008 },
  );
  const swirl = new Vector3(bin.position.x, 0.2, bin.position.z);
  addFlow(
    g,
    [
      swirl.clone().add(new Vector3(0.07, 0, 0)),
      swirl.clone().add(new Vector3(0, 0.03, 0.07)),
      swirl.clone().add(new Vector3(-0.07, 0.01, 0)),
      swirl.clone().add(new Vector3(0, 0, -0.06)),
    ],
    3,
    { color: "#a15a32", tube: false, arrows: 0, speed: 0.3, radius: 0.034 },
  );

  const next = nodes[fi + 1];
  const outlet = ud.outlet.clone();
  outlet.x += fx;
  const cleanLip = next
    ? new Vector3(next.x, (next.ref.userData.top || 1.3) + 0.02, 0.02)
    : new Vector3(fx + 1.25, 1.15, 0);
  const cleanEnd = next
    ? new Vector3(next.x, (next.ref.userData.top || 1.3) * 0.58, 0.02)
    : new Vector3(cleanLip.x, 0.7, 0);
  addFlow(
    g,
    [fallBottom, outlet, new Vector3(outlet.x + 0.28, cleanLip.y, 0.06), cleanLip, cleanEnd],
    6,
    { color: "#4fc3f7", speed: 0.15, radius: 0.04, tubeRadius: 0.04, arrowColor: "#81d4fa" },
  );

  const span = width + 2.8;
  g.add(M(new RoundedBoxGeometry(Math.max(span, 3.2), 0.08, 2.55, 3, 0.02), metalMaterial("#263238", 0.5, 0.55), 0, 0.02, 0.32));
  g.rotation.y = 0.62;
  return g;
}

export function buildAquaponics(spec, ctx) {
  const lang = ctx.lang || "en";
  const tr = ctx.tr || ((k) => k);
  const g = G("Aquaponics");
  const tankMesh = buildVessel({ radius: 0.7, height: 0.85, water: "#4fc3f7", dirty: false });
  tankMesh.scale.set(1.15, 0.85, 1);
  tankMesh.position.set(-0.85, 0, 0);
  tagEdit(tankMesh, { label: tr("fishTank"), color: "#4fc3f7" });
  g.add(tankMesh);
  const fishCount = spec.aquaponics.fish || 3;
  for (let i = 0; i < fishCount; i++) {
    const f = fishMesh(["#ff8a65", "#ffd54f", "#80cbc4", "#ef9a9a"][i % 4]);
    f.position.set(-0.85, 0.35, 0);
    f.userData.phase = i;
    f.userData.tick = (t) => {
      const a = t * 0.7 + i * 1.3;
      f.position.set(-0.85 + Math.cos(a) * 0.28, 0.32 + Math.sin(t * 2 + i) * 0.05, Math.sin(a) * 0.22);
      f.rotation.y = -a + Math.PI / 2;
    };
    g.add(f);
  }
  const fishTag = label(tr("fishTank"), { rtl: lang === "ar", accent: "#81d4fa", width: 1 });
  fishTag.position.set(-0.85, 1.25, 0);
  g.add(fishTag);

  const bed = planter({ color: "#43a047" });
  bed.position.set(0.95, 0.85, 0);
  tagEdit(bed, { label: tr("growBed"), color: "#43a047" });
  g.add(bed);
  g.add(M(new BoxGeometry(0.08, 0.85, 0.08), paint({}, "#6d4c41", "wood"), 0.6, 0.42, 0.2));
  g.add(M(new BoxGeometry(0.08, 0.85, 0.08), paint({}, "#6d4c41", "wood"), 1.3, 0.42, 0.2));
  g.add(M(new BoxGeometry(0.08, 0.85, 0.08), paint({}, "#6d4c41", "wood"), 0.6, 0.42, -0.2));
  g.add(M(new BoxGeometry(0.08, 0.85, 0.08), paint({}, "#6d4c41", "wood"), 1.3, 0.42, -0.2));
  const bedTag = label(tr("growBed"), { rtl: lang === "ar", accent: "#a5d6a7", width: 0.95 });
  bedTag.position.set(0.95, 1.55, 0);
  g.add(bedTag);

  if (spec.aquaponics.withFilter !== false) {
    const column = buildFilterColumn({
      layers: spec.aquaponics.layers,
      lang,
      radius: 0.28,
      cutaway: true,
      tr,
      layerLabel: ctx.layer,
    });
    column.scale.setScalar(0.75);
    column.position.set(0.15, 0, 0.85);
    tagEdit(column, { label: tr("filterColumn"), color: "#e7f6ff" });
    g.add(column);
  }
  const pumpMesh = pump({ material: "metal", color: "#1e88e5" });
  pumpMesh.position.set(-0.1, 0, -0.85);
  pumpMesh.scale.setScalar(0.8);
  tagEdit(pumpMesh, { label: tr("pump"), color: "#1e88e5" });
  g.add(pumpMesh);
  addFlow(
    g,
    [new Vector3(-0.2, 0.7, 0), new Vector3(-0.2, 1.15, 0), new Vector3(0.95, 1.15, 0), new Vector3(0.95, 1.02, 0)],
    3,
  );
  const title = label(tr("aquaponicsTitle"), { rtl: lang === "ar", accent: "#80cbc4", width: 1.5 });
  title.position.set(0, 1.95, 0);
  g.add(title);
  g.add(M(new RoundedBoxGeometry(3.2, 0.08, 2.2, 2, 0.02), metalMaterial("#263238", 0.45, 0.6), 0.1, 0.02, 0));
  return g;
}

const BUILDERS = {
  cube,
  sphere,
  cylinder,
  cone,
  torus,
  pyramid,
  capsule,
  star,
  heart,
  tank,
  pipe,
  pump,
  filter: (spec, ctx) =>
    buildFilterColumn({
      layers: ["sponge", "sand", "charcoal", "gravel", "coarseGravel"],
      lang: ctx.lang,
      cutaway: true,
      tr: ctx.tr,
      layerLabel: ctx.layer,
    }),
  house,
  table,
  chair,
  sofa,
  bed,
  car,
  bus,
  bicycle,
  tree,
  robot,
  building,
  lamp,
  rocket,
  airplane,
  boat,
  cup,
  bottle,
  flower,
  planet,
  bridge,
  mountain,
  snowman,
  greenhouse,
  fountain,
  castle,
  windmill,
  bench,
  solar,
  fence,
  stairs,
  well,
  cloud,
  sun,
  cactus,
  mushroom,
  fish,
  plant: plantObj,
  planter,
  person,
  gear,
  crown,
  umbrella,
  book,
  arch,
  window: windowObj,
  door,
  dome,
  wall,
  prism,
  shelf,
  cabinet,
  chessboard,
  abstract,
};

export function buildObject(spec, ctx = {}) {
  const fn = BUILDERS[spec.type] || abstract;
  const group = fn(spec, ctx);
  group.userData.kind = spec.type;
  const label = ctx.partLabel ? ctx.partLabel(spec.type) : group.name || spec.type;
  tagEdit(group, { label, color: spec.color || null });
  return group;
}
