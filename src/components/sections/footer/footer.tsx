import BackToTop from "./back-to-top";
import Container from "../../layout/container";
import PreFooter from "./pre-footer";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

export const Footer = () => {
  const date = new Date();

  return (
    <footer className="text-WHITE mt-[25.62vw] sm:mt-[10.41vw] pb-[1.25vw] relative z-10">
      <Container className="flex flex-col gap-[20.05vw] sm:gap-[10vw]">
        <PreFooter />

        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-end gap-[5vw]">
          <p className="monument text-[24.5vw] sm:flex-[0_0_46.87vw] sm:text-[11.63vw] leading-none">
            HYPR
          </p>

          <div className="flex sm:flex-[0_0_34.58vw] pb-[1.82vh] w-full justify-between">
            <BackToTop />

            <div
              className={cn(
                grotesk.className,
                "text-[3.58vw] sm:size24 sm:font-bold font-medium"
              )}
            >
              Copyright © HYPR {date.getFullYear()}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};