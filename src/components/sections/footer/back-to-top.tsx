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
        "flex items-center cursor-pointer sm:font-bold font-medium text-[3.58vw] sm:size24 gap-[0.416vw]",
        grotesk.className,
      )}
    >
      <span>Back To Top</span>
      <div className="size-6">
        <Image src="/images/arrow-up.svg" alt="" width={24} height={24} className="size-6" />
      </div>
    </div>
  );
};

export default BackToTop;
