import { cn } from "@/lib/utils";
import clsx from "clsx";
import React from "react";

interface Props {
  active: number;
  size: number;
  className?: string;
}

const Bullets = ({ active, size, className }: Props) => {
  return (
    <div
      className={cn(
        className,
        "sm:hidden flex justify-between gap-[6.15vw] mt-[6.15vw] items-center"
      )}
    >
      {[...Array(size)].map((_, i) => (
        <div
          key={i}
          className={clsx("bg-GRAY transition-all h-[0.51vw] w-full", {
            "text-WHITE": active === i,
            "text-GRAY": active !== i,
          })}
        />
      ))}
    </div>
  );
};

export default Bullets;
