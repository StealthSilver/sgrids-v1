import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'AURA | Smart Grid Analytics',
  description: solvynPages.aura.description,
}

export default function AuraPage(): React.JSX.Element {
  return <SitePage {...solvynPages.aura} />
}
