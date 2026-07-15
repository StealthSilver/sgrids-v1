import React from 'react'

export interface DigitalTwinEcosystemSectionProps {}

const connections = [
  {
    step: 'STEP 01',
    title: 'AURA',
    action: 'FEEDS',
    description:
      "Live plant model makes AURA's predictions accurate anomaly detection, failure simulation, and prescriptive guidance all run on Digital Twin data.",
  },
  {
    step: 'STEP 02',
    title: 'Solvyn EMS',
    action: 'FEEDS',
    description:
      'Forecasting and degradation data flows directly into EMS dispatch — enabling degradation-aware scheduling and optimal battery operation.',
  },
  {
    step: 'STEP 03',
    title: 'DSM Manager',
    action: 'POWERS',
    description:
      'Solar and BESS twins continuously recalculate schedule using live weather and plant data EMS executes all DSM-linked corrections automatically.',
  },
  {
    step: 'STEP 04',
    title: 'Market Bidding',
    action: 'INFORMS',
    description:
      'Minute-level generation forecasts feed IEX DAM/RTM bidding 96-block schedules built on the most accurate model of your actual plant.',
  },
] as const

const DigitalTwinEcosystemSection: React.FC<DigitalTwinEcosystemSectionProps> = () => {
  return (
    <section id="ecosystem-connections" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          ECOSYSTEM CONNECTIONS
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          The foundation layer for every intelligent decision.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          The Digital Twin doesn&apos;t just model your plant it actively feeds intelligence into every
          other layer of the Solvyn platform, making every system smarter.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-4 lg:gap-3 xl:gap-4">
          {connections.map((item) => (
            <article
              key={item.step}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-5 sm:py-6"
            >
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-medium uppercase leading-[1] tracking-[0.04rem] text-[#9A9A9A]">
                {item.step}
              </p>
              <h3 className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-semibold leading-[1.2] tracking-[-0.01rem] text-[#131313] sm:text-[1.125rem]">
                {item.title}
              </h3>
              <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-semibold uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.8125rem]">
                {item.action}
              </p>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.4] text-[#4E4E4E] sm:text-[0.875rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DigitalTwinEcosystemSection
