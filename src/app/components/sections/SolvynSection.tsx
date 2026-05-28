// Section: Solvyn — Solvyn product placeholder section
import React from 'react'

// --- Types ---
export interface SolvynSectionProps {}

// --- Main Section Component ---
const SolvynSection: React.FC<SolvynSectionProps> = () => {
  return (
    <section id="solvyn" className="border-b border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-slate-900">Solvyn</h2>
    </section>
  )
}

export default SolvynSection
