import React from 'react'
import Image from 'next/image'

export interface AuraEcosystemSectionProps {}

const ecosystemItems = [
  {
    title: 'Forecasting Engines',
    subtitle: 'Weather & Generation Forecasting',
    image: '/Images/aura-1.png',
    alt: 'Forecasting Engines — sun and cloud weather illustration',
  },
  {
    title: 'Market Systems',
    subtitle: 'CXP, PXIL, IEX, CAISO',
    image: '/Images/aura-2.png',
    alt: 'Market Systems — growth chart with upward arrow',
  },
  {
    title: 'Solvyn AURA',
    subtitle: 'Decision Intelligence Platform',
    image: '/Images/aura-3.png',
    alt: 'Solvyn AURA — dual-tone brain decision intelligence',
  },
  {
    title: 'Solvyn EMS & Plant',
    subtitle: 'Execution & Optimal Decisions',
    image: '/Images/aura-4.png',
    alt: 'Solvyn EMS & Plant — battery and control unit execution',
  },
  {
    title: 'Analytics Dashboards',
    subtitle: 'Reports, Intelligence & Performance',
    image: '/Images/aura-5.png',
    alt: 'Analytics Dashboards — charts and performance reports',
  },
] as const

const AuraEcosystemSection: React.FC<AuraEcosystemSectionProps> = () => {
  return (
    <section id="connected-ecosystem" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          CONNECTED ECOSYSTEM
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Data flows in. Decisions flow out
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {ecosystemItems.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-4 py-5 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-4 sm:py-6"
            >
              <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.2] tracking-[-0.01rem] text-[#131313] sm:text-[1rem]">
                {item.title}
              </h3>

              <div className="mt-4 flex min-h-[7.5rem] w-full flex-1 items-center justify-center sm:min-h-[8.5rem]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={220}
                  height={220}
                  className="h-auto max-h-[8.5rem] w-full object-contain"
                />
              </div>

              <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.35] text-[#1C1B1B] sm:text-[0.8125rem]">
                {item.subtitle}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AuraEcosystemSection
