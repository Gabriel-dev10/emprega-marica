import { cva, type VariantProps } from 'class-variance-authority'

export const selectVariants = cva(
  'w-full h-12 rounded-lg bg-neutral-800 border border-neutral-700 text-white appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary-500/40 focus:border-primary-500/50 transition-colors pr-10',
  {
    variants: {
      hasError: {
        true: 'border-red-500/50 focus:ring-red-500/40',
        false: '',
      },
      hasIcon: {
        true: 'pl-11',
        false: 'pl-4',
      },
    },
    defaultVariants: {
      hasError: false,
      hasIcon: false,
    },
  },
)

export type SelectVariants = VariantProps<typeof selectVariants>
