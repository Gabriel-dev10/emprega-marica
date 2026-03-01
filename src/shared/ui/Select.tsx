import { forwardRef } from 'react'
import type { ReactNode, SelectHTMLAttributes } from 'react'

interface SelectOption {
  value: string
  label: string
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: string
  icon?: ReactNode
  options: SelectOption[]
  placeholder?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, icon, options, placeholder, id, className = '', ...props }, ref) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        <label htmlFor={selectId} className="block text-sm font-medium text-neutral-300 mb-1.5">
          {label}
        </label>
        <div className="relative">
          {icon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-neutral-500 pointer-events-none">
              {icon}
            </div>
          )}
          <select
            ref={ref}
            id={selectId}
            className={`
              w-full h-12 rounded-xl bg-white/5 border border-white/10
              text-white appearance-none cursor-pointer
              focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/30
              transition-all duration-200
              ${icon ? 'pl-11' : 'pl-4'} pr-10
              ${error ? 'border-red-500/50 focus:ring-red-500/40' : ''}
              ${className}
            `}
            {...props}
          >
            {placeholder && (
              <option value="" disabled className="bg-neutral-800 text-neutral-500">
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} className="bg-neutral-800 text-white">
                {opt.label}
              </option>
            ))}
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-500">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
      </div>
    )
  },
)
