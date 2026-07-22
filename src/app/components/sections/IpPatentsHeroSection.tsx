import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { navRequestDemo } from '@/app/data/nav.data'

export interface IpPatentsHeroSectionProps {}

const IpPatentsHeroSection: React.FC<IpPatentsHeroSectionProps> = () => {
  return (
    <section className="px-4 pb-8 pt-6 sm:px-6 sm:pb-8 sm:pt-8 lg:px-8 lg:pb-10 lg:pt-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.95fr] lg:gap-10 xl:gap-12">
          <div className="flex flex-col items-start">
            <div className="mb-4 inline-flex max-w-full items-center justify-center rounded-full bg-[#FF7F0026] px-3.5 py-1.5">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.5625rem] font-bold uppercase leading-[1.2] tracking-[0.015rem] text-[#FF7F00] sm:text-[0.625rem] lg:text-[0.6875rem]">
                IP & Patents
              </span>
            </div>

            <h1 className="max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.06rem] text-[#1C1B1B] sm:max-w-[32rem] sm:text-3xl lg:max-w-[34rem] lg:text-[2.75rem] lg:leading-[1.2] lg:tracking-[-0.1rem]">
              Our innovation is protected because it is genuinely new.
            </h1>

            <p className="mt-5 max-w-[32rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              The Solvyn platform is built on a foundation of proprietary methods, patented models,
              and first-principles engineering. Our growing IP portfolio protects the innovations
              that make Solvyn fundamentally different, not just incrementally better.
            </p>

            <div className="mt-7">
              <Link
                href={navRequestDemo.href}
                className="inline-flex items-center justify-center rounded-full bg-[#FF7F00] px-6 py-1.5 text-sm font-bold leading-5 tracking-[0rem] text-white transition-colors duration-200 hover:bg-[#E67300] [font-family:var(--font-ibm-plex-sans)]"
              >
                Request a Demo
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[28rem] lg:max-w-none">
            <Image
              src="/Images/ip-patents-hero-certificate.png"
              alt="Solvyn IP portfolio — United States patent certificate with digital twin architecture and EMS dispatch logic filings"
              width={1200}
              height={900}
              priority
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default IpPatentsHeroSection
