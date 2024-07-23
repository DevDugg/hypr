import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const SectionSubtitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h5
      className={cn(
        grotesk.className,
        "text-[16px] leading-[140%] font-medium"
      )}
    >
      {children}
    </h5>
  );
};

export default SectionSubtitle;
