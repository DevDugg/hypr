import AnimatedOnScroll from "@/components/animations/animate-on-scroll";
import AnimatedParagraph from "@/components/animations/animated-paragraph";
import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import FadeOnScroll from "@/components/animations/fade-on-scroll";
import HeroText from "./hero-text";
import { Home_page } from "../../../../sanity.types";
import Image from "next/image";
import { Link } from "next-view-transitions";
import Reveal from "@/components/animations/reveal";
import { urlFor } from "@/sanity/lib/image";

interface HeroProps {
  hero: NonNullable<Home_page["hero"]>;
}

export const Hero = ({ hero }: HeroProps) => {
  const { description, images } = hero;
  return (
    <section id="hero" className="flex flex-col justify-end gap-[2.56vw] sm:gap-[1.25vw] overflow-hidden">
      <HeroText description={description} />
      {/* <FadeOnScroll
        yRange={[-20, 0]}
        opacityRange={[0, 1]}
        className="flex flex-col justify-end gap-[2.56vw] sm:gap-[1.25vw]"
      > */}
      {images && (
        <Container className="grid grid-cols-3 sm:grid-cols-6 sm:gap-[0.52vw] gap-[1.28vw]">
          {images.map((item, i) => (
            // <AnimatedOnScroll
            //   key={i}
            //   type="cover"
            //   scrollRange={[0, 0.04 + i * 0.02]}
            // >
            <Reveal delay={0.5 + i * 0.1} key={i}>
              <Image
                src={urlFor(item).width(873).height(1200).url()}
                loading="eager"
                alt={`${"HYPR need section image"}`}
                width={873}
                height={1200}
                className="w-[33.33vw] h-full sm:w-[15.15vw] sm:h-[20.83vw]"
              />
            </Reveal>
            // </AnimatedOnScroll>
          ))}
        </Container>
      )}

      {description && (
        <Container>
          <AnimatedParagraph
            className="uppercase text-WHITE w-full leading-none mb-[2.56vw] sm:mb-[0.83vw] text-center text-[4vw] sm:size72 monument"
            fontMonument
          >
            {description}
          </AnimatedParagraph>
          <Reveal animateOnView type="opacity">
            <Link href="/contact-us">
              <CustomButton fullWidth className="h-full">
                Contact us
              </CustomButton>
            </Link>
          </Reveal>
        </Container>
      )}
      {/* </FadeOnScroll> */}
    </section>
  );
};
