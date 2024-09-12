import React, { PropsWithChildren, ReactNode } from "react";

import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface Props {
  children: ReactNode;
  className?: string;
}

const DynamicTitle = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col sm:gap-[2.08vw] leading-none sm:px-[18.75vw] mb-[10.25vw] sm:mb-[4.16vw]",
        className,
      )}
    >
      <p className={cn("font-bold text-[5.12vw] sm:size64", grotesk.className)}>{children}</p>
    </div>
  );
};

export default DynamicTitle;
