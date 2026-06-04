import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Solvyn | Smart Grid Analytics',
  description: solvynPages.index.description,
}

export default function SolvynPage(): React.JSX.Element {
  return <SitePage {...solvynPages.index} />
}
