import React from 'react'
import Image from 'next/image'

export interface SolvynLandingMarketSectionProps {}

const cards = [
  {
    title: 'Fragmented Systems',
    description: 'Every Asset Speaks A Different Language.',
    image: '/assets/solvyn/images/market-fragmented-systems.png',
    dark: false,
  },
  {
    title: 'Hybrid Complexity',
    description: 'Markets, Compliance, And BESS Simultaneously.',
    image: '/assets/solvyn/images/market-hybrid-complexity.png',
    dark: false,
  },
  {
    title: 'The Intelligence Gap',
    description: "Knowing What Happened Isn't Enough.",
    image: '/assets/solvyn/images/market-intelligence-gap.png',
    dark: false,
  },
  {
    title: 'Solvyn Closes Every Gap.',
    description: 'One Platform. Every Layer.',
    image: '/assets/solvyn/images/market-closes-gap.png',
    dark: true,
  },
] as const

const SolvynLandingMarketSection: React.FC<SolvynLandingMarketSectionProps> = () => {
  return (
    <section id="market-realities" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          WHY IT EXISTS
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Energy Operations Have Outgrown Legacy Control Systems.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <article
              key={card.title}
              className={`flex flex-col rounded-[14px] px-5 py-5 transition-all duration-200 hover:-translate-y-1 sm:px-6 sm:py-6 ${
                card.dark
                  ? 'border border-[#1C1B1B] bg-[#111827] text-white shadow-[0px_7.72px_9.64px_0px_#00000040]'
                  : 'border border-[#EFE6DF] bg-[#FFFFFF] shadow-[0px_7.72px_9.64px_0px_#FF6A0026] hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038]'
              }`}
            >
              <div className="flex h-[120px] w-full items-center justify-center sm:h-[140px]">
                <Image
                  src={card.image}
                  alt=""
                  width={280}
                  height={240}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>
              <h3
                className={`mt-4 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] ${
                  card.dark ? 'text-white' : 'text-[#131313]'
                }`}
              >
                {card.title}
              </h3>
              <p
                className={`mt-2 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] ${
                  card.dark ? 'text-[#D1D5DB]' : 'text-[#4E4E4E]'
                }`}
              >
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolvynLandingMarketSection
