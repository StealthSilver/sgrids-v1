import React from 'react'

export interface DigitalTwinHowItWorksSectionProps {}

const workItems = [
  {
    label: '01 CELL LEVEL',
    title: 'Electrochemical Modelling',
    description:
      'Voltage-SOC curves, resistance modelling, cell temperature dynamics simulated at the individual cell level for maximum accuracy.',
  },
  {
    label: '02 RACK LEVEL',
    title: 'Pack Analytics',
    description:
      'Rack voltage balancing, thermal gradient tracking, charge/discharge dynamics aggregated from cell-level simulation for rack level intelligence.',
  },
  {
    label: '03 CONTAINER LEVEL',
    title: 'System Intelligence',
    description:
      'Full container SOC/SOH, thermal management, dispatch validation, and warranty-safe operation the layer that talks directly to EMS and BMS.',
  },
  {
    label: '04 PHYSICS-BASED',
    title: 'Arrhenius + Peukert Models',
    description:
      "Degradation estimated using temperature driven Arrhenius equations and current driven Peukert's law not just cycle counting.",
  },
  {
    label: '05 AI-DRIVEN',
    title: 'EKF State Estimation',
    description:
      'Extended Kalman Filter-based SOC estimation with sensor fusion and confidence scoring continuously calibrated against real BMS telemetry.',
  },
  {
    label: '06 LIFECYCLE',
    title: 'Through Put Based SOH',
    description:
      'SOH projected across the full asset lifecycle CAPEX vs revenue modelling, optimal sizing recommendations, and warranty boundary enforcement.',
  },
] as const

const DigitalTwinHowItWorksSection: React.FC<DigitalTwinHowItWorksSectionProps> = () => {
  return (
    <section id="how-it-works-together" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          HOW IT WORKS TOGETHER
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Physics-based and AI-driven.
          <br />
          Not one or the other.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          Most battery models use one approach. Solvyn&apos;s BESS Digital Twin combines
          physics-based simulation with AI-driven inference giving you a model that is both
          scientifically grounded and continuously learning from your actual plant.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {workItems.map((item) => (
            <article
              key={item.label}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-semibold uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.8125rem]">
                {item.label}
              </p>
              <h3 className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-semibold leading-[1.2] tracking-[-0.01rem] text-[#131313] sm:text-[1.125rem]">
                {item.title}
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.4] text-[#4E4E4E] sm:text-[0.9375rem]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DigitalTwinHowItWorksSection
