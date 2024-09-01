import Container from "@/components/layout/container";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import CaseBlock from "./case-block";
import CaseBlockMobile from "./case-block-mobile";

const CaseHero = () => {
  return (
    <div>
      <section className="bg-case-pattern bg-cover h-screen flex flex-col justify-end bg-top bg-no-repeat text-WHITE mb-[25.62vw] sm:mb-[3.12vw]">
        <Container className="text-[6.15vw] sm:size80 uppercase font-bold">
          project name
        </Container>
      </section>

      <section>
        <Container className={cn(grotesk.className)}>
          <p className="sm:ml-[12.5vw] sm:w-[57.29vw]  mb-[4.05vw] sm:mb-0 text-[6.15vw] sm:text-[2.5vw] font-semibold uppercase text-WHITE">
            Partnering with companies that need to transform their brand,
            attract the right audience, and radically stand out.
          </p>
          <div className="flex justify-end mb-[10.25vw] sm:mb-[1.25vw]">
            <p className="sm:w-[57.29vw] text-[6.15vw] sm:text-[2.5vw] font-semibold text-WHITE uppercase">
              We’re a nimble team of designers and creative developers, focused
              on creating uniquely human and culturally informed.
            </p>
          </div>

          <CaseBlock className="hidden sm:flex" />
          <CaseBlockMobile className="sm:hidden" />
        </Container>
      </section>
    </div>
  );
};

export default CaseHero;
