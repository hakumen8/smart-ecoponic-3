/** Shared fittings, bevel hardware, and gallery detail. Offline only. */

import {
  Box3,
  BoxGeometry,
  CatmullRomCurve3,
  ConeGeometry,
  CylinderGeometry,
  IcosahedronGeometry,
  Mesh,
  SphereGeometry,
  TorusGeometry,
  TubeGeometry,
  Vector3,
} from "three";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { metalMaterial, paint } from "./materials.js";
import { isFast } from "./quality.js";

const UP = new Vector3(0, 1, 0);
const Z_AXIS = new Vector3(0, 0, 1);

export function piece(geo, mat, x = 0, y = 0, z = 0, shadow = true) {
  const mesh = new Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.castShadow = shadow && !(mat && (mat.transmission > 0 || mat.transparent));
  mesh.receiveShadow = true;
  return mesh;
}

function basis(dir) {
  const axis = dir.clone().normalize();
  const tmp = Math.abs(axis.y) > 0.9 ? new Vector3(1, 0, 0) : UP;
  const tangent = new Vector3().crossVectors(axis, tmp).normalize();
  const bitangent = new Vector3().crossVectors(axis, tangent).normalize();
  return { axis, tangent, bitangent };
}

export function addNozzle(group, origin, direction, radius = 0.06, mat) {
  const dir = direction.clone().normalize();
  const body = mat || metalMaterial("#90a4ae", 0.82, 0.28);
  const flangeMat = metalMaterial("#eceff1", 0.9, 0.22);
  const boltMat = metalMaterial("#37474f", 0.7, 0.35);
  const stub = piece(new CylinderGeometry(radius, radius, radius * 2.4, isFast() ? 8 : 14), body);
  stub.quaternion.setFromUnitVectors(UP, dir);
  stub.position.copy(origin).addScaledVector(dir, radius * 0.7);
  group.add(stub);
  const flange = piece(new CylinderGeometry(radius * 2.05, radius * 2.05, radius * 0.42, isFast() ? 8 : 16), flangeMat);
  flange.quaternion.copy(stub.quaternion);
  flange.position.copy(origin).addScaledVector(dir, radius * 1.85);
  group.add(flange);
  const { tangent, bitangent } = basis(dir);
  const bolts = isFast() ? 4 : 6;
  for (let i = 0; i < bolts; i++) {
    const a = (i / bolts) * Math.PI * 2;
    const bolt = piece(new CylinderGeometry(radius * 0.18, radius * 0.18, radius * 0.55, 6), boltMat, 0, 0, 0, false);
    bolt.quaternion.copy(stub.quaternion);
    bolt.position
      .copy(flange.position)
      .addScaledVector(tangent, Math.cos(a) * radius * 1.45)
      .addScaledVector(bitangent, Math.sin(a) * radius * 1.45);
    group.add(bolt);
  }
  return origin.clone().addScaledVector(dir, radius * 2.15);
}

export function boltRing(group, y, radius, count, mat, scale = 1) {
  const n = isFast() ? Math.max(4, Math.round(count / 2)) : count;
  const boltMat = mat || metalMaterial("#37474f", 0.75, 0.32);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const bolt = piece(new CylinderGeometry(0.018 * scale, 0.018 * scale, 0.045 * scale, 6), boltMat, Math.cos(a) * radius, y, Math.sin(a) * radius, false);
    group.add(bolt);
  }
}

export function dressPipe(group, curve, points, opts = {}) {
  const radius = opts.radius ?? 0.05;
  const band = metalMaterial("#cfd8dc", 0.86, 0.28);
  const elbowMat = opts.elbowMat || metalMaterial(opts.color || "#90a4ae", 0.8, 0.3);
  if (opts.clamps !== false) {
    const clamps = isFast() ? 4 : 8;
    for (let i = 1; i < clamps; i++) {
      const u = i / clamps;
      const p = curve.getPoint(u);
      const ring = piece(new TorusGeometry(radius * 1.45, radius * 0.22, 6, isFast() ? 8 : 12), band, 0, 0, 0, false);
      ring.position.copy(p);
      ring.quaternion.setFromUnitVectors(Z_AXIS, curve.getTangent(u).normalize());
      group.add(ring);
    }
  }
  if (points.length >= 3) {
    for (let i = 1; i < points.length - 1; i++) {
      const a = points[i].clone().sub(points[i - 1]);
      const b = points[i + 1].clone().sub(points[i]);
      if (a.lengthSq() < 1e-6 || b.lengthSq() < 1e-6) continue;
      if (a.normalize().dot(b.normalize()) > 0.9) continue;
      const elbow = piece(new SphereGeometry(radius * 2.35, isFast() ? 10 : 14, isFast() ? 8 : 12), elbowMat);
      elbow.position.copy(points[i]);
      group.add(elbow);
      const collar = piece(new TorusGeometry(radius * 1.15, radius * 0.2, 6, 10), band, 0, 0, 0, false);
      collar.position.copy(points[i]);
      collar.quaternion.setFromUnitVectors(Z_AXIS, b);
      group.add(collar);
    }
  }
  if (opts.flange !== false && points.length >= 2) {
    const ends = [
      [points[0], points[1].clone().sub(points[0])],
      [points[points.length - 1], points[points.length - 2].clone().sub(points[points.length - 1])],
    ];
    for (const [origin, direction] of ends) {
      if (direction.lengthSq() < 1e-6) continue;
      addNozzle(group, origin, direction.normalize(), radius * 0.95, elbowMat);
    }
  }
  if (opts.valve !== false && points.length >= 2) {
    const at = curve.getPoint(opts.valveU ?? 0.46);
    const body = piece(new SphereGeometry(radius * 1.85, 10, 8), metalMaterial("#455a64", 0.72, 0.34));
    body.position.copy(at);
    group.add(body);
    const stem = piece(new CylinderGeometry(radius * 0.22, radius * 0.22, radius * 2.6, 8), band);
    stem.position.copy(at).add(new Vector3(0, radius * 1.7, 0));
    group.add(stem);
    const wheel = piece(new TorusGeometry(radius * 1.85, radius * 0.2, 8, 16), metalMaterial(opts.valveColor || "#ffb300", 0.55, 0.32), 0, 0, 0, false);
    wheel.rotation.x = Math.PI / 2;
    wheel.position.copy(at).add(new Vector3(0, radius * 3.05, 0));
    group.add(wheel);
    for (let i = 0; i < 4; i++) {
      const spoke = piece(new BoxGeometry(radius * 1.7, radius * 0.12, radius * 0.12), metalMaterial("#eceff1", 0.8, 0.3), 0, 0, 0, false);
      spoke.position.copy(wheel.position);
      spoke.rotation.y = (i * Math.PI) / 4;
      group.add(spoke);
    }
  }
  if (opts.supports) {
    for (let i = 1; i < points.length - 1; i++) {
      const p = points[i];
      if (p.y < 0.35) continue;
      const leg = piece(new CylinderGeometry(radius * 0.28, radius * 0.34, Math.max(0.08, p.y - 0.04), 8), metalMaterial("#546e7a", 0.6, 0.4));
      leg.position.set(p.x, (p.y - 0.04) / 2, p.z);
      group.add(leg);
      group.add(piece(new CylinderGeometry(radius * 0.7, radius * 0.8, 0.03, 8), metalMaterial("#37474f", 0.5, 0.5), p.x, 0.02, p.z, false));
    }
  }
}

