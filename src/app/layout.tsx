// Root layout — app-wide metadata, fonts, SEO, OG, and global providers

import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

// ─── Site Config (edit these) ─────────────────────────────────────────────────

const siteConfig = {
  name: "SmartGrid Analytics",
  tagline: "Intelligent Energy. Optimised Grids.",
  description:
    "SmartGrid Analytics gives energy operators real-time visibility, predictive fault detection, and AI-powered load forecasting — all in one platform.",
  url: "https://smartgrid-analytics.com",         // ← your production URL
  ogImage: "/og-image.png",                        // ← place in /public
  twitterHandle: "@smartgridai",                   // ← your handle
  locale: "en_US",
  themeColor: "#0f172a",                           // ← matches your brand
};

// ─── Viewport ─────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: siteConfig.themeColor },
    { media: "(prefers-color-scheme: dark)",  color: siteConfig.themeColor },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,           // used by child pages
  },
  description: siteConfig.description,
  keywords: [
    "smart grid analytics",
    "energy management platform",
    "real-time grid monitoring",
    "AI load forecasting",
    "fault detection energy",
    "grid optimisation software",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,

  // ── Canonical / Robots ────────────────────────────────────────────────────
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
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
        type: "image/png",
      },
    ],
  },

  // ── Twitter / X Card ─────────────────────────────────────────────────────
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: [
      { url: "/favicon.ico",                  sizes: "any" },
      { url: "/icon.svg",                     type: "image/svg+xml" },
      { url: "/favicon-96x96.png",            type: "image/png", sizes: "96x96" },
    ],
    apple: [
      { url: "/apple-touch-icon.png",         sizes: "180x180" },
    ],
    shortcut: "/favicon.ico",
  },

  // ── PWA / Web App Manifest ────────────────────────────────────────────────
  manifest: "/site.webmanifest",

  // ── App-specific meta ─────────────────────────────────────────────────────
  applicationName: siteConfig.name,
  category: "technology",
  classification: "Business / Energy Analytics",
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}