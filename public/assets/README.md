# Sgrids CDN Assets

Send this entire `assets/` folder to DevOps for CDN upload.

## Structure

```
assets/
  brand/                 # Logo + app icon
  shared/
    icons/               # Cross-page icons (product suite, UI)
    images/              # Cross-page images (CTA, assets, shield)
  home/                  # Marketing homepage
  solvyn/                # /solvyn landing
  solvyn-x/              # /solvyn/solvyn-x
  scada/                 # /solvyn/scada
  digital-twin/          # /solvyn/digital-twin
  aura/                  # /solvyn/aura
  ems/                   # /solvyn/ems
  cybersecure/           # /solvyn/cybersecure-ot-it
  case-studies/          # /proof/case-studies
  white-paper/           # /proof/white-paper
  news/                  # /proof/news
  about-sga/             # /company/about-sga
  careers/               # /company/careers
  ip-patents/            # /company/ip-patents
```

Each page folder contains `images/` and (where needed) `icons/`.

## CDN path convention

Local path today:
`/assets/<section>/images/<name>.png`

CDN path after deploy (example):
`https://cdn.example.com/assets/<section>/images/<name>.png`

Keep the `/assets/...` suffix identical so the app can switch via a single CDN base URL.

## Replacing an asset

1. Find the page folder (e.g. `aura/images/`)
2. Replace the file **keeping the same filename**
3. Invalidate CDN cache for that path

See `CDN_MANIFEST.json` for the full old→new mapping used during migration.
