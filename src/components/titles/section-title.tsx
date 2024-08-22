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
        "size48 text-WHITE leading-none uppercase monument"
      )}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
