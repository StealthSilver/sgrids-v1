import React from 'react'
import Link from 'next/link'
import { navRequestDemo } from '@/app/data/nav.data'

export interface EmsCTASectionProps {}

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

const EmsCTASection: React.FC<EmsCTASectionProps> = () => {
  return (
    <section id="ems-cta" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-8 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-10 lg:py-12">
          <h2 className="min-w-0 shrink-0 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:max-w-[18rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            <span className="block">
              Built for <span className="text-[#FF7F00]">Performance.</span>
            </span>
            <span className="block">
              Engineered for <span className="text-[#FF7F00]">Reliability.</span>
            </span>
          </h2>

          <p className="min-w-0 flex-1 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.45] text-[#1C1B1B] sm:text-base lg:max-w-[28rem]">
            Solvyn EMS Empowers Utilities And IPPs With The Visibility, Control, And Automation Needed
            For Tomorrow&apos;s Grid — Across Every Asset Class, Every Grid Code, And Every Market
            Condition.
          </p>

          <div className="flex shrink-0 lg:justify-end">
            <Link
              href={navRequestDemo.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7F00] px-5 py-2 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)] sm:px-6"
            >
              <CalendarIcon />
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EmsCTASection
