export interface NavLinkItem {
  label: string
  href: string
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
          { label: 'SCADA', href: '/solvyn/scada' },
          { label: 'Digital Twin', href: '/solvyn/digital-twin' },
          { label: 'AURA', href: '/solvyn/aura' },
          { label: 'EMS', href: '/solvyn/ems' },
          { label: 'Cybersecure OT/IT', href: '/solvyn/cybersecure-ot-it' },
        ],
      },
    ],
  },
  {
    id: 'proof',
    label: 'Proof',
    href: '/proof',
    items: [
      { label: 'Case Studies', href: '/proof/case-studies' },
      { label: 'White Paper', href: '/proof/white-paper' },
      { label: 'News', href: '/proof/news' },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    href: '/company',
    items: [
      { label: 'About SGA', href: '/company/about-sga' },
      { label: 'IP & Patents', href: '/company/ip-patents' },
      { label: 'Careers', href: '/company/careers' },
    ],
  },
]

export const navContact = { label: 'Contact', href: '/#footer' }

export const navRequestDemo = { label: 'Request demo', href: '/#home-cta' }
