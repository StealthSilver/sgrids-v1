import React from 'react'
import Link from 'next/link'
import { navContact } from '@/app/data/nav.data'

export interface CareersOpeningsSectionProps {}

const openings = [
  {
    title: 'Senior Software Engineer, EMS Platform',
    tags: ['Engineering', 'Full-time', 'Bengaluru'],
  },
  {
    title: 'Senior Software Engineer, EMS Platform',
    tags: ['Engineering', 'Full-time', 'Bengaluru'],
  },
  {
    title: 'Senior Software Engineer, EMS Platform',
    tags: ['Engineering', 'Full-time', 'Bengaluru'],
  },
] as const

const CareersOpeningsSection: React.FC<CareersOpeningsSectionProps> = () => {
  return (
    <section id="open-roles" className="bg-[#FFFFFF] px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Current Openings
        </p>

        <div className="mt-5 flex flex-col gap-3 sm:mt-6 sm:gap-4 lg:mt-7">
          {openings.map((opening, index) => (
            <article
              key={`${opening.title}-${index}`}
              className="flex flex-col gap-4 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:px-6 sm:py-6 lg:px-7"
            >
              <div className="min-w-0">
                <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-bold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
                  {opening.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {opening.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center justify-center rounded-full border border-[#FF7F00] bg-[#FFFFFF] px-3 py-1 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium leading-[1] text-[#1C1B1B] sm:text-[0.8125rem]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <Link
                href={navContact.href}
                className="group inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-full border border-[#FF7F00] bg-[#FFFFFF] px-5 py-2 text-sm font-semibold leading-5 tracking-[0rem] text-[#1C1B1B] transition-colors duration-200 hover:bg-[#FF7F00] hover:text-white [font-family:var(--font-ibm-plex-sans)] sm:self-center sm:px-6"
              >
                Talk to an Expert
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CareersOpeningsSection
