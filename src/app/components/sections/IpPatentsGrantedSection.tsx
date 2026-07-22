import React from 'react'
import Image from 'next/image'

export interface IpPatentsGrantedSectionProps {}

const features = [
  {
    title: 'Minute-by-minute generation forecasting',
    description: 'From module to plant level.',
  },
  {
    title: 'Soiling, shading & clipping loss detection',
    description: 'Identification in real time.',
  },
  {
    title: 'PVsyst comparison & performance ratio analytics',
    description: 'Accurate benchmarking and insights.',
  },
  {
    title: 'String-level fault detection & predictive maintenance',
    description: 'Proactive alerts and diagnostics.',
  },
  {
    title: 'DSM-linked generation schedule intelligence',
    description: 'Smarter bidding and dispatch.',
  },
  {
    title: 'Irradiance modelling',
    description: 'Using GHI, POA, Perez Diffuse, and IAM integration.',
  },
] as const

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <article className="flex items-start gap-3 rounded-[12px] border border-[#EFE6DF] bg-[#FFFFFF] px-3.5 py-3.5 shadow-[0px_4px_10px_0px_#FF6A0014] sm:gap-3.5 sm:px-4 sm:py-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FF7F0026] sm:h-9 sm:w-9">
        <Image
          src="/assets/shared/icons/view-eye.svg"
          alt=""
          width={18}
          height={12}
          className="h-3 w-auto sm:h-3.5"
        />
      </div>
      <div className="min-w-0 flex-1">
        <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] font-bold leading-[1.3] tracking-[-0.01rem] text-[#1C1B1B] sm:text-[0.875rem]">
          {title}
        </h3>
        <p className="mt-1 [font-family:var(--font-ibm-plex-sans)] text-[0.75rem] leading-[1.35] text-[#7F7F7F] sm:text-[0.8125rem]">
          {description}
        </p>
      </div>
    </article>
  )
}

const IpPatentsGrantedSection: React.FC<IpPatentsGrantedSectionProps> = () => {
  return (
    <section className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10 xl:gap-12">
          <div className="relative mx-auto w-full max-w-[28rem] lg:mx-0 lg:max-w-none">
            <Image
              src="/assets/ip-patents/images/granted-certificate.png"
              alt="WIPO Certificate of Grant for Digital Twin System for Solar Power Plants, WO2024171209A1"
              width={1200}
              height={1400}
              className="h-auto w-full object-contain"
            />
          </div>

          <div className="min-w-0">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
              Our First Granted Patent
            </p>

            <h2 className="mt-3 max-w-[28rem] [font-family:var(--font-ibm-plex-sans)] text-2xl font-bold leading-[1.2] tracking-[-0.04rem] text-[#1C1B1B] sm:mt-4 sm:text-3xl lg:text-[2.5rem] lg:tracking-[-0.06rem]">
              The foundation of the Solar Digital Twin.
            </h2>

            <div className="mt-4 inline-flex items-center justify-center rounded-full border border-[#FF7F00] bg-transparent px-3.5 py-1.5">
              <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.6875rem] font-bold uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.75rem]">
                WO2024171209A1
              </span>
            </div>

            <p className="mt-4 max-w-[36rem] [font-family:var(--font-ibm-plex-sans)] text-sm leading-relaxed text-[#7F7F7F] sm:text-base">
              A patented digital twin system that creates a continuously updated virtual model of a
              solar power plant, using irradiance, temperature, weather, and live telemetry to
              forecast, detect, and optimize performance in real time.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:mt-7 sm:grid-cols-2 sm:gap-3.5">
              {features.map((feature) => (
                <FeatureCard
                  key={feature.title}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[14px] border border-[#FF7F00] bg-[#FAFAFA] px-5 py-5 sm:mt-10 sm:px-6 sm:py-6 lg:mt-12 lg:px-8 lg:py-7">
          <div className="grid items-center gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-8 xl:gap-10">
            <div className="flex items-start gap-3.5 sm:gap-4">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#FF7F0026] sm:h-10 sm:w-10">
                <Image
                  src="/assets/shared/icons/view-eye.svg"
                  alt=""
                  width={20}
                  height={13}
                  className="h-3.5 w-auto sm:h-4"
                />
              </div>
              <div className="min-w-0">
                <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.0625rem] font-bold leading-[1.25] tracking-[-0.02rem] text-[#1C1B1B] sm:text-[1.25rem]">
                  Forecasts every layer of the plant simultaneously.
                </h3>
                <p className="mt-1.5 [font-family:var(--font-ibm-plex-sans)] text-[0.8125rem] leading-[1.4] text-[#7F7F7F] sm:text-[0.875rem]">
                  End-to-end visibility. Real-time intelligence. One patented digital twin.
                </p>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-[36rem] lg:mx-0 lg:max-w-none">
              <Image
                src="/assets/ip-patents/images/forecast-stack.png"
                alt="Module to plant forecast stack — module, string, inverter, transformer, plant"
                width={1200}
                height={320}
                className="h-auto w-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default IpPatentsGrantedSection
