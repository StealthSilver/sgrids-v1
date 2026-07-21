import React from 'react'

export interface CaseStudiesProofSectionProps {}

const stats = [
  {
    value: '95+',
    label: 'GW under active management',
  },
  {
    value: '500+',
    label: 'Projects delivered globally',
  },
  {
    value: '5.5',
    label: 'GWh+ BESS storage capacity deployed',
  },
  {
    value: '21+',
    label: 'Country grid codes compliant',
  },
] as const

const CaseStudiesProofSection: React.FC<CaseStudiesProofSectionProps> = () => {
  return (
    <section id="proof-at-scale" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          PROOF AT SCALE
        </p>
        <h2 className="mt-4 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          The numbers behind the deployments.
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-10 lg:mt-12 lg:grid-cols-4 lg:gap-x-8">
          {stats.map((stat) => (
            <div key={stat.value} className="min-w-0">
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[2rem] font-bold leading-[1.1] tracking-[-0.04rem] text-[#FF7F00] sm:text-[2.5rem] lg:text-[3rem] lg:tracking-[-0.06rem]">
                {stat.value}
              </p>
              <p className="mt-2 max-w-[11rem] [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.35] text-[#1C1B1B] sm:text-[0.9375rem] lg:mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudiesProofSection
