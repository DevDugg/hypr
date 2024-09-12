import React from "react";
import { cn } from "@/lib/utils";

interface Props {
  textBlock: string[];
  className?: string;
}

const DynamicInfo = ({ textBlock, className }: Props) => {
  return (
    <div
      className={cn(
        "text-[3.58vw] sm:text-[1.25vw] font-medium leading-[140%] sm:px-[18.75vw] mb-[10.25vw] sm:mb-[4.16vw]",
        className,
      )}
    >
      <div className="flex flex-col gap-[4.05vw] sm:gap-[1.25vw] text-[3.58vw] sm:text-[1.25vw] text-GRAY">
        {textBlock.map((item, i) => item)}
      </div>
    </div>
  );
};

export default DynamicInfo;
