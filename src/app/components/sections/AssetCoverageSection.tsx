import React from 'react'
import Image from 'next/image'

export interface AssetCoverageSectionProps {}

interface AssetCard {
  title: string
  description: string
  image: string
}

const assetCards: AssetCard[] = [
  {
    title: 'Solar',
    description: 'Patented Digital Twin from module to plant level. String fault detection and compliant dispatch.',
    image: '/Images/asset_solar.svg',
  },
  {
    title: 'Wind',
    description: 'Turbine controller integration, ramp-rate management, and frequency response.',
    image: '/Images/asset_wind.svg',
  },
  {
    title: 'BESS',
    description: 'Degradation-aware dispatch, SOH management, cycle cost optimisation, warranty-safe operation.',
    image: '/Images/asset_bess.svg',
  },
  {
    title: 'Hybrid',
    description: '11 operating modes, inter-PPA awareness, real-time mode arbitration across mixed portfolios.',
    image: '/Images/asset_hybrid.svg',
  },
  {
    title: 'Green H₂',
    description: 'Electrolysis load management, renewable coupling, grid-code compliant operation.',
    image: '/Images/asset_h2.svg',
  },
]

const AssetCoverageSection: React.FC<AssetCoverageSectionProps> = () => {
  return (
    <section id="asset-coverage" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            ASSET COVERAGE
          </p>
          <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Solar. Wind. BESS. Hybrid. <span className="text-[#FF7F00]">Green Hydrogen.</span>
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-3">
          {assetCards.map((card) => (
            <article
              key={card.title}
              className="flex min-h-[320px] flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-3 pb-3 pt-3 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038]"
            >
              <div className="h-[150px] w-[150px]">
                <Image src={card.image} alt={card.title} width={223} height={239} className="h-full w-full object-contain" />
              </div>

              <h3 className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                {card.title}
              </h3>

              <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.35] text-black">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AssetCoverageSection
