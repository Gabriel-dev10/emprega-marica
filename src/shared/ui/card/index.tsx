import * as React from "react";
import { cn } from "@/shared/lib/utils";
import {
  type CardVariants,
  cardVariants,
} from "@/shared/ui/card/card.variants";

export interface CardProps
  extends React.ComponentPropsWithoutRef<"div">,
    CardVariants {
  children: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, hoverEffect, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        className={cn(cardVariants({ hoverEffect }), className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Card.displayName = "Card";

export { Card };
