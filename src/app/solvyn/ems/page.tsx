import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'EMS | Smart Grid Analytics',
  description: solvynPages.ems.description,
}

export default function EmsPage(): React.JSX.Element {
  return <SitePage {...solvynPages.ems} />
}
