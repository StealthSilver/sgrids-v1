import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface SolvynLandingSystemSectionProps {}

const products = [
  {
    title: 'Solvyn X',
    subtitle: 'Integration & Connectivity',
    description: 'Unify every field device, OEM system, and enterprise interface into one protocol-aware backbone.',
    image: '/Images/home-architecture-field-data-capture.svg',
    href: '/solvyn/solvyn-x',
    cta: 'Learn more about Solvyn X',
  },
  {
    title: 'Solvyn SCADA',
    subtitle: 'Digital Nervous System',
    description: 'Perceive, think, and guide, turning raw field signals into safe, actionable operator guidance.',
    image: '/Images/scada-about-solvyn-scada.png',
    href: '/solvyn/scada',
    cta: 'Learn more about SCADA',
  },
  {
    title: 'Digital Twin',
    subtitle: 'Live Plant Models',
    description: 'Patented Solar and BESS twins continuously updated against live telemetry and weather.',
    image: '/Images/digital-twin-model-solar.png',
    href: '/solvyn/digital-twin',
    cta: 'Learn more about Digital Twin',
  },
  {
    title: 'AURA',
    subtitle: 'Decision Intelligence',
    description: 'Forecast, schedule, and optimize revenue and risk across renewable and hybrid portfolios.',
    image: '/Images/solvyn-landing-aura.png',
    href: '/solvyn/aura',
    cta: 'Learn more about AURA',
  },
  {
    title: 'Solvyn EMS',
    subtitle: 'Control Intelligence',
    description: 'Centralized control that aggregates data, runs algorithms, and executes optimal plant actions.',
    image: '/Images/solvyn-landing-ems.png',
    href: '/solvyn/ems',
    cta: 'Learn more about EMS',
  },
  {
    title: 'Cybersecure OT/IT',
    subtitle: 'Trust Layer',
    description: 'Purpose-built security protecting control systems, data flows, and engineering workflows.',
    image: '/Images/solvyn-landing-cybersecure.png',
    href: '/solvyn/cybersecure-ot-it',
    cta: 'Learn more about Cybersecure',
  },
] as const

const SolvynLandingSystemSection: React.FC<SolvynLandingSystemSectionProps> = () => {
  return (
    <section id="the-diversified-system" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          Six layers one system
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Every layer of energy operations Unified, coordinated, and purpose-built.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          Six purpose-built layers that work as one stack, from field connectivity to secure,
          intelligent control.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.title}
              className="flex flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-5 py-5 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-6 sm:py-6"
            >
              <div className="flex h-[120px] w-full items-center justify-start sm:h-[140px]">
                <Image
                  src={product.image}
                  alt=""
                  width={240}
                  height={200}
                  className="h-full w-auto max-w-full object-contain object-left"
                />
              </div>
              <h3 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                {product.title}
              </h3>
              <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-medium uppercase tracking-[0.02rem] text-[#FF7F00]">
                {product.subtitle}
              </p>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#4E4E4E]">
                {product.description}
              </p>
              <Link
                href={product.href}
                className="mt-auto pt-4 inline-flex items-center gap-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold uppercase tracking-[0.02rem] text-[#FF7F00] transition-colors hover:text-[#E67300]"
              >
                {product.cta}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolvynLandingSystemSection
