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

## Project layout

- `src/lib/site.ts`: shared values (email, Instagram) and the `mailto()` helper. Change them here, not in components.
- `src/lib/`: sorting and text helpers shared by pages.
- `src/content.config.ts`: content schemas.

## Content

Case studies and press posts are Markdown files in `src/content`, validated by the schemas in `src/content.config.ts`. Images live in each collection's `images/` folder and are referenced with relative paths.

| Collection | Location | Renders as |
| --- | --- | --- |
| `work` | `src/content/work` | Case study page at `/work/<filename>` plus a homepage card |
| `lighting` | `src/content/lighting` | Homepage card with an inline YouTube player (no detail page) |
| `press` | `src/content/press` | Press post at `/press/<filename>` |

Work and lighting entries are grouped on the homepage by their `year` field, newest first. Years come from the content itself, so adding a new one needs no code change.

Files in `public/` are served as-is at the site root — for example, newsletter images in `public/images/newsletter/`. Those URLs may be linked from sent emails, so don't rename or delete them.

## Workflow

Work on a `type/short-name` branch (`fix/…`, `feat/…`, `chore/…`) and merge it into `main` through a pull request. Pushes to `main` deploy to production on Netlify.
