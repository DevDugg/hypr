import Container from "@/components/layout/container";
import SectionName from "@/components/titles/section-name";
import ServicesBlock from "./services-block";
import ServicesBlockDesktop from "./services-block-desktop";

const Services = () => {
  return (
    <section id="services">
      <Container className="text-WHITE flex flex-col items-center">
        <SectionName>(services)</SectionName>
        {/* <ServicesBlock /> */}
        <ServicesBlockDesktop />
      </Container>
    </section>
  );
};

export default Services;
