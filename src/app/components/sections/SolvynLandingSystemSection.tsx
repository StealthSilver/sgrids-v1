import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface SolvynLandingSystemSectionProps {}

const products = [
  {
    title: 'Solvyn X',
    subtitle: 'Integration & Connectivity',
    description:
      'Every asset, protocol, and enterprise system unified through one secure data backbone.',
    image: assetUrl('/assets/home/images/architecture-field-data-capture.svg'),
    href: '/solvyn/solvyn-x',
    tags: ['Modbus', 'OPC UA', 'DNP3', 'MQTT'],
  },
  {
    title: 'Solvyn SCADA',
    subtitle: 'Digital Nervous System',
    description:
      'Live plant intelligence cognitive alarms, guided recovery, and schedule compliance in one view.',
    image: assetUrl('/assets/shared/images/product-scada.png'),
    href: '/solvyn/scada',
    tags: ['Perception', 'Cognition', 'Prescription'],
  },
  {
    title: 'Digital Twin',
    subtitle: 'Live Plant Model · Patented',
    description:
      'Continuously updated Solar & BESS models forecasting, degradation, and DSM scheduling.',
    image: assetUrl('/assets/digital-twin/images/model-solar.png'),
    href: '/solvyn/digital-twin',
    tags: ['Solar', 'BESS', '21+ Patents'],
  },
  {
    title: 'AURA',
    subtitle: 'Decision Intelligence',
    description:
      'AI-driven forecasting, scheduling, and revenue-risk optimisation that turns plant models into actionable decisions.',
    image: assetUrl('/assets/solvyn/images/system-aura.png'),
    href: '/solvyn/aura',
    tags: ['Forecasting', 'Scheduling', 'Market Intel'],
  },
  {
    title: 'Solvyn EMS',
    subtitle: 'Control Intelligence',
    description:
      'Real-time dispatch that executes compliant, degradation-aware control across hybrid assets.',
    image: assetUrl('/assets/solvyn/images/system-ems.png'),
    href: '/solvyn/ems',
    tags: ['Dispatch', 'Grid Codes', 'Hybrid Control'],
  },
  {
    title: 'Cybersecure OT/IT',
    subtitle: 'Trust Layer',
    description:
      'Zero-trust security protecting control systems, data flows, and engineering workflows end to end.',
    image: assetUrl('/assets/solvyn/images/system-cybersecure.png'),
    href: '/solvyn/cybersecure-ot-it',
    tags: ['Authenticate', 'Authorize', 'Audit'],
  },
] as const

const SolvynLandingSystemSection: React.FC<SolvynLandingSystemSectionProps> = () => {
  return (
    <section id="the-diversified-system" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          SIX LAYERS ONE SYSTEM
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Every layer of energy operations Unified, coordinated, and purpose built.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          Solvyn is structured across six integrated layers. Each has a distinct role. Each makes
          every other layer more capable.
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
              <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[15px] font-semibold leading-[1.3] text-[#131313]">
                {product.subtitle}
              </p>
              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#4E4E4E]">
                {product.description}
              </p>
              <div className="mt-auto flex flex-wrap gap-2 pt-4">
                {product.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={product.href}
                    className="inline-flex items-center justify-center rounded-full border border-[#FF7F0030] bg-[#FF7F0012] px-3 py-1 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-medium leading-[1] text-[#FF7F00] transition-colors duration-200 hover:border-[#FF7F00] hover:bg-[#FF7F00] hover:text-white"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolvynLandingSystemSection
