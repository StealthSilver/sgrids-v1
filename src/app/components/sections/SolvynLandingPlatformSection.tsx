import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface SolvynLandingPlatformSectionProps {}

const SolvynLandingPlatformSection: React.FC<SolvynLandingPlatformSectionProps> = () => {
  return (
    <section id="the-platform" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
        <div className="max-w-[34rem]">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            THE PLATFORM
          </p>
          <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Not a suit of tool. An operating system.
          </h2>
          <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
            Most energy software was built in pieces a monitoring tool here, a scheduler there, an
            analytics layer bolted on later. Each piece solves one problem. None speak to each other.
            Solvyn was built differently. Every layer is purpose-built. Every layer is integrated.
            This is not integration by API. It is coherence by design.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-4 py-4 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-5">
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF7F0026] text-[#FF7F00]"
            >
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 2.5L9.2 6.2L13 6.5L10.2 9L11 12.8L8 10.8L5 12.8L5.8 9L3 6.5L6.8 6.2L8 2.5Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[14px] font-medium leading-[1.4] text-[#1C1B1B] sm:text-[15px]">
              From field protocols to market dispatch. From alarm to guided action. From raw telemetry
              to operational intelligence. One platform. One operating model.
            </p>
          </div>
        </div>

        <div className="relative w-full overflow-hidden rounded-[14px] border border-[#EFE6DF] bg-[#0B0B0B] shadow-[0px_7.72px_9.64px_0px_#FF6A0026]">
          <Image
            src={assetUrl('/assets/solvyn/images/platform.png')}
            alt="Solvyn platform SCADA dashboard overview"
            width={1400}
            height={900}
            className="h-auto w-full object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}

export default SolvynLandingPlatformSection
