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
    <section id="solvyn" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-start justify-between">
          <div>
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-bold uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.8125rem]">
              THE SOLVYN ARCHITECTURE
            </p>
            <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.3] tracking-[-0.06rem] text-[#1C1B1B] sm:text-3xl lg:text-[2.75rem] lg:leading-[1.3] lg:tracking-[-0.1rem]">
              From Field Data To Actionable Intelligence
            </h2>
          </div>

          <Link
            href="#"
            className="mt-2 inline-flex h-[40px] min-w-[168px] items-center justify-center rounded-[10px] border border-[#E8D7C7] bg-[#FBF5EE] px-4 [font-family:var(--font-ibm-plex-sans)] text-sm font-medium leading-[1] text-[#C9935B] shadow-[0px_3px_10px_0px_#DAAA7D30]"
          >
            Explore Solvyn <span className="ml-[8px]">-&gt;</span>
          </Link>
        </div>

        <div className="mt-6 grid grid-cols-5 gap-3">
          {solvynCards.map((card) => (
            <article
              key={`${card.titleLine1}-${card.titleLine2}`}
              className="rounded-[14px] border border-[#EACAA8] bg-[#FFFFFF] px-3 pb-3 pt-3 shadow-[0px_5px_14px_0px_#C9976633]"
            >
              <div className="mx-auto h-[120px] w-[120px]">
                <Image src={card.image} alt={`${card.titleLine1} ${card.titleLine2}`} width={223} height={239} className="h-full w-full object-contain" />
              </div>

              <h3 className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[22px] font-semibold leading-[1.08] tracking-[-0.01em] text-[#151515]">
                <span className="block">{card.titleLine1}</span>
                <span className="block">{card.titleLine2}</span>
              </h3>

              <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[14px] font-normal leading-[1.3] text-[#333333]">{card.subtitle}</p>

              <div className={`mt-3 grid gap-2 ${card.tags.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                {card.tags.map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    className="h-[30px] rounded-[8px] border border-[#EADBCB] bg-[#F8F1E9] px-2 text-center [font-family:var(--font-ibm-plex-sans)] text-[12px] font-medium leading-[1] text-[#C79B68]"
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
