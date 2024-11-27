import * as React from "react";

import { cn } from "@/lib/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex w-full rounded-[2.56vw] placeholder:text-[1.25vw] max-md:placeholder:text-[2.6vw] max-[390px]:placeholder:text-[4.61vw] md:rounded-[0.3vw] text-[1.25vw] max-md:text-[2.6vw] max-[390px]:text-[4.61vw] bg-INPUT_BG md:p-[1.25vw] p-[4.05vw] placeholder:text-GRAY  focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-neutral-800 dark:bg-neutral-950 dark:ring-offset-neutral-950",
        className,
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };
