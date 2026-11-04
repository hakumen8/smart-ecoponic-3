import {
  BoxGeometry,
  CatmullRomCurve3,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DoubleSide,
  IcosahedronGeometry,
  InstancedMesh,
  Mesh,
  Object3D,
  MeshStandardMaterial,
  PlaneGeometry,
  PointLight,
  SphereGeometry,
  TorusGeometry,
  TubeGeometry,
  Vector3,
} from "three";
import { G, M, label, spin } from "./builders.js";
import { LAYER_COLORS, glassMaterial, glowingMaterial, layerMaterial, metalMaterial, paint, waterMaterial } from "./materials.js";

const UP = new Vector3(0, 1, 0);
const FLOW_LERP = new Color();
const FILTER_ARC = Math.PI * 1.05;

function h01(n) {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
}

function filterCut(cutaway) {
  if (!cutaway) return { start: 0, length: Math.PI * 2, gapMid: 0, open: false };
  const length = FILTER_ARC;
  const start = Math.PI - length / 2;
  return { start, length, gapMid: 0, open: true };
}

function pieCylinder(radiusTop, radiusBottom, height, mat, cut, segs = 40) {
  const mesh = new Mesh(new CylinderGeometry(radiusTop, radiusBottom, Math.max(height, 0.012), segs, 1, false, cut.start, cut.length), mat);
  mesh.castShadow = !(mat && mat.transmission > 0);
  mesh.receiveShadow = true;
  if (mat) mat.side = DoubleSide;
  return mesh;
}

function addCutFaces(group, radius, height, y, cut, mat) {
  if (!cut.open) return;
  for (const angle of [cut.start, cut.start + cut.length]) {
    const face = new Mesh(new PlaneGeometry(Math.max(radius, 0.02), Math.max(height, 0.02)), mat);
    face.castShadow = false;
    face.receiveShadow = true;
    face.position.set(Math.sin(angle) * radius * 0.5, y, Math.cos(angle) * radius * 0.5);
    face.rotation.y = Math.atan2(Math.cos(angle), -Math.sin(angle));
    group.add(face);
  }
}

function layerWeight(id) {
  if (id === "sponge") return 0.86;
  if (id === "cloth" || id === "cotton") return 0.42;
  if (id === "sand") return 1.22;
  if (id === "coarseSand") return 1.05;
  if (id === "charcoal") return 0.98;
  if (id === "coarseGravel" || id === "pebbles") return 1.16;
  if (id === "ceramic" || id === "bioballs") return 0.9;
  return 1;
}

const MEDIA = {
  sand: { kind: "grains", count: 210, size: 0.062, stretch: 0.55, colors: ["#f8e7b8", "#e8c56a", "#c9943c", "#fff6d2", "#a56a28", "#f0d48a"] },
  coarseSand: { kind: "grains", count: 78, size: 0.092, stretch: 0.6, colors: ["#d39a45", "#a86a28", "#e8b86a", "#7a4e18", "#f0c27a"] },
  charcoal: { kind: "chunks", count: 26, size: 0.1, stretch: 0.9, colors: ["#2c2c2c", "#101010", "#45403c", "#1a1614", "#5a5048"] },
  gravel: { kind: "stones", count: 28, size: 0.1, stretch: 0.48, colors: ["#d5cfc2", "#8e877c", "#eee6da", "#6a6358", "#b7ad9e"] },
  coarseGravel: { kind: "stones", count: 12, size: 0.16, stretch: 0.42, colors: ["#9a9184", "#5c564c", "#d2c6b4", "#3f3a34", "#ece3d4"] },
  pebbles: { kind: "stones", count: 22, size: 0.062, stretch: 0.2, round: true, colors: ["#ece6dc", "#c4a890", "#f7f4ee", "#a88878"] },
  ceramic: { kind: "rings", count: 16, colors: ["#d4765a", "#c4553a", "#e8b39a"] },
  bioballs: { kind: "balls", count: 12, colors: ["#eef3f6", "#c5d0d8", "#f7fbff"] },
};

