import Container from "@/components/layout/container";
import Reveal from "@/components/animations/reveal";
import SectionName from "@/components/titles/section-name";
import ServicesBlockDesktop from "./services-block-desktop";

const Services = () => {
  return (
    <section id="services">
      <Container className="text-WHITE flex flex-col items-center gap-[2.02vw]">
        <Reveal animateOnView type="opacity">
          <SectionName>(our services)</SectionName>
        </Reveal>
        {/* <ServicesBlock /> */}
        <ServicesBlockDesktop />
      </Container>
    </section>
  );
};

export default Services;
