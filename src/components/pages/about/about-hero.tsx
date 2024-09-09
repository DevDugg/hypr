import AnimatedParagraph from "@/components/animations/animated-paragraph";
import AnimatedTitle from "@/components/animations/animated-title";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import Image from "next/image";
import Reveal from "@/components/animations/reveal";

const AboutHero = () => {
  return (
    <section className="text-WHITE">
      <Container>
        <AnimatedTitle
          element="h1"
          className="text-[10.25vw] sm:text-[12.5vw] text-center mt-[2.08vw] text-ACCENT uppercase font-bold"
        >
          about us
        </AnimatedTitle>

        <div className="flex items-start justify-between mb-[1.14vw]">
          <div className="hidden sm:flex flex-col flex-[1_1_22.23vw] gap-[0.31vw]">
            <Reveal type="opacity" delay={0.6}>
              <Button className="about-btn cursor-default">marketing</Button>
            </Reveal>
            <div className="flex justify-end">
              <Reveal type="opacity" delay={0.7}>
                <Button className="about-btn cursor-default">social media</Button>
              </Reveal>
            </div>
          </div>

          <AnimatedParagraph
            delay={0.3}
            className="text-center sm:-mt-[0.72vw] uppercase font-bold text-[3.58vw] sm:text-[2.08vw] flex-[1_1_48.42vw]"
          >
            strategic, results-oriented influencer collaborations
          </AnimatedParagraph>

          <div className="hidden sm:flex flex-col gap-[0.31vw] flex-[1_1_21.30vw]">
            <div className="flex justify-end">
              <Reveal type="opacity" delay={0.8}>
                <Button className="about-btn cursor-default">data driven</Button>
              </Reveal>
            </div>
            <Reveal type="opacity" delay={0.9}>
              <Button className="about-btn flex items-end cursor-default">strategy</Button>
            </Reveal>
          </div>
        </div>
      </Container>
      <Reveal duration={0.6} animateOnView delay={0.6}>
        <Image src="/images/about/1.png" alt="image" width={1920} height={900} className="w-full h-[46.87vw]" />
      </Reveal>
    </section>
  );
};

export default AboutHero;
