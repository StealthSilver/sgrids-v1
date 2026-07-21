import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface CaseStudiesFeaturedSectionProps {}

const metrics = [
  { value: '405 MW', label: 'Total' },
  { value: '244 MW', label: 'Wind' },
  { value: '242 MW', label: 'Solar' },
  { value: '135 MW', label: 'BESS' },
] as const

const tags = ['Hybrid EMS', 'AURA', 'Solvyn SCADA', 'CEA Compliant', 'India'] as const

const CaseStudiesFeaturedSection: React.FC<CaseStudiesFeaturedSectionProps> = () => {
  return (
    <section id="featured-deployment" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
          <div className="min-w-0">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
              FEATURED DEPLOYMENT
            </p>

            <div className="mt-4 inline-flex h-7 items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
                LARGEST DEPLOYMENT
              </span>
            </div>

            <h2 className="mt-4 max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
              Intelligent Hybrid EMS for Kurnool Hybrid Plant
            </h2>

            <p className="mt-4 max-w-[34rem] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.45] text-[#4E4E4E] sm:text-base">
              An in-depth analysis of how large-scale data centers are being repositioned as active
              grid participants covering global regulatory frameworks, technical requirements, and
              the engineering implications of operating data centers as Virtual Power Plants under
              emerging grid codes.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-y-4 sm:mt-8 sm:grid-cols-4 sm:gap-0">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`flex flex-col ${
                    index > 0 ? 'sm:border-l sm:border-[#E0D8D0] sm:pl-4 xl:pl-5' : ''
                  }`}
                >
                  <span className="[font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-bold leading-[1.1] tracking-[-0.02rem] text-[#FF7F00] sm:text-[1.25rem]">
                    {metric.value}
                  </span>
                  <span className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.3] text-[#1C1B1B] sm:text-[0.875rem]">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2 sm:mt-7">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center justify-center rounded-full border border-[#FF7F00] bg-white px-3.5 py-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium leading-[1] text-[#1C1B1B] sm:text-[0.8125rem]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-7 sm:mt-8">
              <Link
                href="#featured-deployment"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7F00] px-6 py-2 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)]"
              >
                Read Full Case Study
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[32rem] lg:max-w-none">
            <Image
              src="/Images/case-studies-featured.png"
              alt="Kurnool Hybrid Plant — Wind, Solar, and BESS orchestrated by Solvyn Hybrid EMS, AURA, and SCADA"
              width={920}
              height={954}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesFeaturedSection
