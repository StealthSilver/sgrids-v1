import type { Metadata } from 'next'
import BookDemoCTASection from '@/app/components/sections/BookDemoCTASection'
import DigitalTwinDeliversSection from '@/app/components/sections/DigitalTwinDeliversSection'
import DigitalTwinEcosystemSection from '@/app/components/sections/DigitalTwinEcosystemSection'
import DigitalTwinHeroSection from '@/app/components/sections/DigitalTwinHeroSection'
import DigitalTwinHowItWorksSection from '@/app/components/sections/DigitalTwinHowItWorksSection'
import DigitalTwinModelsSection from '@/app/components/sections/DigitalTwinModelsSection'
import DigitalTwinSolarSection from '@/app/components/sections/DigitalTwinSolarSection'
import FooterSection from '@/app/components/sections/FooterSection'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Digital Twin | Smart Grid Analytics',
  description: solvynPages['digital-twin'].description,
}

export default function DigitalTwinPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <DigitalTwinHeroSection />
      <DigitalTwinModelsSection />
      <DigitalTwinSolarSection />
      <DigitalTwinHowItWorksSection />
      <DigitalTwinEcosystemSection />
      <DigitalTwinDeliversSection />
      <BookDemoCTASection id="digital-twin-cta" />
      <FooterSection />
    </div>
  )
}
