"use client";

import "keen-slider/keen-slider.min.css";

import React, { useState } from "react";

import { ArrowUpRight } from "lucide-react";
import CaseTitle from "./case-title";
import Container from "@/components/layout/container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";

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

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 4.5,
      spacing: 16,
    },
    mode: "free",
    loop: true,
    initial: 0,
    drag: true,
    slideChanged(s) {
      setActive(s.track.details.rel);
    },
  });

  return (
    <section className="mb-[15.62vw] overflow-hidden w-screen">
      <Container>
        <div className="flex justify-between">
          <CaseTitle title="similar projects" num="(07)" className="ml-[11.66vw] mb-[2.5vw]" />

          <a
            className={cn(
              "uppercase flex gap-[0.2vw] items-center text-GRAY text-[0.93vw] font-semibold",
              grotesk.className,
            )}
          >
            see all projects <ArrowUpRight className="size-[1vw]" />
          </a>
        </div>
      </Container>

      <div ref={sliderRef} className="keen-slider">
        {sliderData.map((item, i) => (
          <motion.div
            key={i}
            className={cn(
              grotesk.className,
              "keen-slider__slide text-WHITE uppercase flex flex-col gap-[0.83vw] size-fit",
            )}
            initial={{ height: "24.47vw", width: "17.70vw", opacity: 0.5 }}
            animate={(active + 1) % sliderData.length === i ? { height: "35vw", width: "22.91vw", opacity: 1 } : {}}
          >
            <motion.div className="w-full h-full">
              <Image
                src={item.img}
                alt="image"
                width={340}
                height={470}
                className="w-full h-fit object-cover object-center"
              />
            </motion.div>
            <p>{item.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CaseSlider;
