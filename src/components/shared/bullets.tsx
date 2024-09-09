import clsx from "clsx";
import React from "react";

interface Props {
  active: number;
  size: number;
}

const Bullets = ({ active, size }: Props) => {
  return (
    <div className="sm:hidden flex justify-between gap-[6.15vw] mt-[6.15vw] items-center">
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
