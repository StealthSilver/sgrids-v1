import { assetUrl } from '@/lib/cdn'
import React from 'react'
import Image from 'next/image'

export interface NewsHeroSectionProps {}

const NewsHeroSection: React.FC<NewsHeroSectionProps> = () => {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10 xl:gap-12">
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-flex h-7 items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.625rem] font-bold uppercase leading-[1] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.6875rem]">
                NEWS &amp; EVENTS
              </span>
            </div>

            <h1 className="max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.06rem] text-[#1C1B1B] sm:max-w-[32rem] sm:text-3xl lg:max-w-[34rem] lg:text-[2.75rem] lg:leading-[1.2] lg:tracking-[-0.1rem]">
              Where SGA shows up. What the world is saying.
            </h1>

            <p className="mt-5 max-w-[32rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              From conference floors to press rooms, award stages to global summits, every event,
              every feature, every moment that tells the Solvyn story.
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/3] w-full max-w-[28rem] overflow-hidden rounded-[28px] sm:rounded-[32px] lg:max-w-none lg:rounded-[36px]">
            <Image
              src={assetUrl('/assets/news/images/hero.png')}
              alt="SGA receiving the IESA EMS Player of the Year award"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsHeroSection
