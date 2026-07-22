import type { NextConfig } from 'next'

const DEFAULT_CDN_HOST = 'd23qtl0wnqfa3h.cloudfront.net'

function getCdnHostname(): string {
  const fromEnv = process.env.NEXT_PUBLIC_CDN_URL?.trim()
  if (!fromEnv) return DEFAULT_CDN_HOST

  try {
    return new URL(fromEnv).hostname
  } catch {
    return DEFAULT_CDN_HOST
  }
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: getCdnHostname(),
        pathname: '/assets/**',
      },
      // Keep default host allowlisted for local/prod parity
      {
        protocol: 'https',
        hostname: DEFAULT_CDN_HOST,
        pathname: '/assets/**',
      },
    ],
  },
}

export default nextConfig
