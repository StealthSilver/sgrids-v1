export interface SitePageContent {
  eyebrow: string
  title: string
  description: string
}

export const solvynPages = {
  index: {
    eyebrow: 'ENERGY PERFORMANCE',
    title: 'The Operating System for Intelligent Energy Control',
    description:
      'An end-to-end operating system that connects, coordinates, and optimizes every layer of your energy portfolio, from field assets to market decisions.',
  },
  'solvyn-x': {
    eyebrow: 'Solvyn X, Unified Industrial Automation & Data Integration (Layer 01)',
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
    eyebrow: 'GRID INTELLIGENCE 5.0',
    title: 'A live model of your plant Always running Always learning',
    description:
      'Two patented digital twin models Solar and BESS continuously updated against live telemetry, weather, and operational data. The foundation layer for smarter dispatch, market bidding, and predictive intelligence.',
  },
  aura: {
    eyebrow: 'AURA, Decision Intelligence Platform · Layer 04',
    title: 'The intelligence behind every smart energy decision.',
    description:
      'A decision intelligence platform for renewable, hybrid, and BESS operations combining digital twins, AI forecasting, BESS scheduling, DSM intelligence, and market optimization into a single decision engine.',
  },
  ems: {
    eyebrow: 'GRID INTELLIGENCE 5.0',
    title: 'The control intelligence layer for modern energy systems.',
    description:
      'Centralized intelligence for renewable and hybrid energy systems, aggregating real-time data, running intelligent algorithms, and executing optimal control actions to ensure safe, stable, and efficient plant operations.',
  },
  'cybersecure-ot-it': {
    eyebrow: 'GRID INTELLIGENCE 5.0',
    title: 'The trust layer of the Solvyn Stack',
    description:
      'Purpose-built OT/IT security for energy control environments, protecting control systems, data flows, and engineering workflows across plant, edge, and cloud environments. Intelligent and connected. Secure and auditable.',
  },
} as const satisfies Record<string, SitePageContent>

export const proofPages = {
  index: {
    eyebrow: 'Proof',
    title: 'Evidence at scale',
    description: 'Case studies, technical papers, and news from deployments across India, the UAE, and global hybrid portfolios.',
  },
  'case-studies': {
    eyebrow: 'CASE STUDIES',
    title: 'Real deployments. Real results. Real grid impact.',
    description:
      "From India's first hybrid EMS to grid-scale BESS deployments in the USA every Solvyn deployment is a proof point for what intelligent energy control can deliver.",
  },
  'white-paper': {
    eyebrow: 'WHITE PAPERS',
    title: 'Research and technical thinking from the SGA team.',
    description:
      'Our white papers explore the technical, regulatory, and commercial challenges at the frontier of renewable energy written by the engineers and architects building Solvyn.',
  },
  news: {
    eyebrow: 'NEWS & EVENTS',
    title: 'Where SGA shows up. What the world is saying.',
    description:
      'From conference floors to press rooms, award stages to global summits, every event, every feature, every moment that tells the Solvyn story.',
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
      'We bridge the gap between knowing and doing in renewable energy, EMS and AURA working together to observe, decide, act, and learn.',
  },
  'ip-patents': {
    eyebrow: 'IP & Patents',
    title: 'Our innovation is protected because it is genuinely new.',
    description:
      'The Solvyn platform is built on a foundation of proprietary methods, patented models, and first-principles engineering. Our growing IP portfolio protects the innovations that make Solvyn fundamentally different, not just incrementally better.',
  },
  careers: {
    eyebrow: 'Careers at Smart Grid Analytics',
    title: 'Join our team. Build the infrastructure that powers the energy transition.',
    description:
      "Real control systems. Real grid intelligence. Real impact. We're a team of engineers and operators building software that actually controls how renewable energy works.",
  },
} as const satisfies Record<string, SitePageContent>
