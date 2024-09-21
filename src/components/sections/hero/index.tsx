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
    <section
      id="hero"
      className="flex flex-col justify-end gap-[2.56vw] sm:gap-[1.25vw] overflow-hidden"
    >
      <HeroText />
      {/* <FadeOnScroll
        yRange={[-20, 0]}
        opacityRange={[0, 1]}
        className="flex flex-col justify-end gap-[2.56vw] sm:gap-[1.25vw]"
      > */}
      {images && (
        <Container className="grid grid-cols-3 sm:grid-cols-6 sm:gap-[0.52vw] gap-[1.28vw]">
          {images.map((item, i) => (
            <Reveal key={i} delay={0.5 + i * 0.1}>
              <Image
                src={urlFor(item).width(873).height(1200).url()}
                loading="eager"
                alt="img"
                width={873}
                height={1200}
                className="w-[33.33vw] h-full sm:w-[15.15vw] sm:h-[20.83vw]"
              />
            </Reveal>
          ))}
        </Container>
      )}

      {description && (
        <Container>
          <AnimatedParagraph className="uppercase text-WHITE w-full leading-none mb-[2.56vw] sm:mb-[0.83vw] text-center text-[4vw] sm:size72 monument">
            {description}
          </AnimatedParagraph>
          <Reveal animateOnView type="opacity">
            <CustomButton fullWidth className="h-full">
              <Link href="/contacts">Contact us</Link>
            </CustomButton>
          </Reveal>
        </Container>
      )}
      {/* </FadeOnScroll> */}
    </section>
  );
};
