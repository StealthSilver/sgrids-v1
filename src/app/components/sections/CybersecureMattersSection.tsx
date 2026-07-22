import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface CybersecureMattersSectionProps {}

const leftCards = [
  {
    title: 'OT Environments Are Exposed.',
    description:
      'Inverters, controllers, and SCADA networks often run with insufficient protection.',
  },
  {
    title: 'Energy Infrastructure Is A Target.',
    description:
      'Renewable control systems carry the same cyber risk profile as traditional infrastructure.',
  },
] as const

const rightCards = [
  {
    title: 'Compliance Is Now Mandatory.',
    description: 'Ensure auditable OT security compliance with IEC 62443, NIST, and CEA.',
  },
  {
    title: 'Solvyn Is Designed For This.',
    description: 'Security is embedded in the architecture not bolted on.',
  },
] as const

function MatterCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6">
      <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1rem]">
        {title}
      </h3>
      <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.4] text-[#7F7F7F] sm:text-[0.875rem]">
        {description}
      </p>
    </article>
  )
}

const CybersecureMattersSection: React.FC<CybersecureMattersSectionProps> = () => {
  return (
    <section id="why-it-matters" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          WHY IT MATTERS
        </p>

        <div className="mt-8 grid grid-cols-1 items-center gap-6 lg:mt-10 lg:grid-cols-[1fr_minmax(0,1.15fr)_1fr] lg:gap-8 xl:gap-10">
          <div className="order-2 flex flex-col gap-5 lg:order-1 lg:gap-6">
            {leftCards.map((card) => (
              <MatterCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>

          <div className="order-1 mx-auto w-full max-w-[22rem] sm:max-w-[26rem] lg:order-2 lg:max-w-none">
            <Image
              src={assetUrl('/assets/cybersecure/images/trust-model.png')}
              alt="Cybersecure OT/IT — security connecting plant, edge, and cloud"
              width={900}
              height={900}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="order-3 flex flex-col gap-5 lg:gap-6">
            {rightCards.map((card) => (
              <MatterCard key={card.title} title={card.title} description={card.description} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CybersecureMattersSection
