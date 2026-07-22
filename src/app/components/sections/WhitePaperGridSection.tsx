'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export interface WhitePaperGridSectionProps {}

const filters = ['All', 'Data Centers', 'Grid Compliance', 'BESS & Storage', 'India Grid'] as const

type Filter = (typeof filters)[number]

type WhitePaper = {
  id: string
  pages: string
  date: string
  author: string
  title: string
  description: string
  topics?: string
  categories: Filter[]
  image: string
}

const whitePapers: WhitePaper[] = [
  {
    id: 'WP-002',
    pages: '31 Pages',
    date: 'SEPTEMBER 2025',
    author: 'PREPARED BY KUMAR M',
    title: "Reframing Data Centers For Grid Stability: Alberta's TCDC Framework",
    description:
      "A Deep-Dive Into Alberta's Transmission Connected Data Centre (TCDC) Framework Covering Technical Requirements, Engineering Implications, Design Considerations, And How Solvyn Enables Compliance And Optimal Performance.",
    categories: ['All', 'Data Centers', 'Grid Compliance'],
    image: '/assets/white-paper/images/paper-002.png',
  },
  {
    id: 'WP-004',
    pages: '14 Pages',
    date: 'APRIL 2025',
    author: 'PREPARED BY KUMAR M',
    title: "Unlocking India's Renewable Grid: Policy-Driven Solutions To CON4 Delay",
    description:
      "An Analysis Of Systematic, Technological, And Procedural Causes Of India's Grid Connection Delays For Renewable Assets With Recommendations For Compliance Reform, Drawing On AEMO's Pre-Approved Model Framework As A Benchmark.",
    categories: ['All', 'India Grid', 'Grid Compliance'],
    image: '/assets/white-paper/images/paper-004.png',
  },
  {
    id: 'WP-03',
    pages: '09 Pages',
    date: 'MAY 2025',
    author: 'PREPARED BY KUMAR M',
    title: 'The Smart EMS For Smart Data Centers',
    description:
      "How Solvyn's EMS Architecture Proven In Renewable Microgrid Deployments Can Be Adapted To Transform Data Center Backup Infrastructure Into Intelligent, Grid-Interactive, Future-Ready Energy Systems.",
    topics: 'Smart EMS, Data Centres, Microgrid, BESS',
    categories: ['All', 'Data Centers', 'BESS & Storage'],
    image: '/assets/white-paper/images/paper-003.png',
  },
  {
    id: 'WP-05',
    pages: 'Technical Paper',
    date: '2024',
    author: 'PREPARED BY SGA RESEARCH TEAM',
    title: 'FDRE Dispatch & Forecast-Driven Renewable Energy Scheduling',
    description:
      "A Technical Paper On Forecast-Driven Renewable Energy Dispatch Covering BESS Scheduling Methodology, DSM Compliance, And The Operational Framework Behind Solvyn's 96-Block DAM/RTM Scheduling Intelligence.",
    topics: 'FDRE, DSM',
    categories: ['All', 'BESS & Storage', 'India Grid'],
    image: '/assets/white-paper/images/paper-005.png',
  },
]

const WhitePaperGridSection: React.FC<WhitePaperGridSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const visiblePapers = whitePapers.filter((paper) => paper.categories.includes(activeFilter))

  return (
    <section id="all-white-papers" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          ALL WHITE PAPERS
        </p>
        <h2 className="mt-4 max-w-[42rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Technical research across grid, storage, and markets.
        </h2>
        <p className="mt-4 max-w-[42rem] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          All papers are authored by Kumar M and the SGA Research Team.
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
                    : 'border border-[#FF7F00] bg-white text-[#1C1B1B] hover:bg-[#FFF8F2]'
                }`}
              >
                {filter}
              </button>
            )
          })}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-2 lg:gap-6">
          {visiblePapers.map((paper) => (
            <article
              key={paper.id}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#E8C4A0] bg-[#FFFFFF] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:p-5"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[10px] bg-[#E8E8E8] sm:aspect-[16/9]">
                <Image
                  src={paper.image}
                  alt={paper.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute left-4 top-4 rounded-[8px] bg-white/90 px-2.5 py-1.5 sm:left-5 sm:top-5">
                  <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-semibold leading-[1.2] text-[#1C1B1B] sm:text-[0.875rem]">
                    {paper.id}
                  </p>
                  <p className="mt-0.5 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.2] text-[#1C1B1B] sm:text-[0.8125rem]">
                    {paper.pages}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-1 flex-col sm:mt-5">
                <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1.3] tracking-[0.02rem] text-[#1C1B1B] sm:text-[0.75rem]">
                  {paper.date} • {paper.author}
                </p>

                <h3 className="mt-2.5 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-bold leading-[1.3] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.1875rem] sm:leading-[1.25]">
                  {paper.title}
                </h3>

                <p className="mt-2.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.45] text-[#4E4E4E] sm:text-[0.875rem]">
                  {paper.description}
                </p>

                {paper.topics ? (
                  <p className="mt-auto pt-4 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.4] text-[#1C1B1B] sm:text-[0.8125rem]">
                    <span className="font-bold">Topics:</span> {paper.topics}
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>

        {visiblePapers.length === 0 ? (
          <p className="mt-8 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] leading-[1.4] text-[#7F7F7F]">
            No white papers in this category yet.
          </p>
        ) : null}
      </div>
    </section>
  )
}

export default WhitePaperGridSection
