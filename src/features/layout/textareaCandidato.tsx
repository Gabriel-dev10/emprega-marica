import * as React from 'react'
import { cn } from '../../shared/lib/utils'

export interface TextareaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  error?: string
}

export const TextareaField = React.forwardRef<HTMLTextAreaElement, TextareaFieldProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, '-')
    return (
      <div className="w-full">
        <label htmlFor={fieldId} className="block text-sm font-medium text-neutral-300 mb-1.5">
          {label}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          className={cn(
            'w-full rounded-lg bg-neutral-800 border text-white placeholder:text-neutral-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/50 resize-none',
            error ? 'border-red-500/50' : 'border-neutral-700',
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
      </div>
    )
  },
)
TextareaField.displayName = 'TextareaField'
