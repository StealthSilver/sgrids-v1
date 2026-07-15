import React from 'react'
import Link from 'next/link'

export interface NewsCTASectionProps {}

const NewsCTASection: React.FC<NewsCTASectionProps> = () => {
  return (
    <section id="news-stay-updated" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-col gap-6 rounded-[14px] border border-[#EFE6DF] bg-[#FAFAFA] px-5 py-8 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-12">
          <div className="min-w-0 flex-1">
            <h2 className="max-w-[34rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
              Stay in the loop.
            </h2>
            <p className="mt-3 max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#1C1B1B] sm:mt-4 sm:text-base">
              New Press, Events, And Deployments Direct To Your Inbox.
              <br />
              No Noise.
            </p>
          </div>

          <div className="flex w-full shrink-0 flex-col gap-3 sm:w-auto sm:min-w-[14rem]">
            <Link
              href="#news-stay-updated"
              className="inline-flex items-center justify-center rounded-full bg-[#FF7F00] px-5 py-2 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)] sm:px-6"
            >
              Subscribe to Updates
            </Link>

            <Link
              href="https://www.linkedin.com/company/smart-grid-analytics/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#FF7F00] bg-[#FFFFFF] px-5 py-2 text-sm font-semibold leading-5 tracking-[0rem] text-[#1C1B1B] transition-colors duration-200 hover:bg-[#FF7F00] hover:text-white [font-family:var(--font-ibm-plex-sans)] sm:px-6"
            >
              Follow on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsCTASection
