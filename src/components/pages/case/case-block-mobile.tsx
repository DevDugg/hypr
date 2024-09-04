"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { infoData } from "./case-block";
import clsx from "clsx";

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
          <div className="w-[25.62vw] h-[0.51vw] bg-GRAY" />
          <div className="w-[25.62vw] h-[0.51vw] bg-GRAY" />
          <div className="w-[25.62vw] h-[0.51vw] bg-GRAY" />
        </div>

        <div className="uppercase font-medium text-[4.61vw]">storyline</div>

        <div className="flex flex-col gap-[4.05vw] leading-[140%] text-GRAY text-[4.61vw] font-medium">
          <p>
            HYPR agency is a branding and digital marketing studio from
            Australia. Partnering with companies that need to transform their
            brand, attract the right audience, and radically stand out. We’re a
            nimble team of designers and creative developers, focused on
            creating uniquely human and culturally informed. Read more
          </p>
          <p>
            HYPR agency is a branding and digital marketing studio from
            Australia. Partnering with companies that need to transform their
            brand, attract the right audience, and radically stand out. We’re a
            nimble team of designers and creative developers, focused on
            creating uniquely human and culturally informed. Read more
          </p>
        </div>

        <div className="border-y border-STROKE">
          {infoData.map((item, i) => (
            <div
              key={i}
              className={clsx(
                "flex items-start text-[4.61vw] py-[4.05vw] font-semibold",
                {
                  "border-b border-STROKE": i !== 3,
                }
              )}
            >
              <h5 className="text-WHITE w-1/2">{item.title}</h5>
              <p className="text-GRAY w-1/2 text-[4.1vw]">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseBlockMobile;
