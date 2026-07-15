import React from 'react'
import Image from 'next/image'

export interface AboutSgaExperienceSectionProps {}

const certifications = [
  'ISO 27001',
  'DNV-GL ISO 9001',
  'OPAL-RT',
  'Typhoon HIL',
  'IEC 62443',
] as const

const firsts = [
  {
    title: 'Solar Power Plant Controller',
    image: '/Images/renewable-energy 1.png',
    alt: 'Solar panel and sun icon',
  },
  {
    title: 'Hybrid Power Plant Controller',
    image: '/Images/Icons.png',
    alt: 'Hybrid wind and solar icon',
  },
  {
    title: 'Green Hydrogen Project',
    image: '/Images/Group.png',
    alt: 'Green hydrogen facility icon',
  },
  {
    title: 'Large Scale BESS EMS',
    image: '/Images/battery-pack 1.png',
    alt: 'Battery energy storage pack icon',
  },
] as const

function CertificationSealIcon() {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-[#FF7F00]">
      <path
        d="M5.2 9.4 4 14.25l4-1.6 4 1.6-1.2-4.85"
        stroke="currentColor"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="8" cy="6.25" r="3.75" stroke="currentColor" strokeWidth="1.15" />
      <path
        d="M8 4.35 8.55 5.5l1.25.18-.9.88.21 1.24L8 7.25l-1.11.55.21-1.24-.9-.88 1.25-.18L8 4.35Z"
        fill="currentColor"
      />
    </svg>
  )
}

const AboutSgaExperienceSection: React.FC<AboutSgaExperienceSectionProps> = () => {
  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12 xl:gap-16">
        <div className="min-w-0">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            Our Experience
          </p>
          <h2 className="mt-4 max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            20+ years of renewable control systems.
          </h2>
          <p className="mt-5 max-w-[32rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
            Built by engineers who have spent two decades designing, commissioning, and operating
            renewable infrastructure from India&apos;s first hybrid power plant controllers to
            grid-scale BESS deployments across four continents.
          </p>

          <div className="mt-8 sm:mt-10">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-semibold uppercase leading-[1] tracking-[0.02rem] text-[#1C1B1B] sm:text-[0.8125rem]">
              Third Party Validated
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#E8C4A0] bg-[#FFFFFF] px-3 py-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium leading-[1] text-[#1C1B1B] sm:text-[0.8125rem]"
                >
                  <CertificationSealIcon />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="min-w-0">
          <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.25rem]">
            1st In India Developed &amp; Commissioned
          </h3>

          <div className="mt-5 grid grid-cols-1 gap-3 sm:mt-6 sm:grid-cols-2 sm:gap-4">
            {firsts.map((item) => (
              <article
                key={item.title}
                className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-5 sm:py-6"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  width={104}
                  height={104}
                  className="h-10 w-10 object-contain sm:h-11 sm:w-11"
                />
                <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium leading-[1.2] text-[#FF7F00] sm:text-[0.8125rem]">
                  1st in India
                </p>
                <h4 className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1rem]">
                  {item.title}
                </h4>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSgaExperienceSection
