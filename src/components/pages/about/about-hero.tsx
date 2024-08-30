import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="text-WHITE">
      <Container>
        <h1 className="text-[12.5vw] text-center mt-[2.08vw] text-ACCENT uppercase font-bold">
          about us
        </h1>

        <div className="flex items-start justify-between mb-[1.14vw]">
          <div className="flex flex-col flex-[1_1_22.23vw] gap-[0.31vw]">
            <Button className="about-btn">marketing</Button>
            <div className="flex justify-end">
              <Button className="about-btn">social media</Button>
            </div>
          </div>

          <div className="text-center  uppercase font-bold text-[2.08vw] flex-[1_1_48.42vw]">
            strategic, results-oriented influencer collaborations
          </div>

          <div className="flex flex-col gap-[0.31vw] flex-[1_1_21.30vw]">
            <div className="flex justify-end">
              <Button className="about-btn">data driven</Button>
            </div>
            <Button className="about-btn flex items-end">strategy</Button>
          </div>
        </div>
      </Container>
      <Image
        src="/images/about/1.png"
        alt="image"
        width={1920}
        height={900}
        className="w-full h-[46.87vw]"
      />
    </section>
  );
};

export default AboutHero;
