import { cva, type VariantProps } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-neutral-950 disabled:opacity-50 disabled:pointer-events-none rounded-lg cursor-pointer',
  {
    variants: {
      variant: {
        primary:
          'bg-primary-500 text-white hover:bg-primary-400 focus:ring-primary-500 shadow-lg shadow-primary-500/20',
        secondary:
          'bg-neutral-800 text-white border border-neutral-700 hover:bg-neutral-700 focus:ring-primary-500',
        outline:
          'bg-transparent border border-primary-500/40 text-primary-400 hover:bg-primary-500/10 hover:border-primary-400',
        ghost: 'bg-transparent text-neutral-400 hover:text-white hover:bg-neutral-800/60',
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
