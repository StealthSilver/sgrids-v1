import type { Metadata } from 'next'
import BookDemoCTASection from '@/app/components/sections/BookDemoCTASection'
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
      <BookDemoCTASection
        id="ems-cta"
        className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
        title={
          <>
            Built for <span className="text-[#FF7F00]">Performance.</span>
            <br />
            Engineered for <span className="text-[#FF7F00]">Reliability.</span>
          </>
        }
        description="Solvyn EMS Empowers Utilities And IPPs With The Visibility, Control, And Automation Needed For Tomorrow's Grid Across Every Asset Class, Every Grid Code, And Every Market Condition."
      />
      <FooterSection />
    </div>
  )
}
