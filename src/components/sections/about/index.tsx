import Container from "@/components/layout/container";
import Paragraph from "./character";
import SectionName from "@/components/titles/section-name";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const About = () => {
  const paragraph = `HYPR agency is a branding and digital marketing studio from Australia.
        Partnering with companies that need to transform their brand, attract
        the right audience, and radically stand out. We’re a nimble team of
        designers and creative developers, focused on creating uniquely human
        and culturally informed.`;

  return (
    <section>
      <Container className="relative">
        <SectionName className="absolute top-[2.08vw] left-0">
          (about)
        </SectionName>
        <div
          className={cn(
            "about-text flex transition-colors text-WHITE duration-200 relative",
            grotesk.className
          )}
        >
          <div className="font-semibold text-[1vw]">
            <Paragraph value={paragraph} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
