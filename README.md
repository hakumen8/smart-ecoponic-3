# Mujassam 3D Studio · استوديو مجسّم

Bilingual text-to-3D studio for GitHub Pages: [https://hakumen8.github.io/smart-ecoponic-3/](https://hakumen8.github.io/smart-ecoponic-3/)

Describe a model in Arabic or English. The page builds it in the browser with Three.js, then you can orbit it and download **GLB**, **OBJ**, or **PNG**.

## How generation works

There is no cloud text-to-3D call. A procedural parser reads the sentence (Arabic and English shapes, counts, colors, materials, floors, and relations such as “on”) and assembles meshes: primitives, vehicles, buildings, and multi-part systems.

The filtration preset is a cutaway water filter: glass tanks, a four-layer column (dry sand, a fine filter, a larger filter, then a sponge), pipes, a pump, and a side waste bin. Static / Live switches a light in-browser loop: dirty water falls through the layers, reject water collects in the waste bin, and clean water flows to the right-hand tank. Aquaponics builds a fish tank, grow bed, biofilter, and pump.

Hunyuan3D, Tripo, Meshy, and similar mesh APIs are **not** wired in. They need an account API key and a backend (browsers cannot call them directly because of CORS, and this repo does not store secrets). No API key is included. To add one later, proxy the vendor from your own server and load the returned GLB with the existing file button.

## Pages

The live site is the repository root (`index.html`, `assets/`, `.nojekyll`). Paths are relative. Source for the studio lives in `studio/`.

```bash
cd studio
npm install
npm test
npm run dev
npm run build
```

Copy `studio/dist/index.html` and `studio/dist/assets/` to the repository root before pushing `main` so GitHub Pages updates.

## Controls

- Language toggle switches every interface string, the examples, and the gallery. The layout is RTL in Arabic and LTR in English.
- A dock on the view resets the camera, exports, and toggles fullscreen. The toolbar still has orbit options, Static/Live flow, and GLB, PNG, and OBJ.
- Drag the panel edge on a wide screen to resize it. On desktop, `R` resets the camera, `F` is fullscreen, `W` `L` `G` `A` toggle wire, labels, grid, and rotate, `1`/`2` switch flow, `Q` switches High/Fast quality, `S` copies a share link, and `?` lists shortcuts.
- Suggestions appear while typing. Improve description rewrites the text for the generator. The last three prompts and favorite models stay in `localStorage`.
- Click a part to change its size and color. High quality uses fuller meshes and shadows; Fast quality simplifies glass and heavy geometry for iPad.
- Share copies a URL with the description in `?q=`. PNG export can be standard, high-resolution, or transparent.
- Background color, lighting preset, intensity, shadows, and a sky-and-ground stage.
- The last description and these view settings are stored in `localStorage` (`mujassam.studio.v1`).
