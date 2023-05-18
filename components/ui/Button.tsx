import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import cn from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-medium text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-white",
  {
    variants: {
      variant: {
        default: "bg-pink-600 text-white hover:bg-pink-600/90",
        outline: "border border-gray-300 hover:bg-gray-50",
        secondary: "bg-gray-100 hover:bg-gray-100/80",
        ghost: "hover:bg-gray-100 hover:text-gray-800",
        link: "underline-offset-4 hover:underline text-black",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
