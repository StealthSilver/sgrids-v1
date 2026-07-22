import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navRequestDemo } from '@/app/data/nav.data'

export interface ScadaHeroSectionProps {}

const features = [
  { title: 'Real Time', subtitle: 'Monitoring & Control' },
  { title: 'No Code', subtitle: 'Dashboard Builder' },
  { title: 'AI/ML', subtitle: 'Preventive Analytics' },
  { title: 'Multi-Site', subtitle: 'Enterprise Scale' },
] as const

const ScadaHeroSection: React.FC<ScadaHeroSectionProps> = () => {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-flex h-7 items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
                SCADA FOR ENERGY
              </span>
            </div>

            <h1 className="max-w-[22rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.06rem] text-[#1C1B1B] sm:max-w-[28rem] sm:text-3xl lg:max-w-[30rem] lg:text-[2.75rem] lg:leading-[1.2] lg:tracking-[-0.1rem]">
              Beyond Visibility. Into Operational Intelligence.
            </h1>

            <p className="mt-5 max-w-[32rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              Real-time data acquisition and secure control execution for energy systems built on a
              three-layer Digital Nervous System that perceives, thinks, and guides operators toward
              confident action.
            </p>

            <p className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-sm font-semibold leading-[1.3] text-[#FF7F00] sm:text-base">
              From monitoring to intelligent digital operations.
            </p>

            <div className="mt-7">
              <Link
                href={navRequestDemo.href}
                className="inline-flex items-center justify-center rounded-full bg-[#FF7F00] px-6 py-1.5 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)]"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-none">
            <Image
              src="/Images/scada-hero-dashboard.png"
              alt="Solvyn X SCADA plant overview dashboard on a laptop"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-contain [filter:drop-shadow(10px_24px_36px_#00000033)]"
            />
          </div>
        </div>

        <div className="mt-10 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-4 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:mt-12 sm:px-6 sm:py-6 lg:mt-14 lg:px-8 lg:py-7">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`flex items-center gap-3 sm:gap-3.5 lg:px-5 xl:px-7 ${
                  index > 0 ? 'lg:border-l lg:border-[#E0D8D0]' : ''
                }`}
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[0.75rem] bg-[#FF7F0026] sm:h-14 sm:w-14">
                  <Image
                    src="/Images/hero-scada-badge.svg"
                    alt=""
                    width={22}
                    height={34}
                    className="h-[1.75rem] w-auto sm:h-8"
                  />
                </div>
                <div className="min-w-0">
                  <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.15] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1rem]">
                    {feature.title}
                  </h3>
                  <p className="mt-0.5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.3] text-[#7F7F7F] sm:text-[0.8125rem]">
                    {feature.subtitle}
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

export default ScadaHeroSection
