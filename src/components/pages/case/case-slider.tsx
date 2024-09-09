"use client";

import "keen-slider/keen-slider.min.css";

import React, { useEffect, useState } from "react";

import { ArrowUpRight } from "lucide-react";
import CaseTitle from "./case-title";
import Container from "@/components/layout/container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
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
  const [active, setActive] = useState(0);

  const mobile = useMediaQuery("(min-width: 640px)");

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4.5,
      spacing: 16,
    },
    mode: "snap",
    loop: true,
    initial: 0,
    drag: true,
    slideChanged(s) {
      setActive(s.track.details.rel);
    },
  });

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <section className="overflow-hidden w-screen h-[128.12vw] sm:h-[45vw]">
      <Container>
        <div className="flex justify-between">
          <CaseTitle
            title="similar projects"
            num="(07)"
            className="sm:ml-[11.66vw] mb-[6.15vw] sm:mb-[2.5vw]"
          />

          <a
            className={cn(
              "uppercase hidden sm:flex gap-[0.2vw] items-center text-GRAY text-[0.93vw] font-semibold",
              grotesk.className
            )}
          >
            see all projects <ArrowUpRight className="size-[1vw]" />
          </a>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            {sliderData.map((item, i) => (
              <CarouselItem className="basis-[61.5vw] sm:basis-[17.7vw] mr-[4.05vw] sm:mr-[0.83vw]">
                <motion.div
                  key={i}
                  className={cn(
                    grotesk.className,
                    "text-WHITE uppercase flex flex-col gap-[0.83vw] size-fit"
                  )}
                  initial={{
                    height: mobile ? "24.47vw" : "83.28vw",
                    width: mobile ? "17.70vw" : "61.5vw",
                    opacity: 0.5,
                  }}
                  animate={
                    (current - (mobile ? 2 : 1)) % sliderData.length === i
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
                    className="w-full h-full object-cover object-center"
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
