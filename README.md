# Tawasaw Robotics Website

Static Astro site for `robotics.tawasaw.org`.

## Development

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

## Publishing

The site deploys to GitHub Pages from `.github/workflows/deploy.yml` when
changes are pushed to `main`.

The custom domain is configured through `public/CNAME`.

## Content Origin

The content and visual design were ported from the original prototype at
`https://tawasaw-robotics.lovable.app`. This repository is now the source of
truth — edit the pages here, not the prototype.
