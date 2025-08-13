# Latifolia Solutions Website (Static Next.js)

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

