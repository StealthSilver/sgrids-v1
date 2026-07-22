import React from 'react'

export interface SolvynLandingWhySectionProps {}

const legacyItems = [
  'Siloed SCADA, EMS, and analytics stacks',
  'Manual tag mapping and slow commissioning',
  'Limited hybrid and BESS operating modes',
  'Intelligence outside the control loop',
  'Reactive alarms without root-cause guidance',
  'Security bolted on after deployment',
] as const

const solvynItems = [
  'One operating system across the full stack',
  'AI-assisted integration and auto tag mapping',
  'Built for solar, wind, hydro, BESS, and hybrids',
  'Predict → decide → execute in one closed loop',
  'Cognitive alarms with guided recovery workflows',
  'Zero-trust OT/IT security as a native layer',
] as const

const SolvynLandingWhySection: React.FC<SolvynLandingWhySectionProps> = () => {
  return (
    <section id="why-solvyn" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          WHY SOLVYN
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Legacy platforms were not built for this.
        </h2>

        <div className="mt-6 grid grid-cols-1 gap-3 lg:grid-cols-2">
          <div className="rounded-[14px] border border-[#EFE6DF] bg-[#F7F2EE] px-5 py-6 sm:px-7 sm:py-8">
            <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-semibold leading-[1.2] text-[#1C1B1B] sm:text-[1.25rem]">
              Legacy EMS / SCADA
            </h3>
            <ul className="mt-5 space-y-3">
              {legacyItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 [font-family:var(--font-ibm-plex-sans)] text-[14px] leading-[1.4] text-[#4E4E4E] sm:text-[15px]"
                >
                  <span aria-hidden="true" className="mt-[0.35em] text-[#B45309]">
                    −
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[14px] border border-[#FF7F0052] bg-[#FFFFFF] px-5 py-6 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] sm:px-7 sm:py-8">
            <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-semibold leading-[1.2] text-[#1C1B1B] sm:text-[1.25rem]">
              Solvyn EMS / SCADA
            </h3>
            <ul className="mt-5 space-y-3">
              {solvynItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 [font-family:var(--font-ibm-plex-sans)] text-[14px] leading-[1.4] text-[#1C1B1B] sm:text-[15px]"
                >
                  <span aria-hidden="true" className="mt-[0.2em] text-[#FF7F00]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SolvynLandingWhySection
