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
        <label htmlFor={fieldId} className="block text-sm font-medium text-neutral-50 mb-1.5">
          {label}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          className={cn(
            'w-full rounded-lg bg-neutral-950 border text-neutral-50 placeholder:text-neutral-400 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-600/40 focus:border-primary-600 resize-none',
            error ? 'border-red-500' : 'border-neutral-700',
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-500 font-medium">{error}</p>}
      </div>
    )
  },
)
TextareaField.displayName = 'TextareaField'
