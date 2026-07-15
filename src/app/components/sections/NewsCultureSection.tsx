import React from 'react'
import Link from 'next/link'

export interface NewsCultureSectionProps {}

const moments = [
  {
    label: 'Solvyn Launch · REI 2025 · Oct 2025',
    background: '#B45309',
  },
  {
    label: 'WFES · Abu Dhabi · Jan 2026',
    background: '#0B1B3A',
  },
  {
    label: 'E-World · Feb 2026',
    background: '#166534',
  },
  {
    label: 'GUVNL Winner · Jan 2026',
    background: '#4338CA',
  },
  {
    label: 'Forbes India · May 2026',
    background: '#9F1239',
  },
  {
    label: 'Intersolar NA · Feb 2026',
    background: '#A16207',
  },
] as const

const NewsCultureSection: React.FC<NewsCultureSectionProps> = () => {
  return (
    <section id="team-culture" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Team &amp; Culture
          </h2>

          <Link
            href="#team-culture"
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
          {moments.map((moment) => (
            <article
              key={moment.label}
              className="relative flex aspect-[16/10] items-end overflow-hidden rounded-[14px] p-4 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-transform duration-200 hover:-translate-y-1 sm:p-5"
              style={{ backgroundColor: moment.background }}
            >
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1.35] text-white sm:text-[0.875rem]">
                {moment.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsCultureSection
