import type { ElementType } from 'react'

interface StatCardProps {
  icon: ElementType
  value: string | number
  label: string
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 text-text-muted">
      <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/10">
        <Icon size={20} className="text-primary-600" />
      </div>
      <div className="text-left">
        <p className="text-2xl font-bold text-text-default">{value}</p>
        <p className="text-xs text-text-subtle uppercase tracking-wider">{label}</p>
      </div>
    </div>
  )
}
