import React from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";

interface Props {
  active: number;
  size: number;
  className?: string;
}

const Bullets = ({ active, size, className }: Props) => {
  return (
    <div className={cn(className, "sm:hidden flex justify-between gap-[6.15vw] mt-[6.15vw] items-center")}>
      {[...Array(size)].map((_, i) => (
        <div
          key={i}
          className={clsx("bg-GRAY transition-all h-[0.51vw] w-full", {
            "bg-WHITE": active === i,
            "bg-GRAY": active !== i,
          })}
        />
      ))}
    </div>
  );
};

export default Bullets;
