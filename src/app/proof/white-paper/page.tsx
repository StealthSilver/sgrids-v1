import type { Metadata } from 'next'
import FooterSection from '@/app/components/sections/FooterSection'
import WhitePaperCTASection from '@/app/components/sections/WhitePaperCTASection'
import BookDemoCTASection from '@/app/components/sections/BookDemoCTASection'
import WhitePaperGridSection from '@/app/components/sections/WhitePaperGridSection'
import WhitePaperHeroSection from '@/app/components/sections/WhitePaperHeroSection'
import WhitePaperLatestSection from '@/app/components/sections/WhitePaperLatestSection'
import { proofPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'White Paper | Smart Grid Analytics',
  description: proofPages['white-paper'].description,
}

export default function WhitePaperPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <WhitePaperHeroSection />
      <WhitePaperLatestSection />
      <WhitePaperGridSection />
      <WhitePaperCTASection />
      <BookDemoCTASection id="white-paper-demo-cta" />
      <FooterSection />
    </div>
  )
}
