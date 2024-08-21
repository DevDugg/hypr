import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface IProps {
  title: string;
  subtitle: string;
  img: string;
}

const ProjectCard = ({ title, subtitle, img }: IProps) => {
  return (
    <div>
      <Image width={890} height={640} src={img} alt="project image" className="w-full xl:h-[33.33vw] xl:w-auto" />

      <div className="mt-[0.83vw] mb-[0.416vw] text-[1.25vw] monument">{title}</div>

      <div className={cn("text-[1.25vw] font-normal leading-[140%]", grotesk.className)}>{subtitle}</div>
    </div>
  );
};

export default ProjectCard;
