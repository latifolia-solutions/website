# Latifolia Solutions Website

[![Workflow Security](https://github.com/latifolia-solutions/website/actions/workflows/zizmor.yml/badge.svg)](https://github.com/latifolia-solutions/website/actions/workflows/zizmor.yml)

Single-page static site served by GitHub Pages. No framework, no dependencies.

## Layout

- `src/` – editable sources: `index.html`, `404.html`, `style.css`
- `docs/` – what GitHub Pages serves: built pages plus static assets, `robots.txt`, `sitemap.xml`, `manifest.webmanifest`, `CNAME`
- `build.sh` – inlines `src/style.css` into each page and minifies it into `docs/`

## Edit

1. Change files in `src/`. Styles are plain CSS; the utility class names already used are defined in `style.css`, new ones must be added there.
2. Run `./build.sh` (needs `python3` and `npx`).
3. Commit `src/` and `docs/` together.

Preview locally with `python3 -m http.server -d docs`.

## Images

Photos are WebP at display sizes (`*-640/1024.webp`, `mtn-laurel-500/1000.webp`, `mtn-laurel-64.webp`). `digital-mtn-laurel.jpg` is kept only as the social preview image.

## GitHub Pages

Settings → Pages → Deploy from a branch → `main` / `/docs`.
