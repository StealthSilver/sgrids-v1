import React from 'react'
import Image from 'next/image'

export interface AuraHowItWorksSectionProps {}

const steps = [
  {
    title: 'Data Ingestion',
    description: 'Weather, Plant, Market, SCADA, Meters, DSM',
    image: '/Images/aura-works-data-ingestion.png',
    alt: 'Data Ingestion — database stack with weather signal',
  },
  {
    title: 'AI-Assisted Forecasting',
    description: 'Generation, Demand Price, Congestion',
    image: '/Images/aura-works-forecasting.png',
    alt: 'AI-Assisted Forecasting — cloud connected to network nodes',
  },
  {
    title: 'Optimization Engine',
    description: 'Run Constraints, Objectives, Optimisation Models',
    image: '/Images/aura-works-optimization.png',
    alt: 'Optimization Engine — central decision node network',
  },
  {
    title: 'Power Scheduling',
    description: 'DAM / RTM, 15-Minute Granularity, Schedules',
    image: '/Images/aura-works-scheduling.png',
    alt: 'Power Scheduling — calendar with clock',
  },
  {
    title: 'Actionable Insights',
    description: 'Dashboards, Alerts, Confident Decisions',
    image: '/Images/aura-works-insights.png',
    alt: 'Actionable Insights — charts with upward trend',
  },
] as const

const AuraHowItWorksSection: React.FC<AuraHowItWorksSectionProps> = () => {
  return (
    <section id="how-it-works" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          HOW IT WORKS
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Data → Intelligence → Decisions
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          AURA processes every available signal and applies multi-objective optimization to generate
          power schedules, market bids, and risk alerts continuously.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-5 lg:gap-3 xl:gap-4">
          {steps.map((item) => (
            <article
              key={item.title}
              className="flex flex-col items-center rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-3 py-4 text-center transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-3 sm:py-5"
            >
              <div className="flex min-h-[9.5rem] w-full items-center justify-center sm:min-h-[11rem]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={260}
                  height={260}
                  className="h-auto max-h-[10.5rem] w-full object-contain sm:max-h-[11.5rem]"
                />
              </div>

              <h3 className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.2] tracking-[-0.01rem] text-[#131313] sm:text-[1rem]">
                {item.title}
              </h3>

              <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.35] text-[#4E4E4E] sm:text-[0.8125rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AuraHowItWorksSection
