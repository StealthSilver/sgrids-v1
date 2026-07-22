import React from 'react'
import Image from 'next/image'

export interface EmsSupportedAssetsSectionProps {}

const assets = [
  { title: 'Solar', image: '/assets/shared/images/asset-solar.svg' },
  { title: 'Wind', image: '/assets/shared/images/asset-wind.svg' },
  { title: 'BESS', image: '/assets/shared/images/asset-bess.svg' },
  { title: 'Hybrid', image: '/assets/shared/images/asset-hybrid.svg' },
  { title: 'Green H₂', image: '/assets/shared/images/asset-h2.svg' },
] as const

const EmsSupportedAssetsSection: React.FC<EmsSupportedAssetsSectionProps> = () => {
  return (
    <section id="supported-assets" className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="mx-auto w-full max-w-7xl">
        <div>
          <p className="[font-family:var(--font-ibm-plex-sans)] text-[0.875rem] font-medium uppercase leading-[1] tracking-[0.02rem] text-[#FF7F00] sm:text-[0.9375rem]">
            SUPPORTED ASSETS
          </p>
          <h2 className="mt-4 [font-family:var(--font-ibm-plex-sans)] text-[1.5rem] font-bold leading-[1.2] tracking-[-0.03rem] text-[#1C1B1B] sm:text-[1.9rem] lg:text-[2.35rem] lg:leading-[1.16] lg:tracking-[-0.05rem]">
            Every asset class. One control layer.
          </h2>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {assets.map((asset) => (
            <article
              key={asset.title}
              className="flex min-h-[280px] flex-col rounded-[14px] border border-[#EFE6DF] bg-[#FFFFFF] px-3 pb-4 pt-3 shadow-[0px_7.72px_9.64px_0px_#FF6A0026] transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F0052] hover:shadow-[0px_12px_18px_0px_#FF6A0038] sm:min-h-[300px]"
            >
              <div className="mx-auto flex h-[180px] w-[180px] items-center justify-center sm:h-[200px] sm:w-[200px]">
                <Image
                  src={asset.image}
                  alt={asset.title}
                  width={223}
                  height={239}
                  className="h-full w-full object-contain"
                />
              </div>

              <h3 className="mt-auto pt-4 [font-family:var(--font-ibm-plex-sans)] text-[18px] font-semibold leading-[1.2] text-[#131313]">
                {asset.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default EmsSupportedAssetsSection
