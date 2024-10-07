import { ABOUT_PAGE_QUERYResult } from "../../../../sanity.types";
import AnimatedParagraph from "@/components/animations/animated-paragraph";
import AnimatedTitle from "@/components/animations/animated-title";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import Image from "next/image";
import Reveal from "@/components/animations/reveal";
import { urlFor } from "@/sanity/lib/image";

interface AboutHeroProps {
  data: NonNullable<ABOUT_PAGE_QUERYResult[0]>;
}

const AboutHero = ({ data }: AboutHeroProps) => {
  const { hero } = data;
  return (
    hero && (
      <section className="text-WHITE">
        <Container>
          {hero.title && (
            <AnimatedTitle
              element="h1"
              className="!text-[10.25vw] sm:!text-[12.5vw] text-center mt-[2.08vw] text-ACCENT uppercase font-bold"
            >
              {hero.title}
            </AnimatedTitle>
          )}

          {hero.tags && (
            <div className="flex items-start justify-between mb-[1.14vw]">
              <div className="hidden sm:flex flex-col flex-[1_1_22.23vw] gap-[0.31vw]">
                {hero.tags.tag_1 && (
                  <Reveal type="opacity" delay={0.6}>
                    <Button className="about-btn cursor-default">{hero.tags.tag_1}</Button>
                  </Reveal>
                )}
                <div className="flex justify-end">
                  {hero.tags.tag_2 && (
                    <Reveal type="opacity" delay={0.7}>
                      <Button className="about-btn cursor-default">{hero.tags.tag_2}</Button>
                    </Reveal>
                  )}
                </div>
              </div>

              {hero.description && (
                <AnimatedParagraph
                  delay={0.3}
                  className="text-center sm:-mt-[0.72vw] uppercase font-bold text-[3.58vw] sm:text-[2.08vw] flex-[1_1_48.42vw]"
                >
                  {hero.description}
                </AnimatedParagraph>
              )}

              <div className="hidden sm:flex flex-col gap-[0.31vw] flex-[1_1_21.30vw]">
                <div className="flex justify-end">
                  {hero.tags.tag_3 && (
                    <Reveal type="opacity" delay={0.8}>
                      <Button className="about-btn cursor-default">{hero.tags.tag_3}</Button>
                    </Reveal>
                  )}
                </div>
                {hero.tags.tag_4 && (
                  <Reveal type="opacity" delay={0.9}>
                    <Button className="about-btn flex items-end cursor-default">{hero.tags.tag_4}</Button>
                  </Reveal>
                )}
              </div>
            </div>
          )}
        </Container>
        {hero.main_image && (
          <Reveal
            //  duration={0.6}
            animateOnView
            delay={0.6}
          >
            <Image
              src={urlFor(hero.main_image).size(3840, 1800).url()}
              alt="image"
              width={3840}
              height={1800}
              className="w-full h-[46.87vw]"
            />
          </Reveal>
        )}
      </section>
    )
  );
};

export default AboutHero;
