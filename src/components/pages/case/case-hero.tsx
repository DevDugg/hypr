import AnimatedParagraph from "@/components/animations/animated-paragraph";
import AnimatedTitle from "@/components/animations/animated-title";
import CaseBlock from "./case-block";
import CaseBlockMobile from "./case-block-mobile";
import Container from "@/components/layout/container";
import Image from "next/image";
import { PROJECT_ITEM_QUERYResult } from "../../../../sanity.types";
import Reveal from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";

interface CaseHeroProps {
  project: PROJECT_ITEM_QUERYResult[number];
}

const CaseHero = ({ project }: CaseHeroProps) => {
  const { name, title_1, title_2, main_image } = project;
  return (
    <div>
      <div className="h-[123vw] sm:h-screen w-screen"></div>
      <div className="absolute top-0 left-0 h-[123vw] sm:h-screen w-screen">
        <section className="size-full flex flex-col justify-end text-WHITE mb-[10.25vw] sm:mb-[3.12vw] relative">
          {main_image && (
            <Reveal
              className="absolute top-0 left-0 h-dvh w-dvw object-cover"
              // duration={0.6}
            >
              <Image
                src={urlFor(main_image).size(1920, 1080).url()}
                width={1920}
                height={1080}
                alt="cover image"
                loading="eager"
                unselectable="on"
                className="size-full object-cover"
              />
            </Reveal>
          )}
          <Container className="text-[6.15vw] relative z-10">
            <AnimatedTitle
              element="h1"
              delay={0.6}
              className="sm:size80 uppercase font-bold"
            >
              {name || ""}
            </AnimatedTitle>
          </Container>
        </section>
      </div>

      <section>
        <Container className={cn(grotesk.className)}>
          {title_1 && (
            <Reveal
              animateOnView
              // duration={0.6}
            >
              <AnimatedParagraph className="sm:ml-[12.5vw] sm:w-[57.29vw]  mb-[4.05vw] sm:mb-0 text-[6.15vw] sm:text-[2.5vw] font-semibold uppercase text-WHITE">
                {title_1}
              </AnimatedParagraph>
            </Reveal>
          )}
          <div className="flex justify-end mb-[10.25vw] sm:mb-[1.25vw]">
            {title_2 && (
              <Reveal
                animateOnView

                // duration={0.6}
              >
                <AnimatedParagraph className="sm:w-[57.29vw] text-[6.15vw] sm:text-[2.5vw] font-semibold text-WHITE uppercase">
                  {title_2}
                </AnimatedParagraph>
              </Reveal>
            )}
          </div>
          <Reveal
            animateOnView
            // duration={0.6}
          >
            <CaseBlock project={project} className="hidden sm:flex" />
            <CaseBlockMobile project={project} className="sm:hidden" />
          </Reveal>
        </Container>
      </section>
    </div>
  );
};

export default CaseHero;
