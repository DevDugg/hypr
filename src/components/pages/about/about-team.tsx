"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import Image from "next/image";
import React from "react";
import SectionName from "@/components/titles/section-name";
import SectionTitle from "@/components/titles/section-title";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

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

const AboutTeam = () => {
  return (
    <section className="my-[25.62vw] sm:my-[13.02vw] text-WHITE">
      <Container>
        <div className="flex flex-col-reverse sm:flex-row sm:gap-0 gap-[2.02vw] justify-between sm:items-end mb-[8.1vw] sm:mb-[4.16vw]">
          <AnimatedTitle element="h3">meet out team/</AnimatedTitle>
          <SectionName>(about)</SectionName>
        </div>

        <Carousel className="hidden sm:block">
          <CarouselContent>
            {teamData.map((item, i) => (
              <CarouselItem key={i} className="basis-1/3 text-[1.25vw] text-WHITE w-[30.41vw]">
                <Image
                  src={item.img}
                  alt="name"
                  width={584}
                  height={640}
                  className="w-[30.41vw] h-[33.33vw] mb-[1.25vw]"
                />

                <h5>{item.name}</h5>
                <p className={cn("mt-[0.41vw]", grotesk.className)}>{item.special}</p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="flex flex-col gap-[6.15vw] sm:hidden">
          {teamData.map((item, i) => (
            <div key={i}>
              <Image src={item.img} alt="name" width={584} height={640} className="w-full h-auto mb-[4.05vw]" />

              <h5 className="mb-[2.02vw] font-bold uppercase text-[4.05vw]">{item.name}</h5>
              <p className={cn("mt-[0.41vw] text-[4.05vw]", grotesk.className)}>{item.special}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutTeam;
