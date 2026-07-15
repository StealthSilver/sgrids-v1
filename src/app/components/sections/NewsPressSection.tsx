import React from 'react'
import Link from 'next/link'

export interface NewsPressSectionProps {}

const pressItems = [
  {
    source: 'Forbes India',
    title:
      'Featured Among Leading Companies Shaping The Future Of Business Innovation Solvyn, AI, EMS, Digital Twins',
    date: 'MAY 2026',
    cta: 'READ',
  },
  {
    source: 'ET Edge',
    title:
      "Building India's Digital Energy Infrastructure Unifying Data Across Assets, Grids, And Markets Through Solvyn",
    date: 'MAY 15 2026',
    cta: 'READ',
  },
  {
    source: 'India AI',
    title:
      'Featured In The Casebook On AI Deploying Intelligence Across Operational Power Systems, Not Pilots. 95+ GW. 4.5+ GWh.',
    date: 'FEB 2026',
    cta: 'READ',
  },
  {
    source: 'Silicon India Magazine',
    title:
      'Kumar M Featured Leadership Driving Smarter, More Resilient Energy Systems (StartUp India Cover)',
    date: 'MAR 6 2026',
    cta: 'READ',
  },
  {
    source: 'Financial Times / Power Sector News',
    title:
      'Solar Curtailment: India Lost 2.3 TWh In 2025 Solvyn AURA And EMS As The Solution',
    date: 'JAN 2026',
    cta: 'READ',
  },
  {
    source: 'Tracxn',
    title: 'Smart Grid Analytics Company Profile And Funding Coverage Updated',
    date: 'MAR 19 2026',
    cta: 'VIEW',
  },
  {
    source: 'PR Newswire',
    title: 'Smart Grid Analytics Funding Announcement Solvyn Platform Scaling Globally',
    date: 'OCT 28 2025',
    cta: 'READ',
  },
  {
    source: 'Pulse 2.0',
    title: "Funding And Solvyn Platform Feature India's Unified Renewable Operating System",
    date: 'NOV 3 2025',
    cta: 'READ',
  },
  {
    source: 'IoT M2M Council • Compute Forecast',
    title:
      'Funding Coverage Smart Grid Analytics Secures Seed Capital To Accelerate Solvyn Development',
    date: 'NOV 2025',
    cta: 'READ',
  },
  {
    source: 'Renewable Watch',
    title: 'Executive Profile: Venkata Krishnan Grid Intelligence And The Future Of Clean Energy',
    date: 'AUG 14 2023',
    cta: 'READ',
  },
] as const

const NewsPressSection: React.FC<NewsPressSectionProps> = () => {
  return (
    <section id="press-media" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Press &amp; Media
          </h2>

          <Link
            href="#press-media"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-2 text-sm font-semibold leading-5 tracking-[0rem] text-[#1C1B1B] transition-colors duration-200 hover:border-[#FF7F00] hover:bg-[#FFF8F2] [font-family:var(--font-ibm-plex-sans)]"
          >
            View All
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {pressItems.map((item) => (
            <article
              key={`${item.source}-${item.date}`}
              className="flex min-h-[16rem] flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:min-h-[17.5rem] sm:p-6"
            >
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-bold leading-[1.3] text-[#1C1B1B] sm:text-[0.9375rem]">
                {item.source}
              </p>

              <h3 className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-bold leading-[1.3] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.1875rem] sm:leading-[1.28]">
                {item.title}
              </h3>

              <div className="mt-auto flex items-center justify-between gap-3 pt-6">
                <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#9A9A9A] sm:text-[0.75rem]">
                  {item.date}
                </span>
                <Link
                  href="#press-media"
                  className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1] tracking-[0.04rem] text-[#FF7F00] transition-colors duration-200 hover:text-[#E67300] sm:text-[0.75rem]"
                >
                  {item.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsPressSection
