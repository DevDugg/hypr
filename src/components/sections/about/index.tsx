"use client";

import SectionLayout from "@/components/layout/section-layout";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import clsx from "clsx";

const About = () => {
  // const element = useRef(null);
  // const { scrollYProgress } = useScroll({
  //   target: element,
  //   offset: ["start 0.9", "start 0.25"],
  // });

  const paragraph = `HYPR agency is a branding and digital marketing studio from Australia.
          Partnering with companies that need to transform their brand, attract
          the right audience, and radically stand out. We’re a nimble team of
          designers and creative developers, focused on creating uniquely human
          and culturally informed. Read more`;

  const words = paragraph.split("");

  const start = words.length;
  const end = start + 1 / words.length;
  const amount = end - start;
  const step = amount / words.length;

  return (
    <SectionLayout id="about" name="(about)">
      <div
        className={cn(
          "about-text flex transition-colors text-WHITE duration-200 relative",
          grotesk.className
        )}
      >
        <span className="">
          {words.map((word, i) => {
            // const started = end + step * i;
            // const ended = started + step * i + 1;
            // const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

            return (
              <span key={i} className={clsx()}>
                {word}
              </span>
            );
          })}
        </span>
      </div>
    </SectionLayout>
  );
};

export default About;
