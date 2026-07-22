import type { Metadata } from 'next'
import BookDemoCTASection from '@/app/components/sections/BookDemoCTASection'
import FooterSection from '@/app/components/sections/FooterSection'
import SolvynLandingBuiltForSection from '@/app/components/sections/SolvynLandingBuiltForSection'
import SolvynLandingHeroSection from '@/app/components/sections/SolvynLandingHeroSection'
import SolvynLandingHowItWorksSection from '@/app/components/sections/SolvynLandingHowItWorksSection'
import SolvynLandingMarketSection from '@/app/components/sections/SolvynLandingMarketSection'
import SolvynLandingPlatformSection from '@/app/components/sections/SolvynLandingPlatformSection'
import SolvynLandingProvenSection from '@/app/components/sections/SolvynLandingProvenSection'
import SolvynLandingSystemSection from '@/app/components/sections/SolvynLandingSystemSection'
import SolvynLandingWhySection from '@/app/components/sections/SolvynLandingWhySection'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Solvyn | Smart Grid Analytics',
  description: solvynPages.index.description,
}

export default function SolvynPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <SolvynLandingHeroSection />
      <SolvynLandingPlatformSection />
      <SolvynLandingMarketSection />
      <SolvynLandingSystemSection />
      <SolvynLandingHowItWorksSection />
      <SolvynLandingBuiltForSection />
      <SolvynLandingProvenSection />
      <SolvynLandingWhySection />
      <BookDemoCTASection
        id="solvyn-cta"
        title="Ready to run energy operations as one system?"
        description="Talk To Our Team About Your Plant Type, Portfolio, And Control Requirements. We'll Show You How Solvyn Maps Across Connectivity, SCADA, Twin, Intelligence, And Secure Execution."
      />
      <FooterSection />
    </div>
  )
}
