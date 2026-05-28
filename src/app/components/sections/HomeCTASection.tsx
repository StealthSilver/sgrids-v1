import React from 'react'
import Image from 'next/image'

export interface HomeCTASectionProps {}

const HomeCTASection: React.FC<HomeCTASectionProps> = () => {
  return (
    <section id="home-cta" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto flex w-full max-w-[940px] flex-col items-center text-center">
        <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[2rem] font-semibold leading-[1.1] tracking-[-0.03rem] text-[#131313] sm:text-[2.5rem] lg:text-[3rem]">
          The Renewable Century Is Already Here.
        </h2>

        <p className="mt-4 max-w-[760px] [font-family:var(--font-ibm-plex-sans)] text-[1rem] leading-[1.3] text-[#000000] sm:text-[1.06rem]">
          95+ GW under management. 21+ grid codes. 14+ patents. Deployed across India and the UAE. If you&apos;re building, operating, or
          investing in renewable energy infrastructure let&apos;s talk.
        </p>

        <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[1rem] font-medium leading-[1.3] text-[#FF7F00] sm:text-[1.06rem]">#EnergyThatThinks</p>

        <div className="mt-8 w-full max-w-[740px]">
          <Image
            src="/Images/cta.svg"
            alt="Renewable energy infrastructure illustration"
            width={906}
            height={614}
            className="h-auto w-full object-contain"
            priority={false}
          />
        </div>
      </div>
    </section>
  )
}

export default HomeCTASection
