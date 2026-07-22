import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navRequestDemo } from '@/app/data/nav.data'

export interface AboutSgaHeroSectionProps {}

const stats = [
  {
    value: '95+',
    unit: 'GW',
    label: 'capacity under management',
    icon: '/assets/about-sga/images/hero-stat-1.png',
  },
  {
    value: '500+',
    unit: 'GW',
    label: 'Projects delivered globally',
    icon: '/assets/about-sga/images/hero-stat-2.png',
  },
  {
    value: '5.5+',
    unit: 'GWh',
    label: 'BESS storage capacity',
    icon: '/assets/about-sga/images/hero-stat-3.png',
  },
  {
    value: '21+',
    unit: null,
    label: 'Country grid codes',
    icon: '/assets/about-sga/images/hero-stat-4.png',
  },
  {
    value: '99.5%+',
    unit: null,
    label: 'Platform availability',
    icon: '/assets/about-sga/images/hero-stat-5.png',
  },
  {
    value: '14+',
    unit: null,
    label: 'Patents filed',
    icon: '/assets/about-sga/images/hero-stat-6.png',
  },
] as const

const AboutSgaHeroSection: React.FC<AboutSgaHeroSectionProps> = () => {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10 xl:gap-12">
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-flex max-w-full items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1.5">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.5625rem] font-bold uppercase leading-[1.2] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.625rem] lg:text-[0.6875rem]">
                About Smart Grid Analytics
              </span>
            </div>

            <h1 className="max-w-[36rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.06rem] text-[#1C1B1B] sm:text-3xl lg:text-[2.75rem] lg:leading-[1.2] lg:tracking-[-0.1rem]">
              We exist to close the gap between knowing and doing in renewable energy.
            </h1>

            <p className="mt-5 max-w-[32rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              Smart Grid Analytics delivers a unified platform for solar, wind, storage, hydrogen, and
              grid operations through Solvyn combining real time visibility, grid ready dispatch, and
              AI-driven intelligence.
            </p>

            <div className="mt-7">
              <Link
                href={navRequestDemo.href}
                className="inline-flex items-center justify-center rounded-full bg-[#FF7F00] px-6 py-1.5 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)]"
              >
                Request a Demo
              </Link>
            </div>

            <div className="mt-6 flex w-full max-w-[22rem] items-stretch rounded-[14px] border border-[#FF7F00] bg-[#FFFFFF] px-4 py-3.5 shadow-[0px_4px_12px_0px_#FF6A001A] sm:max-w-[24rem] sm:px-5 sm:py-4">
              <div className="flex shrink-0 items-center pr-4 sm:pr-5">
                <Image
                  src="/assets/shared/images/mission-emblem.png"
                  alt=""
                  width={56}
                  height={56}
                  className="h-11 w-11 object-contain sm:h-12 sm:w-12"
                />
              </div>

              <div className="my-0.5 w-px shrink-0 self-stretch bg-[#E0D8D0]" aria-hidden="true" />

              <div className="flex min-w-0 flex-col justify-center pl-4 sm:pl-5">
                <p className="[font-family:var(--font-ibm-plex-sans)] text-[1.375rem] font-bold leading-[1.05] tracking-[-0.02rem] text-[#FF7F00] sm:text-[1.5rem]">
                  1000 GW
                </p>
                <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.15] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1rem]">
                  Target Integration by 2030
                </p>
                <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.25] text-[#7F7F7F] sm:text-[0.875rem]">
                  With maximum commercial returns.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] self-stretch lg:max-w-none">
            <div className="relative h-full min-h-[16rem] w-full overflow-hidden rounded-[1.25rem] sm:min-h-[20rem] sm:rounded-[1.5rem] lg:min-h-full">
              <Image
                src="/assets/about-sga/images/hero.png"
                alt="Smart Grid Analytics founding team"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover object-top"
                priority
              />
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-4 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:mt-10 sm:px-5 sm:py-6 lg:mt-12 lg:px-4 lg:py-6 xl:px-6">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`flex items-center gap-3 sm:gap-3.5 xl:px-3 2xl:px-4 ${
                  index > 0 ? 'xl:border-l xl:border-[#E0D8D0]' : ''
                }`}
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[0.625rem] bg-[#FF7F0026] sm:h-12 sm:w-12">
                  <Image
                    src={stat.icon}
                    alt=""
                    width={96}
                    height={96}
                    className="h-7 w-7 object-contain sm:h-8 sm:w-8"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1.15] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[0.9375rem]">
                    {stat.value}
                    {stat.unit ? (
                      <>
                        {' '}
                        <span className="text-[#FF7F00]">{stat.unit}</span>
                      </>
                    ) : null}
                  </h3>
                  <p className="mt-0.5 [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] leading-[1.3] text-[#7F7F7F] sm:text-[0.75rem]">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSgaHeroSection
