"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";

const BackToTop = () => {
  const { handleOnClick } = useScrollToTarget("#top");
  return (
    <div
      onClick={handleOnClick}
      className={cn(
        "flex items-center cursor-pointer sm:font-bold font-medium text-[3.58vw] sm:size24 justify-center gap-[0.2vw]",
        grotesk.className,
      )}
    >
      Back To Top <Image src="/images/arrow-up.svg" alt="Arrow up" width={24} height={24} className="size-[1.25vw]" />
    </div>
  );
};

export default BackToTop;
