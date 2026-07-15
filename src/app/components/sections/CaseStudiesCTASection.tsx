import React from 'react'
import Link from 'next/link'
import { navContact, navRequestDemo } from '@/app/data/nav.data'

export interface CaseStudiesCTASectionProps {}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 6.5H14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 2V4.5M11 2V4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10.5" cy="10.5" r="2.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10.5 9.5V10.5L11.25 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

function ChatIcon() {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className="h-14 w-14 text-[#FF7F00] sm:h-16 sm:w-16 lg:h-[4.5rem] lg:w-[4.5rem]"
    >
      <path
        d="M18 16H42C47.5228 16 52 20.4772 52 26V36C52 41.5228 47.5228 46 42 46H32L22 54V46H18C12.4772 46 8 41.5228 8 36V26C8 20.4772 12.4772 16 18 16Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
      />
      <path
        d="M30 24H54C59.5228 24 64 28.4772 64 34V44C64 49.5228 59.5228 54 54 54H50V62L40 54H30C24.4772 54 20 49.5228 20 44V34C20 28.4772 24.4772 24 30 24Z"
        stroke="currentColor"
        strokeWidth="3.5"
        strokeLinejoin="round"
        fill="white"
      />
      <circle cx="36" cy="39" r="2.25" fill="currentColor" />
      <circle cx="42" cy="39" r="2.25" fill="currentColor" />
      <circle cx="48" cy="39" r="2.25" fill="currentColor" />
    </svg>
  )
}

const CaseStudiesCTASection: React.FC<CaseStudiesCTASectionProps> = () => {
  return (
    <section id="case-studies-cta" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-8 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:gap-10 lg:px-10 lg:py-12">
          <div className="shrink-0">
            <ChatIcon />
          </div>

          <div className="min-w-0 flex-1">
            <h2 className="max-w-[34rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
              Want to see what Solvyn can do for your plant?
            </h2>
            <p className="mt-4 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#1C1B1B] sm:text-base">
              Talk to our team about your asset type, grid environment, and commercial objectives.
              We&apos;ll show you the most relevant deployments.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href={navRequestDemo.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7F00] px-5 py-2 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)] sm:px-6"
              >
                <CalendarIcon />
                Book a Demo
              </Link>

              <Link
                href={navContact.href}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#FF7F00] bg-[#FFFFFF] px-5 py-2 text-sm font-semibold leading-5 tracking-[0rem] text-[#1C1B1B] transition-colors duration-200 hover:bg-[#FF7F00] hover:text-white [font-family:var(--font-ibm-plex-sans)] sm:px-6"
              >
                Talk to an Expert
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesCTASection
