import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { heroImgData } from '@/database/hero.data';
import Image from 'next/image';

export const Hero = () => {
  return (
    <div className="flex flex-col gap-4 overflow-hidden">
      <div className="text-BLACK">
        <div className="bg-ACCENT">
          <Container className="text-[calc(10vw+2em)] text-center leading-none">WE BUILD</Container>
        </div>
      </div>

      <Container className="grid grid-cols-3 gap-[10px]">
        {heroImgData.map((item, i) => (
          <Image key={i} src={item.img} alt="img" width={320} height={250} />
        ))}
      </Container>

      <Container>
        <div className="uppercase text-WHITE text-[10vh] leading-none">
          strategic, results-oriented influencer collaborations
        </div>
        <Button className="w-full">Contact us</Button>
      </Container>
    </div>
  );
};