function addSeparator(group, y, radius, cut, fine) {
  const mat = layerMaterial(fine ? "screen" : "cloth");
  const thick = fine ? 0.042 : 0.02;
  const disc = pieCylinder(radius * 0.9, radius * 0.9, thick, mat, cut, 32);
  disc.position.y = y;
  group.add(disc);
  const hoop = new Mesh(
    new CylinderGeometry(radius * 0.93, radius * 0.93, thick + 0.01, 36, 1, true, cut.start, cut.length),
    metalMaterial("#d7ccc8", 0.72, 0.3),
  );
  hoop.position.y = y;
  hoop.castShadow = false;
  group.add(hoop);
}

function addSponge(group, y, height, radius, cut, seed) {
  const mat = layerMaterial("sponge");
  mat.roughness = 0.66;
  mat.bumpScale = Math.max(mat.bumpScale || 0, 0.4);
  const scale = radius / 0.5;
  const bodyH = Math.max(height * 0.68, 0.06);
  const bodyR = radius * 0.74;
  const body = pieCylinder(bodyR * 0.94, bodyR, bodyH, mat, cut, 36);
  body.position.y = y - height * 0.03;
  group.add(body);
  addCutFaces(group, bodyR, bodyH, body.position.y, cut, mat);
  const lobe = pieCylinder(bodyR * 0.58, bodyR * 0.66, bodyH * 0.4, mat, cut, 24);
  lobe.position.set(0.015 * scale, y + height * 0.14, 0.01 * scale);
  group.add(lobe);

  const pores = new InstancedMesh(
    new SphereGeometry(1, 7, 6),
    new MeshStandardMaterial({ color: "#ffffff", roughness: 1 }),
    24,
  );
  const dummy = new Object3D();
  const color = new Color();
  for (let i = 0; i < 24; i++) {
    const face = i % 2;
    const ang = face === 0 ? cut.start + 0.02 : cut.start + cut.length - 0.02;
    const rad = h01(seed + i * 4.1) * bodyR * 0.88;
    const yy = body.position.y + (h01(seed + i * 6.3) - 0.5) * bodyH * 0.8;
    const s = (0.038 + h01(seed + i * 2.7) * 0.04) * scale;
    const intoX = face === 0 ? -Math.cos(ang) : Math.cos(ang);
    const intoZ = face === 0 ? Math.sin(ang) : -Math.sin(ang);
    dummy.position.set(Math.sin(ang) * rad + intoX * s * 0.4, yy, Math.cos(ang) * rad + intoZ * s * 0.4);
    dummy.scale.setScalar(s);
    dummy.rotation.set(0, 0, 0);
    dummy.updateMatrix();
    pores.setMatrixAt(i, dummy.matrix);
    color.set(i % 3 === 0 ? "#3a2712" : i % 3 === 1 ? "#a86b22" : "#e7b45a");
    pores.setColorAt(i, color);
  }
  pores.instanceMatrix.needsUpdate = true;
  if (pores.instanceColor) pores.instanceColor.needsUpdate = true;
  pores.castShadow = false;
  group.add(pores);
}

function addSheet(group, y, height, radius, cut, id) {
  const mat = layerMaterial(id);
  const thick = Math.min(Math.max(height * 0.5, 0.025), 0.07);
  const sheet = pieCylinder(radius * 0.9, radius * 0.9, thick, mat, cut, 32);
  sheet.position.y = y;
  group.add(sheet);
  addCutFaces(group, radius * 0.9, thick, y, cut, mat);
  const gauze = pieCylinder(radius * 0.76, radius * 0.76, Math.max(thick * 0.42, 0.012), layerMaterial("screen"), cut, 28);
  gauze.position.y = y + thick * 0.62;
  group.add(gauze);
}

