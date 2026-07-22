import React from 'react'
import Image from 'next/image'

export interface CareersWhyJoinSectionProps {}

const reasons = [
  {
    title: 'Deep Technical Work',
    description: 'Real control systems, live grid integrations, and patented technology.',
  },
  {
    title: 'Mission That Matters',
    description: 'Every line of code serves the energy transition.',
  },
  {
    title: 'Early And Growing',
    description: 'Shape the platform and the company ownership is real.',
  },
  {
    title: 'Global Reach',
    description: 'Deployed across 21+ countries from Bengaluru.',
  },
] as const

function ShieldLockIcon() {
  return (
    <Image
      src="/assets/shared/images/shield-accent.png"
      alt=""
      aria-hidden="true"
      width={96}
      height={96}
      className="h-16 w-16 object-contain sm:h-20 sm:w-20"
    />
  )
}

const CareersWhyJoinSection: React.FC<CareersWhyJoinSectionProps> = () => {
  return (
    <section className="bg-[#F7F2EE] px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Why Join SGA
        </p>

        <div className="mt-5 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-7 sm:mt-6 sm:px-6 sm:py-8 lg:mt-7 lg:px-8 lg:py-10 xl:px-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-0">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className={`flex flex-col items-start lg:px-6 xl:px-8 ${
                  index > 0 ? 'lg:border-l lg:border-[#E0D8D0]' : ''
                }`}
              >
                <div className="text-[#FF7F00]">
                  <ShieldLockIcon />
                </div>
                <h3 className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-bold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:mt-6 sm:text-[1.125rem]">
                  {reason.title}
                </h3>
                <p className="mt-2.5 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.45] text-[#1C1B1B] sm:mt-3 sm:text-[0.9375rem]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CareersWhyJoinSection
