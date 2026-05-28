import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface SolvynSectionProps {}

interface SolvynCard {
  titleLine1: string
  titleLine2: string
  subtitle: string
  image: string
  tags: string[]
}

const solvynCards: SolvynCard[] = [
  {
    titleLine1: 'Field',
    titleLine2: 'data capture',
    subtitle: 'Every asset. Every protocol',
    image: '/Images/solvyn_1.svg',
    tags: ['Solvyn X'],
  },
  {
    titleLine1: 'Autonomous',
    titleLine2: 'on-prem Control',
    subtitle: 'Every asset. Every protocol',
    image: '/Images/solvyn_2.svg',
    tags: ['EMS', 'SCADA'],
  },
  {
    titleLine1: 'Secure',
    titleLine2: 'one way sync',
    subtitle: 'OT isolated from cloud',
    image: '/Images/solvyn_3.svg',
    tags: ['Cybersecure OT/IT'],
  },
  {
    titleLine1: 'Centralized',
    titleLine2: 'cloud platform',
    subtitle: 'Infinite Scalability',
    image: '/Images/solvyn_4.svg',
    tags: ['Digital Twin', 'Studio'],
  },
  {
    titleLine1: 'AI-powered',
    titleLine2: 'optimization',
    subtitle: 'Actionable Intelligence',
    image: '/Images/solvyn_5.svg',
    tags: ['AURA'],
  },
]

const SolvynSection: React.FC<SolvynSectionProps> = () => {
  return (
    <section id="solvyn" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
              THE SOLVYN ARCHITECTURE
            </p>
            <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
              From Field Data To Actionable Intelligence
            </h2>
          </div>

          <Link
            href="#"
            className="group mt-2 inline-flex h-[40px] min-w-[168px] items-center justify-center gap-2 rounded-[10px] border border-[#FF7F0030] bg-[#FF7F0012] px-6 [font-family:var(--font-ibm-plex-sans)] text-sm font-medium leading-[1] text-[#FF7F00] shadow-[0px_8px_10px_0px_#FE7E064D] transition-all duration-200 hover:-translate-y-[1px] hover:border-[#FF7F00] hover:bg-[#FF7F00] hover:text-white hover:shadow-[0px_10px_14px_0px_#FE7E0660]"
          >
            <span>Explore Solvyn</span>
            <span aria-hidden="true" className="inline-flex items-center justify-center transition-transform duration-200 group-hover:translate-x-1">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 7H11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M7.5 3L11.5 7L7.5 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-3">
          {solvynCards.map((card) => (
            <article
              key={`${card.titleLine1}-${card.titleLine2}`}
              className="flex min-h-[320px] flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-3 pb-3 pt-3 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038]"
            >
              <div className="h-[150px] w-[150px]">
                <Image src={card.image} alt={`${card.titleLine1} ${card.titleLine2}`} width={223} height={239} className="h-full w-full object-contain" />
              </div>

              <h3 className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                <span className="block">{card.titleLine1}</span>
                <span className="block">{card.titleLine2}</span>
              </h3>

              <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.35] text-black">{card.subtitle}</p>

              <div className={`mt-auto grid gap-2 pt-2 ${card.tags.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {card.tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="h-[30px] rounded-[8px] border border-[#FF7F0030] bg-[#FF7F0012] px-2 text-center [font-family:var(--font-ibm-plex-sans)] text-sm font-medium leading-[1] text-[#FF7F00] transition-colors duration-200 hover:border-[#FF7F00] hover:bg-[#FF7F00] hover:text-white"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolvynSection
