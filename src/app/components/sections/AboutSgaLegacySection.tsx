import React from 'react'

export interface AboutSgaLegacySectionProps {}

const cards = [
  {
    title: 'Deep Roots In Controls Engineering',
    description:
      'Two decades building real-time control systems for renewable plants SCADA, automation, and grid-interface logic engineered from first principles.',
  },
  {
    title: "India's First Hybrid PPC/EMS",
    description:
      'Pioneered hybrid plant control in India coordinating solar, wind, and storage before the industry had a standard for it.',
  },
  {
    title: 'Global Deployment At Scale',
    description:
      'Projects across Somalia, Zambia, Vietnam, Jordan, Kenya, Oman, Chile every deployment deepening our grid-code and operational expertise.',
  },
  {
    title: 'Solvyn The Platform That Legacy Built',
    description:
      "Everything learned in the field is now embedded in Solvyn. Not a startup product. An engineer's product, refined over 20 years.",
  },
] as const

const AboutSgaLegacySection: React.FC<AboutSgaLegacySectionProps> = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          20 Years Of Legacy
        </p>
        <h2 className="mt-4 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          From field controllers to an AI-native platform.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12">
          {cards.map((card) => (
            <article
              key={card.title}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
                {card.title}
              </h3>
              <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.45] text-[#7F7F7F] sm:text-[0.9375rem]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSgaLegacySection
