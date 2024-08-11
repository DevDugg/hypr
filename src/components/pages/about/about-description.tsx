import Container from "@/components/layout/container";
import SectionName from "@/components/titles/section-name";

const AboutDescription = () => {
  return (
    <section className="bg-ACCENT">
      <Container>
        <div className="relative">
          <SectionName className="absolute top-2 xl:top-10 left-0">
            (about)
          </SectionName>
        </div>
      </Container>
    </section>
  );
};

export default AboutDescription;
