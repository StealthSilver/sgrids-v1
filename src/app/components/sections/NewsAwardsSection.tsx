import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface NewsAwardsSectionProps {}

const awards = [
  {
    label: 'WINNER',
    title: 'Smart Planning & Management Of BESS ElectronVibe 2025 / GUVNL',
    description:
      'Won at the GUVNL Track Showcase inaugurated by PM Narendra Modi recognizing intelligent storage planning and grid-aligned control.',
    meta: 'COEET • GUVNL • ELECTRONVIBE • JAN 2026',
  },
  {
    label: 'WINNER',
    title: 'Smart Meter Data Analytics For Revenue Protection AP Cohort',
    description:
      'Selected winner from 50+ startups for SGA RAVEN real-time theft detection, billing anomaly identification, and revenue protection for DISCOMs.',
    meta: 'COEET • APEPDCL • ELECTRONVIBE • DEC 2025',
  },
  {
    label: 'COVER FEATURE',
    title: 'Top Climate Tech Startups 2026 SiliconIndia Magazine',
    description:
      "Cover feature recognising Smart Grid Analytics and the Solvyn platform among India's leading climate tech companies.",
    meta: 'SILICONINDIA • FEB 2026',
  },
  {
    label: 'GREAT PLACES TO WORK',
    title: 'Forbes India Leading Workplace Excellence',
    description:
      'Recognized by Forbes India for purpose, culture, and progress organizations that priorities people and set new benchmarks in workplace excellence.',
    meta: 'FORBES INDIA • APR–MAY 2026',
  },
] as const

const NewsAwardsSection: React.FC<NewsAwardsSectionProps> = () => {
  return (
    <section id="awards-recognition" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Awards &amp; Recognition
          </h2>

          <Link
            href="#awards-recognition"
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

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-5 lg:mt-12 lg:gap-6">
          {awards.map((award) => (
            <article
              key={award.title}
              className="flex gap-4 rounded-[14px] border border-[#E8C4A0] bg-[#FAFAFA] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:gap-5 sm:p-5"
            >
              <Image
                src="/Images/newsstrike.png"
                alt=""
                aria-hidden="true"
                width={160}
                height={160}
                className="h-16 w-16 shrink-0 object-contain sm:h-20 sm:w-20"
              />

              <div className="min-w-0 flex-1">
                <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-medium uppercase leading-[1] tracking-[0.04rem] text-[#7F7F7F] sm:text-[0.75rem]">
                  {award.label}
                </p>

                <h3 className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[1rem] font-bold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
                  {award.title}
                </h3>

                <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.45] text-[#7F7F7F] sm:text-[0.875rem]">
                  {award.description}
                </p>

                <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-semibold uppercase leading-[1.3] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.75rem]">
                  {award.meta}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsAwardsSection
