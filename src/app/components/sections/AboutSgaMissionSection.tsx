import React from 'react'
import Image from 'next/image'

export interface AboutSgaMissionSectionProps {}

const topValues = [
  {
    title: 'Engineering Over Dashboards',
    description: 'We build systems that control plants not just monitor them.',
  },
  {
    title: 'Intelligence Over Automation',
    description: 'We rethink workflows with AI, Digital Twins, and closed-loop control.',
  },
  {
    title: 'Built For The Energy Transition',
    description: 'Every line of Solvyn code makes renewable energy more predictable and profitable.',
  },
] as const

const bottomValues = [
  {
    title: 'Open And Agnostic',
    description: 'No vendor lock-in. Works with any inverter BMS, PPC, or OEM.',
  },
  {
    title: 'Security By Architecture',
    description: 'IEC 62443-aligned, auditable, and operationally resilient from day one.',
  },
  {
    title: 'Partners, Not Vendors',
    description: 'Long-term partners to asset owners, EPCs, and grid operators.',
  },
] as const

const lightningSrc = '/Images/Solar 2.png'

const AboutSgaMissionSection: React.FC<AboutSgaMissionSectionProps> = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Mission &amp; Values
        </p>
        <h2 className="mt-4 max-w-[48rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Innovating beyond limits. Building futures. Empowering a sustainable world.
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-3">
          {topValues.map((value) => (
            <article
              key={value.title}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-5 shadow-[0px_4px_12px_0px_#FF6A0014] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-5 sm:py-6"
            >
              <Image
                src={lightningSrc}
                alt=""
                width={64}
                height={64}
                className="h-12 w-12 object-contain drop-shadow-[0px_6px_10px_#FF6A0033] sm:h-14 sm:w-14"
              />
              <h3 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
                {value.title}
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.45] text-[#7F7F7F] sm:text-[0.9375rem]">
                {value.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-3 grid grid-cols-1 gap-3 sm:mt-4 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {bottomValues.map((value) => (
            <article
              key={value.title}
              className="flex gap-3.5 rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-5 shadow-[0px_4px_12px_0px_#FF6A0014] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:gap-4 sm:px-5 sm:py-6"
            >
              <Image
                src={lightningSrc}
                alt=""
                width={48}
                height={48}
                className="mt-0.5 h-10 w-10 shrink-0 object-contain drop-shadow-[0px_4px_8px_#FF6A0033] sm:h-11 sm:w-11"
              />
              <div className="min-w-0">
                <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
                  {value.title}
                </h3>
                <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.45] text-[#7F7F7F] sm:text-[0.9375rem]">
                  {value.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSgaMissionSection
