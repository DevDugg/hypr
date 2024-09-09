"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedTitle from "@/components/animations/animated-title";
import Image from "next/image";
import Reveal from "@/components/animations/reveal";
import SectionTitle from "@/components/titles/section-title";
import WorkCard from "./work-card";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useRef } from "react";

const WorkHero = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const padding = useTransform(scrollYProgress, [0, 1], [0, 800]);
  return (
    <section ref={container}>
      <AnimatedTitle
        element="h1"
        className="!text-[10.25vw] text-center sm:!text-[11.45vw] sm:mt-0 mt-[10.25vw] text-ACCENT uppercase font-bold"
      >
        our work
      </AnimatedTitle>

      {/* MOBILE */}
      <div className="sm:hidden text-WHITE mb-[25.62vw]">
        <AnimatedTitle element="h2" className="text-center !text-[4.61vw] !normal-case mb-[20.5vw]">
          Never Miss A Bit/
        </AnimatedTitle>
        <div className="flex flex-col gap-[6.15vw]">
          {[...Array(4)].map((_, i) => (
            <Reveal key={i} animateOnView delay={i * 0.2} duration={0.6}>
              <div>
                <Image
                  src={`/images/projects/${i + 1}.png`}
                  alt="project image"
                  width={595}
                  height={423}
                  className="mb-[4.1vw] w-[93vw] h-[66.1vw]"
                />
                <h5 className="uppercase font-bold text-[4.61vw] mb-[2.05vw]">project name</h5>
                <p className={cn("leading-[140%] text-[4.1vw]", grotesk.className)}>
                  Short description of this project goes here
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* DESKTOP */}
      <motion.div
        className="hidden sm:flex gap-[1.25vw] mb-[10.41vw]"
        style={{ paddingTop: padding, marginBottom: y1 }}
      >
        <motion.div className="flex flex-col flex-[1_1_30.41vw]" style={{ y: y1 }}>
          <SectionTitle className="mb-[28.78vw]">never miss a bit/</SectionTitle>

          <WorkCard
            img={"/images/work/3.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={480}
            className="mb-[3.64vw] w-[30.41vw]"
            imgClassName="h-[25vw]"
          />

          <WorkCard
            img={"/images/work/6.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={292}
            h={332}
            className="w-[50%] mb-[18.22vw]"
            imgClassName="h-[17.29vw]"
          />

          <WorkCard
            img={"/images/work/4.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={640}
            className="w-[30.41vw]"
            imgClassName="h-[33.33vw]"
          />
        </motion.div>

        <motion.div className="flex flex-col flex-[1_1_30.41vw]" style={{ y: y2 }}>
          <WorkCard
            img={"/images/work/1.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={292}
            h={320}
            className="w-1/2 mb-[10.5vw]"
            imgClassName="h-[16.66vw]"
          />

          <WorkCard
            img={"/images/work/4.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={640}
            className="w-full mb-[11.87vw]"
            imgClassName="h-[33.33vw]"
          />

          <WorkCard
            img={"/images/work/7.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={480}
            className="w-full mb-[12.39vw]"
            imgClassName="h-[25vw]"
          />

          <WorkCard
            img={"/images/work/1.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={292}
            h={320}
            className="w-[50%]"
            imgClassName="h-[16.66vw]"
          />
        </motion.div>

        <motion.div className="flex flex-col flex-[1_1_30.41vw]" style={{ y: y3 }}>
          <WorkCard
            img={"/images/work/2.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={640}
            className="w-full mb-[11.35vw]"
            imgClassName="h-[33.33vw]"
          />

          <WorkCard
            img={"/images/work/5.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={292}
            h={332}
            className="w-1/2 mb-[2.18vw]"
            imgClassName="h-[17.29vw]"
          />

          <WorkCard
            img={"/images/work/8.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={640}
            className="w-full mb-[4.1vw]"
            imgClassName="h-[33.33vw]"
          />

          <WorkCard
            img={"/images/work/7.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={480}
            className="w-full"
            imgClassName="h-[25vw]"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WorkHero;
