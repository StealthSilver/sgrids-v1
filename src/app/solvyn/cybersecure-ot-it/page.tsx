import type { Metadata } from 'next'
import CybersecureDeliversSection from '@/app/components/sections/CybersecureDeliversSection'
import CybersecureHeroSection from '@/app/components/sections/CybersecureHeroSection'
import CybersecureLayersSection from '@/app/components/sections/CybersecureLayersSection'
import CybersecureMattersSection from '@/app/components/sections/CybersecureMattersSection'
import CybersecureZeroTrustSection from '@/app/components/sections/CybersecureZeroTrustSection'
import BookDemoCTASection from '@/app/components/sections/BookDemoCTASection'
import FooterSection from '@/app/components/sections/FooterSection'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Cybersecure OT/IT | Smart Grid Analytics',
  description: solvynPages['cybersecure-ot-it'].description,
}

export default function CybersecureOtItPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <CybersecureHeroSection />
      <CybersecureMattersSection />
      <CybersecureZeroTrustSection />
      <CybersecureLayersSection />
      <CybersecureDeliversSection />
      <BookDemoCTASection
        id="cybersecure-cta"
        title="See the Digital Twin in action."
        description="Talk To Our Team About Your Plant Type And Operational Context. We'll Show You Exactly How The Solar And BESS Digital Twins Map To Your Assets."
      />
      <FooterSection />
    </div>
  )
}
