import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React, { PropsWithChildren, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DynamicText = ({ children }: Props) => {
  return (
    <div className="flex flex-col sm:gap-[2.08vw] leading-none sm:px-[18.75vw]">
      <p className={cn("font-bold text-[5.12vw] sm:size64", grotesk.className)}>
        {children}
      </p>
    </div>
  );
};

export default DynamicText;
