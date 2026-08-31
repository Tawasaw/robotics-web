# Agent Guide for robotics-web

This repo contains the public website for Tawasaw Robotics (Silicon Valley).

Production site:

- `https://robotics.tawasaw.org`

## Tech Stack

- Astro static site
- Plain Astro pages and CSS (no Tailwind, no UI framework)
- GitHub Pages deployment through GitHub Actions
- npm for dependencies

## Important Commands

Install dependencies:

```sh
npm install
```

Run locally:

```sh
npm run dev
```

Build production output:

```sh
npm run build
```

Preview production build:

```sh
npm run preview
```

Always run `npm run build` before committing website changes.

## Repository Layout

- `src/pages/index.astro`
  Homepage: hero, the two program cards, the "More than robots" value strip,
  the schedule band, and the achievements call to action.

- `src/pages/achievements.astro`
  2025–2026 season results for both FTC teams plus the FLL UNEARTHED recap.

- `src/pages/apply/[program].astro`
  Per-program application page. Generates `/apply/fll/` and `/apply/ftc/` from
  `src/data/programs.ts`.

- `src/pages/ftc30619.astro`
  Redirect to the standalone FTC #30619 site. Kept so old links keep working.

- `src/pages/404.astro`
  Not-found page. GitHub Pages serves this automatically.

- `src/layouts/Base.astro`
  HTML shell, metadata, fonts, and the blue masthead. Has a named `head` slot
  for per-page tags.

- `src/components/Icon.astro`
  Inline SVG icon set with lucide-compatible geometry. Add new icons to the
  `paths` map rather than pulling in an icon dependency.

- `src/components/Connect.astro`
  Social/contact footer section.

- `src/data/programs.ts`, `src/data/achievements.ts`
  Site content as typed data. Prefer editing these over hand-editing markup.

- `src/styles/global.css`
  All styling. Design tokens live in `:root`.

- `public/`
  Static assets copied directly into the built site.

- `public/CNAME`
  GitHub Pages custom domain. Do not change unless the domain changes.

- `.github/workflows/deploy.yml`
  GitHub Pages deployment workflow. Be careful when editing.

- `docs/updating-the-website.md`
  Student-facing instructions for updating the site.

## Pages

| Route | Source |
| --- | --- |
| `/` | `src/pages/index.astro` |
| `/achievements/` | `src/pages/achievements.astro` |
| `/apply/fll/`, `/apply/ftc/` | `src/pages/apply/[program].astro` |
| `/ftc30619/` | `src/pages/ftc30619.astro` (redirect) |
| 404 | `src/pages/404.astro` |

## Styling Guidelines

- The theme is a poster / neo-brutalist look: heavy 4px black rules, a deep
  blue primary (`hsl(210 100% 25%)`), Audiowide display type over Rajdhani body
  copy. Keep new sections consistent with it.
- Colors come from the HSL custom properties in `:root`. Use
  `hsl(var(--primary))` rather than hard-coded hex values.
- Shared CSS lives in `src/styles/global.css`.
- Use responsive layout rules for mobile and desktop.
- Do not add large new frameworks or UI libraries for simple pages.

## Deployment

Deployments happen automatically when changes are pushed to `main`.

The workflow:

- installs dependencies with `npm install`
- builds with `npm run build`
- uploads `dist/`
- deploys to GitHub Pages

The workflow uses Node 24-ready GitHub Actions and sets:

```yaml
FORCE_JAVASCRIPT_ACTIONS_TO_NODE24: true
```

Do not downgrade the action versions or remove that setting without a reason.

### Lockfile

There is no `package-lock.json` yet, so CI uses `npm install`. Once someone
runs `npm install` locally and commits the generated lockfile, switch the
workflow's install step to `npm ci` and re-enable `cache: npm` on
`actions/setup-node`.

## Domain Notes

The custom domain is configured in:

```txt
public/CNAME
```

Current value:

```txt
robotics.tawasaw.org
```

Do not edit `public/CNAME` unless the domain is changing.

## Dependency Notes

The repo includes `.npmrc` to force the public npm registry:

```txt
registry=https://registry.npmjs.org/
```

Keep this file. It prevents CI from using a local/private npm registry when
`package-lock.json` is generated.

## Known Follow-ups

- `public/islamic-robot.png` is a ~2.2 MB PNG carried over from the prototype.
  It is the single largest asset on the homepage and should be resized and
  recompressed (or converted to WebP/AVIF) when someone has image tooling
  available.

## Safe Change Checklist

Before finishing a change:

1. Run `npm run build`.
2. Confirm the changed route builds.
3. Check `git status --short`.
4. Do not commit generated `dist/` or `node_modules/`.
5. Do not modify deployment or domain files unless the task requires it.

## Files Usually Safe to Edit

- `src/pages/**/*.astro`
- `src/components/*.astro`
- `src/data/*.ts`
- `src/styles/global.css`
- `public/` assets, when adding or replacing website images
- `docs/*.md`
- `README.md`

## Files to Treat Carefully

- `.github/workflows/deploy.yml`
- `public/CNAME`
- `astro.config.mjs`
- `package.json`
- `.npmrc`

## Git Guidance

- Keep commits focused.
- Do not push unless explicitly asked.
