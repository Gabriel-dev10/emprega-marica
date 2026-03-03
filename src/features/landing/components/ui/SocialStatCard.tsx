interface SocialStatCardProps {
  value: string
  label: string
}

export function SocialStatCard({ value, label }: SocialStatCardProps) {
  return (
    <div className="bg-white/10 dark:bg-white/5 backdrop-blur-sm rounded-xl p-6 text-center border border-white/10 dark:border-white/5">
      <div className="text-4xl font-bold text-white mb-2">{value}</div>
      <div className="text-sm text-primary-200 dark:text-primary-300">{label}</div>
    </div>
  )
}
