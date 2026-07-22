import React from 'react'
import Image from 'next/image'

export interface AuraBannerSectionProps {}

const AuraBannerSection: React.FC<AuraBannerSectionProps> = () => {
  return (
    <section id="aura-intelligence-banner" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-[20px] bg-[#0A162F] px-6 py-6 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-8 sm:py-7 lg:rounded-[24px] lg:px-12 lg:py-8">
          <div className="grid items-center gap-6 sm:gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.15fr)_auto] lg:gap-10 xl:gap-14">
            <h2 className="max-w-[16.5rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.15] tracking-[-0.03rem] text-white sm:max-w-[18rem] sm:text-[1.75rem] lg:max-w-[17.5rem] lg:text-[2rem] lg:leading-[1.12] lg:tracking-[-0.04rem] xl:text-[2.15rem]">
              The Intelligence Behind Every Smart Energy Decision.
            </h2>

            <p className="max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.5] text-white/85 sm:text-[0.9375rem] lg:max-w-[32rem] lg:justify-self-start lg:text-[1rem] lg:leading-[1.45]">
              Solvyn AURA is the decision intelligence platform that empowers renewable and hybrid
              plants to operate smarter, earn more, and manage risk better, continuously and with
              full transparency.
            </p>

            <div className="relative mx-auto w-[11.5rem] shrink-0 sm:w-[13rem] lg:mx-0 lg:w-[14.5rem] xl:w-[15.5rem]">
              <Image
                src="/assets/aura/images/banner-exploded-view.png"
                alt="AURA decision intelligence dashboard with charts and analytics"
                width={640}
                height={480}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AuraBannerSection
