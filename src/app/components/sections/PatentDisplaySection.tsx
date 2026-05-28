import React from 'react'
import Image from 'next/image'

export interface PatentDisplaySectionProps {}

interface CapabilityTag {
  label: string
}

const capabilityTags: CapabilityTag[] = [
  { label: 'Digital Twin' },
  { label: 'EMS Dispatch' },
  { label: 'AURA Intelligence' },
  { label: 'Grid Control' },
]

const ChipIcon = (): React.JSX.Element => (
  <span className="inline-flex h-[1rem] w-[1rem] items-center justify-center">
    <Image src="/Icons/digital_twin.svg" alt="" width={16} height={16} aria-hidden="true" className="h-[0.95rem] w-[0.95rem]" />
  </span>
)

const PatentDisplaySection: React.FC<PatentDisplaySectionProps> = () => {
  return (
    <section id="patent-display" className="px-4 pb-12 pt-12 sm:px-6 sm:pb-14 sm:pt-14 lg:px-8 lg:pb-16 lg:pt-16">
      <div
        className="mx-auto flex w-full flex-col justify-center rounded-[0.95rem] border border-[#F2D4CE] px-4 py-4 shadow-[0px_10px_19.9px_0px_#00000033] sm:px-5 sm:py-[1.05rem] lg:flex-row lg:items-center lg:justify-between lg:px-[1.3rem] lg:py-[0.95rem]"
        style={{ background: 'linear-gradient(90deg, #F26C0D 0%, #C56D7C 41.47%, #8A70F8 100%)' }}
      >
        <div className="flex items-center gap-3.5 lg:gap-[0.95rem]">
          <div className="pt-[0.05rem]">
            <p className="[font-family:var(--font-ibm-plex-sans)] text-[2.25rem] font-semibold leading-[0.92] tracking-[-0.06rem] text-[#FFF5EF] sm:text-[2.45rem] lg:text-[2.7rem]">
              14 +
            </p>
            <p className="-mt-[0.08rem] [font-family:var(--font-ibm-plex-sans)] text-[1.45rem] font-semibold leading-[1] tracking-[-0.02rem] text-[#FFF5EF] sm:text-[1.56rem] lg:text-[1.68rem]">
              Patents
            </p>
            <p className="mt-[0.6rem] max-w-[9.5rem] [font-family:var(--font-ibm-plex-sans)] text-[0.72rem] font-normal leading-[1.12] tracking-[0] text-[#FFEFE9] sm:text-[0.76rem]">
              Filed and in progress across the Solvyn platform
            </p>
          </div>

          <div className="max-w-[31rem] pt-[0.03rem]">
            <h3 className="[font-family:var(--font-ibm-plex-sans)] text-[1.15rem] font-medium leading-[1.22] tracking-[-0.01rem] text-[#FDF7FF] sm:text-[1.22rem] lg:text-[1.34rem]">
              Covering Digital Twin Models, EMS Dispatch logic, AURA intelligence, and grid-interactive control systems.
            </h3>
            <div className="mt-[0.78rem] flex flex-wrap gap-[0.45rem]">
              {capabilityTags.map((tag) => (
                <div
                  key={tag.label}
                  className="inline-flex h-[1.8rem] items-center gap-[0.35rem] rounded-[0.45rem] border border-[#FFFFFF42] bg-[#FFFFFF24] px-[0.62rem]"
                >
                  <ChipIcon />
                  <span className="[font-family:var(--font-ibm-plex-sans)] text-[0.77rem] font-semibold leading-[1] tracking-[0] text-[#F4EAFE] sm:text-[0.8rem]">
                    {tag.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 flex shrink-0 items-center gap-[0.9rem] border-t border-white/25 pt-3.5 lg:mt-0 lg:border-t-0 lg:pt-0">
          <Image
            src="/Icons/protection.svg"
            alt=""
            width={42}
            height={42}
            aria-hidden="true"
            className="h-[2.7rem] w-[2.7rem] sm:h-[3rem] sm:w-[3rem]"
          />
          <button
            type="button"
            className="[font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-semibold leading-[1] tracking-[-0.01rem] text-[#FFF8FF] sm:text-[1.62rem] lg:text-[1.72rem]"
          >
            View IP & patents
          </button>
        </div>
      </div>
    </section>
  )
}

export default PatentDisplaySection
