"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Bullets from "@/components/shared/bullets";
import Image from "next/image";
import { PROJECT_ITEM_QUERYResult } from "../../../../sanity.types";
import React from "react";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { infoData } from "./case-block";
import { urlFor } from "@/sanity/lib/image";

interface CaseBlockMobileProps {
  className: string;
  project: PROJECT_ITEM_QUERYResult[number];
}

const CaseBlockMobile = ({ className, project }: CaseBlockMobileProps) => {
  const informationLength = project.information?.length || 0;
  return (
    <div className={cn("text-WHITE", className)}>
      <div className="flex flex-col gap-[6.15vw]">
        {project.key_visuals && (
          <>
            <h5 className="uppercase font-semibold">key visuals</h5>
            <Carousel opts={{ loop: true }}>
              <CarouselContent className="">
                {project.key_visuals.map(
                  (item, i) =>
                    item.image && (
                      <CarouselItem key={i} className="basis-full">
                        <Image
                          src={urlFor(item.image).size(593, 787).url()}
                          width={593}
                          height={787}
                          alt="image"
                          className="w-full h-auto"
                        />
                      </CarouselItem>
                    ),
                )}
              </CarouselContent>
            </Carousel>

            <Bullets size={4} active={0} className="!mt-0" />
          </>
        )}

        <div className="uppercase font-medium text-[4.61vw] mt-[4.05vw]">storyline</div>

        <div className="flex flex-col gap-[4.05vw] leading-[140%] text-GRAY text-[4.61vw] font-medium">
          {project.description_1 && <p>{project.description_1}</p>}
          {project.description_2 && <p>{project.description_2}</p>}
        </div>

        {project.information && (
          <div className="border-y border-STROKE mt-[4.05vw]">
            {project.information.map((item, i) => (
              <div
                key={i}
                className={clsx("flex items-start text-[4.61vw] py-[4.05vw] font-semibold", {
                  "border-b border-STROKE": i !== informationLength,
                })}
              >
                <h5 className="text-WHITE w-1/2">{item.name}</h5>
                <p className="text-GRAY w-1/2 text-[4.1vw]">{item.value}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseBlockMobile;
