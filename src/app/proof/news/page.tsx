import type { Metadata } from 'next'
import FooterSection from '@/app/components/sections/FooterSection'
import NewsAwardsSection from '@/app/components/sections/NewsAwardsSection'
import NewsCTASection from '@/app/components/sections/NewsCTASection'
import NewsCultureSection from '@/app/components/sections/NewsCultureSection'
import NewsEventsSection from '@/app/components/sections/NewsEventsSection'
import NewsFeaturedSection from '@/app/components/sections/NewsFeaturedSection'
import NewsHeroSection from '@/app/components/sections/NewsHeroSection'
import NewsPressSection from '@/app/components/sections/NewsPressSection'
import { proofPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'News | Smart Grid Analytics',
  description: proofPages.news.description,
}

export default function NewsPage(): React.JSX.Element {
  return (
    <div className="flex min-h-[calc(100vh-3rem)] flex-col bg-[#FFFFFF]">
      <NewsHeroSection />
      <NewsFeaturedSection />
      <NewsEventsSection />
      <NewsAwardsSection />
      <NewsPressSection />
      <NewsCultureSection />
      <NewsCTASection />
      <FooterSection />
    </div>
  )
}
