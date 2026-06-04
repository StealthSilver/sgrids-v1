import type { Metadata } from 'next'
import SitePage from '@/app/components/pages/SitePage'
import { solvynPages } from '@/app/data/pages.data'

export const metadata: Metadata = {
  title: 'Cybersecure OT/IT | Smart Grid Analytics',
  description: solvynPages['cybersecure-ot-it'].description,
}

export default function CybersecureOtItPage(): React.JSX.Element {
  return <SitePage {...solvynPages['cybersecure-ot-it']} />
}
