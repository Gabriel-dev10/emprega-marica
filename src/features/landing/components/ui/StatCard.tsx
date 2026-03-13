import type { ElementType } from 'react'

interface StatCardProps {
  icon: ElementType
  value: string | number
  label: string
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 text-neutral-300">
      <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/10">
        <Icon size={20} className="text-primary-400" />
      </div>
      <div className="text-left">
        <p className="text-2xl font-bold text-white">{value}</p>
        <p className="text-xs text-neutral-500 uppercase tracking-wider">{label}</p>
      </div>
    </div>
  )
}
