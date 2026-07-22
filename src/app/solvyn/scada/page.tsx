import type { Metadata } from 'next'
import BookDemoCTASection from '@/app/components/sections/BookDemoCTASection'
import FooterSection from '@/app/components/sections/FooterSection'
import ScadaAboutSection from '@/app/components/sections/ScadaAboutSection'
import ScadaArchitectureSection from '@/app/components/sections/ScadaArchitectureSection'
import ScadaCapabilitiesSection from '@/app/components/sections/ScadaCapabilitiesSection'
import ScadaHeroSection from '@/app/components/sections/ScadaHeroSection'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'SCADA | Smart Grid Analytics',
  description: solvynPages.scada.description,
}

export default function ScadaPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <ScadaHeroSection />
      <ScadaAboutSection />
      <ScadaArchitectureSection />
      <ScadaCapabilitiesSection />
      <BookDemoCTASection
        id="scada-cta"
        className="px-4 py-8 sm:px-6 sm:py-8 lg:px-8 lg:py-10"
      />
      <FooterSection />
    </div>
  )
}
