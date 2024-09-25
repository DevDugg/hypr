import { grotesk, monument } from "@/lib/fonts";

import AnimatedTitle from "@/components/animations/animated-title";
import React from "react";
import Reveal from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

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
      <AnimatedTitle
        element="h3"
        className={cn(
          monument.className,
          "mt-[5vw] sm:mt-[1.3vw] !text-[6.15vw] sm:!size48"
        )}
      >
        {title}
      </AnimatedTitle>
      <Reveal animateOnView>
        <p
          className={cn(
            "font-bold text-[3.58vw] sm:size24 leading-[140%] text-WHITE",
            grotesk.className
          )}
        >
          {num}
        </p>
      </Reveal>
    </div>
  );
};

export default CaseTitle;
