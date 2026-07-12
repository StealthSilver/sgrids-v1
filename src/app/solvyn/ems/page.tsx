import type { Metadata } from 'next'
import EmsCTASection from '@/app/components/sections/EmsCTASection'
import EmsGlanceSection from '@/app/components/sections/EmsGlanceSection'
import EmsHeroSection from '@/app/components/sections/EmsHeroSection'
import EmsOperatingModesSection from '@/app/components/sections/EmsOperatingModesSection'
import EmsSupportedAssetsSection from '@/app/components/sections/EmsSupportedAssetsSection'
import FooterSection from '@/app/components/sections/FooterSection'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'EMS | Smart Grid Analytics',
  description: solvynPages.ems.description,
}

export default function EmsPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <EmsHeroSection />
      <EmsOperatingModesSection />
      <EmsGlanceSection />
      <EmsSupportedAssetsSection />
      <EmsCTASection />
      <FooterSection />
    </div>
  )
}
