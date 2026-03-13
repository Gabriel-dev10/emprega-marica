import type { ReactNode } from 'react'
import { cn } from '../../../../shared/lib/utils'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
  titleClassName?: string
  subtitleClassName?: string
  children?: ReactNode
}

export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
  children,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'max-w-3xl mb-16',
        align === 'center' ? 'text-center mx-auto' : 'text-left',
        className,
      )}
    >
      <h2 className={cn('text-3xl font-bold text-neutral-50 mb-4', titleClassName)}>{title}</h2>
      {subtitle && (
        <p className={cn('text-neutral-300 text-lg', children ? 'mb-8' : '', subtitleClassName)}>
          {subtitle}
        </p>
      )}
      {children}
    </div>
  )
}
