import React from 'react'
import FooterSection from '@/app/components/sections/FooterSection'
import type { SitePageContent } from '@/app/data/pages.data'

export interface SitePageProps extends SitePageContent {}

const SitePage: React.FC<SitePageProps> = ({ eyebrow, title, description }) => {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <div className="mx-auto w-full max-w-7xl flex-1 px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-none tracking-[0.02rem] text-[#FF7F00]">
          {eyebrow}
        </p>
        <h1 className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[2rem] font-semibold leading-[1.1] tracking-[-0.03rem] text-[#131313] sm:text-[2.5rem] lg:text-[3rem]">
          {title}
        </h1>
        <p className="mt-4 max-w-[640px] [font-family:var(--font-ibm-plex-sans)] text-[1rem] leading-[1.4] text-[#808080] sm:text-[1.0625rem]">
          {description}
        </p>
      </div>
      <FooterSection />
    </div>
  )
}

export default SitePage
