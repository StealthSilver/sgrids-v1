import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface SolvynLandingBuiltForSectionProps {}

const audiences = [
  {
    title: 'IPPs And Asset Owners',
    description:
      'Maximise revenue, protect battery life, enforce compliance, and gain full portfolio visibility without a separate toolchain for each plant.',
    image: assetUrl('/assets/solvyn/images/audience-ipps.png'),
  },
  {
    title: 'Grid And Utility Operators',
    description:
      'Automate grid-code compliance, manage frequency and ramp-rate obligations, and coordinate dispatch across hybrid generation assets.',
    image: assetUrl('/assets/solvyn/images/audience-grid-operators.png'),
  },
  {
    title: 'EPC And O&M Teams',
    description:
      'Commission faster, diagnose faults earlier, respond with guided workflows, and maintain auditability across every control action.',
    image: assetUrl('/assets/solvyn/images/audience-epc-om.png'),
  },
  {
    title: 'Traders And Market Teams',
    description:
      'Align dispatch with market schedules, participate in DAM and RTM with 96-block precision, and optimise revenue alongside degradation and grid obligations.',
    image: assetUrl('/assets/solvyn/images/audience-traders.png'),
  },
] as const

const SolvynLandingBuiltForSection: React.FC<SolvynLandingBuiltForSectionProps> = () => {
  return (
    <section id="built-for" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          BUILT FOR
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Designed For Teams That Run Complex Energy Operations.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <div className="flex h-[112px] w-[112px] items-center justify-center sm:h-[128px] sm:w-[128px]">
                <Image
                  src={item.image}
                  alt=""
                  width={256}
                  height={256}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                {item.title}
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#4E4E4E]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolvynLandingBuiltForSection
