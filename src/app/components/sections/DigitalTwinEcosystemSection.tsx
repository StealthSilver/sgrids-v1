import React from 'react'

export interface DigitalTwinEcosystemSectionProps {}

const connections = [
  {
    step: 'STEP 01',
    title: 'AURA',
    action: 'FEEDS',
    description:
      "Live plant model makes AURA's predictions accurate anomaly detection, failure simulation, and prescriptive guidance all run on Digital Twin data.",
    bg: '#FAD835',
    stepColor: '#C4A61A',
  },
  {
    step: 'STEP 02',
    title: 'Solvyn EMS',
    action: 'FEEDS',
    description:
      'Forecasting and degradation data flows directly into EMS dispatch, enabling degradation-aware scheduling and optimal battery operation.',
    bg: '#F19430',
    stepColor: '#C06E18',
  },
  {
    step: 'STEP 03',
    title: 'DSM Manager',
    action: 'POWERS',
    description:
      'Solar and BESS twins continuously recalculate schedule using live weather and plant data EMS executes all DSM-linked corrections automatically.',
    bg: '#ED6542',
    stepColor: '#B84328',
  },
  {
    step: 'STEP 04',
    title: 'Market Bidding',
    action: 'INFORMS',
    description:
      'Minute-level generation forecasts feed IEX DAM/RTM bidding 96-block schedules built on the most accurate model of your actual plant.',
    bg: '#7D81A6',
    stepColor: '#55597A',
  },
] as const

const DigitalTwinEcosystemSection: React.FC<DigitalTwinEcosystemSectionProps> = () => {
  return (
    <section id="ecosystem-connections" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
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

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {connections.map((item) => (
            <article
              key={item.step}
              className="flex flex-col rounded-[14px] px-5 py-5 sm:px-6 sm:py-6"
              style={{ backgroundColor: item.bg }}
            >
              <p
                className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-semibold uppercase leading-[1] tracking-[0.04rem]"
                style={{ color: item.stepColor }}
              >
                {item.step}
              </p>
              <h3 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-bold leading-[1.2] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.25rem]">
                {item.title}
              </h3>
              <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-bold uppercase leading-[1.2] tracking-[0.02rem] text-[#1C1B1B] sm:text-[1rem]">
                {item.action}
              </p>
              <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.45] text-[#1C1B1B] sm:text-[0.875rem]">
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
