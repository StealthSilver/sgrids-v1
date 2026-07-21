'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export interface WhitePaperCTASectionProps {}

const WhitePaperCTASection: React.FC<WhitePaperCTASectionProps> = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <section id="stay-updated" className="px-4 py-10 sm:px-6 lg:px-8 lg:py-20">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          STAY UPDATED
        </p>

        <div className="mt-5 overflow-hidden rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] shadow-[0px_7.72px_9.64px_0px_#FF6A0026] lg:mt-6">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
            <div className="flex flex-col gap-5 px-5 py-7 sm:flex-row sm:items-center sm:gap-6 sm:px-7 sm:py-8 lg:gap-7 lg:px-8 lg:py-9">
              <div className="relative mx-auto w-full max-w-[10rem] shrink-0 sm:mx-0 sm:max-w-[11rem] lg:max-w-[12.5rem]">
                <Image
                  src="/Images/white-paper-cta.png"
                  alt="White paper notifications"
                  width={400}
                  height={400}
                  className="h-auto w-full object-contain"
                />
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="max-w-[22rem] [font-family:var(--font-ibm-plex-sans)] text-[1.35rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.6rem] lg:text-[1.85rem] lg:leading-[1.16] lg:tracking-[-0.04rem]">
                  New research published regularly.
                </h2>
                <p className="mt-3 max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.45] text-[#1C1B1B] sm:text-[0.875rem] sm:leading-[1.5]">
                  The SGA Research Team Publishes White Papers On Grid Codes, BESS Intelligence,
                  Market Structures, And Renewable Energy Policy. Get New Papers Delivered When
                  They&apos;re Published.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center border-t border-[#EFE6DF] bg-[#FFF8F2] px-5 py-7 sm:px-7 sm:py-8 lg:border-l lg:border-t-0 lg:px-8 lg:py-9">
              <h3 className="max-w-[18rem] [font-family:var(--font-ibm-plex-sans)] text-[1.125rem] font-bold leading-[1.25] tracking-[-0.02rem] text-[#1C1B1B] sm:text-[1.25rem] lg:text-[1.35rem]">
                Get notified when new papers are published
              </h3>

              <form
                onSubmit={handleSubmit}
                className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:flex-row sm:items-stretch"
              >
                <label htmlFor="white-paper-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="white-paper-email"
                  type="email"
                  name="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="your@email.com"
                  className="min-w-0 flex-1 rounded-[10px] border border-[#EFE6DF] bg-white px-4 py-2.5 [font-family:var(--font-ibm-plex-sans)] text-sm leading-5 text-[#1C1B1B] placeholder:text-[#9A9A9A] outline-none transition-colors duration-200 focus:border-[#FF7F00]"
                />
                <button
                  type="submit"
                  className="inline-flex shrink-0 items-center justify-center rounded-[10px] bg-[#FF7F00] px-5 py-2.5 text-sm font-bold leading-5 text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)] sm:px-6"
                >
                  Subscribe
                </button>
              </form>

              <p className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] leading-[1.45] text-[#7F7F7F] sm:text-[0.75rem]">
                We Value Your Privacy. By Subscribing You Agree To Our{' '}
                <Link
                  href="#privacy-policy"
                  className="underline decoration-[#7F7F7F]/50 underline-offset-2 transition-colors hover:text-[#1C1B1B]"
                >
                  Privacy Policy
                </Link>
                . No Spam — Research Papers Only.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhitePaperCTASection
