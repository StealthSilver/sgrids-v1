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
  'solvyn-x': {
    eyebrow: 'Solvyn X — Unified Industrial Automation & Data Integration (Layer 01)',
    title: 'Connect Every Asset. Orchestrate Every Interface.',
    description:
      'The integration fabric that unifies every field device, OEM system, grid interface, cloud platform, and enterprise application into one secure, protocol-aware operational backbone.',
  },
  scada: {
    eyebrow: 'SCADA FOR ENERGY',
    title: 'Beyond Visibility. Into Operational Intelligence.',
    description:
      'Real-time data acquisition and secure control execution for energy systems built on a three-layer Digital Nervous System that perceives, thinks, and guides operators toward confident action.',
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
    eyebrow: 'GRID INTELLIGENCE 5.0',
    title: 'The control intelligence layer for modern energy systems.',
    description:
      'Centralized intelligence for renewable and hybrid energy systems — aggregating real-time data, running intelligent algorithms, and executing optimal control actions to ensure safe, stable, and efficient plant operations.',
  },
  'cybersecure-ot-it': {
    eyebrow: 'GRID INTELLIGENCE 5.0',
    title: 'The trust layer of the Solvyn Stack',
    description:
      'Purpose-built OT/IT security for energy control environments — protecting control systems, data flows, and engineering workflows across plant, edge, and cloud environments. Intelligent and connected. Secure and auditable.',
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
