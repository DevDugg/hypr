import SectionLayout from "@/components/layout/section-layout";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";
import clsx from "clsx";
import Container from "@/components/layout/container";
import SectionName from "@/components/titles/section-name";
import Paragraph from "./character";

const About = () => {
  const paragraph = `HYPR agency is a branding and digital marketing studio from Australia.
        Partnering with companies that need to transform their brand, attract
        the right audience, and radically stand out. We’re a nimble team of
        designers and creative developers, focused on creating uniquely human
        and culturally informed. Read more`;

  return (
    <section>
      <Container className="relative">
        <SectionName className="absolute top-2 xl:top-14 left-0">
          (about)
        </SectionName>
        <div
          className={cn(
            "about-text flex transition-colors text-WHITE duration-200 relative",
            grotesk.className
          )}
        >
          <div className="font-semibold text-[20px] xl:text-[56px]">
            <Paragraph value={paragraph} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
