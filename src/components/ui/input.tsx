import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        "flex w-full placeholder:text-GRAY placeholder:text-[1.25vw] max-md:placeholder:text-[2.6vw] max-[390px]:placeholder:text-[4.61vw] text-[1.25vw] max-md:text-[2.6vw] max-[390px]:text-[4.61vw] text-WHITE rounded-[2.56vw] md:rounded-[0.3vw] bg-INPUT_BG p-[4.05vw] md:p-[1.25vw] file:border-0 file:bg-transparent disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = "Input";

export { Input };
