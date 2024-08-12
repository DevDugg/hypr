import { Button } from '@/components/ui/button';
import Container from '@/components/layout/container';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';

const Need = () => {
  return (
    <section id="need" className="text-WHITE">
      <Container>
        <div className="relative py-[5vw]">
          <Image
            src={'/images/need/1.png'}
            alt="photo"
            width={80}
            height={80}
            className="fly-item top-10 left-0"
          />
          <Image
            src={'/images/need/1.png'}
            alt="photo"
            width={80}
            height={80}
            className="fly-item top-0 left-[50%] -translate-x-[50%]"
          />
          <Image
            src={'/images/need/1.png'}
            alt="photo"
            width={80}
            height={80}
            className="fly-item top-4 right-10"
          />
          <Image
            src={'/images/need/1.png'}
            alt="photo"
            width={80}
            height={80}
            className="fly-item left-0 bottom-2"
          />
          <Image
            src={'/images/need/1.png'}
            alt="photo"
            width={80}
            height={80}
            className="fly-item left-[50%] -translate-x-[50%] bottom-0"
          />
          <Image
            src={'/images/need/1.png'}
            alt="photo"
            width={80}
            height={80}
            className="fly-item right-4 bottom-10"
          />
          <h1 className="text-center w-[60%] mx-auto leading-none text-[8.33vw]">
            no need to be shy.
          </h1>
          <Button
            className={cn(grotesk.className, 'w-full max-w-[820px] mx-auto flex justify-center')}>
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Need;
