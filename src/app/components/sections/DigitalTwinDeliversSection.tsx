import React from 'react'
import Image from 'next/image'

export interface DigitalTwinDeliversSectionProps {}

const delivers = [
  {
    title: 'Minute',
    subtitle: 'Generation forecasting',
    description:
      'Module to plant level the most granular solar forecast available in any EMS platform.',
    image: '/Images/digital-twin-delivers-forecasting.png',
    alt: 'Minute generation forecasting — analytics monitor with orbital data ring',
  },
  {
    title: 'Warranty-Safe',
    subtitle: 'BESS dispatch',
    description:
      'Every dispatch decision validated against degradation limits before EMS executes it.',
    image: '/Images/digital-twin-delivers-warranty-safe.png',
    alt: 'Warranty-safe BESS dispatch — protected server stack with shield',
  },
  {
    title: 'Real-Time',
    subtitle: 'Closed-loop operation',
    description:
      'Continuously updated against live telemetry not a static model, a living one.',
    image: '/Images/digital-twin-delivers-real-time.png',
    alt: 'Real-time closed-loop operation — continuous cycle ring',
  },
  {
    title: 'Patented',
    subtitle: 'Dual-model architecture',
    description:
      'Two separate patents Solar DT (P1) and BESS DT (P4) purpose-built for each asset class.',
    image: '/Images/digital-twin-delivers-patented.png',
    alt: 'Patented dual-model architecture — layered twin model stack',
  },
] as const

const DigitalTwinDeliversSection: React.FC<DigitalTwinDeliversSectionProps> = () => {
  return (
    <section id="what-it-delivers" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          WHAT IT DELIVERS
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          A model that makes every other system smarter.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-4">
          {delivers.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[22rem] flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-6 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:min-h-[24rem] sm:px-6 sm:py-7"
            >
              <div className="flex h-[9.5rem] w-full items-center justify-center sm:h-[11rem]">
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={220}
                  height={220}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
              <h3 className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-bold leading-[1.2] tracking-[-0.01rem] text-[#131313] sm:text-[1.25rem]">
                {item.title}
              </h3>
              <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-medium leading-[1.3] text-[#FF7F00] sm:text-[1rem]">
                {item.subtitle}
              </p>
              <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.45] text-[#4E4E4E] sm:text-[0.875rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DigitalTwinDeliversSection
