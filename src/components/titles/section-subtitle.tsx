import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const SectionSubtitle = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h5 className={cn(grotesk.className, "subtitle leading-[140%] font-medium")}>{children}</h5>;
};

export default SectionSubtitle;
