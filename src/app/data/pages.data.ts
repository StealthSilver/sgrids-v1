export interface SitePageContent {
  eyebrow: string
  title: string
  description: string
}

export const solvynPages = {
  index: {
    eyebrow: 'Solvyn',
    title: 'The Solvyn Architecture',
    description:
      'From field data capture to AI-powered optimization — a unified platform for SCADA, EMS, digital twin, and secure OT/IT operations.',
  },
  scada: {
    eyebrow: 'Solvyn X',
    title: 'SCADA',
    description:
      'Unify grid and plant data into one operational picture. Real-time telemetry and visibility across every asset and protocol.',
  },
  'digital-twin': {
    eyebrow: 'Solvyn X',
    title: 'Digital Twin',
    description:
      'Patented models from module to plant level. Predict performance, detect faults early, and optimize dispatch with confidence.',
  },
  aura: {
    eyebrow: 'Solvyn X',
    title: 'AURA',
    description:
      'AI-driven optimization that turns forecasts into actionable schedules for hybrid, storage, and grid-interactive plants.',
  },
  ems: {
    eyebrow: 'Solvyn X',
    title: 'EMS',
    description:
      'Grid-ready dispatch and automated control. Convert grid requirements into precise plant and asset setpoints.',
  },
  'cybersecure-ot-it': {
    eyebrow: 'Solvyn X',
    title: 'Cybersecure OT/IT',
    description:
      'Secure one-way sync keeps OT isolated from cloud while enabling centralized intelligence at scale.',
  },
} as const satisfies Record<string, SitePageContent>

export const proofPages = {
  index: {
    eyebrow: 'Proof',
    title: 'Evidence at scale',
    description: 'Case studies, technical papers, and news from deployments across India, the UAE, and global hybrid portfolios.',
  },
  'case-studies': {
    eyebrow: 'Proof',
    title: 'Case Studies',
    description:
      'See how operators and developers use Solvyn across solar, wind, BESS, and hybrid assets — 95+ GW under management.',
  },
  'white-paper': {
    eyebrow: 'Proof',
    title: 'White Paper',
    description:
      'Deep dives on digital twin models, EMS dispatch logic, AURA intelligence, and grid-interactive control systems.',
  },
  news: {
    eyebrow: 'Proof',
    title: 'News',
    description: 'Product updates, deployment milestones, and perspectives from the Smart Grid Analytics team.',
  },
} as const satisfies Record<string, SitePageContent>

export const companyPages = {
  index: {
    eyebrow: 'Company',
    title: 'Smart Grid Analytics',
    description:
      'Founded by control engineers and grid architects building the operating system for the renewable century.',
  },
  'about-sga': {
    eyebrow: 'Company',
    title: 'About SGA',
    description:
      'We bridge the gap between knowing and doing in renewable energy — EMS and AURA working together to observe, decide, act, and learn.',
  },
  'ip-patents': {
    eyebrow: 'Company',
    title: 'IP & Patents',
    description:
      '14+ patents filed and in progress across the Solvyn platform, covering digital twin, dispatch, intelligence, and control.',
  },
  careers: {
    eyebrow: 'Company',
    title: 'Careers',
    description:
      'Join engineers with deep grid experience. Help build critical software for the energy transition.',
  },
} as const satisfies Record<string, SitePageContent>
