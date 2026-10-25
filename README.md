# supervoid.tv

Marketing site for SUPERVOID, built with [Astro](https://astro.build) and [Tailwind](https://tailwindcss.com).

## Getting started

Requires Node 24 (`.nvmrc`, the version Netlify builds with).

```bash
npm install
npm run dev      # http://localhost:4321, runs in the background
```

Manage the dev server with `npx astro dev stop`, `status` or `logs`.

| Command                | Description                                                |
| ---------------------- | ---------------------------------------------------------- |
| `npm run dev`          | Start the dev server                                       |
| `npm run build`        | Type check and build to `dist/`                            |
| `npm run preview`      | Preview the production build                               |
| `npm run lint`         | Lint with Biome (`lint:fix` applies safe fixes)            |
| `npm run format`       | Format: Biome for TS, JS, CSS and JSON; Prettier for Astro |
| `npm run format:check` | Check formatting without writing                           |

## Code style

Biome handles everything except `.astro` markup, which Prettier formats. Both use single quotes, no semicolons and 100 columns, matching the VS Code setup in `.vscode/`. In `.astro` markup, write comments as `<!-- -->`.

Formatting-only commits are listed in `.git-blame-ignore-revs`. To skip them in local blame, run `git config blame.ignoreRevsFile .git-blame-ignore-revs` once.

## Where things live

- `src/pages/`: routes. Case studies, press posts and `/llms.txt` are built from the content collections.
- `src/layouts/`: `Layout.astro` is every page's shell. `PressLayout.astro` wraps press posts.
- `src/components/`: `layout/` (nav, footer, marquee, page header), `ui/` (small shared pieces), `cards/`, `media/` (`CoverVideo` and the carousels) and `work/` (year headings).
- `src/lib/`: shared helpers. Contact details live in `site.ts`; change them there, not in components.
- `src/content.config.ts`: content schemas.
- `public/_redirects`: redirects for old URLs.

## Design system

Tokens and utilities live in `src/styles/global.css`. Use them rather than raw values.

- **Colors:** `black`, and `magenta` as the accent (`magenta-light` on hover). Text comes in three steps: `white` for what people came to read, `grey-light` for supporting copy, `grey` for captions and fine print. Text and icons on magenta are black.
- **Type:** `font-header` (Rotonto) for headings, `font-body` (SF Mono) for the rest. Sizes run `text-2xs` to `text-4xl`, are fluid and set their own line height. Tailwind's default sizes are off.
- **Page structure:** `Layout` renders `<main>`. Each page starts with `PageHeader`, then its content in `.page-body`. Markdown copy goes in `.prose`.
- **Components:** `Button`, `Pill` (`as="h2"` when it titles something), `CardTitle`, `CheckList` and `SplitRow`.
- **Hover and focus:** use `hocus:` and `group-hocus:` rather than pairing `hover:` with `focus-visible:`. Everything focusable gets the magenta focus ring.
- **Motion:** `lsa-load` (or `hero-in` on a wrapper) above the fold, `lsa` for scroll reveals. Use `--transition` for hovers and `--duration-move` for size changes. Reduced motion turns it all off.
- **Images:** `alt=""` when decorative, and `sizes` from `src/lib/images.ts`.

## Content

Case studies and press posts are Markdown files in `src/content`, checked against `src/content.config.ts`. Images go in each collection's `images/` folder, referenced by relative path.

| Collection | Location               | Renders as                                     |
| ---------- | ---------------------- | ---------------------------------------------- |
| `work`     | `src/content/work`     | Page at `/work/<filename>` and a homepage card |
| `lighting` | `src/content/lighting` | Homepage card with an inline YouTube player    |
| `press`    | `src/content/press`    | Page at `/press/<filename>`                    |

- Credits are `role` and `names` pairs, shown in the order written.
- The homepage groups work and lighting by `year`, newest first. A new year needs no code change.
- Files in `public/` are served at the site root. Newsletter images in `public/images/newsletter/` are linked from sent emails, so don't rename or delete them.

## Workflow

Work on a `type/short-name` branch (`fix/…`, `feat/…`, `chore/…`) and merge into `main` through a pull request. Check changes on a production build (`npm run build`, then `npx serve dist`). Pushes to `main` deploy to production on Netlify.
