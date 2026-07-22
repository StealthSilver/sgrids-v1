import React from 'react'
import Image from 'next/image'

export interface IpPatentsStackSectionProps {}

const IpPatentsStackSection: React.FC<IpPatentsStackSectionProps> = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Four Domains
        </p>

        <h2 className="mt-3 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.04rem] text-[#1C1B1B] sm:mt-4 sm:text-3xl lg:text-[2.5rem] lg:tracking-[-0.06rem]">
          Where IP Protection sits in the Solvyn stack
        </h2>

        <p className="mt-4 max-w-[42rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
          The innovations across the Solvyn platform are protected by SGA&apos;s growing patent
          portfolio covering the most technically distinctive layers of the system.
        </p>

        <div className="mt-8 sm:mt-10 lg:mt-12">
          <Image
            src="/assets/ip-patents/images/stack-diagram.png"
            alt="Where IP protection sits in the Solvyn stack — EMS Optimisation, DSM & Deviation Settlement, BESS and Solar Digital Twin, Virtual Power Quality Meter, and Data Foundation"
            width={1600}
            height={1200}
            className="h-auto w-full object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default IpPatentsStackSection
