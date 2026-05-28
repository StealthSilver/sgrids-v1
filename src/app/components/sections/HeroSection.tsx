import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

// --- Types ---
export interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  const capabilities = [
    { name: 'Solvyn X', highlight: 'Connects', line1: 'Assets and', line2: 'telemetry', icon: '/Icons/globe_green.svg', color: '#518E48' },
    { name: 'SCADA', highlight: 'Sees', line1: 'Grid and', line2: 'Plant data', icon: '/Icons/globe_blue.svg', color: '#0B2B98' },
    { name: 'Digital Twin', highlight: 'Predicts', line1: 'Performance', line2: 'and faults', icon: '/Icons/globe_yellow.svg', color: '#FEC801' },
    { name: 'AURA', highlight: 'Decides', line1: 'AI driven', line2: 'optimization', icon: '/Icons/globe_purple.svg', color: '#8A70F8' },
    { name: 'EMS', highlight: 'Executes', line1: 'Automated', line2: 'Control', icon: '/Icons/globe_red.svg', color: '#FF6A00' },
  ]

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
                <div className="flex h-[2.125rem] flex-1 items-center justify-center rounded-full border border-white/35 bg-[#FFFFFF03] backdrop-blur-[32px] [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1] tracking-[0rem] text-[#111111]">
                  95+ GW
                </div>
                <div className="flex h-[2.125rem] flex-1 items-center justify-center rounded-full border border-white/35 bg-[#FFFFFF03] backdrop-blur-[32px] [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1] tracking-[0rem] text-[#111111]">
                  500+ Projects
                </div>
              </div>
              <button
                type="button"
                className="mt-[0.625rem] flex h-[2.125rem] w-full items-center justify-center rounded-full border border-white/35 bg-[#FFFFFF03] backdrop-blur-[32px] [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1] tracking-[0rem] text-[#121212]"
              >
                Know More
              </button>
            </div>
          </aside>

          <aside className="absolute bottom-[-16%] left-[-12%] z-30 w-[92%] max-w-[46rem] overflow-hidden rounded-[1.5rem] border border-solid border-white/65 bg-[#FFFFFF8C] px-[1rem] pb-[0.25rem] pt-[0.375rem] shadow-[-1px_5px_9px_0px_#F5822926] backdrop-blur-[0.8125rem] lg:bottom-[-12%] lg:left-[-72%]">
            <div className="grid grid-cols-2 gap-y-6 py-[0.75rem] sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-5">
              {capabilities.map((capability) => (
                <div key={capability.name} className="flex flex-col items-center gap-[0.25rem] text-center">
                  <div className="mb-[0.625rem] flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-black/10 bg-white shadow-[0px_1px_9px_0px_#00000040]">
                    <Image src={capability.icon} alt={`${capability.name} globe icon`} width={30} height={30} className="h-[1.875rem] w-[1.875rem]" />
                  </div>
                  <h5 className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium leading-[1] tracking-[-0.01rem] text-[#111111]">
                    {capability.name}
                  </h5>
                  <p
                    className="mt-[0.3125rem] [font-family:var(--font-ibm-plex-sans)] text-[1rem] font-semibold leading-[1] tracking-[-0.01rem]"
                    style={{ color: capability.color }}
                  >
                    {capability.highlight}
                  </p>
                  <p className="mt-[0.1875rem] [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-semibold leading-[1.35] tracking-[0rem] text-black">
                    {capability.line1}
                    <br />
                    {capability.line2}
                  </p>
                </div>
              ))}
            </div>
            <div className="relative mt-[0.25rem] h-[2.75rem] pb-[1.5rem]">
              <Image
                src="/Icons/horizontal_line.svg"
                alt="Gradient divider"
                width={873}
                height={3}
                className="absolute left-0 top-1/2 h-[0.1875rem] w-full -translate-y-1/2"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[1rem] border border-[#E9D8CE] bg-[#F6F3F1] px-[1.75rem] py-[0.6rem] shadow-[0px_4px_4px_0px_#FF6A0026] backdrop-blur-[30px] [font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-medium leading-[1] tracking-[0rem] text-[#111111] sm:text-[0.6875rem]">
                Cybersecure OT/IT Securing Every Layer
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
