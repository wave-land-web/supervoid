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
| `npm run lint` | Lint with Biome (`lint:fix` applies the safe fixes) |
| `npm run format` | Format: Biome for TS, JS, CSS and JSON; Prettier for `.astro` |
| `npm run format:check` | Check formatting without writing |

## Code style

Biome formats and lints everything except `.astro` markup, which Prettier formats through `prettier-plugin-astro`. Both are set to single quotes, no semicolons, 100 columns, so the VS Code setup in `.vscode/` (Biome by default, the Astro extension for `.astro`) and the CLI agree. In `.astro` markup, write comments as `<!-- -->`; `{/* */}` only works inside an expression.

Formatting-only commits are listed in `.git-blame-ignore-revs`. GitHub skips them in blame; locally, run `git config blame.ignoreRevsFile .git-blame-ignore-revs` once.

## Where things live

- `src/pages/`: routes. Case studies (`work/[slug].astro`), press posts (`press/[slug].astro`) and `/llms.txt` are built from the content collections.
- `src/layouts/`: `Layout.astro` is every page's shell (head tags and structured data, skip link, nav, `<main>`, marquee, footer). `PressLayout.astro` wraps press posts.
- `src/components/`:
  - `layout/`: navigation, footer, marquee and the page header.
  - `ui/`: small shared pieces (button, pill, check list, split row, pagination, social links).
  - `cards/`: the homepage work and lighting cards, and the press cards.
  - `media/`: `CoverVideo` (a muted Mux clip over a still of its first frame) and the carousels.
  - `work/`: the homepage year headings.
- `src/lib/site.ts`: shared values (email, Instagram) and the `mailto()` helper. Change them here, not in components.
- `src/lib/`: sorting, text, image `sizes` and share-image helpers shared by pages.
- `src/content.config.ts`: content schemas.
- `public/_redirects`: Netlify redirects for old URLs.

## Design system

Tokens and utilities live in `src/styles/global.css`. Use them rather than raw values.

- **Colors:** `white`, `black`, `grey` for secondary text, and `magenta`, the accent (`magenta-light` is the hover on magenta links). Text on magenta is black.
- **Type:** `font-header` (Rotonto) for headings and `font-body` (SF Mono) for everything else. Sizes run from `text-2xs` to `text-4xl`, fluid, and each sets its own line height. Tailwind's default sizes are switched off.
- **Page structure:** `Layout` renders the `<main>`. A page puts its `PageHeader` (the h1, clear of the fixed nav) first, then its content in a `.page-body` div. Markdown copy goes in `.prose`.
- **Components:** `Button`, `Pill` (`as="h2"` or `as="h3"` when it titles something), `CheckList` and `SplitRow`.
- **Hover and focus:** use `hocus:` and `group-hocus:` (hover or keyboard focus) instead of pairing `hover:` with `focus-visible:`. Every focusable element gets the magenta focus ring.
- **Motion:** `lsa-load` (or `hero-in` on a wrapper) for content above the fold, `lsa` for content that reveals on scroll. Reduced motion turns them off, and clips don't autoplay.
- **Images:** `alt=""` when an image is decorative, and `sizes` from `src/lib/images.ts`.

## Content

Case studies and press posts are Markdown files in `src/content`, validated by the schemas in `src/content.config.ts`. Images live in each collection's `images/` folder and are referenced with relative paths.

| Collection | Location | Renders as |
| --- | --- | --- |
| `work` | `src/content/work` | Case study page at `/work/<filename>` plus a homepage card |
| `lighting` | `src/content/lighting` | Homepage card with an inline YouTube player (no detail page) |
| `press` | `src/content/press` | Press post at `/press/<filename>` |

A case study's credits are a list of `role` and `names` pairs, shown in the order they're written.

Work and lighting entries are grouped on the homepage by their `year` field, newest first. Years come from the content itself, so adding a new one needs no code change.

Files in `public/` are served as-is at the site root — for example, newsletter images in `public/images/newsletter/`. Those URLs may be linked from sent emails, so don't rename or delete them.

## Workflow

Work on a `type/short-name` branch (`fix/…`, `feat/…`, `chore/…`) and merge it into `main` through a pull request. Pushes to `main` deploy to production on Netlify.
