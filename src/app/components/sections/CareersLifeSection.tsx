import React from 'react'
import Image from 'next/image'

export interface CareersLifeSectionProps {}

const lifeCards = [
  {
    title: 'Bengaluru HQ',
    image: '/Images/careers-life-bengaluru-hq.png',
    alt: 'Bengaluru HQ — office building with hardware testing lab',
    description: 'With Typhoon HIL lab and hardware testing environment.',
  },
  {
    title: 'Learning & Growth',
    image: '/Images/careers-life-learning-growth.png',
    alt: 'Learning & Growth — certifications and industry learning',
    description: 'Conferences, certifications, and industry events.',
  },
  {
    title: 'International Exposure',
    image: '/Images/careers-life-international.png',
    alt: 'International Exposure — global deployments',
    description: 'Deployments across India, UAE, and global markets.',
  },
  {
    title: 'Competitive Compensation',
    image: '/Images/careers-life-compensation.png',
    alt: 'Competitive Compensation — salary and early-stage equity',
    description: 'Market-rate salary with early-stage equity participation.',
  },
] as const

const CareersLifeSection: React.FC<CareersLifeSectionProps> = () => {
  return (
    <section id="life-at-sga" className="px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Life at SGA
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          A place for people who build things that last.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          From a single module to total plant output Solvyn&apos;s Solar Digital Twin generates
          minute-by-minute forecasts at every level of the generation stack, using real weather and
          plant data.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-4 lg:gap-3 xl:gap-4">
          {lifeCards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-5 sm:py-6"
            >
              <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
                {card.title}
              </h3>

              <div className="mt-5 flex min-h-[8rem] flex-1 items-center justify-start sm:mt-6 sm:min-h-[9rem]">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={220}
                  height={220}
                  className="h-auto max-h-[9rem] w-full object-contain object-left"
                />
              </div>

              <p className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.4] text-[#7F7F7F] sm:mt-6 sm:text-[0.875rem]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareersLifeSection
