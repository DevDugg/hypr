import { frick } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3
      className={cn(
        className,
        "text-WHITE text-[calc(2.2vh+2.2vw)] leading-none font-normal uppercase"
      )}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
