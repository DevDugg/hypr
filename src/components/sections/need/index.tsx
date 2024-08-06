import Container from '@/components/layout/container';
import { Button } from '@/components/ui/button';
import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const Need = () => {
  return (
    <section id="need" className="text-WHITE">
      <Container>
        <div className="relative ">
          <h1 className="text-center  text-[64px]">no need to be shy.</h1>
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
