import type { Metadata } from 'next'
import AuraBannerSection from '@/app/components/sections/AuraBannerSection'
import BookDemoCTASection from '@/app/components/sections/BookDemoCTASection'
import AuraEcosystemSection from '@/app/components/sections/AuraEcosystemSection'
import AuraExplainableSection from '@/app/components/sections/AuraExplainableSection'
import AuraHeroSection from '@/app/components/sections/AuraHeroSection'
import AuraHighlightsSection from '@/app/components/sections/AuraHighlightsSection'
import AuraHowItWorksSection from '@/app/components/sections/AuraHowItWorksSection'
import AuraPillarsSection from '@/app/components/sections/AuraPillarsSection'
import FooterSection from '@/app/components/sections/FooterSection'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'AURA | Smart Grid Analytics',
  description: solvynPages.aura.description,
}

export default function AuraPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <AuraHeroSection />
      <AuraHighlightsSection />
      <AuraEcosystemSection />
      <AuraHowItWorksSection />
      <AuraPillarsSection />
      <AuraExplainableSection />
      <AuraBannerSection />
      <BookDemoCTASection
        id="aura-cta"
        className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
        title="See AURA make decisions."
        description="Talk To Our Team About Your Commercial And Operational Context. We'll Show You How AURA's Four Capability Pillars Map To Your Revenue And Risk Challenges."
      />
      <FooterSection />
    </div>
  )
}
