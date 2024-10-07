"use client";

import { PROJECTS_QUERYResult, Projects } from "../../../../sanity.types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import AnimatedTitle from "@/components/animations/animated-title";
import Image from "next/image";
import Reveal from "@/components/animations/reveal";
import SectionTitle from "@/components/titles/section-title";
import WorkCard from "./work-card";
import { cn } from "@/lib/utils";
import { getProjectsData } from "@/sanity/schemas/projects";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";
import { useInView } from "react-intersection-observer";

function convertToMatrix(arr: any[]): any[][] {
  const result: any[][] = [[], [], []];

  const lastIndex = arr.length - 1;

  for (let i = 0; i < arr.length; i += 3) {
    if (arr[i] !== undefined && i !== lastIndex) {
      result[0].push(arr[i]);
    }
    if (arr[i + 1] !== undefined) {
      result[1].push(arr[i + 1]);
    } else if (i === lastIndex) {
      result[1].push(arr[i]);
    }

    if (arr[i + 2] !== undefined) {
      result[2].push(arr[i + 2]);
    }
  }

  return result;
}

interface WorkHeroProps {
  projects: PROJECTS_QUERYResult;
}

enum VERSION {
  SMALL = "small",
  MEDIUM = "medium",
  BIG = "big",
}

type VersionType = VERSION.SMALL | VERSION.MEDIUM | VERSION.BIG;

const WorkHero = ({ projects }: WorkHeroProps) => {
  // Animations
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -600]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const padding = useTransform(scrollYProgress, [0, 1], [0, 800]);

  // Data
  const [data, setData] = useState<{
    projects: Projects[];
    hasMore: boolean;
  }>({ projects, hasMore: true });
  const [page, setPage] = useState<number>(1);
  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  useEffect(() => {
    const getData = async () => {
      if (!data.hasMore) return;

      const { hasMore, projects } = await getProjectsData(page + 1, 12);
      setData({ hasMore, projects: [...data.projects, ...projects] });
      setPage(page + 1);
    };

    if (!inView) return;
    getData();
  }, [inView]);

  const matrix = data.projects.length > 1 && convertToMatrix(data.projects);
  const versionMap: Array<Array<VersionType>> = [
    [VERSION.MEDIUM, VERSION.SMALL, VERSION.BIG],
    [VERSION.SMALL, VERSION.BIG, VERSION.MEDIUM],
    [VERSION.BIG, VERSION.SMALL, VERSION.MEDIUM],
  ];

  return (
    data.projects &&
    matrix && (
      <section ref={container}>
        <AnimatedTitle
          element="h1"
          className="!text-[10.25vw] text-center sm:!text-[11.45vw] sm:mt-0 mt-[10.25vw] text-ACCENT uppercase font-bold"
        >
          our work
        </AnimatedTitle>

        <Reveal type="opacity" duration={1.4} delay={0.6}>
          {/* MOBILE */}
          <div className="sm:hidden text-WHITE mb-[25.62vw]">
            <AnimatedTitle element="h2" className="text-center !text-[4.61vw] !normal-case mb-[20.5vw]">
              Never Miss A Bit/
            </AnimatedTitle>
            <div className="flex flex-col gap-[6.15vw]">
              {projects.map((project, i) => (
                <div key={i}>
                  <Image
                    src={`/images/projects/${i + 1}.png`}
                    alt="project image"
                    width={595}
                    height={423}
                    className="mb-[4.1vw] w-[93vw] h-[66.1vw]"
                  />
                  <h5 className="uppercase font-bold text-[4.61vw] mb-[2.05vw]">{project.name}</h5>
                  <p className={cn("leading-[140%] text-[4.1vw]", grotesk.className)}>{project.short_description}</p>
                </div>
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
              {matrix[0].map(
                (project, i) =>
                  project &&
                  project.main_image && <WorkCardSwitch key={i} project={project} version={versionMap[0][i % 2]} />,
              )}
            </motion.div>

            <motion.div className="flex flex-col flex-[1_1_30.41vw]" style={{ y: y2 }}>
              {matrix[1].map(
                (project, i) =>
                  project &&
                  project.main_image && <WorkCardSwitch key={i} project={project} version={versionMap[1][i % 2]} />,
              )}
            </motion.div>

            <motion.div className="flex flex-col flex-[1_1_30.41vw]" style={{ y: y3 }}>
              {matrix[2].map(
                (project, i) =>
                  project &&
                  project.main_image && <WorkCardSwitch key={i} project={project} version={versionMap[2][i % 2]} />,
              )}
            </motion.div>
          </motion.div>
          <div className="trigger w-full h-[1px]" ref={ref}></div>
        </Reveal>
      </section>
    )
  );
};

export default WorkHero;

interface WorkCardSwitchProps {
  project: WorkHeroProps["projects"][number];
  version: VersionType;
}

const WorkCardSwitch = ({ project, version }: WorkCardSwitchProps) => {
  switch (version) {
    case VERSION.SMALL:
      return (
        <WorkCard
          img={urlFor(project.main_image!).size(292, 332).url()}
          title={project.name || ""}
          text={project.short_description || ""}
          w={292}
          h={332}
          slug={project.slug!.current || ""}
          className="w-1/2 mb-[2.18vw]"
          imgClassName="object-cover h-[17.29vw]"
        />
      );
    case VERSION.MEDIUM:
      return (
        <WorkCard
          img={urlFor(project.main_image!).size(584, 480).url()}
          title={project.name || ""}
          text={project.short_description || ""}
          w={584}
          h={480}
          slug={project.slug!.current || ""}
          className="w-full"
          imgClassName="object-cover h-[25vw]"
        />
      );
    case VERSION.BIG:
      return (
        <WorkCard
          img={urlFor(project.main_image!).size(584, 640).url()}
          title={project.name || ""}
          text={project.short_description || ""}
          w={584}
          h={640}
          slug={project.slug!.current || ""}
          className="w-full mb-[4.1vw]"
          imgClassName="object-cover h-[33.33vw]"
        />
      );
    default:
      return null;
  }
};
