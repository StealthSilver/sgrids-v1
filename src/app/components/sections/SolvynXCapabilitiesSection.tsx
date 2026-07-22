import React from 'react'

export interface SolvynXCapabilitiesSectionProps {}

const capabilities = [
  {
    label: 'Multi-Protocol',
    title: 'Field Connectivity',
    description:
      'Modbus TCP/IP, RTU, OPC-DA, OPC UA, DNP3, MQTT, REST API, across inverters, BMS, relays, and meters simultaneously. IEC 61850 on roadmap.',
  },
  {
    label: '72 hrs',
    title: 'Edge Buffering & Store And Forward',
    description:
      'When communication links fail, Solvyn X buffers telemetry locally and replays chronologically on reconnect. Zero data loss, zero blind spots.',
  },
  {
    label: 'Simultaneous',
    title: 'Multi-Endpoint Publishing',
    description:
      'One normalised stream published in real time to EMS, SCADA, AURA, Digital Twin, and enterprise systems no duplication, no latency overhead.',
  },
  {
    label: 'Cloud-Ready',
    title: 'Database & Cloud Integration',
    description:
      'Connects to multiple databases and cloud platforms, AWS, Azure, and Google Cloud, with flexible deployment on-premise, at the edge, or fully cloud-hosted.',
  },
  {
    label: 'Built-In',
    title: 'Redundancy & High Availability',
    description:
      'Built-in redundancy ensures high availability and data reliability across all communication paths, no single point of failure in your integration layer.',
  },
  {
    label: '100ms',
    title: 'Real-Time Data Processing',
    description:
      'Normalize, transform, and synchronize data in real time across platforms. Tiered polling ensures every data class gets the right update frequency.',
  },
] as const

const SolvynXCapabilitiesSection: React.FC<SolvynXCapabilitiesSectionProps> = () => {
  return (
    <section id="core-capabilities" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            CORE CAPABILITIES
          </p>
          <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            What Solvyn X does
          </h2>
          <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
            Most battery models use one approach. Solvyn&apos;s BESS Digital Twin combines physics-based
            simulation with AI-driven inference giving you a model that is both scientifically grounded
            and continuously learning from your actual plant.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article
              key={capability.title}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1] tracking-[0.02rem] text-[#FF7F00]">
                {capability.label}
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

export default SolvynXCapabilitiesSection