export function connectPoints(group, points, opts = {}) {
  const curve = new CatmullRomCurve3(points.map((p) => p.clone()), false, "centripetal");
  const radius = opts.radius ?? 0.045;
  const tube = piece(
    new TubeGeometry(curve, Math.max(24, points.length * 12), radius, isFast() ? 6 : 10, false),
    metalMaterial(opts.color || "#90a4ae", 0.78, 0.28),
  );
  group.add(tube);
  dressPipe(group, curve, points, { ...opts, radius });
  return tube;
}

function steel() {
  return metalMaterial("#b0bec5", 0.78, 0.32);
}

function darkMetal() {
  return metalMaterial("#37474f", 0.7, 0.38);
}

export function enrichModel(group, spec) {
  const type = spec.type;
  const accent = spec.color || null;
  switch (type) {
    case "robot":
      enrichRobot(group, spec);
      break;
    case "car":
      enrichCar(group, spec);
      break;
    case "bus":
      enrichBus(group);
      break;
    case "bicycle":
      enrichBicycle(group);
      break;
    case "tree":
      enrichTree(group, spec);
      break;
    case "building":
      enrichBuilding(group, spec);
      break;
    case "house":
      enrichHouse(group, spec);
      break;
    case "table":
      enrichTable(group, spec);
      break;
    case "chair":
      enrichChair(group, spec);
      break;
    case "sofa":
      enrichSofa(group);
      break;
    case "bed":
      enrichBed(group);
      break;
    case "cup":
      enrichCup(group, spec);
      break;
    case "bottle":
      enrichBottle(group, spec);
      break;
    case "rocket":
      enrichRocket(group);
      break;
    case "airplane":
      enrichAirplane(group);
      break;
    case "planet":
      enrichPlanet(group, spec);
      break;
    case "boat":
      enrichBoat(group);
      break;
    case "bridge":
      enrichBridge(group, spec);
      break;
    case "mountain":
      enrichMountain(group);
      break;
    case "greenhouse":
      enrichGreenhouse(group);
      break;
    case "bench":
      enrichBench(group);
      break;
    case "sun":
      enrichSun(group);
      break;
    case "snowman":
      enrichSnowman(group);
      break;
    case "lamp":
      enrichLamp(group);
      break;
    case "arch":
      enrichArch(group);
      break;
    case "castle":
      enrichCastle(group);
      break;
    case "chessboard":
      enrichChess(group);
      break;
    case "crown":
      enrichCrown(group);
      break;
    case "cabinet":
      enrichCabinet(group);
      break;
    case "shelf":
      enrichShelf(group);
      break;
    case "microscope":
      enrichMicroscope(group);
      break;
    case "beaker":
      enrichBeaker(group);
      break;
    case "atom":
      enrichAtom(group);
      break;
    case "turbine":
      enrichTurbine(group);
      break;
    case "solar":
      enrichSolar(group, spec);
      break;
    case "dam":
      enrichDam(group);
      break;
    case "river":
      enrichRiver(group);
      break;
    case "lighthouse":
      enrichLighthouse(group);
      break;
    case "satellite":
      enrichSatellite(group);
      break;
    case "cloud":
      enrichCloud(group);
      break;
    case "cactus":
      enrichCactus(group);
      break;
    case "lake":
      enrichLake(group);
      break;
    case "fish":
      enrichFish(group, accent);
      break;
    case "plant":
    case "flower":
      enrichPlant(group, type);
      break;
    case "window":
    case "door":
      enrichOpening(group, type);
      break;
    case "book":
      enrichBook(group);
      break;
    case "person":
      enrichPerson(group);
      break;
    case "fountain":
      enrichFountain(group);
      break;
    case "windmill":
      enrichWindmill(group);
      break;
    case "wall":
      enrichWall(group);
      break;
    case "dome":
      enrichDome(group);
      break;
    case "star":
    case "heart":
      enrichBadge(group, type);
      break;
    case "umbrella":
    case "mushroom":
    case "well":
    case "fence":
    case "stairs":
    case "board":
    case "screen":
      enrichProp(group, type);
      break;
    default:
      break;
  }
}

function enrichRobot(group, spec) {
  const metal = paint(spec, "#cfd8dc", "metal");
  const dark = darkMetal();
  group.add(piece(new RoundedBoxGeometry(0.46, 0.5, 0.06, 2, 0.02), dark, 0, 0.86, 0.22));
  group.add(piece(new BoxGeometry(0.16, 0.1, 0.03), metalMaterial(spec.glow ? spec.color || "#7ef9ff" : "#26c6da", 0.4, 0.3), 0, 0.95, 0.25, false));
  group.add(piece(new BoxGeometry(0.5, 0.06, 0.42), dark, 0, 0.58, 0));
  for (const x of [-0.18, 0.18]) {
    group.add(piece(new SphereGeometry(0.07, 10, 8), metal, x, 0.48, 0));
    group.add(piece(new BoxGeometry(0.12, 0.06, 0.16), dark, x, 0.08, 0.04));
  }
  for (const x of [-0.48, 0.48]) {
    group.add(piece(new SphereGeometry(0.06, 8, 8), metal, x, 1.05, 0));
    group.add(piece(new BoxGeometry(0.08, 0.06, 0.1), dark, x, 0.58, 0.08));
  }
  group.add(piece(new CylinderGeometry(0.03, 0.03, 0.12, 8), steel(), 0.16, 1.68, 0));
}

