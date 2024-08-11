import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { heroImgData } from "@/database/hero.data";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-4 overflow-hidden">
      <div className="text-BLACK">
        <div className="bg-ACCENT overflow-hidden pt-6">
          <Container className="overflow-hidden">
            <h1 className="inline-block w-full leading-none text-[20vw] text-center -mb-8 whitespace-nowrap">
              WE BUILD
            </h1>
          </Container>
        </div>
      </div>

      <Container className="grid grid-cols-3 lg:grid-cols-6 gap-2.5">
        {heroImgData.map((item, i) => (
          <Image key={i} src={item.img} alt="img" width={291} height={400} />
        ))}
      </Container>

      <Container>
        <div className="uppercase text-WHITE w-full leading-none mb-4 text-center text-[4vw]">
          strategic, results-oriented influencear collaborations
        </div>
        <Button className={cn("w-full", grotesk.className)}>Contact us</Button>
      </Container>
    </section>
  );
};
