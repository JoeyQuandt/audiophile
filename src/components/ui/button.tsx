import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronRight } from "../icons";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex font-Manrope items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-theme-orange text-primary-foreground hover:bg-theme-lightOrange px-8 py-4 uppercase",
        outline:
          "px-8 py-4 uppercase border border-black hover:text-theme-white hover:bg-black",
        link: "bg-transparent uppercase font-bold opacity-50 text-sm hover:text-theme-orange hover:opacity-100",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <>
        {variant === "link" ? (
          <div className="flex items-center gap-3">
            <Comp
              className={cn(buttonVariants({ variant, className }))}
              ref={ref}
              {...props}
            />
            <ChevronRight />
          </div>
        ) : (
          <Comp
            className={cn(buttonVariants({ variant, className }))}
            ref={ref}
            {...props}
          />
        )}
      </>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
