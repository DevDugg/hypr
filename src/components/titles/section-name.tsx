import { cn } from "@/lib/utils";

const SectionName = ({ className, children }: { className?: string; children: React.ReactNode }) => {
  return <h4 className={cn(className, "name text-ACCENT leading-none uppercase monument")}>{children}</h4>;
};

export default SectionName;
