import { Coordinates } from "@/lib/get-relative-coordinates";
import { cn } from "@/lib/utils";

interface IProps {
  title: string;
  img: string;
  i: number;
  position: Coordinates;
  active: boolean;
}

export const ServiceCardDesktop = ({ title, img, i, active, position }: IProps) => {
  return (
    <div id={`element-${i}`} className="flex flex-col items-center">
      <h4 className={cn("leading-none font-bold text-[4.16vw]")}>{title}</h4>
    </div>
  );
};
