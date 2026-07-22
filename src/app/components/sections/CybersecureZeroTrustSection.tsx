import React from 'react'
import Image from 'next/image'

export interface CybersecureZeroTrustSectionProps {}

const steps = [
  { label: 'Authenticate', image: '/Images/cybersecure-zero-trust-authenticate.png' },
  { label: 'Authorize', image: '/Images/cybersecure-zero-trust-authorize.png' },
  { label: 'Validate', image: '/Images/cybersecure-zero-trust-validate.png' },
  { label: 'Monitor', image: '/Images/cybersecure-zero-trust-monitor.png' },
  { label: 'Audit', image: '/Images/cybersecure-zero-trust-audit.png' },
] as const

const CybersecureZeroTrustSection: React.FC<CybersecureZeroTrustSectionProps> = () => {
  return (
    <section id="zero-trust-approach" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
          ZERO TRUST APPROACH
        </p>
        <h2 className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
          Trust nothing. Verify everything.
        </h2>
        <p className="mt-4 max-w-[720px] [font-family:var(--font-ibm-plex-sans)] text-[15px] leading-[1.4] text-[#7F7F7F] sm:text-base">
          From a single module to total plant output Solvyn&apos;s Solar Digital Twin generates
          minute-by-minute forecasts at every level of the generation stack, using real weather and
          plant data.
        </p>

        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          {/* Connector line — solid orange, first image → last image, behind icons */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-[5%] right-[5%] top-[calc(9.75rem*0.72)] z-0 hidden h-[2px] -translate-y-1/2 bg-[#FF7F00] lg:block xl:top-[calc(10.75rem*0.72)]"
          />

          <div className="relative z-10 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-5 lg:gap-x-4 xl:gap-x-8">
            {steps.map((step) => (
              <div key={step.label} className="flex flex-col items-center text-center">
                <div className="flex h-[7.5rem] w-full items-end justify-center sm:h-[8.5rem] lg:h-[9.75rem] xl:h-[10.75rem]">
                  <Image
                    src={step.image}
                    alt={step.label}
                    width={220}
                    height={220}
                    className="h-full w-auto max-w-full object-contain"
                  />
                </div>
                <p className="mt-3 [font-family:var(--font-ibm-plex-sans)] text-[0.9375rem] font-semibold leading-[1.2] tracking-[-0.01rem] text-[#1C1B1B] sm:mt-4 sm:text-[1rem] lg:text-[1.0625rem]">
                  {step.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CybersecureZeroTrustSection
