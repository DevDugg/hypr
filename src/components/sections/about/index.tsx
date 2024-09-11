import Container from "@/components/layout/container";
import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";
import Paragraph from "./character";
import SectionName from "@/components/titles/section-name";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface AboutProps {
  about: NonNullable<HOME_PAGE_QUERYResult[number]["about"]>;
}

const About = ({ about }: AboutProps) => {
  const { subtitle, text } = about;

  return (
    <section>
      <Container className="relative">
        {subtitle && <SectionName className="absolute top-[3.07vw] sm:top-[2.08vw] left-0">{subtitle}</SectionName>}
        <div className={cn("about-text flex transition-colors text-WHITE duration-200 relative", grotesk.className)}>
          <div className="font-semibold text-[1vw]">{text && <Paragraph value={text} />}</div>
        </div>
      </Container>
    </section>
  );
};

export default About;
