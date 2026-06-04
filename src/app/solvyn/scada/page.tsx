import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'SCADA | Smart Grid Analytics',
  description: solvynPages.scada.description,
}

export default function ScadaPage(): React.JSX.Element {
  return <SitePage {...solvynPages.scada} />
}
