import SectionLayout from '@/components/layout/section-layout';
import ServicesBlock from './services-block';
import { cn } from '@/lib/utils';

const Services = () => {
  return (
    <section id="our-services" className={cn('text-WHITE text-center')}>
      <SectionLayout className="text-center" name="(OUR SERVICES)">
        <ServicesBlock />
      </SectionLayout>
    </section>
  );
};

export default Services;
