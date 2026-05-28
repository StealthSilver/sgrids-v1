import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// --- Types ---
export interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section id="hero" className="px-4 pb-8 pt-1 sm:px-6 sm:pb-10 sm:pt-2 lg:px-8 lg:pb-12 lg:pt-3">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
        <div className="flex flex-col items-start">
          <div className="-mt-8 mb-4 inline-flex h-6 w-[10.5rem] items-center justify-center rounded-full bg-[#FF7F0026] px-2.5 py-1 lg:-mt-48">
            <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.5625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.625rem]">
              GRID INTELLIGENCE 5.0
            </span>
          </div>

          <h1 className="[font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.3] tracking-[-0.06rem] text-[#1C1B1B] sm:text-3xl lg:text-[2.75rem] lg:leading-[1.3] lg:tracking-[-0.1rem]">
            <span className="block whitespace-nowrap">Engineering the</span>
            <span className="block whitespace-nowrap">Operating System for</span>
            <span className="block whitespace-nowrap">
              the <span className="[font-family:var(--font-ibm-plex-sans)] font-bold tracking-[0rem] text-[#FF7F00]">Renewable Century</span>
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
            Unifying SCADA, EMS, and PPC into a single, high-performance
            <br className="hidden sm:block" />
            {' '}command center. Precision intelligence for complex
            <br className="hidden sm:block" />
            {' '}hybrid energy systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#solvyn"
              className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-bold leading-6 tracking-[0rem] text-white transition-opacity duration-200 hover:opacity-90 [font-family:var(--font-ibm-plex-sans)]"
              style={{
                background: 'linear-gradient(103.51deg, #A14000 0%, #FF7F00 100%)',
              }}
            >
              Explore Solvyn
            </Link>
            <Link
              href="#request-demo"
              className="inline-flex items-center justify-center rounded-full bg-[#EAE7E7] px-8 py-2 text-sm font-medium leading-6 tracking-[0rem] text-slate-800 transition-opacity duration-200 hover:opacity-90 [font-family:var(--font-ibm-plex-sans)]"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-4 w-full max-w-6xl overflow-visible lg:mt-12 lg:max-w-[88rem]">
          <Image
            src="/Images/hero_model.png"
            alt="Solvyn hybrid energy command center model"
            width={1200}
            height={1200}
            preload
            className="h-auto w-full object-contain [filter:drop-shadow(14px_34px_46px_#00000066)] lg:scale-[1.15] lg:origin-center"
          />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
