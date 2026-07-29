import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface NewsEventsSectionProps {}

const events = [
  {
    image: assetUrl('/assets/news/images/event-rei-2025.png'),
    tag: 'NEWS & EVENTS',
    tagClass: 'bg-[#FF7F0026] text-[#FF7F00]',
    date: 'OCT–NOV 2025',
    title: 'REI 2025, Solvyn Launched At India\'s Largest Renewable Expo',
    description:
      'Three Days On The Floor At REI 2025. Solvyn Officially Launched, Showcasing EMS, AURA, Digital Twins, DSM, PQ, And EaaS. Booth Buzzing Across All Three Days.',
  },
  {
    image: assetUrl('/assets/news/images/event-dsm-panel.png'),
    tag: 'CONFERENCE',
    tagClass: 'bg-[#1A6B6B26] text-[#1A6B6B]',
    date: 'NOV 2025',
    title: 'Renewable Watch O&M Conference Generation Forecasting Panel',
    description:
      'Venkata Krishnan Panelist Alongside NTPC Renewable, BluPine, ACME, Hero Future Energies On DSM, Digital Twin Forecasting, And 5-Min-Ahead Scheduling.',
  },
  {
    image: assetUrl('/assets/news/images/event-500gw-panel.png'),
    tag: 'PANEL',
    tagClass: 'bg-[#2F6FED26] text-[#2F6FED]',
    date: 'NOV 2025',
    title: 'Frost & Sullivan "500 GW By 2030" Panel At REI 2025',
    description:
      'Venkata Krishnan Joined Waaree, ENGIE, Premier Energies, And SWELECT To Discuss India\'s Path To 500 GW.',
  },
  {
    image: assetUrl('/assets/news/images/event-europe-energy.png'),
    tag: 'EXHIBITION',
    tagClass: 'bg-[#1F6B4A26] text-[#1F6B4A]',
    date: 'FEB 2026',
    title: 'E-World Energy & Water 2026 Kumar M Presents Solvyn Live',
    description:
      'Kumar M Presented Solvyn\'s Intelligence Layer At Europe\'s Premier Energy Event Demonstrating Solar, Wind, Storage, And Hydrogen Coordination In Real Time.',
  },
  {
    image: assetUrl('/assets/news/images/event-san-diego.png'),
    tag: 'EXHIBITION',
    tagClass: 'bg-[#FF7F0026] text-[#FF7F00]',
    date: 'FEB 18–20, 2026',
    title: 'Intersolar & Energy Storage North America 2026',
    description:
      'Venkata Krishnan Representing SGA In San Diego Conversations On Grid-Code Compliance, Smarter BESS, And Real-Time Optimization For Hybrid Assets.',
  },
  {
    image: assetUrl('/assets/news/images/event-bes-2026.png'),
    tag: 'SUMMIT',
    tagClass: 'bg-[#6B3FA026] text-[#6B3FA0]',
    date: '2026',
    title: 'Bharat Electricity Summit 2026 Shaping The Future Of Clean Energy',
    description:
      'SGA Leadership At BES 2026, Engaging In Conversations On Electricity\'s Future And India\'s Clean Energy Transition Agenda.',
  },
  {
    image: '/local_assets/news1.png',
    tag: 'SPEAKING SESSION',
    tagClass: 'bg-[#FF7F0026] text-[#FF7F00]',
    date: 'MAR 21 2026',
    title: 'IESA Kumar M On EMS Shaping Modern Energy Operations',
    description:
      'An Insightful Session On How Advanced EMS Systems Are Driving Intelligent Grid Integration, Optimising Storage Performance, And Improving Operational Efficiency.',
  },
  {
    image: '/local_assets/news2.png',
    tag: 'PRESS CONFERENCE',
    tagClass: 'bg-[#FF7F0026] text-[#FF7F00]',
    date: 'APR 8 2026',
    title: 'REI RenewX Venkata Krishnan Speaks On Smart Grid Advancements',
    description:
      'Panelist At The RenewX Press Conference Highlighting How Solvyn And Solvyn AURA Enable Smarter, Data-Driven Grid Operations.',
  },
  {
    image: '/local_assets/news3.png',
    tag: 'RECOGNITION',
    tagClass: 'bg-[#FF7F0026] text-[#FF7F00]',
    date: 'JUN 2 2026',
    title: 'IESA Honours Kumar M As A Leading Voice In India\'s Energy Storage Ecosystem',
    description:
      'Recognized For Years Of Driving Innovation, Digital Transformation, And Grid Modernization Bridging Technology, Policy, And Market Adoption.',
  },
] as const

const NewsEventsSection: React.FC<NewsEventsSectionProps> = () => {
  return (
    <section id="events-conferences" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h2 className="[font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Events &amp; Conferences
          </h2>

          <Link
            href="#events-conferences"
            className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#D4D4D4] bg-[#FFFFFF] px-5 py-2 text-sm font-semibold leading-5 tracking-[0rem] text-[#1C1B1B] transition-colors duration-200 hover:border-[#FF7F00] hover:bg-[#FFF8F2] [font-family:var(--font-ibm-plex-sans)]"
          >
            View All
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            >
              →
            </span>
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-7">
          {events.map((event) => (
            <article
              key={event.title}
              className="flex flex-col overflow-hidden rounded-[14px] border border-[#E8E8E8] bg-[#FFFFFF] p-4 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:p-5"
            >
              <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[10px] bg-[#F5F5F5] sm:aspect-[4/3] sm:min-h-[240px] lg:min-h-[280px]">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2.5 sm:mt-5">
                <span
                  className={`inline-flex h-7 items-center justify-center rounded-full px-3 py-1 [font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] sm:text-[0.6875rem] ${event.tagClass}`}
                >
                  {event.tag}
                </span>
                <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#7F7F7F] sm:text-[0.75rem]">
                  {event.date}
                </span>
              </div>

              <h3 className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-bold leading-[1.3] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[1.125rem]">
                {event.title}
              </h3>

              <p className="mt-2.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.45] text-[#7F7F7F] sm:text-[0.875rem]">
                {event.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsEventsSection
