import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface WhitePaperLatestSectionProps {}

const topics = [
  'Global Regulatory And Grid Code Landscape For Data Centres',
  'Technical And Operational Implications For Data Centre Operators',
  'Emerging And Underexplored Research Topics',
  'Recommendations For Data Centre Operators And Ecosystem Stakeholders',
  'AURA EDGE DC, AI-Based Grid Orchestration For Data Centres',
] as const

const WhitePaperLatestSection: React.FC<WhitePaperLatestSectionProps> = () => {
  return (
    <section id="white-papers" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-7xl items-stretch gap-5 sm:gap-6 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 xl:gap-10">
        <article className="flex flex-col overflow-hidden rounded-[14px] bg-[#0B1B3A] px-5 py-7 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-7 sm:py-8 lg:px-8 lg:py-9">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            LATEST RESEARCH
          </p>

          <div className="mt-4 inline-flex h-7 w-fit items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1">
            <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
              23 PAGES • OCTOBER 2025
            </span>
          </div>

          <h2 className="mt-5 max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-white sm:text-[1.9rem] lg:text-[2.15rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Data Centers as &quot;Virtual Power Plants&quot; Emerging Grid Code Requirements
          </h2>

          <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-medium leading-[1.4] text-white/80 sm:text-[0.875rem]">
            Prepared by Kumar M • Smart Grid Analytics
          </p>

          <p className="mt-4 max-w-[34rem] flex-1 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.45] text-white/75 sm:text-base">
            An in-depth analysis of how large-scale data centers are being repositioned as active
            grid participants covering global regulatory frameworks, technical requirements, and
            the engineering implications of operating data centers as Virtual Power Plants under
            emerging grid codes.
          </p>

          <div className="mt-7 sm:mt-8">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7F00] px-6 py-2 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)]"
            >
              Download PDF
              <span aria-hidden="true" className="text-base leading-none">
                ↓
              </span>
            </Link>
          </div>
        </article>

        <div className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFF8F2] px-4 py-5 sm:px-5 sm:py-6 lg:px-6 lg:py-7">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            WHAT THIS PAPER COVERS
          </p>

          <ul className="mt-5 flex flex-1 flex-col gap-2.5 sm:gap-3">
            {topics.map((topic, index) => {
              const number = String(index + 1).padStart(2, '0')

              return (
                <li
                  key={topic}
                  className="flex items-center gap-3 rounded-[12px] border border-[#EFE6DF] bg-[#FFFFFF] px-3.5 py-3.5 shadow-[0px_4px_10px_0px_#FF6A0014] sm:gap-4 sm:px-4 sm:py-4"
                >
                  <span className="shrink-0 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-bold leading-[1] tracking-[-0.01rem] text-[#FF7F00] sm:text-[1rem]">
                    {number}
                  </span>
                  <p className="min-w-0 flex-1 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-medium leading-[1.35] text-[#1C1B1B] sm:text-[0.875rem]">
                    {topic}
                  </p>
                  <Image
                    src="/assets/shared/icons/view-eye.svg"
                    alt=""
                    width={22}
                    height={14}
                    className="h-3.5 w-auto shrink-0 sm:h-4"
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default WhitePaperLatestSection
