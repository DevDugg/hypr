import AnimatedTitle from "../animations/animated-title";
import Container from "./container";
import SectionName from "../titles/section-name";
import SectionSubtitle from "../titles/section-subtitle";
import clsx from "clsx";

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
  name?: string | null;
  title?: string | null;
  subtitle?: string | null;
  nameTitleClassName?: string;
}) => {
  return (
    <section id={id}>
      <Container className={className}>
        <div className="sm:hidden mb-[8.1vw]">
          {name && <SectionName className="mb-[4.05vw]">{name}</SectionName>}
          {title && <AnimatedTitle className="mb-[2.02vw] max-sm:text-[6.25vw]">{title}</AnimatedTitle>}
          {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
        </div>

        <div className="hidden mb-[3.33vw] sm:flex items-end justify-between gap-[2.08vw]">
          {title && <AnimatedTitle className={nameTitleClassName}>{title}</AnimatedTitle>}
          {name && (
            <div className={clsx("flex justify-between", { "w-1/2": subtitle })}>
              <SectionName>{name}</SectionName>
              {subtitle && <SectionSubtitle>{subtitle}</SectionSubtitle>}
            </div>
          )}
        </div>

        <div className="">{children}</div>
      </Container>
    </section>
  );
};

export default SectionLayout;
