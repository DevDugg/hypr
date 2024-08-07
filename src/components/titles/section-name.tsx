import { cn } from "@/lib/utils";

const SectionName = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        className,
        "text-ACCENT text-[calc(0.8vh+0.8vw)] leading-none font-normal uppercase"
      )}
    >
      {children}
    </h4>
  );
};

export default SectionName;
