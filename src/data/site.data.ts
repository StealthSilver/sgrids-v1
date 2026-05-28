// Data: site metadata and SEO constants for root layout

import type { Metadata, Viewport } from 'next'

export interface SiteConfig {
  name: string
  tagline: string
  description: string
  url: string
  ogImage: string
  twitterHandle: string
  locale: string
  themeColor: string
}

export const siteConfig: SiteConfig = {
  name: 'Smart Grid Analytics',
  tagline: 'Energy That Thinks',
  description:
    'SmartGrid Analytics gives energy operators real-time visibility, predictive fault detection, and AI-powered load forecasting — all in one platform.',
  url: 'https://smartgrid-analytics.com',
  ogImage: '/og-image.png',
  twitterHandle: '@smartgridai',
  locale: 'en_US',
  themeColor: '#FFFFFF',
}

export const siteKeywords: string[] = [
  'smart grid analytics',
  'energy management platform',
  'real-time grid monitoring',
  'AI load forecasting',
  'fault detection energy',
  'grid optimisation software',
]

export const siteViewport: Viewport = {
  themeColor: siteConfig.themeColor,
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: siteKeywords,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} — ${siteConfig.tagline}`,
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: '/favicon.ico',
  },
  manifest: '/site.webmanifest',
  applicationName: siteConfig.name,
  category: 'technology',
  classification: 'Business / Energy Analytics',
}