function scatterMedia(group, look, y, height, radius, cut, seed) {
  const scale = Math.max(0.35, radius / 0.5);
  const pack = Math.max(0.32, Math.min(1.15, scale * scale * (height / 0.3)));
  const count = Math.max(8, Math.round(look.count * pack));
  let geo;
  if (look.kind === "rings") {
    const ring = 0.046 * scale;
    geo = new TorusGeometry(ring, ring * 0.32, 5, 10);
  } else if (look.kind === "balls") {
    geo = new SphereGeometry(0.052 * scale, 10, 8);
  } else if (look.round) {
    geo = new SphereGeometry(1, 8, 6);
  } else {
    geo = new IcosahedronGeometry(1, 0);
  }
  const mat = new MeshStandardMaterial({
    roughness: look.kind === "balls" ? 0.4 : look.kind === "chunks" ? 0.97 : 0.9,
    metalness: look.kind === "balls" ? 0.05 : 0,
  });
  const mesh = new InstancedMesh(geo, mat, count);
  const dummy = new Object3D();
  const color = new Color();
  const yBase = y - height * 0.5;
  const usableH = Math.max(height * 0.84, 0.04);
  const shaped = look.kind === "rings" || look.kind === "balls";
  for (let i = 0; i < count; i++) {
    const edge = h01(seed + i * 1.7);
    let ang;
    if (cut.open && edge < 0.3) ang = cut.start + h01(seed + i * 3.1) * 0.05;
    else if (cut.open && edge < 0.6) ang = cut.start + cut.length - h01(seed + i * 4.3) * 0.05;
    else ang = cut.start + (((i % 13) + h01(seed + i * 5.1)) / 13) * cut.length;
    const rad = Math.sqrt(0.06 + h01(seed + i * 6.7) * 0.94) * radius * 0.76;
    const yy = yBase + 0.02 * scale + h01(seed + i * 8.3) * usableH;
    let s = shaped ? 0.82 + h01(seed + i * 2.2) * 0.36 : (look.size || 0.05) * scale * (0.75 + h01(seed + i * 2.2) * 0.5);
    if (!shaped) s = Math.min(s, height * 0.42);
    const stretch = look.stretch ?? 0.3;
    dummy.position.set(Math.sin(ang) * rad, yy, Math.cos(ang) * rad);
    dummy.rotation.set(h01(seed + i * 12) * 6.3, h01(seed + i * 13) * 6.3, h01(seed + i * 14) * 6.3);
    if (shaped) dummy.scale.setScalar(s);
    else {
      dummy.scale.set(
        s * (1 + (h01(seed + i * 9.1) - 0.5) * stretch),
        s * (look.round ? 0.75 : 0.6 + h01(seed + i * 10.4) * 0.55),
        s * (1 + (h01(seed + i * 11.6) - 0.5) * stretch),
      );
    }
    dummy.updateMatrix();
    mesh.setMatrixAt(i, dummy.matrix);
    color.set(look.colors[i % look.colors.length]);
    color.offsetHSL(0, (h01(seed + i * 15) - 0.5) * 0.05, (h01(seed + i * 16) - 0.5) * 0.1);
    mesh.setColorAt(i, color);
  }
  mesh.instanceMatrix.needsUpdate = true;
  if (mesh.instanceColor) mesh.instanceColor.needsUpdate = true;
  mesh.castShadow = false;
  mesh.receiveShadow = true;
  group.add(mesh);
  if (!shaped) {
    const tray = pieCylinder(radius * 0.86, radius * 0.86, 0.012, new MeshStandardMaterial({ color: "#3a3128", roughness: 0.96 }), cut, 24);
    tray.position.y = yBase + 0.006;
    group.add(tray);
  }
}

function addMediaLayer(group, id, y, height, radius, cut, seed) {
  if (id === "sponge") {
    addSponge(group, y, height, radius, cut, seed);
    return;
  }
  if (id === "cloth" || id === "cotton") {
    addSheet(group, y, height, radius, cut, id);
    return;
  }
  scatterMedia(group, MEDIA[id] || { kind: "grains", count: 70, size: 0.05, stretch: 0.4, colors: ["#d0d0d0", "#8d8d8d", "#f4f4f4"] }, y, height, radius, cut, seed);
}

