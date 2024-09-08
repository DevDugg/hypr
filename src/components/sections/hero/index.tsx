import AnimatedParagraph from "@/components/animations/animated-paragraph";
import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import HeroText from "./hero-text";
import Image from "next/image";
import { Link } from "next-view-transitions";
import Reveal from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { heroImgData } from "@/database/hero.data";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col justify-end gap-[2.56vw] sm:gap-[1.25vw] overflow-hidden">
      <HeroText />

      <Container className="grid grid-cols-3 sm:grid-cols-6 sm:gap-[0.52vw] gap-[1.28vw]">
        {heroImgData.map((item, i) => (
          <Reveal key={i} delay={0.5 + i * 0.1}>
            <Image
              src={item.img}
              alt="img"
              width={291}
              height={400}
              className="w-[33.33vw] h-full sm:w-[15.15vw] sm:h-[20.83vw]"
            />
          </Reveal>
        ))}
      </Container>

      <Container>
        <AnimatedParagraph className="uppercase text-WHITE w-full leading-none mb-[2.56vw] sm:mb-[0.83vw] text-center text-[4vw] sm:size72 monument">
          strategic, results-oriented influencer collaborations
        </AnimatedParagraph>
        <Reveal animateOnView type="opacity">
          <CustomButton fullWidth>
            <Link href="/contact">Contact us</Link>
          </CustomButton>
        </Reveal>
      </Container>
    </section>
  );
};
