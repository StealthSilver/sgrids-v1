import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface IpPatentsFiledSectionProps {}

const patentAreas = [
  ['Across Digital Twin', 'Market Intelligence'],
  ['EMS Dispatch', 'Grid Control'],
] as const

function DotGrid() {
  const rows = [
    ['#8B5CF6', '#FB923C', '#A78BFA', '#8B5CF6', '#F97316'],
    ['#A78BFA', '#8B5CF6', '#EF6C6C', '#A78BFA', '#8B5CF6'],
    ['#8B5CF6', '#FB923C', '#8B5CF6', '#A78BFA', '#8B5CF6'],
    ['#F97316', '#A78BFA', '#8B5CF6', '#8B5CF6', '#EA580C'],
  ] as const

  return (
    <div className="flex flex-col gap-2" aria-hidden="true">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-2">
          {row.map((color, colIndex) => (
            <span
              key={`${rowIndex}-${colIndex}`}
              className="h-1.5 w-1.5 rounded-full sm:h-2 sm:w-2"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

const IpPatentsFiledSection: React.FC<IpPatentsFiledSectionProps> = () => {
  return (
    <section className="px-4 pb-8 pt-2 sm:px-6 sm:pb-8 sm:pt-0 lg:px-8 lg:pb-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="rounded-[14px] border border-[#FF7F00] bg-[#FFFFFF] px-5 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-9">
          <div className="flex flex-col items-stretch gap-6 lg:flex-row lg:items-center lg:gap-0">
            <div className="flex items-center gap-5 sm:gap-8 lg:shrink-0 lg:pr-10 xl:pr-14">
              <DotGrid />
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[3.25rem] font-bold leading-none tracking-[-0.06rem] text-[#FF7F00] sm:text-[4rem] lg:text-[4.75rem]">
                21
              </p>
            </div>

            <div className="h-px w-full bg-[#E0D8D0] lg:hidden" aria-hidden="true" />

            <div className="flex min-w-0 flex-1 flex-col justify-center lg:px-6 xl:px-8">
              <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[1.375rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.625rem] lg:text-[1.75rem]">
                Patents Filed And In Progress
              </h2>

              <div className="mt-3.5 grid max-w-[34rem] grid-cols-1 gap-x-8 gap-y-2 sm:mt-4 sm:grid-cols-2">
                {patentAreas.map((column) => (
                  <ul
                    key={column[0]}
                    className="flex flex-col gap-2 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] leading-[1.4] text-[#1C1B1B] sm:text-[1.0625rem]"
                  >
                    {column.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <span
                          className="mt-[0.55em] h-[0.3125rem] w-[0.3125rem] shrink-0 rounded-full bg-[#1C1B1B]"
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
              className="hidden h-20 w-px shrink-0 bg-[#E0D8D0] lg:block"
              aria-hidden="true"
            />
            <div className="h-px w-full bg-[#E0D8D0] lg:hidden" aria-hidden="true" />

            <div className="flex items-center justify-center lg:shrink-0 lg:pl-10 xl:pl-14">
              <Image
                src={assetUrl('/assets/shared/images/shield-accent.png')}
                alt=""
                aria-hidden="true"
                width={96}
                height={96}
                className="h-16 w-16 object-contain sm:h-20 sm:w-20 lg:h-24 lg:w-24"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IpPatentsFiledSection
