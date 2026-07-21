import React from 'react'
import Image from 'next/image'

export interface AuraBannerSectionProps {}

const AuraBannerSection: React.FC<AuraBannerSectionProps> = () => {
  return (
    <section id="aura-intelligence-banner" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="overflow-hidden rounded-[14px] bg-[#0B1B3A] px-5 py-8 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_1fr_0.95fr] lg:gap-8 xl:gap-12">
            <h2 className="max-w-[22rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.15] tracking-[-0.03rem] text-white sm:text-[1.9rem] lg:max-w-[24rem] lg:text-[2.35rem] lg:leading-[1.12] lg:tracking-[-0.05rem]">
              The Intelligence Behind Every Smart Energy Decision.
            </h2>

            <p className="max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] leading-[1.45] text-white/90 sm:text-base lg:justify-self-center">
              Solvyn AURA is the decision intelligence platform that empowers renewable and hybrid
              plants to operate smarter, earn more, and manage risk better — continuously and with
              full transparency.
            </p>

            <div className="relative mx-auto w-full max-w-[20rem] lg:mx-0 lg:max-w-none lg:justify-self-end">
              <Image
                src="/Images/aura-banner-exploded-view.png"
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
