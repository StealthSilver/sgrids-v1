import React from 'react'
import Image from 'next/image'

export interface AuraPillarsSectionProps {}

const pillars = [
  {
    title: 'Forecasting Intelligence',
    image: '/assets/aura/images/pillar-forecasting.png',
    alt: 'Forecasting Intelligence — solar panel, wind turbine, and weather',
    bullets: [
      'Solar Forecasting',
      'BESS & Wind Generation Forecasting',
      'Demand Forecasting',
      'Price Forecasting',
      'Grid Congestion Forecasting',
      'Curtailment Risk Assessment',
    ],
  },
  {
    title: 'Digital Twin Intelligence',
    image: '/assets/aura/images/pillar-digital-twin.png',
    alt: 'Digital Twin Intelligence — analytics dashboard with charts',
    bullets: [
      'Solar Digital Twin',
      'BESS Digital Twin',
      'Plant Performance Simulation',
      'Performance Simulation',
      'What-If Scenario Analysis',
      'Asset Health & Degradation',
    ],
  },
  {
    title: 'Scheduling & Optimisation',
    image: '/assets/aura/images/pillar-scheduling.png',
    alt: 'Scheduling & Optimisation — calendar and battery storage',
    bullets: [
      'Day-Ahead (DAM) Scheduling',
      'Real-Time (RTM) Optimization',
      'BESS Charge/Discharge Optimization',
      'Import / Export Planning',
      'DSM-Aware Scheduling',
      '96-Block (15-Minute) Scheduling',
    ],
  },
  {
    title: 'Revenue & Risk Intelligence',
    image: '/assets/aura/images/pillar-revenue-risk.png',
    alt: 'Revenue & Risk Intelligence — shield, growth chart, and coins',
    bullets: [
      'DSM Penalty Reduction',
      'Curtailment Prediction',
      'Arbitrage Opportunity Identification',
      'Schedule Deviation Analysis',
      'Performance Reporting & Analytics',
      'Revenue Optimisation Support',
    ],
  },
] as const

const AuraPillarsSection: React.FC<AuraPillarsSectionProps> = () => {
  return (
    <section id="capability-pillars" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          CAPABILITY PILLARS
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Four Pillars. One Decision Platform.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-4 lg:gap-3 xl:gap-4">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-4 py-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-5 sm:py-5"
            >
              <h3 className="text-center [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.2] tracking-[-0.01rem] text-[#131313] sm:text-[1rem]">
                {pillar.title}
              </h3>

              <div className="mt-3 flex min-h-[9.5rem] w-full items-center justify-center sm:min-h-[11rem]">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  width={260}
                  height={260}
                  className="h-auto max-h-[10.5rem] w-full object-contain sm:max-h-[11.5rem]"
                />
              </div>

              <ul className="mt-3 space-y-1.5">
                {pillar.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.4] text-[#4E4E4E] sm:text-[0.8125rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1C1B1B]"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AuraPillarsSection
