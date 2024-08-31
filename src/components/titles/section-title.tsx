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
        "text-[4.55vw] sm:size48 text-WHITE leading-none font-bold uppercase monument"
      )}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
