import * as React from 'react'
import { cn } from '../../lib/utils'
import { type InputVariants, inputVariants } from './input.variants'

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>,
    InputVariants {
  label: string
  error?: string
  icon?: React.ReactNode
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, id, hasError, hasIcon, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, '-')
    const isErrorState = hasError ?? !!error
    const isIconState = hasIcon ?? !!icon

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
            data-slot="input"
            className={cn(
              inputVariants({ hasError: isErrorState, hasIcon: isIconState }),
              className,
            )}
            {...props}
          />
        </div>
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
      </div>
    )
  },
)
Input.displayName = 'Input'

export { Input }
