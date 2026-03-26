import { cva, type VariantProps } from "class-variance-authority";

export const cardVariants = cva(
  "bg-neutral-900 rounded-xl border border-neutral-800 overflow-hidden",
  {
    variants: {
      hoverEffect: {
        true: "transition-colors hover:border-neutral-700",
        false: "",
      },
    },
    defaultVariants: {
      hoverEffect: false,
    },
  },
);

export type CardVariants = VariantProps<typeof cardVariants>;
