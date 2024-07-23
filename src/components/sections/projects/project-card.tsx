import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface IProps {
  title: string;
  subtitle: string;
  img: string;
}

const ProjectCard = ({ title, subtitle, img }: IProps) => {
  return (
    <div className="">
      <Image width={890} height={640} src={img} alt="project image" />

      <div className="mt-4 mb-2">{title}</div>

      <div
        className={cn(
          "text-[16px] font-normal leading-[140%]",
          grotesk.className
        )}
      >
        {subtitle}
      </div>
    </div>
  );
};

export default ProjectCard;
