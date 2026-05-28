import React from 'react'
import Image from 'next/image'

export interface ReasonSectionProps {}

interface ReasonCard {
  title: string
  image: string
}

const reasonCards: ReasonCard[] = [
  { title: 'Truly Agnostic', image: '/Images/reason_1.svg' },
  { title: 'Compliance Built in', image: '/Images/reason_2.svg' },
  { title: '14+ Patents', image: '/Images/reason_3.svg' },
  { title: 'Proven at Scale', image: '/Images/reason_4.svg' },
]

const reasonCardHoverDescription =
  'Connect to any inverter, BMC, PPC, or OEM, no vendor lock in no proprietary hardware.'

const ReasonSection: React.FC<ReasonSectionProps> = () => {
  return (
    <section id="reason" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          WHY SMART GRID ANALYTICS
        </p>

        <h2 className="mt-4 max-w-[760px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          <span className="block">Not Vendors.</span>
          <span className="block">
            Partners In The <span className="text-[#FF7F00]">Energy Transition.</span>
          </span>
        </h2>

        <p className="mt-4 max-w-[620px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.35] text-black">
          We build what the grid needs, with deep domain know-how, proven innovation, and a track record that speaks for itself.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {reasonCards.map((card) => (
            <article
              key={card.title}
              className="group flex h-[250px] flex-col overflow-hidden rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] p-3 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038]"
            >
              <div className="flex h-[180px] items-center justify-start origin-top-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-[0.76]">
                <Image src={card.image} alt={card.title} width={280} height={180} className="h-full w-full max-w-[250px] object-contain object-left" />
              </div>

              <div className="relative mt-1 min-h-[48px]">
                <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-6">
                  {card.title}
                </h3>
                <p className="pointer-events-none absolute left-0 right-0 top-5 [font-family:var(--font-ibm-plex-sans)] text-[12px] leading-[1.35] text-[#232323] opacity-0 translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0 group-hover:opacity-100">
                  {reasonCardHoverDescription}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReasonSection
