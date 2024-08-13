import Container from "@/components/layout/container";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import CaseBlock from "./case-block";

const CaseHero = () => {
  return (
    <>
      <section className="bg-case-pattern bg-cover h-[48.43vw] flex flex-col justify-end bg-top bg-no-repeat text-WHITE mb-[3.12vw]">
        <Container className="size160">project name</Container>
      </section>

      <section>
        <Container className={cn(grotesk.className)}>
          <p className="ml-[12.5vw] w-[57.29vw] text-[2.5vw] font-semibold uppercase text-WHITE">
            Partnering with companies that need to transform their brand,
            attract the right audience, and radically stand out.
          </p>
          <div className="flex justify-end mb-[1.25vw]">
            <p className="w-[57.29vw] text-[2.5vw] font-semibold text-WHITE uppercase">
              We’re a nimble team of designers and creative developers, focused
              on creating uniquely human and culturally informed.
            </p>
          </div>

          <CaseBlock />
        </Container>
      </section>
    </>
  );
};

export default CaseHero;
