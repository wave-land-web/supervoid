# supervoid.tv

Marketing site for SUPERVOID, built with [Astro](https://astro.build) and [Tailwind](https://tailwindcss.com).

## Getting started

Requires Node 22+ (see `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
```

Astro 7 runs the dev server in the background — use `npx astro dev stop`, `status`, or `logs` to manage it.

## Commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server |
| `npm run build` | Type check (`astro check`) and build to `dist/` |
| `npm run preview` | Preview the production build locally |

## Content

Case studies and press posts are Markdown files in `src/content`, validated by the schemas in `src/content.config.ts`. Images live in each collection's `images/` folder and are referenced with relative paths.

| Collection | Location | Renders as |
| --- | --- | --- |
| `work` | `src/content/work` | Case study page at `/work/<filename>` plus a homepage card |
| `lighting` | `src/content/lighting` | Homepage card with an inline YouTube player (no detail page) |
| `press` | `src/content/press` | Press post at `/press/<filename>` |

Work and lighting entries are grouped on the homepage by their `year` field, newest first. Years come from the content itself, so adding a new one needs no code change.

Files in `public/` are served as-is at the site root — for example, newsletter images in `public/images/newsletter/`.
