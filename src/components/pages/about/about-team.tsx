"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { ABOUT_PAGE_QUERYResult } from "../../../../sanity.types";
import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import Image from "next/image";
import React from "react";
import SectionName from "@/components/titles/section-name";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";

const teamData = [
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
];

interface AboutTeamProps {
  data: NonNullable<ABOUT_PAGE_QUERYResult[0]>;
}

const AboutTeam = ({ data }: AboutTeamProps) => {
  const { creators } = data;
  return (
    creators && (
      <section className="my-[25.62vw] sm:my-[13.02vw] text-WHITE">
        <Container>
          <div className="flex flex-col-reverse sm:flex-row sm:gap-0 gap-[2.02vw] justify-between sm:items-end mb-[8.1vw] sm:mb-[4.16vw]">
            {creators.title && <AnimatedTitle element="h3">{creators.title}</AnimatedTitle>}
            {creators.subtitle && <SectionName>{creators.subtitle}</SectionName>}
          </div>

          {creators.items && (
            <>
              <Carousel className="block sm:hidden" opts={{ skipSnaps: true }}>
                <CarouselContent>
                  {creators.items.map(
                    (item, i) =>
                      item.image && (
                        <CarouselItem key={i} className="text-[1.25vw] text-WHITE w-[30.41vw]">
                          <Image
                            src={urlFor(item.image).size(1168, 1280).url()}
                            alt={item.creator_name || "HYPR team member image"}
                            width={1168}
                            height={1280}
                            className="w-full h-auto mb-[4.05vw] object-cover"
                          />

                          <h5 className="mb-[2.02vw] font-bold uppercase text-[4.05vw]">{item.creator_name}</h5>
                          <p className={cn("mt-[0.41vw] text-[4.05vw]", grotesk.className)}>{item.creator_role}</p>
                        </CarouselItem>
                      ),
                  )}
                </CarouselContent>
              </Carousel>

              <div className="hidden gap-[0.5vw] sm:flex">
                {creators.items.map(
                  (item, i) =>
                    item.image && (
                      <div key={i} className="w-full text-[1.25vw] flex flex-col gap-[1.25vw]">
                        <Image
                          src={urlFor(item.image).size(1168, 1280).url()}
                          alt={item.creator_name || "HYPR team member image"}
                          width={1168}
                          height={1280}
                          className="w-full h-auto object-cover"
                        />

                        <div className="flex flex-col gap-[0.416vw]">
                          <h5 className="font-bold uppercase leading-none">{item.creator_name}</h5>
                          <p className={cn("mt-[0.41vw] leading-[120%]", grotesk.className)}>{item.creator_role}</p>
                        </div>
                      </div>
                    ),
                )}
              </div>
            </>
          )}
        </Container>
      </section>
    )
  );
};

export default AboutTeam;
