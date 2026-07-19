# Latifolia Solutions Website (Static Next.js)

[![Build and Deploy](https://github.com/latifolia-solutions/website/actions/workflows/deploy.yml/badge.svg)](https://github.com/latifolia-solutions/website/actions/workflows/deploy.yml)
[![Workflow Security](https://github.com/latifolia-solutions/website/actions/workflows/zizmor.yml/badge.svg)](https://github.com/latifolia-solutions/website/actions/workflows/zizmor.yml)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

Static Next.js + TypeScript + Tailwind site exported to `docs/` for GitHub Pages. No server-side code.

## Develop

```bash
npm install
npm run dev
```

## Build and Export

```bash
npm run build
npm run export
```

Outputs static site to `docs/` and copies `CNAME` and `assets/`. Includes `.nojekyll`.

## GitHub Pages

- Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / folder: `/docs`.

## SEO

- Metadata in `app/layout.tsx`
- Robots: `app/robots.ts`
- Sitemap: `app/sitemap.ts`

Existing content adapted from [`https://latifolia.solutions/`](https://latifolia.solutions/).

