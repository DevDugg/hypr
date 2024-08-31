import Container from "./container";
import SectionName from "../titles/section-name";
import SectionSubtitle from "../titles/section-subtitle";
import SectionTitle from "../titles/section-title";
import { cn } from "@/lib/utils";

const SectionLayout = ({
  className,
  children,
  name,
  title,
  subtitle,
  id,
  nameTitleClassName,
}: {
  className?: string;
  children?: React.ReactNode;
  id: string;
  name: string;
  title?: string;
  subtitle?: string;
  nameTitleClassName?: string;
}) => {
  return (
    <section id={id} className=" ">
      <Container className={className}>
        <div className="sm:hidden mb-[8.1vw]">
          {name && <SectionName className="mb-[4.05vw]">{name}</SectionName>}
          {title && (
            <SectionTitle className="mb-[2.02vw]">{title}</SectionTitle>
          )}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </div>

        <div className="hidden mb-[3.33vw] sm:flex items-end justify-between gap-[2.08vw]">
          {title && (
            <SectionTitle className={nameTitleClassName}>{title}</SectionTitle>
          )}
          {name && <SectionName>{name}</SectionName>}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </div>

        <div className="">{children}</div>
      </Container>
    </section>
  );
};

export default SectionLayout;
