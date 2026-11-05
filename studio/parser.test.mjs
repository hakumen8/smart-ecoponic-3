import assert from "node:assert/strict";
import test from "node:test";
import { improvePrompt } from "./src/improve.js";
import { parsePrompt, suggestPrompt } from "./src/parser.js";

test("red cube", () => {
  const s = parsePrompt("red cube");
  assert.equal(s.mode, "scene");
  assert.equal(s.objects.length, 1);
  assert.equal(s.objects[0].type, "cube");
  assert.equal(s.objects[0].color, "#e53935");
  assert.equal(s.objects[0].count, 1);
});

test("glass sphere on a wooden table", () => {
  const s = parsePrompt("a big blue glass sphere on a wooden table");
  assert.equal(s.mode, "scene");
  const sphere = s.objects.find((o) => o.type === "sphere");
  const table = s.objects.find((o) => o.type === "table");
  assert.ok(sphere && table);
  assert.equal(sphere.material, "glass");
  assert.equal(sphere.color, "#1e88e5");
  assert.ok(sphere.scale > 1.2);
  assert.equal(table.material, "wood");
  assert.equal(sphere.on, s.objects.indexOf(table));
  assert.equal(sphere.slot, "on");
});

test("counts and colors across clauses", () => {
  const s = parsePrompt("three green trees and a red car");
  const tree = s.objects.find((o) => o.type === "tree");
  const car = s.objects.find((o) => o.type === "car");
  assert.equal(tree.count, 3);
  assert.equal(tree.color, "#43a047");
  assert.equal(car.count, 1);
  assert.equal(car.color, "#e53935");
});

test("arabic dual cars and a tree", () => {
  const s = parsePrompt("سيارتين صفراء وشجره");
  assert.equal(s.lang, "ar");
  const car = s.objects.find((o) => o.type === "car");
  const tree = s.objects.find((o) => o.type === "tree");
  assert.equal(car.count, 2);
  assert.equal(car.color, "#fdd835");
  assert.equal(tree.count, 1);
});

test("arabic glass sphere on a wooden table", () => {
  const s = parsePrompt("كرة زجاجية زرقاء كبيرة فوق طاولة خشبية");
  const sphere = s.objects.find((o) => o.type === "sphere");
  const table = s.objects.find((o) => o.type === "table");
  assert.equal(sphere.material, "glass");
  assert.equal(sphere.color, "#1e88e5");
  assert.ok(sphere.scale > 1.2);
  assert.equal(table.material, "wood");
  assert.equal(sphere.on, s.objects.indexOf(table));
});

test("building floors in both languages", () => {
  const en = parsePrompt("a 14 floors building, a blue building with 9 floors and a tree");
  const buildings = en.objects.filter((o) => o.type === "building");
  assert.equal(buildings.length, 2);
  assert.equal(buildings[0].floors, 14);
  assert.equal(buildings[1].floors, 9);
  assert.equal(buildings[1].color, "#1e88e5");
  assert.equal(en.objects.some((o) => o.type === "tree"), true);

  const ar = parsePrompt("مبنى من 20 طابق");
  assert.equal(ar.objects[0].type, "building");
  assert.equal(ar.objects[0].floors, 20);
});

test("english filtration stack", () => {
  const s = parsePrompt(
    "Water filtration system with two transparent tanks and a cutaway filter cylinder showing sponge, fine sand, activated charcoal, coarse sand, fine gravel and coarse gravel layers",
  );
  assert.equal(s.mode, "filtration");
  assert.equal(s.filtration.tanks, 2);
  assert.equal(s.filtration.cutaway, true);
  assert.deepEqual(s.filtration.layers, ["sponge", "sand", "charcoal", "coarseSand", "gravel", "coarseGravel"]);
});

test("arabic filtration with dual tanks", () => {
  const s = parsePrompt("نظام ترشيح مياه بخزانين شفافين وأسطوانة فلتر فيها رمل وفحم وحصى");
  assert.equal(s.mode, "filtration");
  assert.equal(s.filtration.tanks, 2);
  assert.ok(s.filtration.layers.includes("sand"));
  assert.ok(s.filtration.layers.includes("charcoal"));
  assert.ok(s.filtration.layers.includes("gravel"));
});

