"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";

import { ArrowUpRight } from "lucide-react";
import CaseTitle from "./case-title";
import Container from "@/components/layout/container";
import Image from "next/image";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useMediaQuery } from "usehooks-ts";

const sliderData = [
  {
    title: "project name",
    img: "/images/case/slider/1.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/2.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/3.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/4.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/5.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/1.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/2.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/3.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/4.png",
  },
  {
    title: "project name",
    img: "/images/case/slider/5.png",
  },
];

const CaseSlider = () => {
  const mobile = useMediaQuery("(min-width: 640px)");

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="overflow-hidden w-screen h-[128.12vw] sm:h-[45vw]">
      <Container>
        <div className="flex justify-between">
          <CaseTitle title="similar projects" num="(07)" className="sm:ml-[11.66vw] mb-[6.15vw] sm:mb-[2.5vw]" />

          <a
            className={cn(
              "uppercase hidden sm:flex gap-[0.2vw] items-center text-GRAY text-[0.93vw] font-semibold",
              grotesk.className,
            )}
          >
            see all projects <ArrowUpRight className="size-[1vw]" />
          </a>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            skipSnaps: true,
            align: "start",
          }}
        >
          <CarouselContent>
            {sliderData.map((item, i) => (
              <CarouselItem
                key={i}
                className={clsx("basis-[61.5vw] mr-[4.05vw] sm:mr-[0.83vw] sm:basis-[17.7vw]", {
                  "sm:basis-[22.91vw]": (current - (mobile ? 0 : 1)) % sliderData.length === i,
                })}
              >
                <motion.div
                  className={cn(grotesk.className, "text-WHITE uppercase flex flex-col gap-[0.83vw]")}
                  initial={{
                    height: mobile ? "24.47vw" : "83.28vw",
                    width: mobile ? "17.70vw" : "61.5vw",
                    opacity: 0.5,
                  }}
                  animate={
                    (current - (mobile ? 0 : 1)) % sliderData.length === i
                      ? {
                          height: mobile ? "31.25vw" : "97.37vw",
                          width: mobile ? "22.91vw" : "71.75vw",
                          opacity: 1,
                        }
                      : {}
                  }
                >
                  <Image
                    src={item.img}
                    alt="image"
                    width={340}
                    height={470}
                    className="w-full h-full transition-all object-cover object-center"
                  />
                  <p>{item.title}</p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default CaseSlider;
