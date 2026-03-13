import type { ElementType } from 'react'

interface StatCardProps {
  icon: ElementType
  value: string | number
  label: string
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="flex items-center gap-3 text-neutral-300">
      <div className="p-2 rounded-lg bg-primary-100 border border-primary-200/20">
        <Icon size={20} className="text-primary-600" />
      </div>
      <div className="text-left">
        <p className="text-2xl font-bold text-neutral-50">{value}</p>
        <p className="text-xs text-neutral-400 uppercase tracking-wider font-semibold">{label}</p>
      </div>
    </div>
  )
}