export function buildWasteBin() {
  const g = G("WasteBin");
  const radius = 0.2;
  const height = 0.48;
  const glass = glassMaterial("#f6ebe3");
  const wall = new Mesh(new CylinderGeometry(radius, radius * 0.94, height, 28, 1, true), glass);
  wall.material.side = DoubleSide;
  wall.castShadow = false;
  wall.receiveShadow = true;
  wall.position.y = height / 2 + 0.05;
  const base = M(new CylinderGeometry(radius * 1.12, radius * 1.16, 0.07, 24), metalMaterial("#5d4037", 0.55, 0.45), 0, 0.035, 0);
  const sludgeH = 0.16;
  const sludge = M(new CylinderGeometry(radius * 0.78, radius * 0.84, sludgeH, 20), waterMaterial("#4e342e", true), 0, 0.09 + sludgeH / 2, 0);
  const rim = M(new TorusGeometry(radius, 0.018, 8, 24), metalMaterial("#8d6e63", 0.7, 0.35), 0, height + 0.05, 0);
  rim.rotation.x = Math.PI / 2;
  g.add(base, wall, sludge, rim);
  const chunk = new MeshStandardMaterial({ color: "#3e2723", roughness: 1 });
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const rock = new Mesh(new IcosahedronGeometry(0.028 + (i % 2) * 0.012, 0), chunk);
    rock.position.set(Math.cos(a) * 0.07, 0.15 + (i % 3) * 0.03, Math.sin(a) * 0.07);
    rock.rotation.set(i, i * 0.7, 0.2);
    rock.castShadow = false;
    g.add(rock);
  }
  g.userData.top = height + 0.05;
  g.userData.radius = radius;
  return g;
}

