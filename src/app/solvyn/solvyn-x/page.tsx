import type { Metadata } from 'next'
import FooterSection from '@/app/components/sections/FooterSection'
import SolvynXCapabilitiesSection from '@/app/components/sections/SolvynXCapabilitiesSection'
import SolvynXCTASection from '@/app/components/sections/SolvynXCTASection'
import SolvynXHeroSection from '@/app/components/sections/SolvynXHeroSection'
import SolvynXHowItWorksSection from '@/app/components/sections/SolvynXHowItWorksSection'
import SolvynXProtocolSection from '@/app/components/sections/SolvynXProtocolSection'
import SolvynXTagMappingSection from '@/app/components/sections/SolvynXTagMappingSection'
import SolvynXTestbedSection from '@/app/components/sections/SolvynXTestbedSection'
import SolvynXUseCasesSection from '@/app/components/sections/SolvynXUseCasesSection'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Solvyn X | Smart Grid Analytics',
  description: solvynPages['solvyn-x'].description,
}

export default function SolvynXPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <SolvynXHeroSection />
      <SolvynXHowItWorksSection />
      <SolvynXCapabilitiesSection />
      <SolvynXProtocolSection />
      <SolvynXTagMappingSection />
      <SolvynXTestbedSection />
      <SolvynXUseCasesSection />
      <SolvynXCTASection />
      <FooterSection />
    </div>
  )
}
