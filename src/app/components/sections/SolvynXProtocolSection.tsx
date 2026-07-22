import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface SolvynXProtocolSectionProps {}

const SolvynXProtocolSection: React.FC<SolvynXProtocolSectionProps> = () => {
  return (
    <section id="protocol-support" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
        <div className="max-w-[520px]">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            PROTOCOL SUPPORT &amp; DOMAIN TEMPLATES
          </p>
          <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Solvyn X speaks the full language of energy infrastructure.
          </h2>
          <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
            So your team spends time on operations, not on integration. Every major field protocol is
            supported out of the box, with pre-built domain templates that eliminate configuration work
            for every common asset type.
          </p>
        </div>

        <div className="relative w-full overflow-hidden rounded-[14px]">
          <Image
            src={assetUrl('/assets/solvyn-x/images/protocol-diagram.png')}
            alt="Solvyn X protocol support and domain templates across energy infrastructure"
            width={1200}
            height={900}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default SolvynXProtocolSection
