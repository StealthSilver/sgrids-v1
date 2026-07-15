'use client'

import React, { useState } from 'react'

export interface CaseStudiesGridSectionProps {}

const filters = ['All', 'BESS', 'Hybrid', 'Solar', 'Grid Scale', 'International'] as const

type Filter = (typeof filters)[number]

type CaseStudy = {
  id: string
  title: string
  subtitle: string
  tags: string[]
  categories: Filter[]
  metrics: { value: string; label: string }[]
  bullets: string[]
  solutions: string
  status?: string
}

const caseStudies: CaseStudy[] = [
  {
    id: 'SGA2024001',
    title: "India's First EMS Deployment",
    subtitle: 'A landmark BESS EMS that redefined renewable storage in India.',
    tags: ['BESS', 'EMS', 'India', '1st in India'],
    categories: ['All', 'BESS', 'Grid Scale'],
    metrics: [
      { value: '40 MW', label: 'BESS' },
      { value: '120 MWh', label: 'Storage' },
      { value: '100 MW', label: 'Solar PV' },
    ],
    bullets: [
      'Stable power with dynamic load balancing',
      'Reduced grid dependency, enhanced self-sufficiency',
      'First-ever EMS deployment in India — new benchmark',
    ],
    solutions: 'EMS • Peak Shaving • Fluctuation Control',
  },
  {
    id: 'SGA2024002',
    title: 'Hybrid EMS For Peak Power Management',
    subtitle: 'Stable peak-power delivery across solar, wind, and storage.',
    tags: ['BESS', 'EMS', 'India', 'Hybrid'],
    categories: ['All', 'BESS', 'Hybrid', 'Grid Scale'],
    metrics: [
      { value: '322 MW', label: 'Wind' },
      { value: '81 MW', label: 'Solar' },
      { value: '150 MWh', label: 'BESS' },
    ],
    bullets: [
      'Improved grid stability, reduced output volatility',
      'Optimised dispatch for higher overall efficiency',
      'New benchmark for hybrid peak-power management',
    ],
    solutions: 'Hybrid EMS • Peak Shaving • Spinning Reserve',
  },
  {
    id: 'SGA2024003',
    title: 'Solar-First Microgrid For Extreme Environments',
    subtitle: 'Renewable-first microgrid delivering reliable power off-grid.',
    tags: ['Solar', 'Microgrid', 'Off-Grid'],
    categories: ['All', 'Solar'],
    metrics: [
      { value: '0.5 MW', label: 'Solar PV' },
      { value: '2 MWh', label: 'BESS' },
      { value: 'MGC AGC', label: 'Control' },
    ],
    bullets: [
      'Significant reduction in diesel consumption and CO₂',
      'Higher renewable penetration and grid stability',
      'Seamless automated operations end-to-end',
    ],
    solutions: 'MGC • AGC • PPC • SCADA',
  },
  {
    id: 'SGA2024004',
    title: 'Solar-Prioritized EMS For Grid Compliance',
    subtitle: 'Solar-first EMS optimising charging, peak shaving, and compliance.',
    tags: ['Solar', 'Grid Compliance', 'EMS'],
    categories: ['All', 'Solar', 'Grid Scale'],
    metrics: [
      { value: '16 MW', label: 'Solar PV' },
      { value: '05 MW', label: 'BESS' },
      { value: 'Grid', label: 'Compliant' },
    ],
    bullets: [
      'Solar-charged storage minimising grid dependency',
      'Smoothed demand curves via intelligent peak shaving',
      'Full grid-code compliance with active/reactive control',
    ],
    solutions: 'EMS • Peak Shaving • Active/Reactive Control',
  },
  {
    id: 'SGA2024005',
    title: 'Peak Demand Optimisation Through EMS',
    subtitle: 'Aligning solar generation with peak loads to reduce costs.',
    tags: ['Solar', 'Demand Response', 'EMS'],
    categories: ['All', 'Solar'],
    metrics: [
      { value: '0.5 MW', label: 'Solar PV' },
      { value: '02 MW', label: 'BESS' },
      { value: 'Auto DR', label: 'Control' },
    ],
    bullets: [
      'Lower peak demand charges and reduced energy costs',
      'Increased solar utilisation, minimal grid dependence',
      'Flexible load control via automated demand response',
    ],
    solutions: 'EMS • Demand Response • Solar Optimisation',
  },
  {
    id: 'SGA2024006',
    title: 'Hybrid EMS For Grid Stability & Ancillary Services',
    subtitle: 'Market-ready flexibility for large-scale hybrid renewable facilities.',
    tags: ['Hybrid', 'Ancillary', 'Grid Stability'],
    categories: ['All', 'Hybrid', 'BESS', 'Grid Scale'],
    metrics: [
      { value: '154 MW', label: 'Solar PV' },
      { value: '84 MW', label: 'Wind' },
      { value: '242 MWh', label: 'BESS' },
    ],
    bullets: [
      'Seamless hybrid integration ensuring grid stability',
      'Active ancillary market participation with reserves',
      'Improved reliability via frequency and reactive control',
    ],
    solutions: 'Hybrid EMS • Frequency Response • Ancillary Services',
  },
  {
    id: 'SGA2024007',
    title: 'Grid-Scale BESS EMS For ACME Heergarh',
    subtitle: 'End-to-end BESS management across 248 heterogeneous containers.',
    tags: ['BESS', 'EMS', 'India', '1st in India'],
    categories: ['All', 'BESS', 'Grid Scale'],
    metrics: [
      { value: '300 MW', label: 'BESS' },
      { value: '1400 MWh', label: 'Storage' },
      { value: '240', label: 'Containers' },
    ],
    bullets: [
      '30B+ data tags processed daily across 248 containers',
      '2.59Mn+ tag values per minute for OEM warranty compliance',
      '1.5 days per block — 4 OEM hardware lines unified',
    ],
    solutions: 'Solvyn EMS • SCADA • DAM/RTM • LDC Sync',
    status: 'Coming Soon',
  },
  {
    id: 'SGA2024008',
    title: 'PPC For CAISO / SCE Grid Compliance BESS',
    subtitle: 'Single-point BESS controller for SCE and CAISO compliance in California.',
    tags: ['International', 'CAISO', 'USA', 'BESS PPC'],
    categories: ['All', 'BESS', 'International', 'Grid Scale'],
    metrics: [
      { value: '65 MW', label: 'BESS' },
      { value: '130 MWh', label: 'Storage' },
      { value: '50 ms', label: 'Control' },
    ],
    bullets: [
      '50ms control loop, 30ms POI meter polling',
      'Full SCE and CAISO EMS setpoint compliance',
      'Redundant communications with full audit traceability',
    ],
    solutions: 'SGA PPC • Honeywell SCADA • CAISO • SCE',
    status: 'Coming Soon',
  },
  {
    id: 'SGA2024009',
    title: '4-Layer Hybrid EMS Kurnool 405 MW',
    subtitle: 'Beyond the standard hybrid model — 4-layer control architecture.',
    tags: ['Hybrid', 'AURA', '405 MW', 'India'],
    categories: ['All', 'Hybrid', 'BESS', 'Grid Scale'],
    metrics: [
      { value: '244 MW', label: 'Wind' },
      { value: '242 MW', label: 'Solar' },
      { value: '210 MWh', label: 'BESS' },
    ],
    bullets: [
      'Plant-level and sub-plant active power scheduling',
      'Reactive power unification with full CEA compliance',
      'AURA-driven DAM/RTM revenue optimisation',
    ],
    solutions: 'AURA • Hybrid EMS • SCADA • CEA • DSM',
    status: 'Coming Soon',
  },
]

