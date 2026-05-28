import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface SolvynStudioSectionProps {}

interface StudioFeatureCard {
  title: string
  image: string
}

const sharedStudioHoverDescription =
  'Connects to any inverter, BMS, PPC, or OEM - no vendor lock-in, no proprietary hardware.'

const studioFeatureCards: StudioFeatureCard[] = [
  { title: 'Drag-and-drop builder', image: '/Images/studio_1.svg' },
  { title: 'Real-time visualisation', image: '/Images/studio_2.svg' },
  { title: 'Role-based access', image: '/Images/studio_3.svg' },
  { title: 'Formula Builder', image: '/Images/studio_4.svg' },
  { title: 'Rule Engine', image: '/Images/studio_5.svg' },
]

const SolvynStudioSection: React.FC<SolvynStudioSectionProps> = () => {
  return (
    <section id="solvyn-studio" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.35fr] lg:gap-10">
        <div className="max-w-[510px]">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            SOLVYN STUDIO
          </p>
          <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            <span className="block">Low-Code</span>
            <span className="block">No Boundaries</span>
            <span className="block">
              Your Data, <span className="text-[#FF7F00]">Your Way.</span>
            </span>
          </h2>

          <div className="mt-4 inline-flex h-[30px] items-center justify-center rounded-[8px] border border-[#FF7F0030] bg-[#FF7F0012] px-2 text-center [font-family:var(--font-ibm-plex-sans)] text-sm font-medium leading-[1] text-[#FF7F00]">
            {'</>'} No-code · Low-code Dashboard Builder
          </div>

          <p className="mt-6 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-semibold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.05rem]">
            Build powerful dashboards without writing a single line of <span className="text-[#FF7F00]">code.</span>
          </p>

          <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.35] text-black">
            Solvyn Studio is a no-code, low-code dashboard builder that gives every role operators, managers, and executives
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full px-6 py-2 text-sm font-bold leading-6 tracking-[0rem] text-white transition-opacity duration-200 hover:opacity-90 [font-family:var(--font-ibm-plex-sans)]"
              style={{ background: 'linear-gradient(103.51deg, #A14000 0%, #FF7F00 100%)' }}
            >
              Explore Solvyn Studio
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#EAE7E7] px-8 py-2 text-sm font-medium leading-6 tracking-[0rem] text-slate-800 transition-opacity duration-200 hover:opacity-90 [font-family:var(--font-ibm-plex-sans)]"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {studioFeatureCards.map((card) => (
            <article
              key={card.title}
              className="group flex h-[250px] flex-col overflow-hidden rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] p-3 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038]"
            >
              <div className="flex h-[156px] items-center justify-start origin-top-left transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-[0.72]">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={223}
                  height={239}
                  className="h-full w-full max-w-[185px] object-contain object-left"
                />
              </div>
              <div className="relative mt-1 min-h-[68px]">
                <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-4">
                  {card.title}
                </h3>
                <p className="pointer-events-none absolute left-0 right-0 top-4 [font-family:var(--font-ibm-plex-sans)] text-[12px] leading-[1.3] text-[#232323] opacity-0 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] translate-y-1 group-hover:translate-y-0 group-hover:opacity-100">
                  {sharedStudioHoverDescription}
                </p>
              </div>
            </article>
          ))}

          <article className="flex min-h-[250px] items-center rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-4 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026]">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.45] text-[#131313]">
              &ldquo;Empowers operators with actionable insights through intuitive interfaces and intelligent logic without deep technical effort from
              plant teams.&rdquo;
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default SolvynStudioSection
