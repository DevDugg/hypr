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
    <section id={id}>
      <Container className={className}>
        <div className="flex sm:hidden flex-col gap-[0.8vw]">
          {name && <SectionName>{name}</SectionName>}
          {title && <SectionTitle>{title}</SectionTitle>}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </div>

        <div className="hidden sm:flex items-end justify-between gap-[2.08vw]">
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
