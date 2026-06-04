import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Digital Twin | Smart Grid Analytics',
  description: solvynPages['digital-twin'].description,
}

export default function DigitalTwinPage(): React.JSX.Element {
  return <SitePage {...solvynPages['digital-twin']} />
}
