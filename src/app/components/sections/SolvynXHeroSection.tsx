import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navRequestDemo } from '@/app/data/nav.data'

export interface SolvynXHeroSectionProps {}

const stats = [
  { value: '70–90%', label: 'less tag-mapping work' },
  { value: '72h', label: 'edge buffering, zero data loss' },
  { value: '100ms', label: 'control loop response' },
  { value: '9+', label: 'protocols supported' },
] as const

const SolvynXHeroSection: React.FC<SolvynXHeroSectionProps> = () => {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10 xl:gap-12">
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-flex max-w-full items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1.5">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.5625rem] font-bold uppercase leading-[1.2] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.625rem] lg:text-[0.6875rem]">
                Solvyn X, Unified Industrial Automation &amp; Data Integration (Layer 01)
              </span>
            </div>

            <h1 className="max-w-[36rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.06rem] text-[#1C1B1B] sm:text-3xl lg:text-[2.75rem] lg:leading-[1.2] lg:tracking-[-0.1rem]">
              <span className="block">Connect Every Asset.</span>
              <span className="block">Orchestrate Every Interface.</span>
            </h1>

            <p className="mt-5 max-w-[32rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              The integration fabric that unifies every field device, OEM system, grid interface, cloud
              platform, and enterprise application into one secure, protocol-aware operational backbone.
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
                <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.25] text-[#1C1B1B] sm:text-[0.875rem]">
                  With maximum commercial returns.
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] lg:max-w-none">
            <Image
              src="/assets/solvyn-x/images/hero.png"
              alt="Solvyn X — unified industrial automation and data integration"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>

        <div className="mt-10 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-4 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:mt-12 sm:px-6 sm:py-6 lg:mt-14 lg:px-8 lg:py-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {stats.map((stat, index) => (
              <div
                key={stat.value}
                className={`flex items-center gap-3.5 sm:gap-4 lg:px-5 xl:px-7 ${
                  index > 0 ? 'lg:border-l lg:border-[#E0D8D0]' : ''
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.75rem] bg-[#FF7F0026] sm:h-14 sm:w-14">
                  <Image
                    src="/assets/solvyn-x/images/hero-scada-badge.svg"
                    alt=""
                    width={22}
                    height={34}
                    className="h-[1.75rem] w-auto sm:h-8"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-semibold leading-[1.15] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.25rem]">
                    {stat.value}
                  </h3>
                  <p className="mt-0.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.3] text-[#7F7F7F] sm:text-[0.875rem]">
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

export default SolvynXHeroSection
