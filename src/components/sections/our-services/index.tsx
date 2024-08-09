import SectionLayout from '@/components/layout/section-layout';
import ServicesBlock from './services-block';
import Container from '@/components/layout/container';
import SectionName from '@/components/titles/section-name';

const Services = () => {
  return (
    <section id="services">
      <Container className="text-WHITE flex flex-col items-center">
        <SectionName>(services)</SectionName>
        <ServicesBlock />
      </Container>
    </section>
  );
};

export default Services;