function enrichCar(group, spec) {
  const trim = steel();
  if (spec.variant === "truck") {
    group.add(piece(new BoxGeometry(0.5, 0.08, 0.7), darkMetal(), 0.55, 0.68, 0));
    group.add(piece(new CylinderGeometry(0.04, 0.04, 0.2, 8), trim, 0.95, 0.32, 0.2));
    return;
  }
  group.add(piece(new BoxGeometry(0.12, 0.1, 0.5), darkMetal(), 0.96, 0.38, 0));
  for (let i = 0; i < 4; i++) group.add(piece(new BoxGeometry(0.02, 0.06, 0.08), trim, 0.97, 0.4, -0.18 + i * 0.12, false));
  group.add(piece(new BoxGeometry(0.01, 0.16, 0.7), paint({}, "#263238", "rubber"), 0.15, 0.55, 0.44, false));
  group.add(piece(new BoxGeometry(0.01, 0.16, 0.7), paint({}, "#263238", "rubber"), -0.35, 0.55, 0.44, false));
  for (const z of [-0.48, 0.48]) group.add(piece(new BoxGeometry(0.1, 0.06, 0.04), trim, 0.35, 0.72, z));
  group.add(piece(new BoxGeometry(0.18, 0.06, 0.01), paint({}, "#f5f5f5"), -0.9, 0.38, 0, false));
  group.add(piece(new CylinderGeometry(0.03, 0.03, 0.12, 8), darkMetal(), -0.92, 0.28, 0.22));
}

function enrichBus(group) {
  group.add(piece(new BoxGeometry(0.28, 0.45, 0.04), paint({}, "#455a64", "metal"), -1.05, 0.55, 0.46));
  group.add(piece(new BoxGeometry(0.5, 0.08, 0.9), paint({}, "#fbc02d"), 0, 1.14, 0));
  for (const x of [-0.8, 0.8]) group.add(piece(new SphereGeometry(0.05, 8, 8), metalMaterial("#fff59d", 0.4, 0.3), x, 0.35, 0.46, false));
}

function enrichBicycle(group) {
  group.add(piece(new TorusGeometry(0.08, 0.012, 6, 12), steel(), 0, 0.32, 0));
  group.add(piece(new BoxGeometry(0.22, 0.03, 0.08), paint({}, "#6d4c41", "wood"), -0.15, 0.78, 0));
  group.add(piece(new CylinderGeometry(0.015, 0.015, 0.22, 6), darkMetal(), 0.55, 0.62, 0));
}

function enrichTree(group, spec) {
  const bark = paint({}, "#5d4037", "wood");
  group.add(piece(new CylinderGeometry(0.22, 0.26, 0.06, 12), paint({}, "#6d4c41", "rubber"), 0, 0.03, 0));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    const root = piece(new CylinderGeometry(0.03, 0.05, 0.22, 6), bark, Math.cos(a) * 0.12, 0.06, Math.sin(a) * 0.12);
    root.rotation.z = Math.cos(a) * 0.7;
    root.rotation.x = Math.sin(a) * 0.5;
    group.add(root);
  }
  if (spec.variant === "pine") {
    group.add(piece(new ConeGeometry(0.26, 0.4, 10), paint(spec, "#1b5e20", "rubber"), 0, 1.65, 0));
    for (const y of [0.4, 0.7, 1.0]) group.add(piece(new TorusGeometry(0.09, 0.012, 5, 10), bark, 0, y, 0));
    return;
  }
  if (spec.variant === "palm") {
    for (let i = 0; i < 4; i++) {
      const nut = piece(new SphereGeometry(0.035, 8, 6), paint({}, "#6d4c41"), Math.cos(i) * 0.08, 1.22, Math.sin(i) * 0.08, false);
      group.add(nut);
    }
    return;
  }
  group.add(piece(new SphereGeometry(0.22, 12, 10), paint(spec, "#2e7d32", "rubber"), -0.22, 1.15, 0.12));
  group.add(piece(new SphereGeometry(0.16, 10, 8), paint({}, "#66bb6a", "rubber"), 0.05, 1.42, 0.16));
  group.add(piece(new TorusGeometry(0.1, 0.015, 5, 10), bark, 0, 0.55, 0));
}

function enrichBuilding(group, spec) {
  const floors = Math.max(1, spec.floors || 8);
  const fh = spec.variant === "skyscraper" ? 0.24 : spec.variant === "school" ? 0.42 : 0.3;
  const h = floors * fh;
  const w = spec.variant === "tower" ? 0.78 : spec.variant === "skyscraper" ? 1.25 : spec.variant === "factory" ? 1.55 : spec.variant === "school" ? 1.35 : 1.12;
  const d = spec.variant === "tower" ? 0.78 : spec.variant === "factory" ? 0.95 : spec.variant === "school" ? 0.95 : 0.9;
  const trim = spec.variant === "factory" ? metalMaterial("#78909c", 0.7, 0.35) : paint({}, "#efebe9", "stone");
  const belts = Math.min(isFast() ? 3 : 6, Math.max(2, Math.floor(floors / 3)));
  for (let i = 1; i <= belts; i++) {
    const y = 0.08 + (h * i) / (belts + 0.2);
    group.add(piece(new BoxGeometry(w + 0.12, 0.035, d + 0.12), trim, 0, y, 0, false));
  }
  group.add(piece(new BoxGeometry(w * 0.55, 0.05, d * 0.28), darkMetal(), 0, 0.16, d / 2 + 0.08));
  group.add(piece(new BoxGeometry(0.22, 0.16, 0.16), metalMaterial("#90a4ae", 0.6, 0.4), w * 0.28, 0.08 + h + 0.12, -d * 0.2));
  if (spec.variant === "factory") {
    group.add(piece(new CylinderGeometry(0.05, 0.06, 0.4, 8), paint({}, "#ff8a65", "metal"), -w * 0.35, 0.08 + h + 0.24, 0));
    group.add(piece(new BoxGeometry(0.7, 0.04, 0.04), darkMetal(), 0, 0.42, d / 2 + 0.1));
  }
  if (spec.variant === "school") {
    group.add(piece(new BoxGeometry(0.28, 0.16, 0.03), paint({}, "#fdd835"), 0, 0.08 + h * 0.72, d / 2 + 0.08, false));
  }
}