export function buildFilterColumn({ layers, lang = "en", radius = 0.5, cutaway = true, tr, layerLabel, labelX = null }) {
  const g = G("FilterColumn");
  const cut = filterCut(cutaway);
  const list = layers?.length ? layers : ["sponge", "sand", "charcoal", "coarseGravel"];
  const tall = radius >= 0.4;
  const weights = list.map(layerWeight);
  const sum = weights.reduce((a, b) => a + b, 0) || 1;
  const gap = tall ? 0.09 : 0.045;
  const mediaH = Math.min(tall ? 2.2 : 1.2, (tall ? 0.33 : 0.26) * list.length + (tall ? 0.46 : 0.2));
  const usable = Math.max(0.2, mediaH - gap * Math.max(0, list.length - 1));
  const foot = tall ? 0.28 : 0.16;
  const head = tall ? 0.4 : 0.26;
  const h = foot + mediaH + head;
  const y0 = 0.08;

  const shellMat = glassMaterial("#e7f6ff");
  const shell = new Mesh(new CylinderGeometry(radius, radius, h, tall ? 64 : 40, 1, true, cut.start, cut.length), shellMat);
  shell.material.side = DoubleSide;
  shell.castShadow = false;
  shell.receiveShadow = true;
  shell.position.y = y0 + h / 2;
  g.add(shell);
  g.add(M(new CylinderGeometry(radius * 1.14, radius * 1.18, 0.09, 36), metalMaterial("#37474f", 0.72, 0.38), 0, 0.045, 0));

  const cleanMat = waterMaterial("#4fc3f7", false);
  const poolH = tall ? 0.12 : 0.07;
  const pool = pieCylinder(radius * 0.8, radius * 0.8, poolH, cleanMat, cut, 32);
  pool.position.y = y0 + foot * 0.55;
  g.add(pool);
  addCutFaces(g, radius * 0.8, poolH, pool.position.y, cut, cleanMat);

  let cursor = y0 + foot + mediaH;
  const layerInfo = [];
  let wasteY = y0 + foot + usable * 0.45;
  list.forEach((id, index) => {
    const lh = (weights[index] / sum) * usable;
    cursor -= lh;
    const center = cursor + lh / 2;
    addMediaLayer(g, id, center, lh * 0.9, radius, cut, 50 + index * 97);
    const band = new Mesh(
      new CylinderGeometry(radius * 1.004, radius * 1.004, 0.016, tall ? 48 : 28, 1, true, cut.start, cut.length),
      new MeshStandardMaterial({
        color: LAYER_COLORS[id] || "#90a4ae",
        emissive: LAYER_COLORS[id] || "#000000",
        emissiveIntensity: 0.2,
        roughness: 0.4,
        metalness: 0.05,
      }),
    );
    band.position.y = center;
    band.castShadow = false;
    g.add(band);
    layerInfo.push({ id, y: center, h: lh });
    if (["sponge", "cloth", "cotton", "sand", "coarseSand", "charcoal"].includes(id)) wasteY = cursor;
    if (index < list.length - 1) {
      cursor -= gap;
      addSeparator(g, cursor + gap / 2, radius, cut, id === "sponge" || id === "cloth" || id === "cotton" || id === "sand");
    }
  });

  const mediaTop = y0 + foot + mediaH;
  const capH = head * 0.52;
  const dirtyMat = waterMaterial("#8d6e63", true);
  const cap = pieCylinder(radius * 0.78, radius * 0.78, capH, dirtyMat, cut, 32);
  cap.position.y = mediaTop + 0.025 + capH / 2;
  g.add(cap);
  addCutFaces(g, radius * 0.78, capH, cap.position.y, cut, dirtyMat);
  const speck = paint({}, "#4e342e", "rubber");
  for (let i = 0; i < (tall ? 7 : 4); i++) {
    const ang = cut.start + (0.12 + 0.76 * (i / Math.max(1, (tall ? 6 : 3)))) * cut.length;
    const rad = radius * (0.16 + (i % 3) * 0.16);
    g.add(M(new SphereGeometry(0.016 * (radius / 0.5), 7, 5), speck, Math.sin(ang) * rad, cap.position.y, Math.cos(ang) * rad));
  }

  const rim = metalMaterial("#eceff1", 0.82, 0.24);
  g.add(spin(M(new TorusGeometry(radius, 0.026, 8, tall ? 40 : 24), rim, 0, y0 + h, 0), Math.PI / 2, 0, 0));
  g.add(spin(M(new TorusGeometry(radius, 0.026, 8, tall ? 40 : 24), rim, 0, y0 + 0.02, 0), Math.PI / 2, 0, 0));
  if (cut.open) {
    const edge = glowingMaterial("#8be4ff");
    for (const ang of [cut.start, cut.start + cut.length]) {
      g.add(M(new BoxGeometry(0.015, h * 0.98, 0.015), edge, Math.sin(ang) * radius, y0 + h / 2, Math.cos(ang) * radius));
    }
  }

  const lamp = new PointLight("#fff6ea", tall ? 0.9 : 0.35, tall ? 7 : 3, 2);
  const gx = Math.sin(cut.gapMid);
  const gz = Math.cos(cut.gapMid);
  lamp.position.set(gx * radius * 2.2, y0 + h * 0.55, gz * radius * 2.2);
  g.add(lamp);

  const title = label(tr ? tr("filterColumn") : "Filter", { rtl: lang === "ar", accent: "#5ad1ff", width: tall ? 1.05 : 0.85 });
  title.position.set(0, y0 + h + (tall ? 0.3 : 0.22), radius * 0.15);
  g.add(title);
  layerInfo.forEach((info, index) => {
    const name = layerLabel ? layerLabel(info.id) : info.id;
    const tag = label(`${index + 1}. ${name}`, {
      rtl: lang === "ar",
      accent: LAYER_COLORS[info.id] || "#5ad1ff",
      width: tall ? 0.72 : 0.62,
    });
    tag.position.set(labelX ?? radius + 0.95, info.y, 0);
    g.add(tag);
  });

  const fallR = cut.open ? radius * 0.3 : radius * 0.05;
  g.userData.top = y0 + h;
  g.userData.radius = radius;
  g.userData.fallTop = new Vector3(gx * fallR, cap.position.y, gz * fallR);
  g.userData.fallBottom = new Vector3(gx * fallR * 0.75, pool.position.y, gz * fallR * 0.75);
  g.userData.wasteJoin = new Vector3(gx * fallR, wasteY + gap * 0.35, gz * fallR);
  g.userData.inlet = new Vector3(-radius, y0 + h * 0.92, 0);
  g.userData.outlet = new Vector3(radius * 0.96, pool.position.y, 0.03);
  const binAngle = 1.16;
  g.userData.wasteBin = new Vector3(Math.sin(binAngle) * (radius + 0.64), 0, Math.cos(binAngle) * (radius + 0.64));
  return g;
}

