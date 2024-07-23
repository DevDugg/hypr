import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { heroImgData } from '@/database/hero.data';
import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="hero" className="flex flex-col gap-4 overflow-hidden">
      <div className="text-BLACK">
        <div className="bg-ACCENT">
          <Container className="text-[15vw] text-left leading-none">WE BUILD</Container>
        </div>
      </div>

      <Container className="grid grid-cols-3 lg:grid-cols-6 gap-2.5">
        {heroImgData.map((item, i) => (
          <Image key={i} src={item.img} alt="img" width={291} height={400} />
        ))}
      </Container>

      <Container>
        <div className="uppercase text-WHITE text-[5vw] leading-none mb-4">
          strategic, results-oriented influencer collaborations
        </div>
        <Button className={cn('w-full', grotesk.className)}>Contact us</Button>
      </Container>
    </section>
  );
};

export default Hero;
