import React from 'react'
import Image from 'next/image'

export interface IpPatentsMattersSectionProps {}

const reasons = [
  {
    title: 'Built From First Principles',
    description:
      'Every patent reflects a method we invented not an existing approach we implemented.',
    image: '/assets/ip-patents/images/matters-first-principles.png',
    alt: 'Drafting compass icon representing first-principles engineering',
  },
  {
    title: 'Protected As It Scales',
    description:
      'Our IP estate grows alongside the platform covering new innovations as they reach maturity.',
    image: '/assets/ip-patents/images/matters-protected-at-scale.png',
    alt: 'Shield with checkmark icon representing protected intellectual property',
  },
  {
    title: 'Filed Internationally',
    description:
      'Patent applications cover key markets including India, UAE, Australia, USA, and Europe.',
    image: '/assets/ip-patents/images/matters-filed-internationally.png',
    alt: 'Globe icon representing international patent filings',
  },
  {
    title: 'Validated Externally',
    description:
      'Third-party validated through OPAL-RT, Typhoon HIL, DNV-GL, and ISO 27001.',
    image: '/assets/ip-patents/images/matters-validated-externally.png',
    alt: 'Award badge icon representing external validation',
  },
] as const

const IpPatentsMattersSection: React.FC<IpPatentsMattersSectionProps> = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Why Our IP Matters
        </p>

        <h2 className="mt-3 max-w-[36rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.04rem] text-[#1C1B1B] sm:mt-4 sm:text-3xl lg:text-[2.5rem] lg:tracking-[-0.06rem]">
          Innovation backed by evidence not claims.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:gap-6">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex items-center gap-4 rounded-[14px] border border-[#E8C4A0] bg-[#FAFAFA] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:gap-5 sm:p-5 lg:p-6"
            >
              <div className="relative h-14 w-14 shrink-0 sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]">
                <Image
                  src={reason.image}
                  alt={reason.alt}
                  fill
                  sizes="72px"
                  className="object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1rem] font-bold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
                  {reason.title}
                </h3>
                <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.45] text-[#1C1B1B] sm:mt-2 sm:text-[0.875rem]">
                  {reason.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IpPatentsMattersSection
