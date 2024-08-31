import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const SectionSubtitle = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h5
      className={cn(
        grotesk.className,
        "text-[4.05vw] sm:subtitle leading-[140%] font-medium"
      )}
    >
      {children}
    </h5>
  );
};

export default SectionSubtitle;
