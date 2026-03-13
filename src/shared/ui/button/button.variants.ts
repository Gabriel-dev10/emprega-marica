import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-accent-500 text-text-inverted hover:opacity-90 focus:ring-accent-500 shadow-lg shadow-accent-500/20',
        secondary:
          'bg-neutral-800 text-text-inverted border border-neutral-700 hover:bg-neutral-700 focus:ring-primary-500',
        outline:
          'bg-transparent border border-primary-500/40 text-text-primary hover:bg-primary-500/10 hover:border-primary-400',
        ghost: 'bg-transparent text-text-muted hover:text-text-default hover:bg-neutral-800/60',
      },
      size: {
        sm: 'px-3 py-1.5 text-sm',
        default: 'px-6 py-3 text-base',
        lg: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