test("aquaponics in both languages", () => {
  const en = parsePrompt("aquaponics system with fish and plants");
  assert.equal(en.mode, "aquaponics");
  assert.ok(en.aquaponics.fish >= 1);
  assert.ok(en.aquaponics.plants >= 3);
  const ar = parsePrompt("نظام زراعة مائية مع أسماك ونباتات");
  assert.equal(ar.mode, "aquaponics");
});

test("saturn variant and robot material", () => {
  const s = parsePrompt("a rocket and saturn");
  assert.equal(s.objects.find((o) => o.type === "planet").variant, "saturn");
  assert.equal(s.objects.some((o) => o.type === "rocket"), true);
  const robot = parsePrompt("a big silver robot with glowing eyes");
  const r = robot.objects.find((o) => o.type === "robot");
  assert.equal(r.color, "#c0c0c0");
  assert.equal(r.material, "metal");
  assert.equal(r.glow, true);
  assert.ok(r.scale > 1.2);
});

test("unknown prompt becomes an abstract sculpture", () => {
  const s = parsePrompt("make something nice");
  assert.equal(s.unknown, true);
  assert.equal(s.objects[0].type, "abstract");
});

test("coarse modifier retargets a bare layer word", () => {
  const s = parsePrompt("a filter with two tanks, coarse sand and fine gravel");
  assert.equal(s.mode, "filtration");
  assert.ok(s.filtration.layers.includes("coarseSand"));
  assert.ok(s.filtration.layers.includes("gravel"));
});

test("meter dimensions set scale without becoming a count", () => {
  const s = parsePrompt("a 2 meter cylinder");
  assert.equal(s.objects.length, 1);
  assert.equal(s.objects[0].type, "cylinder");
  assert.equal(s.objects[0].count, 1);
  assert.ok(s.objects[0].scale >= 1.9 && s.objects[0].scale <= 2.1);
});

test("arches, doors, windows and a grid of cubes", () => {
  const s = parsePrompt("a stone arch, a wooden door and two glass windows");
  const arch = s.objects.find((o) => o.type === "arch");
  const door = s.objects.find((o) => o.type === "door");
  const window = s.objects.find((o) => o.type === "window");
  assert.equal(arch.material, "stone");
  assert.equal(door.material, "wood");
  assert.equal(window.material, "glass");
  assert.equal(window.count, 2);
  const grid = parsePrompt("3x3 blue cubes");
  const cubes = grid.objects.find((o) => o.type === "cube");
  assert.equal(cubes.count, 9);
  assert.equal(cubes.color, "#1e88e5");
});

test("arched door keeps the variant", () => {
  const s = parsePrompt("an arched wooden door");
  assert.equal(s.objects[0].type, "door");
  assert.equal(s.objects[0].variant, "arched");
  assert.equal(s.objects[0].material, "wood");
});

test("educational and environmental nouns", () => {
  const lab = parsePrompt("a microscope, a glass beaker and an atom");
  assert.equal(lab.objects.find((o) => o.type === "microscope") != null, true);
  assert.equal(lab.objects.find((o) => o.type === "beaker").material, "glass");
  assert.equal(lab.objects.some((o) => o.type === "atom"), true);
  const energy = parsePrompt("a wind turbine, a solar farm and a pine tree");
  assert.equal(energy.objects.find((o) => o.type === "turbine") != null, true);
  assert.equal(energy.objects.find((o) => o.type === "solar").variant, "farm");
  assert.equal(energy.objects.find((o) => o.type === "tree").variant, "pine");
  const water = parsePrompt("سد ونهر أزرق وجبل");
  assert.equal(water.objects.some((o) => o.type === "dam"), true);
  assert.equal(water.objects.find((o) => o.type === "river").color, "#1e88e5");
  const school = parsePrompt("مدرسة من 3 طوابق");
  assert.equal(school.objects[0].type, "building");
  assert.equal(school.objects[0].variant, "school");
  assert.equal(school.objects[0].floors, 3);
});

test("improve description and suggestions", () => {
  assert.match(improvePrompt("classroom"), /window/i);
  assert.match(improvePrompt("school"), /school/i);
  assert.match(improvePrompt("لعبة"), /شطرنج|نرد/);
  assert.match(improvePrompt("red cube"), /cube/i);
  const hits = suggestPrompt("cyl", "en");
  assert.ok(hits.some((hit) => /cylinder/i.test(hit)));
});
