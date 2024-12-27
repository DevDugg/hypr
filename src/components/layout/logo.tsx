import Image from "next/image";

const Logo = ({ w, h, className }: { w?: number; h?: number; className?: string }) => {
  return (
    <div className={className}>
      <Image src="/images/hypr.svg" alt="HYPR logo" width={w} height={h} className="w-full h-full" />
    </div>
  );
};

export default Logo;
