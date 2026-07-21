import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface NewsCultureSectionProps {}

const moments = [
  {
    label: 'Solvyn Launch · REI 2025 · Oct 2025',
    background: '#B45309',
    image: '/Images/news-culture-solvyn-launch-rei-2025.png',
  },
  {
    label: 'WFES · Abu Dhabi · Jan 2026',
    background: '#0B1B3A',
    image: '/Images/news-culture-wfes-abu-dhabi-2026.png',
  },
  {
    label: 'E-World · Feb 2026',
    background: '#166534',
    image: '/Images/news-culture-e-world-2026.png',
  },
  {
    label: 'GUVNL Winner · Jan 2026',
    background: '#4338CA',
    image: '/Images/news-culture-guvnl-winner-2026.png',
  },
  {
    label: 'Forbes India · May 2026',
    background: '#9F1239',
    image: '/Images/news-culture-forbes-india-2026.png',
  },
  {
    label: 'Bharat Electricity Summit 2026',
    background: '#A16207',
    image: '/Images/news-culture-bharat-electricity-summit-2026.png',
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
              className="flex flex-col overflow-hidden rounded-[14px] p-1.5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-transform duration-200 hover:-translate-y-1"
              style={{ backgroundColor: moment.background }}
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px]">
                <Image
                  src={moment.image}
                  alt={moment.label}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <p className="px-2.5 py-2.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1.35] text-white sm:text-[0.875rem]">
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
