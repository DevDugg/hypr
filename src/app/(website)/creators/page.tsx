import AnimatedParagraph from "@/components/animations/animated-paragraph";
import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import Creator from "@/components/pages/creators/creator";
import Reveal from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import { getCreatorsData } from "@/sanity/schemas/creators";
import { getCreatorsPageData } from "@/sanity/schemas/creators-page";
import { grotesk } from "@/lib/fonts";

const CreatorsPage = async () => {
  const data = await getCreatorsPageData();
  const creators = await getCreatorsData();

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
          {data?.description && (
            <AnimatedParagraph
              delay={0.3}
              className={cn(
                "text-WHITE text-center sm:-mt-[0.72vw] uppercase font-semibold text-[3.58vw] sm:text-[2.08vw] leading-[120%]",
                grotesk.className,
              )}
            >
              {data.description}
            </AnimatedParagraph>
          )}
        </div>
        {creators.creators.length > 0 && (
          <div className="grid grid-cols-3 gap-x-[1.25vw] gap-y-[2.083vw] max-[390px]:gap-y-[10.25vw] max-[470px]:flex max-[470px]:flex-col">
            {creators.creators.map((creator, i) => (
              <Reveal key={creator.creator_name} type="both" delay={0.6 + 0.1 * i} duration={0.8}>
                <Creator creator={creator} type={(i + 1) % 2 === 1 ? "small" : "large"} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
};
export default CreatorsPage;
