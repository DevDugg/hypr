"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import { ABOUT_PAGE_QUERYResult } from "../../../../sanity.types";
import AboutCard from "./about-card";
import Container from "@/components/layout/container";
import Reveal from "@/components/animations/reveal";
import SectionName from "@/components/titles/section-name";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useRef } from "react";

const cardsData = [
  {
    title: "Brand Visibility",
    num: "01",
    text: "By partnering with top-tier influencers and bloggers, we significantly boost your brand's visibility across various social media platforms, reaching a wider and more engaged audience.",
    img: "/images/about/2.png",
  },
  {
    title: "Audience Engagement",
    num: "02",
    text: "Our influencer-driven campaigns foster genuine connections with your target audience, leading to higher engagement rates and stronger brand loyalty through authentic and relatable content.",
    img: "/images/about/2.png",
  },
  {
    title: "Data-Driven Results",
    num: "03",
    text: "Our influencer-driven campaigns foster genuine connections with your target audience, leading to higher engagement rates and stronger brand loyalty through authentic and relatable content.",
    img: "/images/about/2.png",
  },
];

interface AboutDescriptionProps {
  data: NonNullable<ABOUT_PAGE_QUERYResult[0]>;
}

const AboutDescription = ({ data }: AboutDescriptionProps) => {
  const { about } = data;

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const x = useTransform(scrollYProgress, [0.0, 1], [30, -105]);
  const xPercent = useMotionTemplate`${x}%`;

  return (
    about && (
      <section className={"bg-ACCENT"}>
        <div className="relative h-[1000vh]" ref={container}>
          <Reveal delay={0.6}>
            <Container>
              <div className="relative py-[10.25vw] sm:py-[5.20vw]">
                {about.subtitle && (
                  <SectionName className="sm:absolute sm:top-[7.70vw] mb-[4.05vw] sm:mb-0 !text-[3.58vw] sm:!text-[0.93vw] !text-WHITE left-0">
                    {about.subtitle}
                  </SectionName>
                )}

                <p
                  className={cn(
                    grotesk.className,
                    "sm:first-letter:ml-[31.77vw] text-[6.15vw] sm:size64 font-semibold"
                  )}
                >
                  {about.description}
                </p>
              </div>
            </Container>
          </Reveal>

          <div className="sticky top-[30%]">
            <div className="w-full relative overflow-clip">
              <h2 className="absolute text-[10.25vw] sm:text-[10.41vw] uppercase font-bold top-1/2 -translate-y-1/2 text-center left-1/2 -translate-x-1/2">
                {about.title}
              </h2>

              <motion.div
                className="relative z-[5] flex top-1/2 justify-between w-[300dvw]"
                style={{ x: xPercent }}
              >
                {about.features && (
                  <>
                    {about.features.feature_1 &&
                      about.features.feature_1.image && (
                        <AboutCard
                          img={about.features.feature_1.image}
                          title={about.features.feature_1.title}
                          num="01"
                          text={about.features.feature_1.description}
                        />
                      )}
                    {about.features.feature_2 &&
                      about.features.feature_2.image && (
                        <AboutCard
                          img={about.features.feature_2.image}
                          title={about.features.feature_2.title}
                          num="02"
                          text={about.features.feature_2.description}
                        />
                      )}
                    {about.features.feature_3 &&
                      about.features.feature_3.image && (
                        <AboutCard
                          img={about.features.feature_3.image}
                          title={about.features.feature_3.title}
                          num="03"
                          text={about.features.feature_3.description}
                        />
                      )}
                  </>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default AboutDescription;
