import TextToSVG from "text-to-svg";
import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { heroImgData } from "@/database/hero.data";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-4 overflow-hidden">
      <div className="text-BLACK">
        <div className="bg-ACCENT overflow-hidden pt-6">
          <Container>
            <h1 className="inline-block w-full text-left leading-none hero-title -mb-8 whitespace-nowrap">
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
        <div className="uppercase text-WHITE w-full leading-none mb-4 hero-text">
          strategic, results-oriented influencear collaborations
        </div>
        <Button className={cn("w-full", grotesk.className)}>Contact us</Button>
      </Container>
    </section>
  );
};
