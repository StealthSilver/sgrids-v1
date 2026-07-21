import React from 'react'
import Image from 'next/image'

export interface ScadaArchitectureSectionProps {}

const layers = [
  {
    label: 'PERCEPTION',
    title: 'Sense',
    image: '/Images/scada-architecture-sense.png',
    description:
      'Acquires and validates raw field telemetry, estimates plant state, and handles missing-data interpolation so operators always see a clean, complete picture.',
    bullets: ['Telemetry Acquisition', 'State Estimation', 'Data Validation'],
  },
  {
    label: 'COGNITION',
    title: 'Think',
    image: '/Images/scada-architecture-think.png',
    description:
      'Recognises patterns, detects anomalies, and correlates events across assets and subsystems — grouping root causes before surfacing anything to the operator.',
    bullets: ['Pattern Recognition', 'Anomaly Detection', 'Root-Cause Grouping'],
  },
  {
    label: 'PRESCRIPTION',
    title: 'Guide',
    image: '/Images/scada-architecture-guide.png',
    description:
      'Translates intelligence into operator guidance — root-cause insights, safety-checked recommendations, step-by-step recovery workflows, and escalation paths.',
    bullets: ['Guided Recovery', 'Safety Gate Validation', 'Escalation Triggers'],
  },
] as const

const ScadaArchitectureSection: React.FC<ScadaArchitectureSectionProps> = () => {
  return (
    <section id="scada-architecture" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            ARCHITECTURE
          </p>
          <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            The Digital Nervous System Model
          </h2>
          <p className="mt-4 max-w-[760px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
            Solvyn SCADA is organised as three intelligent layers that perceive, think, and guide —
            turning raw field signals into safe, actionable operator guidance.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 sm:mt-10 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-10">
          {layers.map((layer) => (
            <article key={layer.label} className="flex flex-col items-start">
              <div className="flex h-[200px] w-full items-center justify-center sm:h-[220px]">
                <Image
                  src={layer.image}
                  alt={`${layer.label} — ${layer.title}`}
                  width={360}
                  height={320}
                  className="h-full w-auto max-w-full object-contain"
                />
              </div>

              <p className="mt-5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.8125rem]">
                {layer.label}
              </p>
              <h3 className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[1.375rem] font-bold leading-[1.15] tracking-[-0.02rem] text-[#1C1B1B] sm:text-[1.5rem]">
                {layer.title}
              </h3>
              <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[14px] leading-[1.45] text-[#7F7F7F] sm:text-[15px]">
                {layer.description}
              </p>

              <ul className="mt-4 space-y-1.5">
                {layer.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 [font-family:var(--font-ibm-plex-sans)] text-[14px] leading-[1.4] text-[#4E4E4E] sm:text-[15px]"
                  >
                    <span aria-hidden="true" className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1C1B1B]" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ScadaArchitectureSection
