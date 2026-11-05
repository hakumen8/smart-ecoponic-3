# Mujassam 3D Studio · استوديو مجسّم

Bilingual text-to-3D studio for GitHub Pages: [https://hakumen8.github.io/smart-ecoponic-3/](https://hakumen8.github.io/smart-ecoponic-3/)

Describe a model in Arabic or English. The page builds it in the browser with Three.js, then you can orbit it and download **GLB**, **OBJ**, or **PNG**.

## How generation works

The default **Generate** button stays in the browser. A procedural parser reads the sentence (Arabic and English shapes, counts, colors, materials, floors, and relations such as “on”) and assembles meshes: primitives, vehicles, buildings, labs, energy gear, landscapes, and multi-part systems.

The filtration preset is a cutaway water filter: glass tanks, a four-layer column (dry sand, a fine filter, a larger filter, then a sponge), pipes, a pump, and a side waste bin. Static / Live switches an in-browser loop: dirty water falls through the layers and turns clear, reject water collects in the waste bin, and clean water flows to the right-hand tank. Aquaponics builds a fish tank, grow bed, biofilter, and pump.

After a model appears you can recolor and resize parts, and add a cube, sphere, cylinder, or cone beside it. Saved models keep a small preview on this device. Share copies a link with the description in `?q=` and shows that link so it can be copied again. The link never includes an API key.

Phones and iPads start in Fast quality (lower pixel ratio, simpler shadows, fewer water beads). The view pauses while the tab is hidden.

## Optional Meshy text-to-3D

**توليد بذكاء اصطناعي / High quality (API)** is a separate button. It does not replace procedural generate.

The button calls [Meshy](https://www.meshy.ai/) Text to 3D (`https://api.meshy.ai/openapi/v2/text-to-3d`): a preview mesh, then a textured refine, then the GLB is loaded in the same viewer. Jobs are polled until they succeed, fail, or time out (about 8 minutes per stage). Cancel stops the wait in the page.

Meshy limits free and daily credits. Creating an API key needs their paid plan. This site does not add its own quota and does not store a key in the repository.

### API key

1. Create a Meshy account.
2. Open [API keys](https://www.meshy.ai/developers/keys) and create a key. It starts with `msy_`.
3. Paste it into the field under the API button and save.

The key is written only to `localStorage` (`mujassam.meshy.key`) on that browser. It is sent as `Authorization: Bearer` to `api.meshy.ai` and is not put in the share URL, favorites, or git.

As of November 2026, `api.meshy.ai` answers browser calls with `Access-Control-Allow-Origin` set to the page origin, including `https://hakumen8.github.io`. Their older help page still says CORS is blocked; the live API is what this page uses. No key is bundled here.

### If the GLB will not load

Task create and status work from the browser. The finished file is a signed URL on `assets.meshy.ai`, and that host does not send CORS headers, so `fetch` cannot read the bytes on GitHub Pages. When that happens the page says so, offers the file link (open it, then use **Open GLB/GLTF**), and accepts an optional download proxy.

`studio/proxy/meshy-asset-worker.js` is a small Cloudflare Worker. It fetches only `https://assets.meshy.ai/...` and adds `Access-Control-Allow-Origin: *`. Deploy it, then paste the worker URL into **Optional download proxy URL**. That value stays in `localStorage` (`mujassam.meshy.assetProxy`). Do not send the API key to the proxy. A proxy template may also use `{url}`.

Tripo’s API did not return CORS headers for this origin, so it is not the wired provider.

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
- Share copies a URL with the description in `?q=` and shows the link. PNG export can be standard, high-resolution, or transparent. Saved models can keep a small preview.
- **توليد بذكاء اصطناعي / High quality (API)** sends the same description to Meshy when you have saved your own key. Procedural generate stays the default.
- Background color, lighting preset, intensity, shadows, and a sky-and-ground stage.
- The last description and these view settings are stored in `localStorage` (`mujassam.studio.v1`).
