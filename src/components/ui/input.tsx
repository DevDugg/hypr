import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex w-full placeholder:text-GRAY sm:placeholder:text-[4.61vw] sm:placeholder:size24 text-[4.61vw] sm:size24 text-WHITE rounded-[2.56vw] sm:rounded-[0.3vw] bg-INPUT_BG p-[4.05vw] sm:p-[1.25vw] file:border-0 file:bg-transparent disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
