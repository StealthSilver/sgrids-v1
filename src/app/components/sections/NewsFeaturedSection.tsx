'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface NewsFeaturedSectionProps {}

const filters = ['All', 'Events', 'Press & Media', 'Team & Culture', 'Awards'] as const

type Filter = (typeof filters)[number]

const featured = {
  category: 'EVENT' as const,
  filter: 'Events' as Filter,
  meta: 'World Future Energy Summit · Abu Dhabi · Jan 2026',
  title: 'SGA at WFES 2026 government delegations from Kuwait, Jordan, Tunisia & Egypt',
  description:
    'A full week in Abu Dhabi meeting industry leaders, policymakers, and clients. Solvyn demonstrated live, welcoming government delegations from four countries and deep conversations on the energy transition across the MENA region.',
  href: '#featured-news',
  image: '/assets/news/images/featured-wfes.png',
  imageAlt: 'Solvyn booth at World Future Energy Summit 2026 in Abu Dhabi',
}

const NewsFeaturedSection: React.FC<NewsFeaturedSectionProps> = () => {
  const [activeFilter, setActiveFilter] = useState<Filter>('All')

  const isVisible = activeFilter === 'All' || activeFilter === featured.filter

  return (
    <section id="featured-news" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap gap-2 sm:gap-2.5">
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

        {isVisible ? (
          <div className="mt-8 grid items-center gap-8 sm:mt-10 lg:mt-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
            <div className="relative mx-auto w-full max-w-[36rem] overflow-hidden rounded-[20px] bg-[#F5F5F5] sm:rounded-[24px] lg:max-w-none">
              <Image
                src={featured.image}
                alt={featured.imageAlt}
                width={860}
                height={800}
                className="h-auto w-full object-cover"
                priority
              />
            </div>

            <div className="min-w-0">
              <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-bold uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
                {featured.category}
              </p>

              <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium leading-[1.35] text-[#4E4E4E] sm:text-[0.9375rem]">
                {featured.meta}
              </p>

              <h2 className="mt-4 max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:max-w-[32rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
                {featured.title}
              </h2>

              <p className="mt-4 max-w-[34rem] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.45] text-[#7F7F7F] sm:text-base">
                {featured.description}
              </p>

              <div className="mt-7 sm:mt-8">
                <Link
                  href={featured.href}
                  className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#FF7F00] bg-[#FFFFFF] px-5 py-2 text-sm font-semibold leading-5 tracking-[0rem] text-[#1C1B1B] transition-colors duration-200 hover:bg-[#FF7F00] hover:text-white [font-family:var(--font-ibm-plex-sans)] sm:px-6"
                >
                  View highlights
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <p className="mt-10 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] leading-[1.4] text-[#7F7F7F]">
            No featured stories in this category yet.
          </p>
        )}
      </div>
    </section>
  )
}

export default NewsFeaturedSection
