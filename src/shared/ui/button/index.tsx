import * as React from "react";
import { cn } from "@/shared/lib/utils";
import {
  type ButtonVariants,
  buttonVariants,
} from "@/shared/ui/button/button.variants";

type BaseButtonProps = React.ComponentPropsWithoutRef<"button"> &
  ButtonVariants;

interface ButtonProps extends Omit<BaseButtonProps, "size"> {
  size?: "sm" | "md" | "lg" | "default" | null;
  fullWidth?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, fullWidth, ...props }, ref) => {
    const cvaSize = size === "md" ? "default" : size;

    return (
      <button
        ref={ref}
        data-slot="button"
        className={cn(
          buttonVariants({ variant, size: cvaSize }),
          fullWidth ? "w-full" : "",
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
