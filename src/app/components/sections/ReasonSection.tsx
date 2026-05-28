// Section: Reason — rationale placeholder section
import React from 'react'

// --- Types ---
export interface ReasonSectionProps {}

// --- Main Section Component ---
const ReasonSection: React.FC<ReasonSectionProps> = () => {
  return (
    <section id="reason" className="border-b border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-slate-900">Reason</h2>
    </section>
  )
}

export default ReasonSection
