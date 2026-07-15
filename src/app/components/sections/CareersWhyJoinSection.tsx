import React from 'react'

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
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
      <path
        d="M16 3.5 6.5 7.25v7.1c0 6.35 4.05 11.55 9.5 13.15 5.45-1.6 9.5-6.8 9.5-13.15v-7.1L16 3.5Z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <rect
        x="12.25"
        y="13.25"
        width="7.5"
        height="6.5"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path
        d="M14.1 13.25v-1.6a1.9 1.9 0 0 1 3.8 0v1.6"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

const CareersWhyJoinSection: React.FC<CareersWhyJoinSectionProps> = () => {
  return (
    <section className="bg-[#F7F2EE] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
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