function animateFlows(group, t, live) {
  for (const flow of group.userData.flows || []) {
    const n = flow.beads.length || 1;
    for (let i = 0; i < flow.beads.length; i++) {
      const bead = flow.beads[i];
      bead.visible = live;
      if (!live) continue;
      const u = (t * flow.speed + i / n) % 1;
      bead.position.copy(flow.curve.getPoint(u));
      if (flow.colorTo) {
        const shifted = Math.min(1, Math.max(0, (u - 0.12) / 0.7));
        const smooth = shifted * shifted * (3 - 2 * shifted);
        FLOW_LERP.copy(flow.color).lerp(flow.colorTo, smooth);
        bead.material.color.copy(FLOW_LERP);
        bead.material.emissive.copy(FLOW_LERP);
      }
    }
    if (!flow.arrows) continue;
    for (let i = 0; i < flow.arrows.length; i++) {
      const s = live ? 1 + Math.sin(t * 3.4 + i * 1.2) * 0.16 : 1;
      flow.arrows[i].scale.set(s, s, s);
    }
  }
}

export function addFlow(group, points, count = 3, opts = {}) {
  const color = opts.color || "#80deea";
  const curve = new CatmullRomCurve3(points, false, "centripetal");
  if (opts.tube !== false) {
    const tube = new Mesh(
      new TubeGeometry(curve, Math.max(24, points.length * 14), opts.tubeRadius ?? 0.042, 8, false),
      metalMaterial(opts.tubeColor || "#cfd8dc", 0.78, 0.28),
    );
    tube.castShadow = true;
    tube.receiveShadow = true;
    group.add(tube);
  }
  const beads = [];
  const radius = opts.radius ?? 0.036;
  for (let i = 0; i < count; i++) {
    const bead = new Mesh(new SphereGeometry(radius, 8, 6), glowingMaterial(color));
    bead.castShadow = false;
    bead.visible = false;
    bead.userData.flowBead = true;
    group.add(bead);
    beads.push(bead);
  }
  const arrows = [];
  const arrowCount = opts.arrows ?? 3;
  if (arrowCount > 0) {
    const mat = new MeshStandardMaterial({
      color: opts.arrowColor || color,
      emissive: opts.arrowColor || color,
      emissiveIntensity: 0.25,
      roughness: 0.4,
      metalness: 0.15,
    });
    for (let i = 0; i < arrowCount; i++) {
      const u = (i + 1) / (arrowCount + 1);
      const p = curve.getPoint(u);
      const q = curve.getPoint(Math.min(0.985, u + 0.035));
      const dir = q.clone().sub(p);
      if (dir.lengthSq() < 1e-8) continue;
      const cone = new Mesh(new ConeGeometry(opts.arrowRadius ?? 0.03, opts.arrowLength ?? 0.08, 7), mat);
      cone.castShadow = false;
      cone.position.copy(p);
      cone.quaternion.setFromUnitVectors(UP, dir.normalize());
      cone.userData.isFlowArrow = true;
      group.add(cone);
      arrows.push(cone);
    }
  }
  if (!group.userData.flows) {
    group.userData.flows = [];
    group.userData.flowTick = (time, live) => animateFlows(group, time, !!live);
  }
  group.userData.flows.push({
    curve,
    beads,
    speed: opts.speed ?? 0.18,
    color: new Color(color),
    colorTo: opts.colorTo ? new Color(opts.colorTo) : null,
    arrows,
  });
}
