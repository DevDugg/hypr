import Container from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="text-WHITE">
      <Container>
        <h1 className="text-[calc(8vw+4vh)] xl:text-[calc(16vh+12vw)] text-center text-ACCENT">
          about us
        </h1>

        <div className="flex items-start justify-between mb-4">
          <div className="flex flex-col gap-2 flex-[0_0_30%]">
            <Button className="about-btn">marketing</Button>
            <Button className="about-btn ml-[20%]">social media</Button>
          </div>

          <div className="text-center text-[calc(1.5vh+1.5vw)]">
            strategic, results-oriented influencer collaborations
          </div>

          <div className="flex flex-col gap-2 items-end flex-[0_0_30%]">
            <Button className="about-btn">marketing</Button>
            <Button className="about-btn mr-[20%]">social media</Button>
          </div>
        </div>

        <Image
          src="/images/projects/1.png"
          alt="image"
          width={1800}
          height={800}
        />
      </Container>
    </section>
  );
};

export default AboutHero;
