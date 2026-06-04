import React from 'react'
import Image from 'next/image'

export interface HomeCTASectionProps {}

const HomeCTASection: React.FC<HomeCTASectionProps> = () => {
  return (
    <section id="home-cta" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between sm:gap-10 lg:gap-12">
        <div className="min-w-0 flex-1 text-left">
          <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[2rem] font-semibold leading-[1.1] tracking-[-0.03rem] text-[#131313] sm:text-[2.5rem] lg:text-[3rem]">
            <span className="block">The Renewable Century Is</span>
            <span className="block">Already Here.</span>
          </h2>

          <p className="mt-4 max-w-[640px] [font-family:var(--font-ibm-plex-sans)] text-[1rem] leading-[1.3] text-[#000000] sm:text-[1.06rem]">
            95+ GW under management. 21+ grid codes. 14+ patents. Deployed across India and the UAE. If you&apos;re building, operating, or
            investing in renewable energy infrastructure let&apos;s talk.
          </p>

          <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[1rem] font-medium leading-[1.3] text-[#FF7F00] sm:text-[1.06rem]">#EnergyThatThinks</p>
        </div>

        <div className="flex shrink-0 justify-center sm:justify-end">
          <Image
            src="/Images/cta.svg"
            alt="Renewable energy infrastructure illustration"
            width={906}
            height={614}
            className="h-auto w-[360px] object-contain sm:w-[460px] lg:w-[560px]"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeCTASection
