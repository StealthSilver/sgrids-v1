import React from 'react'

export interface IpPatentsFiledSectionProps {}

const patentAreas = [
  ['Across Digital Twin', 'Market Intelligence'],
  ['EMS Dispatch', 'Grid Control'],
] as const

function DotGrid() {
  const columns = [
    ['#C4B5FD', '#A78BFA', '#8B5CF6', '#7C3AED'],
    ['#FDBA74', '#FB923C', '#F97316', '#EA580C'],
    ['#FF9F40', '#FF8A1F', '#FF7F00', '#E67300'],
  ] as const

  return (
    <div className="grid grid-cols-3 gap-1.5" aria-hidden="true">
      {columns.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-1.5">
          {column.map((color, rowIndex) => (
            <span
              key={`${colIndex}-${rowIndex}`}
              className="h-1.5 w-1.5 rounded-full sm:h-[0.4375rem] sm:w-[0.4375rem]"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

function ShieldLockIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className="h-12 w-12 text-[#FF7F00] sm:h-14 sm:w-14 lg:h-16 lg:w-16"
    >
      <path
        d="M24 4.5 8.5 10.5v11c0 9.6 6.1 17.5 15.5 19.9 9.4-2.4 15.5-10.3 15.5-19.9v-11L24 4.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="17.5"
        y="20"
        width="13"
        height="11"
        rx="2.25"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M20.5 20v-2.75a3.5 3.5 0 0 1 7 0V20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="24" cy="25.5" r="1.35" fill="currentColor" />
    </svg>
  )
}

const IpPatentsFiledSection: React.FC<IpPatentsFiledSectionProps> = () => {
  return (
    <section className="px-4 pb-10 pt-2 sm:px-6 sm:pb-12 sm:pt-0 lg:px-8 lg:pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-[14px] border border-[#FF7F00] bg-[#FFFFFF] px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7">
          <div className="flex flex-col items-stretch gap-5 lg:flex-row lg:items-center lg:gap-0">
            <div className="flex items-center gap-4 sm:gap-5 lg:shrink-0 lg:pr-8 xl:pr-10">
              <DotGrid />
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[3rem] font-bold leading-none tracking-[-0.06rem] text-[#FF7F00] sm:text-[3.5rem] lg:text-[4rem]">
                14
              </p>
            </div>

            <div
              className="hidden h-16 w-px shrink-0 bg-[#E0D8D0] lg:block"
              aria-hidden="true"
            />
            <div className="h-px w-full bg-[#E0D8D0] lg:hidden" aria-hidden="true" />

            <div className="flex min-w-0 flex-1 flex-col justify-center lg:px-8 xl:px-10">
              <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-bold leading-[1.2] tracking-[-0.02rem] text-[#1C1B1B] sm:text-[1.25rem] lg:text-[1.375rem]">
                Patents Filed And In Progress
              </h2>

              <div className="mt-3 grid grid-cols-1 gap-x-10 gap-y-1.5 sm:mt-3.5 sm:grid-cols-2">
                {patentAreas.map((column) => (
                  <ul
                    key={column[0]}
                    className="flex flex-col gap-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] leading-[1.4] text-[#1C1B1B] sm:text-[0.9375rem]"
                  >
                    {column.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span
                          className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-[#1C1B1B]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>

            <div
              className="hidden h-16 w-px shrink-0 bg-[#E0D8D0] lg:block"
              aria-hidden="true"
            />
            <div className="h-px w-full bg-[#E0D8D0] lg:hidden" aria-hidden="true" />

            <div className="flex items-center justify-center lg:shrink-0 lg:pl-8 xl:pl-10">
              <ShieldLockIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IpPatentsFiledSection
