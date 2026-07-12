import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navContact, navRequestDemo } from '@/app/data/nav.data'

export interface CybersecureDeliversSectionProps {}

const delivers = [
  {
    title: 'OT Stays Protected',
    description:
      'Field devices, control systems, and communication paths secured at every layer not just the perimeter.',
    image: '/Images/lock.png',
  },
  {
    title: 'Full Operational Visibility',
    description:
      'Every access, every action, every change — logged, auditable, and traceable for compliance and investigation.',
    image: '/Images/light.png',
  },
  {
    title: 'No Operational Disruption',
    description:
      'Security architecture designed not to impact control loop performance 100ms EMS dispatch unaffected.',
    image: '/Images/light.png',
  },
  {
    title: 'Compliance Ready',
    description:
      'IEC 62443, NIST, CEA (2021 Guidelines + draft 2025 Regulations) and CSIRT-Power-aligned audit-ready from day one of deployment.',
    image: '/Images/card.png',
  },
] as const

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="10.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2 6.5H14" stroke="currentColor" strokeWidth="1.4" />
      <path d="M5 2V4.5M11 2V4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="10.5" cy="10.5" r="2.25" stroke="currentColor" strokeWidth="1.2" />
      <path d="M10.5 9.5V10.5L11.25 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  )
}

const CybersecureDeliversSection: React.FC<CybersecureDeliversSectionProps> = () => {
  return (
    <section id="what-it-delivers" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            WHAT IT DELIVERS
          </p>
          <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Security that doesn&apos;t slow operations down.
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {delivers.map((item) => (
            <article
              key={item.title}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <div className="flex h-[4.5rem] w-[4.5rem] items-center justify-center sm:h-[5rem] sm:w-[5rem]">
                <Image
                  src={item.image}
                  alt=""
                  width={80}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
              <h3 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                {item.title}
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#4E4E4E]">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-6 rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-8 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:mt-12 sm:px-8 sm:py-10 lg:mt-14 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 lg:py-12">
          <div className="min-w-0 flex-1">
            <h2 className="max-w-[34rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
              See the Digital Twin in action.
            </h2>
            <p className="mt-4 max-w-[36rem] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#1C1B1B] sm:text-base">
              Talk To Our Team About Your Plant Type And Operational Context. We&apos;ll Show You Exactly
              How The Solar And BESS Digital Twins Map To Your Assets.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-stretch gap-3 sm:items-start lg:items-end">
            <Link
              href={navRequestDemo.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7F00] px-5 py-2 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)] sm:px-6"
            >
              <CalendarIcon />
              Book a Demo
            </Link>

            <Link
              href={navContact.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#FF7F00] bg-[#FFFFFF] px-5 py-2 text-sm font-semibold leading-5 tracking-[0rem] text-[#1C1B1B] transition-colors duration-200 hover:bg-[#FF7F00] hover:text-white [font-family:var(--font-ibm-plex-sans)] sm:px-6"
            >
              Talk to an Expert
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
              >
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CybersecureDeliversSection