function enrichHouse(group) {
  group.add(piece(new BoxGeometry(1.7, 0.04, 0.06), paint({}, "#8d6e63", "wood"), 0, 0.98, 0.62));
  group.add(piece(new BoxGeometry(0.22, 0.08, 0.22), paint({}, "#5d4037", "stone"), 0.48, 1.58, -0.15));
  group.add(piece(new BoxGeometry(0.55, 0.12, 0.16), paint({}, "#2e7d32", "rubber"), -0.55, 0.18, 0.72));
  group.add(piece(new SphereGeometry(0.06, 8, 8), paint({}, "#e53935", "rubber"), -0.62, 0.28, 0.72, false));
  group.add(piece(new SphereGeometry(0.05, 8, 8), paint({}, "#fdd835", "rubber"), -0.48, 0.26, 0.74, false));
  group.add(piece(new SphereGeometry(0.04, 8, 6), metalMaterial("#fff59d", 0.3, 0.3), 0.62, 0.72, 0.66, false));
  group.add(piece(new BoxGeometry(0.7, 0.04, 0.36), paint({}, "#bcaaa4", "stone"), 0, 0.1, 0.78));
}

function enrichTable(group, spec) {
  const wood = paint(spec, "#8d6e63", "wood");
  group.add(piece(new BoxGeometry(1.4, 0.06, 0.06), wood, 0, 0.7, 0.38));
  group.add(piece(new BoxGeometry(1.4, 0.06, 0.06), wood, 0, 0.7, -0.38));
  group.add(piece(new BoxGeometry(0.06, 0.06, 0.78), wood, -0.68, 0.22, 0));
  group.add(piece(new BoxGeometry(0.06, 0.06, 0.78), wood, 0.68, 0.22, 0));
  group.add(piece(new BoxGeometry(0.7, 0.015, 0.4), paint({}, "#efebe9", "wood"), 0, 0.83, 0, false));
}

function enrichChair(group, spec) {
  const fab = paint(spec.color ? spec : {}, spec.color || "#1565c0", "fabric");
  group.add(piece(new RoundedBoxGeometry(0.4, 0.05, 0.4, 2, 0.02), fab, 0, 0.54, 0));
  group.add(piece(new RoundedBoxGeometry(0.36, 0.28, 0.04, 2, 0.015), fab, 0, 0.78, -0.18));
  for (const y of [0.62, 0.78, 0.94]) group.add(piece(new BoxGeometry(0.36, 0.025, 0.02), paint({}, "#5d4037", "wood"), 0, y, -0.2, false));
}

function enrichSofa(group) {
  for (const x of [-0.45, 0.45]) group.add(piece(new RoundedBoxGeometry(0.55, 0.1, 0.5, 2, 0.03), paint({}, "#eceff1", "fabric"), x, 0.52, 0.02));
  group.add(piece(new BoxGeometry(1.55, 0.04, 0.04), darkMetal(), 0, 0.18, 0.36, false));
  group.add(piece(new CylinderGeometry(0.04, 0.04, 0.12, 8), paint({}, "#4e342e", "wood"), -0.75, 0.06, -0.28));
  group.add(piece(new CylinderGeometry(0.04, 0.04, 0.12, 8), paint({}, "#4e342e", "wood"), 0.75, 0.06, -0.28));
}

function enrichBed(group) {
  group.add(piece(new BoxGeometry(1.2, 0.04, 0.7), paint({}, "#90caf9", "fabric"), 0, 0.52, 0.35));
  group.add(piece(new BoxGeometry(0.55, 0.03, 0.4), paint({}, "#e1bee7", "fabric"), 0.2, 0.54, 0.15, false));
  group.add(piece(new BoxGeometry(1.35, 0.08, 0.06), paint({}, "#6d4c41", "wood"), 0, 0.36, 0.98));
}

function enrichCup(group, spec) {
  group.add(piece(new CylinderGeometry(0.2, 0.16, 0.28, 16), paint({}, spec.color || "#e3f2fd", "water"), 0, 0.2, 0));
  group.add(piece(new TorusGeometry(0.2, 0.012, 6, 16), paint(spec, "#b0bec5", "ceramic"), 0, 0.44, 0));
  group.add(piece(new CylinderGeometry(0.1, 0.12, 0.02, 12), paint({}, "#cfd8dc", "ceramic"), 0, 0.03, 0, false));
}

function enrichBottle(group, spec) {
  group.add(piece(new CylinderGeometry(0.075, 0.075, 0.08, 12), darkMetal(), 0, 1.06, 0));
  group.add(piece(new CylinderGeometry(0.09, 0.09, 0.02, 12), metalMaterial("#d4af37", 0.8, 0.3), 0, 1.0, 0, false));
  group.add(piece(new BoxGeometry(0.12, 0.16, 0.01), paint({}, spec.color || "#fff8e1"), 0, 0.4, 0.175, false));
}

function enrichRocket(group) {
  const red = paint({}, "#e53935");
  group.add(piece(new CylinderGeometry(0.225, 0.225, 0.06, 16), red, 0, 0.95, 0));
  group.add(piece(new CylinderGeometry(0.225, 0.225, 0.05, 16), paint({}, "#1565c0"), 0, 0.55, 0));
  group.add(piece(new TorusGeometry(0.12, 0.02, 6, 16), darkMetal(), 0, 0.18, 0));
  group.add(piece(new ConeGeometry(0.12, 0.16, 16, 1, true), darkMetal(), 0, 0.08, 0));
  boltRing(group, 1.22, 0.16, 8, null, 0.7);
  group.add(piece(new TorusGeometry(0.08, 0.012, 6, 12), steel(), 0, 0.95, 0.18));
}

