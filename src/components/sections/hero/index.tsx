import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { heroImgData } from "@/database/hero.data";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-[1.25vw] overflow-hidden">
      <div className="text-BLACK">
        <div className="bg-ACCENT overflow-hidden pt-[1.25vw]">
          <Container className="overflow-hidden">
            <h1 className="inline-block w-full leading-none text-[13.6vw] text-center -mb-[0.16vw] whitespace-nowrap monument">
              WE BUILD
            </h1>
          </Container>
        </div>
      </div>

      <Container className="grid grid-cols-3 lg:grid-cols-6 gap-[0.52vw]">
        {heroImgData.map((item, i) => (
          <Image key={i} src={item.img} alt="img" width={291} height={400} />
        ))}
      </Container>

      <Container>
        <div className="uppercase text-WHITE w-full leading-none mb-[0.83vw] text-center text-[4vw] monument">
          strategic, results-oriented influencer collaborations
        </div>
        <Button className={cn("w-full !py-[1vw] !px-[2.08vw] text-[1.25vw] h-auto leading-none", grotesk.className)}>
          Contact us
        </Button>
      </Container>
    </section>
  );
};