const CaseStudiesGridSection: React.FC<CaseStudiesGridSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const visibleStudies = caseStudies.filter((study) =>
    study.categories.includes(activeFilter),
  )

  return (
    <section id="all-case-studies" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          ALL CASE STUDIES
        </p>
        <h2 className="mt-4 max-w-[40rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Deployments we can share from a portfolio of 500+
        </h2>
        <p className="mt-4 max-w-[42rem] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          Each project below represents a different challenge, asset class, and grid environment —
          together they show what Solvyn looks like in the field.
        </p>

        <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
          {filters.map((filter) => {
            const isActive = activeFilter === filter
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={`inline-flex items-center justify-center rounded-full px-4 py-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1] transition-colors duration-200 sm:px-5 sm:text-[0.875rem] ${
                  isActive
                    ? 'bg-[#FF7F00] text-white'
                    : 'border border-[#FF7F00] bg-white text-[#7F7F7F] hover:bg-[#FFF8F2] hover:text-[#1C1B1B]'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 lg:mt-12 lg:grid-cols-3 lg:gap-4">
          {visibleStudies.map((study) => (
            <article
              key={study.id}
              className="flex flex-col rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] px-5 py-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:px-5 sm:py-6"
            >
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-medium uppercase leading-[1] tracking-[0.04rem] text-[#9A9A9A]">
                {study.id}
              </p>

              <h3 className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#131313] sm:text-[1.125rem]">
                {study.title}
              </h3>

              <p className="mt-2 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.4] text-[#7F7F7F] sm:text-[0.875rem]">
                {study.subtitle}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center justify-center rounded-full border border-[#FF7F00] bg-white px-2.5 py-1 [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-medium leading-[1] text-[#7F7F7F]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 rounded-[10px] bg-[#F6F3F1] px-3 py-3 sm:px-3.5 sm:py-3.5">
                {study.metrics.map((metric) => (
                  <div key={`${metric.value}-${metric.label}`} className="min-w-0 text-center">
                    <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-bold leading-[1.15] tracking-[-0.01rem] text-[#FF7F00] sm:text-[0.9375rem]">
                      {metric.value}
                    </p>
                    <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] leading-[1.2] text-[#1C1B1B] sm:text-[0.75rem]">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="mt-4 space-y-1.5">
                {study.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-2 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.4] text-[#4E4E4E] sm:text-[0.8125rem]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.45em] h-1.5 w-1.5 shrink-0 rounded-full bg-[#1C1B1B]"
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.4] text-[#4E4E4E] sm:text-[0.8125rem]">
                <span className="font-semibold text-[#1C1B1B]">Solutions:</span> {study.solutions}
              </p>

              {study.status ? (
                <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] font-semibold leading-[1.3] text-[#FF7F00] sm:text-[0.8125rem]">
                  Status: {study.status}
                </p>
              ) : null}
            </article>
          ))}
        </div>

        {visibleStudies.length === 0 ? (
          <p className="mt-8 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] leading-[1.4] text-[#7F7F7F]">
            No shared deployments in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  )
}

export default CaseStudiesGridSection
