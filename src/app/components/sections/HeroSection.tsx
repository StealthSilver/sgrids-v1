import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// --- Types ---
export interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const deploymentCards = [
    {
      title: 'India',
      details: ['CEA - IEGC - CERC - SERC - DSM', 'DAM/RTM - SLDC/RLDC Interfaces'],
      icon: (
        <div className="flex h-[3rem] w-[3rem] shrink-0 self-start items-start justify-center">
          <Image
            src="/Images/india.png"
            alt="India flag"
            width={40}
            height={40}
            className="h-[2.5rem] w-[2.5rem] rounded-full object-cover object-top"
          />
        </div>
      ),
    },
    {
      title: 'UAE',
      details: ['DEWA - TRANSCO - Abu Dhabi', 'Net zero 2050 aligned'],
      icon: (
        <div className="flex h-[3rem] w-[3rem] shrink-0 self-start items-start justify-center">
          <Image
            src="/Images/uae.png"
            alt="UAE flag"
            width={40}
            height={40}
            className="h-[2.5rem] w-[2.5rem] rounded-full object-cover object-top"
          />
        </div>
      ),
    },
    {
      title: 'Global',
      details: ['Smart Grid and Hybrid', 'Deployment'],
      icon: (
        <div className="flex h-[3rem] w-[3rem] shrink-0 self-start items-start justify-center rounded-full text-[#F07A00]">
          <Image src="/Icons/globe.svg" alt="Global icon" width={40} height={40} className="h-[2.5rem] w-[2.5rem]" />
        </div>
      ),
    },
  ]

  return (
    <section id="hero" className="px-4 pb-8 pt-1 sm:px-6 sm:pb-10 sm:pt-2 lg:px-8 lg:pb-12 lg:pt-3">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
        <div className="flex flex-col items-start">
          <div className="-mt-8 mb-4 inline-flex h-7 w-[11.5rem] items-center justify-center rounded-full bg-[#FF7F0026] px-3 py-1 lg:-mt-48">
            <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
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

        <div className="relative mx-auto mt-4 w-full max-w-5xl overflow-visible lg:mt-12 lg:w-full lg:max-w-[74rem]">
          <Image
            src="/Images/hero_model.png"
            alt="Solvyn hybrid energy command center model"
            width={1100}
            height={1200}
            preload
            className="h-auto w-full object-contain [filter:drop-shadow(14px_34px_46px_#00000066)] scale-[1.00] -translate-x-[0.75rem] translate-y-[0.5rem] lg:origin-center lg:scale-[1.12] lg:-translate-x-[0.25rem] lg:translate-y-[0.75rem]"
          />

          <aside className="absolute right-0 top-[4%] z-20 w-[87%] max-w-[20.75rem] rounded-[1.5rem] border border-solid border-white/65 bg-[#FFFFFF8C] px-[1.5rem] pb-[0.875rem] pt-[2.125rem] shadow-[10.46px_4.18px_21.02px_0px_#0000001A] backdrop-blur-[0.8125rem] sm:w-[19.75rem] lg:right-[-1%] lg:top-[5%]">
            <div className="mb-[0.625rem] flex -translate-y-[0.5rem] items-center justify-between gap-[0.5rem]">
              <h4 className="[font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-semibold leading-[1.1] tracking-[-0.01rem] text-[#111111]">
                Deployed across
              </h4>
              <span className="inline-flex h-6 items-center justify-center rounded-full bg-[#FF7F0026] px-2.5 py-1 [font-family:var(--font-ibm-plex-sans)] text-[0.5rem] font-bold leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.5625rem]">
                21+ Grid Code
              </span>
            </div>
            <div className="mx-[-1.5rem] border-t border-black/45" />

            <div className="mt-[1.25rem] space-y-[1.25rem]">
              {deploymentCards.map((card, index) => (
                <div key={card.title}>
                  <div className="grid grid-cols-[3rem_1fr] items-start gap-x-[0.75rem]">
                    {card.icon}
                    <div className="min-w-0">
                      <h5 className="[font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-semibold leading-[1] tracking-[-0.01rem] text-[#111111]">
                        {card.title}
                      </h5>
                      <p className="mt-[0.1875rem] [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-semibold leading-[1.35] tracking-[0rem] text-black">
                        {card.details[0]}
                        <br />
                        {card.details[1]}
                      </p>
                    </div>
                  </div>
                  {index !== deploymentCards.length - 1 && (
                    <div className="mx-[-0.25rem] mt-[1rem] border-t border-black/45" />
                  )}
                </div>
              ))}
            </div>

            <div className="mx-[-1rem] mt-[1.25rem] border-t border-black/45 px-[0.5rem] pt-[1rem]">
              <div className="flex items-center gap-[0.5rem]">
                <div className="flex h-[2.125rem] flex-1 items-center justify-center rounded-full border border-white/35 bg-[#FFFFFF4D] backdrop-blur-[32px] [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1] tracking-[0rem] text-[#111111]">
                  95+ GW
                </div>
                <div className="flex h-[2.125rem] flex-1 items-center justify-center rounded-full border border-white/35 bg-[#FFFFFF4D] backdrop-blur-[32px] [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1] tracking-[0rem] text-[#111111]">
                  500+ Projects
                </div>
              </div>
              <button
                type="button"
                className="mt-[0.625rem] flex h-[2.125rem] w-full items-center justify-center rounded-full border border-white/35 bg-[#FFFFFF4D] backdrop-blur-[32px] [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1] tracking-[0rem] text-[#121212]"
              >
                Know More
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
