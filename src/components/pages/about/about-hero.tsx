import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="text-WHITE">
      <Container>
        <h1 className="size360 text-center mt-[1.25vw] text-ACCENT">about us</h1>

        <div className="flex items-start gap-[2.08vw] justify-between mb-[1.14vw]">
          <div className="flex flex-col flex-[0_0_26.66vw] gap-[0.31vw]">
            <Button className="about-btn">marketing</Button>
            <div className="flex justify-end">
              <Button className="about-btn">social media</Button>
            </div>
          </div>

          <div className="text-center flex-[0_0_36.25vw] text-[2.5vw]">
            strategic, results-oriented influencer collaborations
          </div>

          <div className="flex flex-col gap-[0.31vw] flex-[0_0_26.66vw]">
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
