import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navRequestDemo } from '@/app/data/nav.data'

export interface DigitalTwinHeroSectionProps {}

const DigitalTwinHeroSection: React.FC<DigitalTwinHeroSectionProps> = () => {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.15fr] lg:gap-8 xl:gap-10">
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-flex h-7 items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
                GRID INTELLIGENCE 5.0
              </span>
            </div>

            <h1 className="max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.06rem] text-[#1C1B1B] sm:max-w-[32rem] sm:text-3xl lg:max-w-[34rem] lg:text-[2.75rem] lg:leading-[1.2] lg:tracking-[-0.1rem]">
              A live model of your plant
              <br />
              Always running
              <br />
              Always learning
            </h1>

            <p className="mt-5 max-w-[32rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              Two patented digital twin models Solar and BESS continuously updated against live
              telemetry, weather, and operational data. The foundation layer for smarter dispatch,
              market bidding, and predictive intelligence.
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

          <div className="relative mx-auto w-full max-w-[34rem] lg:max-w-none lg:justify-self-end lg:w-[108%]">
            <Image
              src={assetUrl('/assets/digital-twin/images/hero.png')}
              alt="Digital Twin — live solar and BESS plant models connected by real-time data orbits"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default DigitalTwinHeroSection
