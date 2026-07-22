# Sgrids CDN Assets

Send this entire `assets/` folder to DevOps for CDN upload.

## Live CDN base URL

`https://d23qtl0wnqfa3h.cloudfront.net`

Example:
`https://d23qtl0wnqfa3h.cloudfront.net/assets/aura/images/hero.png`

The Next.js app resolves every `/assets/...` path through `assetUrl()` using `NEXT_PUBLIC_CDN_URL`
(defaulting to the CloudFront URL above).

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

## CDN path convention

Local path shape:
`/assets/<section>/images/<name>.png`

CDN URL:
`https://d23qtl0wnqfa3h.cloudfront.net/assets/<section>/images/<name>.png`

Keep the `/assets/...` suffix identical so the app can switch hosts via `NEXT_PUBLIC_CDN_URL`.

## Replacing an asset

1. Find the page folder (e.g. `aura/images/`)
2. Replace the file **keeping the same filename**
3. Invalidate CloudFront cache for that path (cache is currently long-lived / immutable)

See `CDN_MANIFEST.json` for the full old→new mapping used during migration.
