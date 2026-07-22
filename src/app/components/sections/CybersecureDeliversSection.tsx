import React from 'react'
import Image from 'next/image'

export interface CybersecureDeliversSectionProps {}

const delivers = [
  {
    title: 'OT Stays Protected',
    description:
      'Field devices, control systems, and communication paths secured at every layer not just the perimeter.',
    image: '/Images/cyber-1.png',
  },
  {
    title: 'Full Operational Visibility',
    description:
      'Every access, every action, every change, logged, auditable, and traceable for compliance and investigation.',
    image: '/Images/cyber-2.png',
  },
  {
    title: 'No Operational Disruption',
    description:
      'Security architecture designed not to impact control loop performance 100ms EMS dispatch unaffected.',
    image: '/Images/cyber-3.png',
  },
  {
    title: 'Compliance Ready',
    description:
      'IEC 62443, NIST, CEA (2021 Guidelines + draft 2025 Regulations) and CSIRT-Power-aligned audit-ready from day one of deployment.',
    image: '/Images/cyber-4.png',
  },
] as const

const CybersecureDeliversSection: React.FC<CybersecureDeliversSectionProps> = () => {
  return (
    <section id="what-it-delivers" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
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
              <div className="flex h-[5.5rem] w-full items-center justify-start sm:h-[6.25rem]">
                <Image
                  src={item.image}
                  alt=""
                  width={140}
                  height={140}
                  className="h-full w-auto max-w-full object-contain object-left"
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

      </div>
    </section>
  )
}

export default CybersecureDeliversSection
