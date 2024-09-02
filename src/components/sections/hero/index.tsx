import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { heroImgData } from "@/database/hero.data";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-[2.56vw] sm:gap-[1.25vw] overflow-hidden">
      <div className="text-BLACK">
        <div className="bg-ACCENT overflow-hidden pt-[3.07vw] sm:pt-[1.25vw] pb-[2.05vw] sm:pb-0">
          <Container className="overflow-hidden">
            <h1 className="inline-block w-full leading-none size260 text-center whitespace-nowrap monument">
              we build
            </h1>
          </Container>
        </div>
      </div>

      <Container className="grid grid-cols-3 sm:grid-cols-6 sm:gap-[0.52vw] gap-[1.28vw]">
        {heroImgData.map((item, i) => (
          <Image
            key={i}
            src={item.img}
            alt="img"
            width={291}
            height={400}
            className="w-[33.33vw] h-full sm:w-[15.15vw] sm:h-[20.83vw]"
          />
        ))}
      </Container>

      <Container>
        <div className="uppercase text-WHITE w-full leading-none mb-[2.56vw] sm:mb-[0.83vw] text-center text-[4vw] sm:size72 monument">
          strategic, results-oriented influencer collaborations
        </div>
        <CustomButton fullWidth>
          <div
            className={cn(
              "hidden lg:flex font-bold !text-[0.9375vw] !px-[2.08vw] leading-[100%] rounded-[10.41vw]",
              grotesk.className,
            )}
          >
            Contact us
          </div>
        </CustomButton>
      </Container>
    </section>
  );
};
