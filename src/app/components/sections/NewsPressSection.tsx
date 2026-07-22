import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface NewsPressSectionProps {}

const pressItems = [
  {
    source: 'India Energy Storage Alliance (IESA)',
    description:
      "Proud To See Kumar M Contributing To The Future Of India's Energy Storage Ecosystem Through IESA.",
    date: '02-06-2026',
    cta: 'READ',
  },
  {
    source: 'ET Edge',
    description:
      'Smart Grid Analytics Featured In ET Edge. Showcasing Our Vision For A Smarter, More Connected, And Resilient Energy Future.',
    date: '15-05-2026',
    cta: 'READ',
  },
  {
    source: 'Forbes',
    description:
      "Honored To Be Recognized By Forbes India For Our Commitment To Building The Intelligence Behind Tomorrow's Energy Systems.",
    date: '02-05-2026',
    cta: 'READ',
  },
  {
    source: 'Forbes India',
    description:
      'Featured In Forbes India Great Places To Work, Leading Workplace Excellence, Recognising People-First Culture And Progress.',
    date: '28-04-2026',
    cta: 'READ',
  },
  {
    source: 'REI RenewX',
    description:
      'Highlights From The Bengaluru Press Conference, Venkata Krishnan On How Solvyn And AURA Enable Smarter, Data-Driven Grid Operations.',
    date: '08-04-2026',
    cta: 'READ',
  },
  {
    source: 'Renewable Watch',
    description:
      'Executive Profile: Venkata Krishnan, Co-Founder & CGO, Featured In Renewable Watch Magazine On Grid Intelligence And Clean Energy.',
    date: '14-08-2023',
    cta: 'READ',
  },
  {
    source: 'Stationary Energy Storage India',
    description:
      'Kumar M Presents "Orchestrating The Renewable Future", EMS For Solar, Wind, PCS & BESS Integration.',
    date: '20-03-2026',
    cta: 'READ',
  },
  {
    source: 'India AI',
    description:
      'Featured In The India AI Impact Summit Compendium, Real-World Impact Of AI In Energy. Intelligence Across Operational Power Systems.',
    date: '19-02-2026',
    cta: 'READ',
  },
  {
    source: 'Silicon India Magazine',
    description:
      'Kumar M Featured, Leadership Driving Smarter, More Resilient Energy Systems (StartUp India Cover).',
    date: '06-03-2026',
    cta: 'READ',
  },
  {
    source: 'E-World Energy & Water',
    description:
      'The Transition Is Accelerating. Capacity Is Expanding. Real-Time, Grid-Aware Intelligence Is The Next Frontier.',
    date: '18-02-2026',
    cta: 'READ',
  },
  {
    source: 'Vibrant Gujarat · GUVNL',
    description:
      'Winner At The GUVNL Track Showcase, Smart Planning & Management Of BESS, Recognised At Vibrant Gujarat Regional Conference.',
    date: '15-01-2026',
    cta: 'READ',
  },
  {
    source: 'APEPDCL · AP Cohort',
    description:
      'Selected As The Winner From 50+ Startups, Smart Meter Data Analytics For Revenue Protection In The AP Cohort.',
    date: '18-12-2025',
    cta: 'READ',
  },
  {
    source: 'The O&M Conference 2025',
    description:
      "India's Renewable Future Depends On Accurate Forecasting And Smarter Scheduling, SGA On The O&M Of Solar Power Plants Panel.",
    date: '02-12-2025',
    cta: 'READ',
  },
  {
    source: 'Team Recognition',
    description:
      'SGA RAVEN Team Honoured, Recognition For Real-Time Theft Detection, Billing Anomaly Identification, And Revenue Protection.',
    date: '28-11-2025',
    cta: 'READ',
  },
  {
    source: 'WFES 2026 · Abu Dhabi',
    description:
      'SGA On The Global Stage, Panel Conversations On The Energy Transition At The World Future Energy Summit 2026.',
    date: '14-01-2026',
    cta: 'READ',
  },
] as const

const NewsPressSection: React.FC<NewsPressSectionProps> = () => {
  return (
    <section id="press-media" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
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
          {pressItems.map((item, index) => (
            <article
              key={item.source}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] p-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:p-6"
            >
              <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-bold leading-[1.3] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.1875rem]">
                {item.source}
              </h3>

              <div className="relative mt-4 aspect-[9/10] w-full overflow-hidden rounded-[8px]">
                <Image
                  src={`/assets/news/images/press-${String(index + 1).padStart(2, "0")}.png`}
                  alt={item.source}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>

              <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.7] text-[#1C1B1B] sm:text-[0.9375rem]">
                {item.description}
              </p>

              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium leading-[1] tracking-[0.02rem] text-[#9A9A9A] sm:text-[0.8125rem]">
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
