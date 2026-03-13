interface SocialStatCardProps {
  value: string
  label: string
}

export function SocialStatCard({ value, label }: SocialStatCardProps) {
  return (
    <div className="bg-primary-900/10 backdrop-blur-sm rounded-xl p-6 text-center border border-primary-900/10">
      <div className="text-4xl font-bold text-neutral-50 mb-2">{value}</div>
      <div className="text-sm text-primary-700 font-medium">{label}</div>
    </div>
  )
}
