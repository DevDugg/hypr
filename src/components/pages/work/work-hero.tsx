"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import AnimatedTitle from "@/components/animations/animated-title";
import Image from "next/image";
import { PROJECTS_QUERYResult } from "../../../../sanity.types";
import Reveal from "@/components/animations/reveal";
import SectionTitle from "@/components/titles/section-title";
import WorkCard from "./work-card";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";
import { useRef } from "react";

interface WorkHeroProps {
  projects: PROJECTS_QUERYResult;
}

const WorkHero = ({ projects }: WorkHeroProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const padding = useTransform(scrollYProgress, [0, 1], [0, 800]);

  return (
    projects && (
      <section ref={container}>
        <AnimatedTitle
          element="h1"
          className="!text-[10.25vw] text-center sm:!text-[11.45vw] sm:mt-0 mt-[10.25vw] text-ACCENT uppercase font-bold"
        >
          our work
        </AnimatedTitle>

        {/* MOBILE */}
        <div className="sm:hidden text-WHITE mb-[25.62vw]">
          <AnimatedTitle
            element="h2"
            className="text-center !text-[4.61vw] !normal-case mb-[20.5vw]"
          >
            Never Miss A Bit/
          </AnimatedTitle>
          <div className="flex flex-col gap-[6.15vw]">
            {projects.map((project, i) => (
              <Reveal
                key={i}
                animateOnView
                delay={i * 0.2}
                //  duration={0.6}
              >
                <div>
                  <Image
                    src={`/images/projects/${i + 1}.png`}
                    alt="project image"
                    width={595}
                    height={423}
                    className="mb-[4.1vw] w-[93vw] h-[66.1vw]"
                  />
                  <h5 className="uppercase font-bold text-[4.61vw] mb-[2.05vw]">
                    {project.name}
                  </h5>
                  <p
                    className={cn(
                      "leading-[140%] text-[4.1vw]",
                      grotesk.className
                    )}
                  >
                    {project.short_description}
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
          <motion.div
            className="flex flex-col flex-[1_1_30.41vw]"
            style={{ y: y1 }}
          >
            <SectionTitle className="mb-[28.78vw]">
              never miss a bit/
            </SectionTitle>

            {projects.map((project, i) => {
              switch (i + 1) {
                case 1:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(584, 640).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={584}
                        h={480}
                        slug={project.slug!.current || ""}
                        className="mb-[3.64vw] w-[30.41vw]"
                        imgClassName="object-cover h-[25vw]"
                      />
                    )
                  );
                case 4:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(292, 332).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={292}
                        h={332}
                        slug={project.slug!.current || ""}
                        className="w-[50%] mb-[18.22vw]"
                        imgClassName="object-cover h-[17.29vw]"
                      />
                    )
                  );
                case 7:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(584, 640).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={584}
                        h={640}
                        slug={project.slug!.current || ""}
                        className="w-[30.41vw]"
                        imgClassName="object-cover h-[33.33vw]"
                      />
                    )
                  );

                default:
                  break;
              }
            })}
          </motion.div>

          <motion.div
            className="flex flex-col flex-[1_1_30.41vw]"
            style={{ y: y2 }}
          >
            {projects.map((project, i) => {
              switch (i + 1) {
                case 2:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(292, 320).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={292}
                        h={320}
                        slug={project.slug!.current || ""}
                        className="w-[50%] mb-[10.5vw]"
                        imgClassName="object-cover h-[16.66vw]"
                      />
                    )
                  );
                case 5:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(584, 640).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={584}
                        h={640}
                        slug={project.slug!.current || ""}
                        className="w-full mb-[11.87vw]"
                        imgClassName="object-cover h-[33.33vw]"
                      />
                    )
                  );
                case 8:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(584, 480).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={584}
                        h={480}
                        slug={project.slug!.current || ""}
                        className="w-full mb-[12.39vw]"
                        imgClassName="object-cover h-[25vw]"
                      />
                    )
                  );
                case 10:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(292, 320).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={292}
                        h={320}
                        slug={project.slug!.current || ""}
                        className="w-[50%]"
                        imgClassName="object-cover h-[16.66vw]"
                      />
                    )
                  );

                default:
                  break;
              }
            })}
          </motion.div>

          <motion.div
            className="flex flex-col flex-[1_1_30.41vw]"
            style={{ y: y3 }}
          >
            {projects.map((project, i) => {
              switch (i + 1) {
                case 3:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(584, 640).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={584}
                        h={640}
                        slug={project.slug!.current || ""}
                        className="w-full mb-[11.35vw]"
                        imgClassName="object-cover h-[33.33vw]"
                      />
                    )
                  );
                case 6:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(292, 332).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={292}
                        h={332}
                        slug={project.slug!.current || ""}
                        className="w-1/2 mb-[2.18vw]"
                        imgClassName="object-cover h-[17.29vw]"
                      />
                    )
                  );
                case 9:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(584, 640).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={584}
                        h={640}
                        slug={project.slug!.current || ""}
                        className="w-full mb-[4.1vw]"
                        imgClassName="object-cover h-[33.33vw]"
                      />
                    )
                  );
                case 11:
                  return (
                    project.main_image && (
                      <WorkCard
                        img={urlFor(project.main_image).size(584, 480).url()}
                        title={project.name || ""}
                        text={project.short_description || ""}
                        w={584}
                        h={480}
                        slug={project.slug!.current || ""}
                        className="w-full"
                        imgClassName="object-cover h-[25vw]"
                      />
                    )
                  );

                default:
                  break;
              }
            })}
          </motion.div>
        </motion.div>
      </section>
    )
  );
};

export default WorkHero;
