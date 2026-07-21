// Root layout — app shell, fonts, and imported site metadata config

import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import NavbarSection from '@/app/components/sections/NavbarSection'
import { siteMetadata, siteViewport } from '@/data/site.data'
import './globals.css'

// ─── Fonts (self-hosted — avoids Google Fonts fetch at build time) ───────────

const ibmPlexSans = localFont({
  variable: '--font-ibm-plex-sans',
  display: 'swap',
  src: [
    { path: './fonts/IBMPlexSans-Light.woff2', weight: '300', style: 'normal' },
    { path: './fonts/IBMPlexSans-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/IBMPlexSans-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/IBMPlexSans-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/IBMPlexSans-Bold.woff2', weight: '700', style: 'normal' },
  ],
})

const spaceGrotesk = localFont({
  variable: '--font-space-grotesk',
  display: 'swap',
  src: [
    { path: './fonts/SpaceGrotesk-Regular.woff2', weight: '400', style: 'normal' },
    { path: './fonts/SpaceGrotesk-Medium.woff2', weight: '500', style: 'normal' },
    { path: './fonts/SpaceGrotesk-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/SpaceGrotesk-Bold.woff2', weight: '700', style: 'normal' },
  ],
})

export const viewport: Viewport = siteViewport
export const metadata: Metadata = siteMetadata

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${ibmPlexSans.variable} ${spaceGrotesk.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <NavbarSection />
        {children}
      </body>
    </html>
  )
}
