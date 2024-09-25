"use client";

import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";

const BackToTop = () => {
  const { handleOnClick } = useScrollToTarget("#hero");
  return (
    <div
      onClick={handleOnClick}
      className={cn(
        "flex items-center cursor-pointer sm:font-bold font-medium text-[3.58vw] sm:size24 justify-center gap-[0.2vw]",
        grotesk.className
      )}
    >
      Back to top ↑
    </div>
  );
};

export default BackToTop;
