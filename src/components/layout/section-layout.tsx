import { cn } from "@/lib/utils";
import SectionName from "../titles/section-name";
import SectionTitle from "../titles/section-title";
import SectionSubtitle from "../titles/section-subtitle";
import Container from "./container";

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
  children: React.ReactNode;
  id: string;
  name: string;
  title?: string;
  subtitle?: string;
  nameTitleClassName?: string;
}) => {
  return (
    <section id={id}>
      <Container className={className}>
        <div className="flex xl:hidden flex-col gap-2">
          {name && <SectionName>{name}</SectionName>}
          {title && <SectionTitle>{title}</SectionTitle>}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </div>

        <div className="hidden xl:flex items-end justify-between gap-10">
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
