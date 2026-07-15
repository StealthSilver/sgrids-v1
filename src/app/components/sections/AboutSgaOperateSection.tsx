import React from 'react'
import Image from 'next/image'

export interface AboutSgaOperateSectionProps {}

const stats = [
  {
    value: '95+',
    label: 'GW Under Active Management',
    color: '#E03E2F',
    image: null,
  },
  {
    value: '500+',
    label: 'Projects Delivered Globally',
    color: '#FF7F00',
    image: '/Icons/globe_red.svg',
  },
  {
    value: '21+',
    label: 'Country Grid Codes Compliant',
    color: '#0B2B98',
    image: '/Icons/globe_blue.svg',
  },
] as const

function RedLightningIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-8 w-8 sm:h-9 sm:w-9">
      <path d="M13.2 2.5 5.5 13.2h6.2L10.4 21.5l8.4-11.5h-6.3L13.2 2.5Z" fill="#E03E2F" />
    </svg>
  )
}

const AboutSgaOperateSection: React.FC<AboutSgaOperateSectionProps> = () => {
  return (
    <section className="relative overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <Image
        src="/Images/Artboard 1 1.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-[72%_center] sm:object-right"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-full bg-gradient-to-r from-white via-white/90 to-transparent sm:w-[58%] lg:w-[48%]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8">
          <div className="min-w-0">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
              Where We Operate
            </p>
            <h2 className="mt-4 max-w-[22rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:max-w-[26rem] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
              <span className="block">Built In India</span>
              <span className="block">Deployed Globally</span>
              <span className="block">Designed For The World</span>
            </h2>
            <p className="mt-5 max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              Solvyn is engineered in Bengaluru and operates across 21+ grid codes — from
              India&apos;s CEA and IEGC frameworks to DEWA, AEMO, ENTSO-E, NRC, and beyond. Every
              market we enter, we go deep.
            </p>

            <div className="mt-8 w-full max-w-[34rem] rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-4 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:mt-10 sm:px-5 sm:py-6">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 sm:gap-0">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-start sm:px-3 xl:px-4 ${
                      index > 0 ? 'sm:border-l sm:border-[#E0D8D0]' : ''
                    }`}
                  >
                    {stat.image ? (
                      <Image
                        src={stat.image}
                        alt=""
                        width={36}
                        height={36}
                        className="h-8 w-8 object-contain sm:h-9 sm:w-9"
                      />
                    ) : (
                      <RedLightningIcon />
                    )}
                    <p
                      className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.1] tracking-[-0.02rem] sm:text-[1.75rem]"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </p>
                    <p className="mt-1.5 max-w-[8.5rem] [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] leading-[1.3] text-[#1C1B1B] sm:text-[0.75rem]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="min-h-[16rem] sm:min-h-[20rem] lg:min-h-[28rem]" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}

export default AboutSgaOperateSection
