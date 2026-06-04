export interface NavLinkItem {
  label: string
  href: string
  description?: string
}

export interface NavLinkGroup {
  label: string
  items: NavLinkItem[]
}

export interface NavMenu {
  id: string
  label: string
  href: string
  groups?: NavLinkGroup[]
  items?: NavLinkItem[]
}

export const navMenus: NavMenu[] = [
  {
    id: 'solvyn',
    label: 'Solvyn',
    href: '/solvyn',
    groups: [
      {
        label: 'Solvyn X',
        items: [
          { label: 'SCADA', href: '/solvyn/scada', description: 'Grid and plant data visibility' },
          { label: 'Digital Twin', href: '/solvyn/digital-twin', description: 'Performance and fault prediction' },
          { label: 'AURA', href: '/solvyn/aura', description: 'AI-driven optimization' },
          { label: 'EMS', href: '/solvyn/ems', description: 'Automated control execution' },
          { label: 'Cybersecure OT/IT', href: '/solvyn/cybersecure-ot-it', description: 'OT isolated from cloud' },
        ],
      },
    ],
  },
  {
    id: 'proof',
    label: 'Proof',
    href: '/proof',
    items: [
      { label: 'Case Studies', href: '/proof/case-studies', description: 'Deployed outcomes at scale' },
      { label: 'White Paper', href: '/proof/white-paper', description: 'Patents and platform IP' },
      { label: 'News', href: '/proof/news', description: 'Updates and announcements' },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    href: '/company',
    items: [
      { label: 'About SGA', href: '/company/about-sga', description: 'Who we are and what we build' },
      { label: 'IP & Patents', href: '/company/ip-patents', description: '14+ patents across Solvyn' },
      { label: 'Careers', href: '/company/careers', description: 'Join the engineering team' },
    ],
  },
]

export const navContact = { label: 'Contact', href: '/#footer' }

export const navRequestDemo = { label: 'Request demo', href: '/#home-cta' }
