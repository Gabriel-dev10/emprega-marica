import { cva, type VariantProps } from 'class-variance-authority'

export const cardVariants = cva(
  'bg-white/5 backdrop-blur-xl rounded-xl border border-white/10 shadow-lg shadow-black/10 overflow-hidden',
  {
    variants: {
      hoverEffect: {
        true: 'transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10 hover:-translate-y-1 hover:border-primary-500/30 hover:bg-white/10',
        false: '',
      },
    },
    defaultVariants: {
      hoverEffect: false,
    },
  },
)

export type CardVariants = VariantProps<typeof cardVariants>
