import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface SolvynXTestbedSectionProps {}

const steps = [
  'Global Regulatory And Grid Code Landscape For Data Centres',
  'Technical And Operational Implications For Data Centre Operators',
  'Emerging And Underexplored Research Topics',
  'Recommendations For Data Centre Operators And Ecosystem Stakeholders',
  'AURA EDGE DC, AI-Based Grid Orchestration For Data Centres',
] as const

const SolvynXTestbedSection: React.FC<SolvynXTestbedSectionProps> = () => {
  return (
    <section id="digital-twin-testbed" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-14">
        <div className="max-w-[520px]">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            DIGITAL TWIN TESTBED
          </p>

          <div className="mt-4 inline-flex items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1.5">
            <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
              Built-In Digital Twin Testbed
            </span>
          </div>

          <h2 className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Commission with confidence. Not with risk.
          </h2>

          <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
            Solvyn X includes a built-in digital twin testbed, a simulation environment where every
            tag mapping, protocol configuration, and data flow is validated against a virtual plant
            model before any live connection is made.
          </p>

          <div className="mt-7">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FF7F00] px-6 py-1.5 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)]"
            >
              Download PDF
              <span aria-hidden="true" className="text-base leading-none">
                ↓
              </span>
            </Link>
          </div>
        </div>

        <div className="rounded-[14px] border border-[#EFE6DF] bg-[#FFF8F2] px-4 py-5 sm:px-5 sm:py-6 lg:px-6 lg:py-7">
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            HOW IT WORKS
          </p>

          <ul className="mt-5 flex flex-col gap-2.5 sm:gap-3">
            {steps.map((step, index) => {
              const number = String(index + 1).padStart(2, '0')

              return (
                <li
                  key={step}
                  className="flex items-center gap-3 rounded-[12px] border border-[#EFE6DF] bg-[#FFFFFF] px-3.5 py-3.5 shadow-[0px_4px_10px_0px_#FF6A0014] sm:gap-4 sm:px-4 sm:py-4"
                >
                  <span className="shrink-0 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-bold leading-[1] tracking-[-0.01rem] text-[#FF7F00] sm:text-[1rem]">
                    {number}
                  </span>
                  <p className="min-w-0 flex-1 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-medium leading-[1.35] text-[#1C1B1B] sm:text-[0.875rem]">
                    {step}
                  </p>
                  <Image
                    src="/Icons/view-eye.svg"
                    alt=""
                    width={22}
                    height={14}
                    className="h-3.5 w-auto shrink-0 sm:h-4"
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SolvynXTestbedSection
