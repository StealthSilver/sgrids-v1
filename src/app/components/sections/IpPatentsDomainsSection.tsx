import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface IpPatentsDomainsSectionProps {}

const domains = [
  {
    title: 'Digital Twin Technology',
    description:
      'Patented live models for solar and BESS assets forecasting, degradation, and dispatch intelligence.',
    image: assetUrl('/assets/ip-patents/images/domain-digital-twin.png'),
    alt: 'Abstract network of cubes representing digital twin technology',
  },
  {
    title: 'EMS & Dispatch Logic',
    description:
      'Proprietary energy optimization methods combining EMS orchestration with intelligent bidding.',
    image: assetUrl('/assets/ip-patents/images/domain-grid-control.png'),
    alt: 'Shield network graphic representing EMS and dispatch logic',
  },
  {
    title: 'Market Intelligence',
    description:
      'Patented deviation settlement and DSM compliance methods linking plant operations to energy markets.',
    image: assetUrl('/assets/ip-patents/images/domain-ems-dispatch.png'),
    alt: 'Layered solar, wind, and storage illustration representing market intelligence',
  },
  {
    title: 'Grid Control',
    description:
      'Novel methods for virtual power quality metering, distributed BESS planning, and AI-based dispatch.',
    image: assetUrl('/assets/ip-patents/images/domain-market-intelligence.png'),
    alt: 'Circular bar visualization representing grid control intellectual property',
  },
] as const

const IpPatentsDomainsSection: React.FC<IpPatentsDomainsSectionProps> = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Four Domains
        </p>

        <h2 className="mt-3 max-w-[36rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.04rem] text-[#1C1B1B] sm:mt-4 sm:text-3xl lg:text-[2.5rem] lg:tracking-[-0.06rem]">
          Four domains one competitive advantage.
        </h2>

        <p className="mt-4 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
          SGA&apos;s patent portfolio is organized across four core innovation domains each protecting
          a distinct competitive advantage within the Solvyn platform.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-4 lg:gap-3 xl:gap-4">
          {domains.map((domain) => (
            <article
              key={domain.title}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-4 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-5 sm:py-6"
            >
              <div className="flex min-h-[9rem] w-full items-center justify-center sm:min-h-[10rem]">
                <Image
                  src={domain.image}
                  alt={domain.alt}
                  width={320}
                  height={240}
                  className="h-auto max-h-[10rem] w-full object-contain"
                />
              </div>

              <h3 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1rem] font-bold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.0625rem]">
                {domain.title}
              </h3>

              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.45] text-[#4E4E4E] sm:text-[0.875rem]">
                {domain.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IpPatentsDomainsSection
