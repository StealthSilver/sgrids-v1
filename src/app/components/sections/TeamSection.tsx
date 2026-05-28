// Section: Team — team introduction placeholder section
import React from 'react'

// --- Types ---
export interface TeamSectionProps {}

// --- Main Section Component ---
const TeamSection: React.FC<TeamSectionProps> = () => {
  return (
    <section id="team" className="border-b border-slate-200 px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold text-slate-900">Team</h2>
    </section>
  )
}

export default TeamSection
