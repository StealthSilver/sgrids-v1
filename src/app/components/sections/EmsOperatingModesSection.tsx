import React from 'react'

export interface EmsOperatingModesSectionProps {}

type ModeCell = {
  title: string
  description?: string
  icon?: React.ReactNode
}

type ModeCategory = {
  label: string
  labelClassName: string
  headerIcon: React.ReactNode
  cells: ModeCell[]
}

function IconTower({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 2.8L17 8H11L14 2.8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8.5 8H19.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9.8 12H18.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M11 16H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M12 20H16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M14 8V24.5M8.5 8L5.5 24.5M19.5 8L22.5 24.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M4.5 24.5H23.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M10.5 12L14 8L17.5 12" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M11.5 16L14 12L16.5 16" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  )
}

function IconGlobeChart({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="13" cy="14" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M13 5.75C10.8 8.1 10.8 19.9 13 22.25C15.2 19.9 15.2 8.1 13 5.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M5.5 14H20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M6.8 10H19.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M6.8 18H19.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M17.5 16.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M20 14.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M22.5 12.5V21.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15.5 21.5H24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

function IconShieldCheck({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 3.5L22.5 6.5V13.5C22.5 18.8 18.8 23.2 14 24.5C9.2 23.2 5.5 18.8 5.5 13.5V6.5L14 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 13.6L12.7 16.1L17.8 10.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconLightning({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M15.8 3.5L7.5 15.2H13.2L12.2 24.5L20.5 12.8H14.8L15.8 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPulse({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M3.5 14H8L10.5 8.5L14 19.5L16.5 11.5L19 14H24.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconVar({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 28" fill="none" aria-hidden="true">
      <rect
        x="1.25"
        y="5.25"
        width="37.5"
        height="17.5"
        rx="8.75"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      {/* V */}
      <path d="M9.2 10.2L12 17.8L14.8 10.2" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      {/* A */}
      <path d="M17.4 17.8L20.2 10.2L23 17.8M18.4 14.8H22" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
      {/* R */}
      <path d="M25.6 17.8V10.2H29.2C30.7 10.2 31.7 11.3 31.7 12.7C31.7 14.1 30.7 15.2 29.2 15.2H25.6M28.6 15.2L32.1 17.8" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IconShield({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M14 3.5L22.5 6.5V13.5C22.5 18.8 18.8 23.2 14 24.5C9.2 23.2 5.5 18.8 5.5 13.5V6.5L14 3.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconGauge({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M5.5 18.5A9.5 9.5 0 0 1 22.5 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M5.5 18.5H22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M14 18.5L18.2 11.8"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="14" cy="18.5" r="1.4" fill="currentColor" />
      <path d="M7.2 14.2L8.4 15.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M20.8 14.2L19.6 15.1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <path d="M14 9.2V10.6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  )
}

function IconCalendarClock({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect
        x="4"
        y="6.5"
        width="15.5"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M4 11H19.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M8 4.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M15.5 4.5V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="20.5" cy="19" r="5" stroke="currentColor" strokeWidth="1.5" fill="white" />
      <path
        d="M20.5 16.8V19.2L22.2 20.2"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconShift({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M7 14H21"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M10.5 10.5L7 14L10.5 17.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 10.5L21 14L17.5 17.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconPeak({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M5.5 22.5H22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8 22.5V16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M13 22.5V12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M18 22.5V8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <path
        d="M18 8.5L15.8 8.5L18 5.5L20.2 8.5H18Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconDollar({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M14 5V23" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M17.8 9.2C17.2 8.2 16 7.5 14 7.5C11.5 7.5 10 8.7 10 10.4C10 12.1 11.4 12.9 14.2 13.5C17 14.1 18.5 15.1 18.5 17.2C18.5 19.2 16.8 20.5 14 20.5C11.8 20.5 10.4 19.7 9.6 18.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconSpin({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M20.8 10.2A7.5 7.5 0 0 0 8.2 9.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M7.2 17.8A7.5 7.5 0 0 0 19.8 18.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8.2 6.5V9.8H11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.8 21.5V18.2H16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconThinBolt({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M15.2 3.5L9 14.8H13.8L12.8 24.5L19 13.2H14.2L15.2 3.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconRamp({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M7 20L19.5 7.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M12.5 7.5H19.5V14.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconWave({ className = 'h-7 w-7' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path
        d="M3.5 16C5.8 11.5 7.8 11.5 10 16C12.2 20.5 14.2 20.5 16.4 16C18.6 11.5 20.6 11.5 22.8 16C23.8 18.2 24.5 18.8 24.5 18"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

const categories: ModeCategory[] = [
  {
    label: 'Grid Operations',
    labelClassName: 'bg-gradient-to-br from-[#1A4FA8] to-[#0E3578]',
    headerIcon: <IconTower className="h-7 w-7 text-white" />,
    cells: [
      { title: 'Active Power Control', icon: <IconLightning className="h-7 w-7 text-[#1C1B1B]" /> },
      { title: 'Frequency Regulation', icon: <IconPulse className="h-7 w-7 text-[#1C1B1B]" /> },
      { title: 'Reactive VAR Control', icon: <IconVar className="h-7 w-10 text-[#1C1B1B]" /> },
      { title: 'Voltage Support', icon: <IconShield className="h-7 w-7 text-[#1C1B1B]" /> },
      { title: 'Power Factor Control', icon: <IconGauge className="h-7 w-7 text-[#1C1B1B]" /> },
    ],
  },
  {
    label: 'Market & Optimisation',
    labelClassName: 'bg-gradient-to-br from-[#FF8A1A] to-[#E05A00]',
    headerIcon: <IconGlobeChart className="h-7 w-7 text-white" />,
    cells: [
      {
        title: 'Schedule Dispatch',
        description: '96-Block DAM/RTM Execution.',
        icon: <IconCalendarClock className="h-7 w-7 text-[#1C1B1B]" />,
      },
      {
        title: 'Energy Shifting',
        description: 'Temporal Energy Arbitrage.',
        icon: <IconShift className="h-7 w-7 text-[#1C1B1B]" />,
      },
      {
        title: 'Peak Shaving',
        description: 'Demand Peak Reduction.',
        icon: <IconPeak className="h-7 w-7 text-[#1C1B1B]" />,
      },
      {
        title: 'Energy Arbitrage',
        description: 'Price-Based Charge/Discharge Optimization.',
        icon: <IconDollar className="h-7 w-7 text-[#1C1B1B]" />,
      },
    ],
  },
  {
    label: 'Grid Support Services',
    labelClassName: 'bg-gradient-to-br from-[#D4B200] to-[#A88A00]',
    headerIcon: <IconShieldCheck className="h-7 w-7 text-white" />,
    cells: [
      {
        title: 'Spinning Reserve',
        description: 'Ancillary Reserve Capacity.',
        icon: <IconSpin className="h-7 w-7 text-[#1C1B1B]" />,
      },
      {
        title: 'Fast Response',
        description: 'Sub-Second Frequency Response.',
        icon: <IconThinBolt className="h-7 w-7 text-[#1C1B1B]" />,
      },
      {
        title: 'Ramp Rate Control',
        description: 'Generation Ramp Limiting.',
        icon: <IconRamp className="h-7 w-7 text-[#1C1B1B]" />,
      },
      {
        title: 'Power Curve Smoothing',
        description: 'Output Fluctuation Damping.',
        icon: <IconWave className="h-7 w-7 text-[#1C1B1B]" />,
      },
    ],
  },
]

const EmsOperatingModesSection: React.FC<EmsOperatingModesSectionProps> = () => {
  return (
    <section id="operating-modes" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          OPERATING MODES
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Every mode your plant needs. Running simultaneously.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          Solvyn EMS supports 11 operating modes across three service categories with priority-based
          arbitration ensuring the right mode activates at the right time, automatically.
        </p>

        {/* Desktop / tablet table */}
        <div className="mt-8 hidden overflow-hidden rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] shadow-[0px_7.72px_9.64px_0px_#FF6A0026] md:mt-10 md:block lg:mt-12">
          {categories.map((category, rowIndex) => {
            const isLastRow = rowIndex === categories.length - 1
            const colCount = category.cells.length

            return (
              <div
                key={category.label}
                className={`grid ${isLastRow ? '' : 'border-b border-[#E8C4A0]'}`}
                style={{
                  gridTemplateColumns: `minmax(10.5rem, 12.5rem) repeat(${colCount}, minmax(0, 1fr))`,
                }}
              >
                <div
                  className={`flex flex-col items-start justify-center gap-3 px-5 py-7 lg:px-6 lg:py-8 ${category.labelClassName}`}
                >
                  {category.headerIcon}
                  <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-white lg:text-[0.875rem]">
                    {category.label}
                  </span>
                </div>

                {category.cells.map((cell) => (
                  <div
                    key={cell.title}
                    className="flex flex-col items-center justify-center border-l border-[#E8C4A0] px-3 py-7 text-center lg:px-4 lg:py-8"
                  >
                    {cell.icon ? (
                      <div className="mb-3 flex h-8 items-center justify-center">{cell.icon}</div>
                    ) : null}
                    <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B] lg:text-[0.875rem]">
                      {cell.title}
                    </p>
                    {cell.description ? (
                      <p className="mt-1.5 max-w-[11rem] [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] leading-[1.35] text-[#7F7F7F] lg:text-[0.75rem]">
                        {cell.description}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            )
          })}
        </div>

        {/* Mobile stacked cards */}
        <div className="mt-8 flex flex-col gap-4 md:hidden">
          {categories.map((category) => (
            <div
              key={category.label}
              className="overflow-hidden rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] shadow-[0px_7.72px_9.64px_0px_#FF6A0026]"
            >
              <div
                className={`flex items-center gap-3 px-4 py-3.5 ${category.labelClassName}`}
              >
                {category.headerIcon}
                <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1.25] text-white">
                  {category.label}
                </p>
              </div>
              <div className="divide-y divide-[#E8C4A0]">
                {category.cells.map((cell) => (
                  <div key={cell.title} className="flex items-start gap-3.5 px-4 py-4">
                    {cell.icon ? (
                      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center">
                        {cell.icon}
                      </div>
                    ) : null}
                    <div className="min-w-0">
                      <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-semibold leading-[1.25] tracking-[-0.01rem] text-[#1C1B1B]">
                        {cell.title}
                      </p>
                      {cell.description ? (
                        <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.4] text-[#7F7F7F]">
                          {cell.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmsOperatingModesSection
