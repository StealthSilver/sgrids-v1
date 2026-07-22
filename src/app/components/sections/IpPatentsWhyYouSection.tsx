import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface IpPatentsWhyYouSectionProps {}

const cards = [
  {
    title: 'Capabilities No One Else Can Copy',
    description:
      'Patented methods embedded directly into the platform creating capabilities competitors cannot easily replicate.',
  },
  {
    title: 'Lower Risk On Your Long Term Investment',
    description:
      'A platform built on patented technology, proven through real deployments and operational scale.',
  },
  {
    title: 'Internationally Validated, Not Just Claimed',
    description:
      'Patents filed in key global markets and validated under rigorous international examination standards.',
  },
] as const

const outcomes = [
  {
    title: 'Better Forecasts',
    description: 'Engineered accuracy you can rely on.',
  },
  {
    title: 'Smarter Dispatch',
    description: 'Optimised decisions in real time.',
  },
  {
    title: 'Lower Penalties',
    description: 'Reduced deviations and compliance risk.',
  },
  {
    title: 'Higher Revenue',
    description: 'More value from every megawatt dispatched.',
  },
] as const

function ShieldLockIcon() {
  return (
    <Image
      src={assetUrl('/assets/shared/images/shield-accent.png')}
      alt=""
      aria-hidden="true"
      width={96}
      height={96}
      className="h-16 w-16 object-contain sm:h-20 sm:w-20"
    />
  )
}

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="h-4 w-4 shrink-0 text-[#C4C4C4] sm:h-5 sm:w-5"
    >
      <path
        d="M6 3.5 10.5 8 6 12.5"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const IpPatentsWhyYouSection: React.FC<IpPatentsWhyYouSectionProps> = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Why It Matters To You
        </p>

        <h2 className="mt-3 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.04rem] text-[#1C1B1B] sm:mt-4 sm:text-3xl lg:text-[2.5rem] lg:tracking-[-0.06rem]">
          IP that works harder for your operations than for ours.
        </h2>

        <p className="mt-4 max-w-[44rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
          Every patent in Solvyn&apos;s portfolio translates directly into a capability your
          operation gets and your competitors can&apos;t easily replicate. This isn&apos;t IP for
          its own sake. It&apos;s the engineering proof that the platform does things others can&apos;t.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-4 xl:gap-5">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <div className="text-[#FF7F00]">
                <ShieldLockIcon />
              </div>
              <h3 className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-bold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:mt-6 sm:text-[1.125rem]">
                {card.title}
              </h3>
              <p className="mt-2.5 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.45] text-[#7F7F7F] sm:mt-3 sm:text-[0.9375rem]">
                {card.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:mt-8 sm:px-6 sm:py-6 lg:mt-10 lg:px-8 lg:py-7">
          <div className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:gap-0">
            {outcomes.map((outcome, index) => (
              <React.Fragment key={outcome.title}>
                {index > 0 ? (
                  <div className="hidden shrink-0 px-3 xl:px-4 lg:block" aria-hidden="true">
                    <ChevronIcon />
                  </div>
                ) : null}
                <div className="min-w-0 flex-1">
                  <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-bold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1rem]">
                    {outcome.title}
                  </h3>
                  <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.4] text-[#7F7F7F] sm:text-[0.875rem]">
                    {outcome.description}
                  </p>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default IpPatentsWhyYouSection
