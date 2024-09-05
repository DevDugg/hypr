import SectionTitle from "@/components/titles/section-title";
import { monument, grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";

const CaseTitle = ({
  title,
  num,
  className,
}: {
  title: string;
  num: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex", className)}>
      <SectionTitle
        className={cn(
          monument.className,
          "mt-[5vw] sm:mt-[1.3vw] !text-[6.15vw] sm:!size48"
        )}
      >
        {title}
      </SectionTitle>
      <p
        className={cn(
          "font-bold text-[3.58vw] sm:size24 leading-[140%] text-WHITE",
          grotesk.className
        )}
      >
        {num}
      </p>
    </div>
  );
};

export default CaseTitle;
