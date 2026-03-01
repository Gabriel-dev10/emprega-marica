import type { CardProps } from '../../types'

export function Card({ children, className = '', hoverEffect = false }: CardProps) {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg shadow-black/10 overflow-hidden
        ${hoverEffect ? 'transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 hover:border-primary-500/30 hover:bg-white/10' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  )
}
