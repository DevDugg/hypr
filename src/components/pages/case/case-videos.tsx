"use client";

import React, { useState } from "react";

import { ArrowUpRight } from "lucide-react";
import CaseTitle from "./case-title";
import Container from "@/components/layout/container";
import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const videoNames = [
  {
    name: "video name",
  },
  {
    name: "video 2 name",
  },
  {
    name: "video 3 name",
  },
  {
    name: "video 4 name",
  },
  {
    name: "video 5 name",
  },
];

const CaseVideos = () => {
  const [active, setActive] = useState(0);

  return (
    <section>
      <Container className={cn("text-WHITE", grotesk.className)}>
        <div className="flex gap-[0.83vw] items-center">
          <div className="flex-[0_0_11.66vw] -translate-y-[10vw] text-[0.93vw] text-WHITE font-semibold">
            <span className="">01/</span>
            <span className="text-GRAY">{videoNames.length >= 10 ? videoNames.length : "0" + videoNames.length}</span>
          </div>

          <div className="flex flex-col flex-[0_1_84.97vw]">
            <div className="flex justify-between mb-[2.5vw] items-end">
              <CaseTitle title="videos" num="(07)" />
              <a className="uppercase flex gap-[0.2vw] items-center text-GRAY text-[0.93vw] font-semibold">
                youtube <ArrowUpRight className="size-[1vw] " />
              </a>
            </div>

            <div className="flex gap-[0.83vw] relative">
              <div className="w-[59.58vw] h-full">
                <Image src="/images/case/case-pattern.png" alt="pattern" width={1920} height={1080} />
              </div>

              <div className="border border-GRAY rounded-md flex-[1_1_20.83vw] h-fit">
                {videoNames.map(({ name }, i) => (
                  <div
                    onMouseMove={() => setActive(i)}
                    key={i}
                    className={clsx(
                      "p-[1.25vw] font-medium cursor-pointer text-[0.93vw] transition-all duration-300 text-GRAY uppercase",
                      {
                        "border-b border-GRAY": i + 1 !== videoNames.length,
                        "!text-BLACK bg-ACCENT !border-opacity-0": active === i,
                      },
                    )}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between w-[59.58vw] mt-[0.83vw]">
              <div className="uppercase font-medium text-[0.93vw] leading-[140%]">{videoNames[active].name}</div>
              <div className="text-[0.93vw] leading-[140%]">[01.30]</div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CaseVideos;
