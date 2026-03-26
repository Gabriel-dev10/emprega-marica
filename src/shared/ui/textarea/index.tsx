import * as React from "react";
import { cn } from "@/shared/lib/utils";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");
    return (
      <div className="w-full">
        <label
          htmlFor={fieldId}
          className="block text-sm font-medium text-text-subtle mb-1.5"
        >
          {label}
        </label>
        <textarea
          ref={ref}
          id={fieldId}
          className={cn(
            "w-full rounded-lg bg-neutral-950 border text-text-default placeholder:text-text-subtle px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/50 resize-none transition-colors",
            error ? "border-red-500/50" : "border-neutral-800",
            className,
          )}
          {...props}
        />
        {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);
Textarea.displayName = "Textarea";