function enrichAirplane(group) {
  group.add(piece(new SphereGeometry(0.07, 10, 8), metalMaterial("#81d4fa", 0.2, 0.1), 0.62, 0.58, 0, false));
  group.add(piece(new BoxGeometry(0.2, 0.015, 0.5), paint({}, "#1565c0"), 0.15, 0.58, 0, false));
  group.add(piece(new CylinderGeometry(0.04, 0.05, 0.08, 8), darkMetal(), 0.28, 0.32, 0.18));
  group.add(piece(new CylinderGeometry(0.04, 0.05, 0.08, 8), darkMetal(), 0.28, 0.32, -0.18));
}

function enrichPlanet(group, spec) {
  const ring = metalMaterial("#eceff1", 0.6, 0.3);
  if (spec.variant !== "saturn") {
    const band = piece(new TorusGeometry(0.56, 0.012, 6, 28), ring, 0, 0.6, 0, false);
    band.rotation.x = Math.PI / 2.4;
    group.add(band);
  } else {
    const inner = piece(new TorusGeometry(0.72, 0.025, 6, 40), paint({}, "#d7ccc8", "stone"), 0, 0.6, 0, false);
    inner.rotation.x = Math.PI / 2.5;
    inner.rotation.y = 0.2;
    group.add(inner);
  }
  group.add(piece(new CylinderGeometry(0.22, 0.28, 0.06, 16), darkMetal(), 0, 0.03, 0));
  group.add(piece(new CylinderGeometry(0.06, 0.08, 0.16, 8), steel(), 0, 0.12, 0));
  if (spec.variant === "earth") {
    group.add(piece(new SphereGeometry(0.08, 8, 8), paint({}, "#b0bec5", "stone"), 0.7, 0.85, 0.1, false));
  }
}

function enrichBoat(group) {
  const wood = paint({}, "#6d4c41", "wood");
  for (const x of [-0.35, 0.05, 0.4]) {
    group.add(piece(new CylinderGeometry(0.045, 0.045, 0.02, 10), metalMaterial("#81d4fa", 0.3, 0.15), x, 0.4, 0.28, false));
  }
  for (const x of [-0.5, 0.15, 0.55]) group.add(piece(new CylinderGeometry(0.015, 0.015, 0.16, 6), wood, x, 0.52, 0.32));
  group.add(piece(new BoxGeometry(0.9, 0.02, 0.02), wood, 0.1, 0.6, 0.32, false));
  group.add(piece(new TorusGeometry(0.08, 0.015, 6, 12), paint({}, "#e53935", "rubber"), 0.45, 0.58, 0.2, false));
  group.add(piece(new BoxGeometry(0.04, 0.2, 0.12), paint({}, "#8d6e63", "wood"), -0.85, 0.3, 0));
}

function enrichBridge(group, spec) {
  const mat = paint(spec, "#b0bec5", "stone");
  for (let i = 0; i < 6; i++) group.add(piece(new BoxGeometry(0.32, 0.02, 0.5), paint({}, "#8d6e63", "wood"), -0.9 + i * 0.36, 0.6, 0, false));
  for (const x of [-1.05, 1.05]) {
    group.add(piece(new SphereGeometry(0.05, 8, 8), metalMaterial("#fff59d", 0.4, 0.3), x, 1.22, 0, false));
  }
  group.add(piece(new BoxGeometry(2.1, 0.03, 0.04), mat, 0, 0.5, 0.26, false));
}

function enrichMountain(group) {
  const rock = paint({}, "#757575", "stone");
  for (let i = 0; i < (isFast() ? 4 : 8); i++) {
    const a = (i / 8) * Math.PI * 2;
    group.add(piece(new IcosahedronGeometry(0.08 + (i % 3) * 0.03, 0), rock, Math.cos(a) * 0.7, 0.1, Math.sin(a) * 0.45, false));
  }
  group.add(piece(new ConeGeometry(0.16, 0.28, 5), paint({}, "#388e3c", "rubber"), 0.85, 0.16, 0.35));
  group.add(piece(new BoxGeometry(0.5, 0.02, 0.08), paint({}, "#a1887f", "stone"), 0.4, 0.08, 0.7, false));
}

function enrichGreenhouse(group) {
  const frame = metalMaterial("#90a4ae", 0.75, 0.3);
  for (const x of [-0.45, 0, 0.45]) group.add(piece(new BoxGeometry(0.03, 0.7, 0.03), frame, x, 0.45, 0.45));
  group.add(piece(new BoxGeometry(0.28, 0.5, 0.04), paint({}, "#6d4c41", "wood"), 0, 0.35, 0.48));
  group.add(piece(new SphereGeometry(0.03, 8, 6), metalMaterial("#d4af37", 0.8, 0.3), 0.08, 0.32, 0.51, false));
  group.add(piece(new BoxGeometry(1.55, 0.03, 0.04), frame, 0, 1.02, 0));
}

function enrichBench(group) {
  for (let i = 0; i < 5; i++) group.add(piece(new BoxGeometry(0.18, 0.035, 0.38), paint({}, "#8d6e63", "wood"), -0.48 + i * 0.24, 0.49, 0, false));
  group.add(piece(new BoxGeometry(1.15, 0.03, 0.04), darkMetal(), 0, 0.28, 0.16, false));
}

function enrichSun(group) {
  const ray = metalMaterial("#ffe082", 0.3, 0.4);
  for (let i = 0; i < (isFast() ? 8 : 12); i++) {
    const a = (i / 12) * Math.PI * 2;
    const spike = piece(new BoxGeometry(0.06, 0.22, 0.03), ray, Math.cos(a) * 0.62, 0.55 + Math.sin(a) * 0.62, 0, false);
    spike.rotation.z = -a;
    group.add(spike);
  }
}

function enrichSnowman(group) {
  const coal = paint({}, "#212121");
  for (const y of [0.45, 0.62, 0.78]) group.add(piece(new SphereGeometry(0.03, 8, 6), coal, 0, y, 0.3, false));
  group.add(piece(new BoxGeometry(0.28, 0.06, 0.06), paint({}, "#e53935", "fabric"), 0, 1.12, 0.12));
  group.add(piece(new CylinderGeometry(0.02, 0.02, 0.28, 6), paint({}, "#6d4c41", "wood"), 0.28, 0.9, 0));
  group.add(piece(new CylinderGeometry(0.02, 0.02, 0.28, 6), paint({}, "#6d4c41", "wood"), -0.28, 0.9, 0));
}

