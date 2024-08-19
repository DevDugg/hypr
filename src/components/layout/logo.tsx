import { cn } from "@/lib/utils";

const Logo = ({ w, h, className }: { w?: number; h?: number; className?: string }) => {
  return (
    <div className={cn("", className)}>
      <img src="/images/hypr.svg" alt="logo" width={w} height={h} className="w-full h-full" />
    </div>
  );
};

export default Logo;
