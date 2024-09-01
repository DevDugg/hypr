import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

const CaseBlockMobile = ({ className }: { className?: string }) => {
  return (
    <div className={cn("text-WHITE", className)}>
      <div className="flex flex-col gap-[6.15vw]">
        <h5 className="uppercase font-semibold">key visuals</h5>
        <Image
          src={"/images/case/1.png"}
          width={593}
          height={787}
          alt="image"
          className="w-full h-auto"
        />

        <div className="flex justify-between items-center">
          <div className="w-[25.62vw] h-[0.51vw] bg-WHITE" />
          <div className="w-[25.62vw] h-[0.51vw] bg-WHITE" />
          <div className="w-[25.62vw] h-[0.51vw] bg-WHITE" />
        </div>
      </div>
    </div>
  );
};

export default CaseBlockMobile;
