import AnimatedParagraph from "@/components/animations/animated-paragraph";
import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const CreatorsPage = () => {
  return (
    <section id="creators">
      <Container>
        <div className="flex flex-col gap-[1.25vw] mb-[10.41vw]">
          <AnimatedTitle
            element="h1"
            className="!text-[10.25vw] text-center sm:!text-[11.45vw] sm:mt-0 mt-[10.25vw] text-ACCENT uppercase font-bold"
          >
            Creators
          </AnimatedTitle>
          <AnimatedParagraph
            delay={0.3}
            className={cn(
              "text-WHITE text-center sm:-mt-[0.72vw] uppercase font-semibold text-[3.58vw] sm:text-[2.08vw] flex-[1_1_48.42vw] leading-[140%]",
              grotesk.className,
            )}
          >
            A global collective of creators, innovators, and disruptors, redefining what's possible for brands through
            bold and boundary-pushing talent.
          </AnimatedParagraph>
        </div>
      </Container>
    </section>
  );
};
export default CreatorsPage;
