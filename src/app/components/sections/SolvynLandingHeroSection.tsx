import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navRequestDemo } from '@/app/data/nav.data'

export interface SolvynLandingHeroSectionProps {}

const capabilities = [
  {
    name: 'Solvyn X',
    highlight: 'Connects',
    icon: '/assets/shared/icons/product-solvyn-x.svg',
    color: '#518E48',
  },
  {
    name: 'SCADA',
    highlight: 'Sees',
    icon: '/assets/shared/icons/product-scada.svg',
    color: '#0B2B98',
  },
  {
    name: 'Digital Twin',
    highlight: 'Predicts',
    icon: '/assets/shared/icons/product-digital-twin.svg',
    color: '#FEC801',
  },
  {
    name: 'AURA',
    highlight: 'Decides',
    icon: '/assets/shared/icons/product-aura.svg',
    color: '#8A70F8',
  },
  {
    name: 'EMS',
    highlight: 'Executes',
    icon: '/assets/shared/icons/product-ems.svg',
    color: '#FF6A00',
  },
] as const

const SolvynLandingHeroSection: React.FC<SolvynLandingHeroSectionProps> = () => {
  return (
    <section className="px-4 pb-32 pt-3 sm:px-6 sm:pb-36 sm:pt-4 lg:px-8 lg:pb-44 lg:pt-5">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-6 lg:grid-cols-[0.72fr_1.28fr] lg:gap-8">
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-flex h-7 items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
                GRID INTELLIGENCE 5.0
              </span>
            </div>

            <h1 className="max-w-[34rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.06rem] text-[#1C1B1B] sm:text-3xl lg:text-[2.75rem] lg:leading-[1.2] lg:tracking-[-0.1rem]">
              The Operating System for Intelligent Energy Control
            </h1>

            <p className="mt-5 max-w-[32rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              Modern energy systems are too complex for disconnected tools. Solvyn is the platform
              that connects, sees, thinks, and acts across every asset, every interface, and every
              operational decision.
            </p>

            <div className="mt-7">
              <Link
                href={navRequestDemo.href}
                className="inline-flex items-center justify-center rounded-full bg-[#FF7F00] px-6 py-1.5 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)]"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          <div className="relative mx-auto mt-4 w-full max-w-5xl overflow-visible lg:mt-8 lg:ml-auto lg:mr-0 lg:w-full lg:max-w-[74rem]">
            <Image
              src="/assets/solvyn/images/hero.png"
              alt="Solvyn operating system connecting wind, solar, storage, and control systems"
              width={1200}
              height={900}
              priority
              className="h-auto w-full translate-x-4 object-contain sm:translate-x-6 lg:translate-x-16 xl:translate-x-20"
            />
          </div>
        </div>

        <aside className="relative z-30 mt-8 w-full max-w-[46rem] overflow-hidden rounded-[1.5rem] border border-solid border-white/65 bg-[#FFFFFF8C] px-[1rem] pb-[0.25rem] pt-[0.375rem] shadow-[-1px_5px_9px_0px_#F5822926] backdrop-blur-[0.8125rem] sm:mt-10 lg:absolute lg:bottom-[-26%] lg:left-0 lg:mt-0">
          <div className="grid grid-cols-2 gap-y-6 py-[0.75rem] sm:grid-cols-3 lg:grid-cols-5 lg:gap-x-5">
            {capabilities.map((capability) => (
              <div key={capability.name} className="flex flex-col items-center gap-[0.25rem] text-center">
                <div className="mb-[0.625rem] flex h-[3.25rem] w-[3.25rem] items-center justify-center rounded-full border border-black/10 bg-white shadow-[0px_1px_9px_0px_#00000040]">
                  <Image
                    src={capability.icon}
                    alt={`${capability.name} icon`}
                    width={30}
                    height={30}
                    className="h-[1.875rem] w-[1.875rem]"
                  />
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
              </div>
            ))}
          </div>
          <div className="relative mt-[0.25rem] h-[2.75rem] pb-[1.5rem]">
            <Image
              src="/assets/shared/icons/hero-gradient-divider.svg"
              alt="Gradient divider"
              width={873}
              height={3}
              className="absolute left-0 top-1/2 w-full -translate-y-1/2"
              style={{ width: '100%', height: 'auto' }}
            />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[1rem] border border-[#E9D8CE] bg-[#F6F3F1] px-[1.75rem] py-[0.6rem] shadow-[0px_4px_4px_0px_#FF6A0026] backdrop-blur-[30px] [font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-semibold leading-[1] tracking-[0rem] text-[#111111] sm:text-[0.6875rem]">
              Cybersecure OT/IT Securing Every Layer
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default SolvynLandingHeroSection
