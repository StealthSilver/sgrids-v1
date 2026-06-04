import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { proofPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'News | Smart Grid Analytics',
  description: proofPages.news.description,
}

export default function NewsPage(): React.JSX.Element {
  return <SitePage {...proofPages.news} />
}
