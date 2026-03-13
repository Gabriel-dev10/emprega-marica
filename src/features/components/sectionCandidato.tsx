import type { ReactNode } from 'react'

interface SectionProps {
  icon: ReactNode
  title: string
  children: ReactNode
}

export function Section({ icon, title, children }: SectionProps) {
  return (
    <div className="bg-neutral-950 border border-neutral-700 rounded-xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <span className="text-primary-600">{icon}</span>
        <h2 className="text-base font-semibold text-neutral-50">{title}</h2>
      </div>
      {children}
    </div>
  )
}
