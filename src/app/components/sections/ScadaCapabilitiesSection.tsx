import React from 'react'

export interface ScadaCapabilitiesSectionProps {}

const capabilities = [
  {
    number: '01',
    title: 'Live Monitoring & Control',
    description: 'Real-time acquisition and secure control across all energy assets.',
  },
  {
    number: '02',
    title: 'Dynamic Visualisation & SLDs',
    description: 'Dashboards, Single Line Diagrams (SLDs), and role-based views.',
  },
  {
    number: '03',
    title: 'AI/ML Preventive Analytics',
    description: 'Forecast issues before they escalate. Predictive, not reactive.',
  },
  {
    number: '04',
    title: 'Cognitive Alarm Management',
    description: 'Root-cause grouping, noise suppression, and clear alarm prioritisation.',
  },
  {
    number: '05',
    title: 'Guided Recovery Workflows',
    description:
      'AI-derived root cause, risk scoring, safety gates, enabling operators to act with confidence.',
  },
  {
    number: '06',
    title: 'Custom Data & Reporting',
    description: 'KPI tracking, automated reports, and immutable event chronicles.',
  },
] as const

const ScadaCapabilitiesSection: React.FC<ScadaCapabilitiesSectionProps> = () => {
  return (
    <section id="scada-capabilities" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            CORE CAPABILITIES
          </p>
          <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            What Solvyn SCADA gives operators.
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1] tracking-[0.02rem] text-[#FF7F00]">
                {capability.number}
              </span>
              <h3 className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                {capability.title}
              </h3>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#4E4E4E]">
                {capability.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScadaCapabilitiesSection
