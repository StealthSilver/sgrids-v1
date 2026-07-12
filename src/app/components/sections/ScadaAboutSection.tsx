import React from 'react'
import Image from 'next/image'

export interface ScadaAboutSectionProps {}

const beyondItems = [
  {
    title: 'Monitoring + Analytics + Automation',
    description: 'All in one platform not three separate tools.',
  },
  {
    title: 'No-Code Customization',
    description: 'Build dashboards, workflows, and apps without code.',
  },
  {
    title: 'Unified With EMS & PPC',
    description: 'One environment for control, compliance, and dispatch.',
  },
  {
    title: 'Built For Multi-Plant Operations',
    description: 'Scale from single plant to enterprise portfolio.',
  },
] as const

const energyCards = [
  {
    title: 'Field Data',
    image: '/Images/scada_a.png',
    description: 'Inverters, Meters, BESS, Protection, Systems, PLCs, RTUs & More',
  },
  {
    title: 'Control Systems',
    image: '/Images/scada_2.png',
    description: 'PLCs, RTUs, SCADA I/O, Gateways Edge Devices',
  },
  {
    title: 'Solvyn SCADA',
    image: '/Images/scada_3.png',
    description: 'Monitoring Control Analytics Automation',
  },
  {
    title: 'Outcomes',
    image: '/Images/scada_4.png',
    description: 'Insights, Reporting Workflows Confident Decisions',
  },
] as const

const ScadaAboutSection: React.FC<ScadaAboutSectionProps> = () => {
  return (
    <section id="about-scada" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            BEYOND TRADITIONAL SCADA
          </p>

          <div className="mt-5 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-4 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-6 sm:py-6 lg:px-8 lg:py-7">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {beyondItems.map((item, index) => (
                <div
                  key={item.title}
                  className={`lg:px-5 xl:px-6 ${index > 0 ? 'lg:border-l lg:border-[#E0D8D0]' : ''}`}
                >
                  <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.4] text-[#7F7F7F] sm:text-[0.875rem]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            SCADA FOR ENERGY
          </p>
          <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            From field signal to operational intelligence.
          </h2>
          <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
            Solvyn SCADA sits at the center of your operational stack receiving raw field data and
            transforming it into actionable intelligence before it reaches the operator.
          </p>

          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {energyCards.map((card) => (
              <article
                key={card.title}
                className="flex min-h-[320px] flex-col items-center rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-3 pb-5 pt-5 text-center shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038]"
              >
                <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                  {card.title}
                </h3>

                <div className="mt-4 flex h-[160px] w-full items-center justify-center">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={280}
                    height={220}
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>

                <p className="mt-4 max-w-[15rem] [font-family:var(--font-ibm-plex-sans)] text-[13px] leading-[1.4] text-[#7F7F7F] sm:text-[14px]">
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ScadaAboutSection
