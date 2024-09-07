import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  title?: string;
  textBlock: string[];
  className?: string;
}

const DynamicInfo = ({ title, textBlock, className }: Props) => {
  return (
    <div
      className={cn(
        "text-[3.58vw] sm:text-[1.25vw] font-medium leading-[140%] sm:px-[18.75vw]",
        className
      )}
    >
      {title && <h5 className="mb-[6.15vw] sm:mb-[2.08vw]">{title}</h5>}
      <div className="flex flex-col gap-[4.05vw] sm:gap-[1.25vw] text-[3.58vw] sm:text-[1.25vw] text-GRAY">
        {textBlock.map((item) => (
          <p>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default DynamicInfo;
