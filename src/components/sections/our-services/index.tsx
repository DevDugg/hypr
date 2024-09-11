import Container from "@/components/layout/container";
import { Home_page } from "../../../../sanity.types";
import Reveal from "@/components/animations/reveal";
import SectionName from "@/components/titles/section-name";
import ServicesBlockDesktop from "./services-block-desktop";

interface ServicesProps {
  services: NonNullable<Home_page["services"]>;
}

const Services = ({ services }: ServicesProps) => {
  const { items, subtitle } = services;
  return (
    <section id="services">
      <Container className="text-WHITE flex flex-col items-center gap-[2.02vw]">
        {subtitle && (
          <Reveal animateOnView type="opacity">
            <SectionName>{subtitle}</SectionName>
          </Reveal>
        )}
        {/* <ServicesBlock /> */}
        {items && <ServicesBlockDesktop items={items} />}
      </Container>
    </section>
  );
};

export default Services;
