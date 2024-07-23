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
}: {
  className?: string;
  children: React.ReactNode;
  name: string;
  title?: string;
  subtitle?: string;
}) => {
  return (
    <section className={cn(className, "text-WHITE")}>
      <Container>
        <div className="flex flex-col gap-2">
          {name && <SectionName>{name}</SectionName>}
          {title && <SectionTitle>{title}</SectionTitle>}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </div>

        <div className="">{children}</div>
      </Container>
    </section>
  );
};

export default SectionLayout;
