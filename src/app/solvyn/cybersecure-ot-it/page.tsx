import type { Metadata } from 'next'
import CybersecureHeroSection from '@/app/components/sections/CybersecureHeroSection'
import CybersecureMattersSection from '@/app/components/sections/CybersecureMattersSection'
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
      <FooterSection />
    </div>
  )
}
