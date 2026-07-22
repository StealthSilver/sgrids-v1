/**
 * CDN helpers for production media assets hosted on CloudFront/S3.
 *
 * Set NEXT_PUBLIC_CDN_URL to override (no trailing slash).
 * Example: https://d23qtl0wnqfa3h.cloudfront.net
 */

export const DEFAULT_CDN_URL = 'https://d23qtl0wnqfa3h.cloudfront.net'

export function getCdnBaseUrl(): string {
  const fromEnv = process.env.NEXT_PUBLIC_CDN_URL?.trim()
  const base = fromEnv && fromEnv.length > 0 ? fromEnv : DEFAULT_CDN_URL
  return base.replace(/\/+$/, '')
}

/**
 * Resolve a site asset path to its CDN URL.
 * Accepts `/assets/...` paths (or already-absolute URLs).
 */
export function assetUrl(path: string): string {
  if (!path) return path

  if (/^https?:\/\//i.test(path) || path.startsWith('data:') || path.startsWith('blob:')) {
    return path
  }

  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${getCdnBaseUrl()}${normalized}`
}
