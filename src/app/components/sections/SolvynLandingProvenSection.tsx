import React from 'react'

export interface SolvynLandingProvenSectionProps {}

const stats = [
  { value: '11', label: 'Operating modes in simultaneous arbitration' },
  { value: '96', label: 'Block scheduling for DAM / RTM markets' },
  { value: '72h', label: 'Edge telemetry buffering with zero data loss' },
  { value: '100ms', label: 'Core dispatch control loop response time' },
  { value: '6+', label: 'Protocols supported across OT and cloud layers' },
] as const

const SolvynLandingProvenSection: React.FC<SolvynLandingProvenSectionProps> = () => {
  return (
    <section id="proven-in-the-field" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          PROVEN IN THE FIELD
        </p>
        <h2 className="mt-4 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Built for real operations. Deployed at scale.
        </h2>

        <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:mt-10 sm:grid-cols-3 lg:mt-12 lg:grid-cols-5 lg:gap-x-8">
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

export default SolvynLandingProvenSection