function enrichLamp(group) {
  group.add(piece(new TorusGeometry(0.18, 0.012, 6, 16), steel(), 0, 0.7, 0, false));
  group.add(piece(new CylinderGeometry(0.04, 0.05, 0.04, 10), metalMaterial("#ffb300", 0.7, 0.3), 0, 0.86, 0, false));
  group.add(piece(new BoxGeometry(0.08, 0.02, 0.04), darkMetal(), 0, 0.22, 0.03, false));
}

function enrichArch(group) {
  const stone = paint({}, "#9e9e9e", "stone");
  for (let i = 0; i < 5; i++) {
    const a = Math.PI + (i / 4) * Math.PI;
    group.add(piece(new BoxGeometry(0.1, 0.08, 0.2), stone, Math.cos(a) * 0.55, 0.72 + Math.sin(a) * 0.55, 0, false));
  }
  group.add(piece(new BoxGeometry(0.28, 0.16, 0.04), paint({}, "#5d4037", "wood"), 0, 0.2, 0.1));
}

function enrichCastle(group) {
  const stone = paint({}, "#757575", "stone");
  group.add(piece(new BoxGeometry(0.5, 0.08, 0.5), stone, 0, 0.04, 0.7));
  group.add(piece(new TorusGeometry(0.16, 0.02, 6, 12), darkMetal(), 0, 0.95, -0.2, false));
  group.add(piece(new BoxGeometry(0.18, 0.12, 0.02), paint({}, "#c62828", "fabric"), 0, 0.85, 0.56, false));
  boltRing(group, 0.78, 0.2, 6, null, 0.8);
}

function enrichChess(group) {
  const dark = paint({}, "#3e2723", "wood");
  const light = paint({}, "#f5f0e6", "wood");
  const pieces = [
    [-0.33, -0.33, dark],
    [-0.22, -0.33, dark],
    [0.22, -0.33, light],
    [0.33, -0.33, light],
    [0, 0.33, dark],
    [-0.11, 0.22, light],
  ];
  pieces.forEach(([x, z, mat], i) => {
    group.add(piece(new CylinderGeometry(0.035, 0.045, 0.08, 8), mat, x, 0.13, z));
    group.add(piece(new SphereGeometry(i === 4 ? 0.04 : 0.028, 8, 6), mat, x, 0.2, z, false));
  });
}

function enrichCrown(group) {
  boltRing(group, 0.18, 0.26, 8, metalMaterial("#fff8e1", 0.8, 0.25), 0.6);
  group.add(piece(new TorusGeometry(0.3, 0.015, 6, 16), metalMaterial("#8d6e63", 0.7, 0.3), 0, 0.1, 0, false));
  for (let i = 0; i < 5; i++) {
    const a = (i / 5) * Math.PI * 2;
    group.add(piece(new SphereGeometry(0.025, 6, 6), metalMaterial("#ef5350", 0.4, 0.3), Math.cos(a) * 0.24, 0.42, Math.sin(a) * 0.24, false));
  }
}

function enrichCabinet(group) {
  group.add(piece(new BoxGeometry(0.7, 0.02, 0.02), paint({}, "#4e342e", "wood"), 0, 0.7, 0.26, false));
  group.add(piece(new BoxGeometry(0.8, 0.04, 0.46), paint({}, "#5d4037", "wood"), 0, 1.28, 0));
  group.add(piece(new BoxGeometry(0.22, 0.04, 0.2), paint({}, "#d7ccc8", "stone"), 0, 1.32, 0, false));
}

function enrichShelf(group) {
  const colors = ["#5c6bc0", "#e53935", "#00897b"];
  colors.forEach((color, i) => {
    group.add(piece(new BoxGeometry(0.07, 0.2, 0.16), paint({}, color), -0.2 + i * 0.12, 0.58, 0.02, false));
  });
  group.add(piece(new SphereGeometry(0.05, 8, 8), paint({}, "#66bb6a", "rubber"), 0.22, 0.82, 0.04, false));
}

function enrichMicroscope(group) {
  group.add(piece(new CylinderGeometry(0.05, 0.05, 0.02, 10), paint({}, "#b3e5fc", "glass"), 0.04, 0.12, 0.02, false));
  group.add(piece(new TorusGeometry(0.05, 0.008, 5, 10), steel(), 0.04, 0.4, 0.02, false));
  group.add(piece(new BoxGeometry(0.08, 0.02, 0.04), darkMetal(), -0.08, 0.55, 0.04, false));
  boltRing(group, 0.07, 0.2, 6, null, 0.7);
}

function enrichBeaker(group) {
  for (const y of [0.28, 0.42, 0.56]) group.add(piece(new BoxGeometry(0.02, 0.008, 0.01), paint({}, "#ffffff"), 0.3, y, 0, false));
  group.add(piece(new CylinderGeometry(0.06, 0.08, 0.08, 10), paint({}, "#81d4fa", "water"), 0, 0.18, 0, false));
  group.add(piece(new TorusGeometry(0.3, 0.012, 6, 16), steel(), 0, 0.78, 0, false));
}

function enrichAtom(group) {
  const colors = ["#e53935", "#43a047", "#29b6f6"];
  colors.forEach((color, i) => {
    const e = piece(new SphereGeometry(0.035, 8, 6), metalMaterial(color, 0.3, 0.3), 0, 0.55, 0, false);
    const r = 0.42;
    e.userData.tick = (t) => {
      const a = t * (1.4 + i * 0.4) + i * 2;
      e.position.set(Math.cos(a) * r, 0.55 + Math.sin(a + i) * 0.08, Math.sin(a) * r * (i === 1 ? 0.4 : 1));
    };
    group.add(e);
  });
}

function enrichTurbine(group) {
  group.add(piece(new BoxGeometry(0.35, 0.04, 0.16), darkMetal(), 0, 0.06, 0));
  group.add(piece(new CylinderGeometry(0.08, 0.08, 0.12, 10), steel(), 0, 1.28, 0.16));
  boltRing(group, 0.06, 0.18, 6, null, 0.8);
}

function enrichSolar(group, spec) {
  const n = spec.variant === "farm" ? 3 : 1;
  for (let i = 0; i < n; i++) {
    const x = spec.variant === "farm" ? -0.85 + i * 0.85 : 0;
    group.add(piece(new BoxGeometry(0.5, 0.02, 0.02), steel(), x, spec.variant === "farm" ? 0.62 : 0.86, 0.12, false));
  }
  group.add(piece(new BoxGeometry(0.2, 0.08, 0.12), darkMetal(), 0.4, 0.08, -0.2));
}

function enrichDam(group) {
  for (let i = 0; i < 4; i++) group.add(piece(new BoxGeometry(0.08, 0.7, 0.04), darkMetal(), -0.45 + i * 0.3, 0.5, 0.16, false));
  group.add(piece(new BoxGeometry(1.4, 0.06, 0.08), metalMaterial("#b0bec5", 0.6, 0.35), 0, 0.9, 0.16));
  group.add(piece(new CylinderGeometry(0.04, 0.04, 0.2, 8), steel(), 0.55, 1.05, 0));
}

function enrichRiver(group) {
  for (let i = 0; i < 4; i++) {
    group.add(piece(new IcosahedronGeometry(0.05, 0), paint({}, "#9e9e9e", "stone"), -0.7 + i * 0.45, 0.08, 0.32, false));
  }
  group.add(piece(new ConeGeometry(0.06, 0.16, 6), paint({}, "#43a047", "rubber"), 0.8, 0.14, -0.36));
  group.add(piece(new BoxGeometry(0.35, 0.015, 0.35), paint({}, "#81d4fa", "water"), -0.3, 0.1, 0, false));
}

function enrichLighthouse(group) {
  group.add(piece(new BoxGeometry(0.12, 0.22, 0.04), paint({}, "#5d4037", "wood"), 0, 0.28, 0.3));
  group.add(piece(new CylinderGeometry(0.45, 0.5, 0.08, 16), paint({}, "#8d6e63", "stone"), 0, 0.04, 0));
  group.add(piece(new SphereGeometry(0.04, 8, 6), metalMaterial("#fff59d", 0.4, 0.2), 0.16, 1.4, 0.12, false));
  boltRing(group, 1.28, 0.2, 8, null, 0.7);
  for (let i = 0; i < 3; i++) group.add(piece(new IcosahedronGeometry(0.06, 0), paint({}, "#757575", "stone"), -0.35 + i * 0.1, 0.08, 0.4, false));
}

function enrichSatellite(group) {
  group.add(piece(new CylinderGeometry(0.1, 0.02, 0.08, 10), steel(), 0, 0.55, 0.14));
  group.add(piece(new BoxGeometry(0.08, 0.08, 0.02), metalMaterial("#ffeb3b", 0.4, 0.3), 0, 0.55, 0.12, false));
  group.add(piece(new CylinderGeometry(0.012, 0.012, 0.22, 6), steel(), 0.55, 0.55, 0));
  group.add(piece(new SphereGeometry(0.03, 8, 6), metalMaterial("#ef5350", 0.4, 0.3), 0.68, 0.55, 0, false));
}

function enrichCloud(group) {
  group.add(piece(new SphereGeometry(0.14, 10, 8), paint({}, "#ffffff"), 0.12, 0.62, 0.12, false));
  group.add(piece(new SphereGeometry(0.12, 10, 8), paint({}, "#eceff1"), -0.12, 0.58, -0.1, false));
}

function enrichCactus(group) {
  group.add(piece(new CylinderGeometry(0.16, 0.18, 0.05, 10), paint({}, "#a1887f", "stone"), 0, 0.03, 0));
  group.add(piece(new SphereGeometry(0.03, 6, 6), paint({}, "#fdd835"), 0.05, 0.85, 0.1, false));
  group.add(piece(new SphereGeometry(0.025, 6, 6), paint({}, "#f48fb1"), -0.04, 0.7, 0.1, false));
}

function enrichLake(group) {
  group.add(piece(new ConeGeometry(0.05, 0.16, 6), paint({}, "#2e7d32", "rubber"), 0.55, 0.12, 0.2));
  group.add(piece(new IcosahedronGeometry(0.06, 0), paint({}, "#90a4ae", "stone"), -0.5, 0.08, 0.35, false));
  group.add(piece(new BoxGeometry(0.18, 0.02, 0.06), paint({}, "#8d6e63", "wood"), 0.2, 0.08, -0.55, false));
}

function enrichFish(group, color) {
  const fin = paint({}, color || "#ff8a65");
  const top = piece(new ConeGeometry(0.04, 0.1, 4), fin, 0.02, 0.08, 0, false);
  top.rotation.z = Math.PI;
  group.add(top);
  const side = piece(new ConeGeometry(0.035, 0.08, 4), fin, 0.02, -0.02, 0.06, false);
  side.rotation.x = Math.PI / 2;
  group.add(side);
}

function enrichPlant(group, type) {
  group.add(piece(new CylinderGeometry(0.08, 0.1, 0.04, 8), paint({}, "#6d4c41"), 0, 0.02, 0));
  if (type === "flower") {
    group.add(piece(new BoxGeometry(0.04, 0.08, 0.12), paint({}, "#66bb6a", "rubber"), 0.04, 0.22, 0, false));
    group.add(piece(new BoxGeometry(0.04, 0.08, 0.12), paint({}, "#43a047", "rubber"), -0.04, 0.18, 0, false));
  } else {
    group.add(piece(new SphereGeometry(0.05, 8, 6), paint({}, "#a5d6a7", "rubber"), 0.06, 0.32, 0.04, false));
  }
}

function enrichOpening(group, type) {
  if (type === "door") {
    group.add(piece(new BoxGeometry(0.5, 0.02, 0.02), paint({}, "#3e2723", "wood"), 0, 0.3, 0.05, false));
    group.add(piece(new BoxGeometry(0.5, 0.02, 0.02), paint({}, "#3e2723", "wood"), 0, 0.7, 0.05, false));
    group.add(piece(new CylinderGeometry(0.02, 0.02, 0.04, 8), metalMaterial("#d4af37", 0.9, 0.25), 0.2, 0.58, 0.07));
    return;
  }
  group.add(piece(new BoxGeometry(0.7, 0.03, 0.1), paint({}, "#90a4ae", "stone"), 0, 0.05, 0));
  group.add(piece(new SphereGeometry(0.02, 6, 6), metalMaterial("#d4af37", 0.8, 0.3), 0.3, 0.55, 0.05, false));
}

