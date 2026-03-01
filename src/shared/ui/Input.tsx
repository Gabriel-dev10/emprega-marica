import { forwardRef } from 'react'
import type { InputHTMLAttributes, ReactNode } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: string
  icon?: ReactNode
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, id, className = '', ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        <label htmlFor={inputId} className="block text-sm font-medium text-neutral-300 mb-1.5">
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            id={inputId}
            className={`
              w-full h-12 rounded-xl bg-white/5 border border-white/10
              text-white placeholder:text-neutral-500
              focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/30
              transition-all duration-200
              ${icon ? 'pl-11' : 'pl-4'} pr-4
              ${error ? 'border-red-500/50 focus:ring-red-500/40' : ''}
              ${className}
            `}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
      </div>
    )
  },
)
