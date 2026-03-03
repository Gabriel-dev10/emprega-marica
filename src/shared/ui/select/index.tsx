import { ChevronDown } from 'lucide-react'
import * as React from 'react'
import { cn } from '../../lib/utils'
import { type SelectVariants, selectVariants } from './select.variants'

export interface SelectOption {
  value: string
  label: string
}

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'>,
    SelectVariants {
  label: string
  error?: string
  icon?: React.ReactNode
  options: SelectOption[]
  placeholder?: string
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  (
    { className, label, error, icon, options, placeholder, id, hasError, hasIcon, ...props },
    ref,
  ) => {
    const selectId = id || label.toLowerCase().replace(/\s+/g, '-')
    const isErrorState = hasError ?? !!error
    const isIconState = hasIcon ?? !!icon

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
            data-slot="select"
            className={cn(
              selectVariants({ hasError: isErrorState, hasIcon: isIconState }),
              className,
            )}
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
            <ChevronDown size={16} />
          </div>
        </div>
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
      </div>
    )
  },
)
Select.displayName = 'Select'

export { Select }