function enrichBook(group) {
  group.add(piece(new BoxGeometry(0.04, 0.09, 0.38), paint({}, "#b71c1c"), -0.26, 0.08, 0, false));
  group.add(piece(new BoxGeometry(0.35, 0.01, 0.02), paint({}, "#3e2723"), 0, 0.12, 0.16, false));
}

function enrichPerson(group) {
  group.add(piece(new BoxGeometry(0.18, 0.04, 0.12), paint({}, "#f5f5f5", "fabric"), 0, 0.78, 0.1, false));
  group.add(piece(new SphereGeometry(0.035, 8, 6), paint({}, "#212121"), 0, 1.2, 0, false));
  group.add(piece(new BoxGeometry(0.08, 0.03, 0.12), paint({}, "#263238"), -0.08, 0.04, 0.04, false));
  group.add(piece(new BoxGeometry(0.08, 0.03, 0.12), paint({}, "#263238"), 0.08, 0.04, 0.04, false));
}

function enrichFountain(group) {
  group.add(piece(new TorusGeometry(0.62, 0.03, 6, 20), paint({}, "#90a4ae", "stone"), 0, 0.2, 0));
  group.add(piece(new SphereGeometry(0.06, 8, 8), paint({}, "#b3e5fc", "water"), 0, 0.95, 0, false));
  boltRing(group, 0.22, 0.5, 8, null, 0.8);
}

function enrichWindmill(group) {
  group.add(piece(new BoxGeometry(0.16, 0.28, 0.04), paint({}, "#5d4037", "wood"), 0, 0.32, 0.36));
  group.add(piece(new CylinderGeometry(0.08, 0.08, 0.06, 8), darkMetal(), 0, 1.15, 0.32));
  group.add(piece(new BoxGeometry(0.4, 0.04, 0.28), paint({}, "#8d6e63", "stone"), 0, 0.04, 0));
}

function enrichWall(group) {
  for (let i = 0; i < 4; i++) group.add(piece(new BoxGeometry(0.28, 0.12, 0.04), paint({}, "#bcaaa4", "stone"), -0.55 + i * 0.36, 1.05, 0.1, false));
  group.add(piece(new BoxGeometry(0.2, 0.04, 0.18), paint({}, "#90a4ae", "stone"), 0.28, 0.48, 0.12));
}

function enrichDome(group) {
  group.add(piece(new CylinderGeometry(0.7, 0.74, 0.06, 20), paint({}, "#cfd8dc", "stone"), 0, 0.02, 0));
  boltRing(group, 0.36, 0.6, 10, null, 0.8);
  group.add(piece(new CylinderGeometry(0.04, 0.04, 0.16, 8), metalMaterial("#d4af37", 0.9, 0.25), 0, 1.02, 0));
}

function enrichBadge(group, type) {
  group.add(piece(new CylinderGeometry(0.18, 0.22, 0.05, 12), darkMetal(), 0, 0.04, 0));
  if (type === "star") group.add(piece(new SphereGeometry(0.06, 8, 8), metalMaterial("#fff59d", 0.5, 0.3), 0, 0.62, 0.1, false));
}

function enrichProp(group, type) {
  if (type === "mushroom") {
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * Math.PI * 2;
      group.add(piece(new SphereGeometry(0.025, 6, 6), paint({}, "#f5f5f5"), Math.cos(a) * 0.1, 0.4, Math.sin(a) * 0.1, false));
    }
    group.add(piece(new CylinderGeometry(0.1, 0.12, 0.03, 8), paint({}, "#6d4c41"), 0, 0.02, 0));
    return;
  }
  if (type === "well") {
    group.add(piece(new CylinderGeometry(0.04, 0.04, 0.35, 8), paint({}, "#6d4c41", "wood"), 0, 0.85, 0.08));
    group.add(piece(new TorusGeometry(0.08, 0.015, 6, 10), darkMetal(), 0, 0.7, 0.08, false));
    group.add(piece(new CylinderGeometry(0.46, 0.5, 0.06, 16), paint({}, "#8d6e63", "stone"), 0, 0.03, 0));
    return;
  }
  if (type === "fence") {
    group.add(piece(new BoxGeometry(0.16, 0.1, 0.04), paint({}, "#e53935"), -0.4, 0.4, 0.04, false));
    group.add(piece(new BoxGeometry(1.8, 0.04, 0.16), paint({}, "#8d6e63", "wood"), 0, 0.02, 0));
    return;
  }
  if (type === "stairs") {
    group.add(piece(new BoxGeometry(0.06, 0.7, 0.04), darkMetal(), -0.38, 0.4, 0.1));
    group.add(piece(new BoxGeometry(0.06, 0.7, 0.04), darkMetal(), 0.38, 0.4, 0.1));
    return;
  }
  if (type === "umbrella") {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * Math.PI * 2;
      group.add(piece(new BoxGeometry(0.015, 0.2, 0.015), darkMetal(), Math.cos(a) * 0.2, 0.84, Math.sin(a) * 0.2, false));
    }
    return;
  }
  if (type === "board") {
    group.add(piece(new BoxGeometry(1.15, 0.04, 0.08), paint({}, "#6d4c41", "wood"), 0, 0.16, 0.04));
    group.add(piece(new SphereGeometry(0.03, 6, 6), paint({}, "#f5f5f5"), 0.4, 0.2, 0.06, false));
    group.add(piece(new CylinderGeometry(0.015, 0.015, 0.12, 6), paint({}, "#fdd835"), 0.48, 0.22, 0.05, false));
    return;
  }
  if (type === "screen") {
    group.add(piece(new BoxGeometry(0.7, 0.012, 0.01), paint({}, "#ffffff"), -0.05, 0.7, 0.05, false));
    group.add(piece(new SphereGeometry(0.025, 8, 6), metalMaterial("#66bb6a", 0.4, 0.3), 0.42, 0.52, 0.04, false));
    group.add(piece(new BoxGeometry(0.35, 0.02, 0.2), darkMetal(), 0, 0.02, 0.15));
  }
}

export function measure(group) {
  group.updateMatrixWorld(true);
  const box = new Box3().setFromObject(group);
  return box;
}
