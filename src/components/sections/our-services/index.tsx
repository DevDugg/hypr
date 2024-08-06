import SectionLayout from '@/components/layout/section-layout';
import ServicesBlock from './services-block';

const Services = () => {
  return (
    <SectionLayout
      id="services"
      className="text-center mx-auto w-full text-WHITE"
      name="(OUR SERVICES)">
      <ServicesBlock />
    </SectionLayout>
  );
};

export default Services;
