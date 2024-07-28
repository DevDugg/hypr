"use client";

import SectionLayout from "@/components/layout/section-layout";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useScroll } from "framer-motion";

const About = () => {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start end", "start start"],
  });

  const paragraph = `          HYPR agency is a branding and digital marketing studio from Australia.
          Partnering with companies that need to transform their brand, attract
          the right audience, and radically stand out. We’re a nimble team of
          designers and creative developers, focused on creating uniquely human
          and culturally informed. Read more
`;

  const words = paragraph.split(" ");

  return (
    <SectionLayout id="about" name="(about)">
      <div
        className={cn(
          "about-text flex transition-colors text-WHITE duration-200 relative",
          grotesk.className
        )}
      >
        <div className="">
          {words.map((word) => (
            <span className="mr-1">{word}</span>
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

export default About;
