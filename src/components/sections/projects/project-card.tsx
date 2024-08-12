import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface IProps {
  title: string;
  subtitle: string;
  img: string;
}

const ProjectCard = ({ title, subtitle, img }: IProps) => {
  return (
    <div className="size24">
      <Image width={890} height={640} src={img} alt="project image" />

      <div className="mt-[0.8vw] mb-[0.4vw]">{title}</div>

      <div className={cn('font-normal leading-[140%]', grotesk.className)}>{subtitle}</div>
    </div>
  );
};

export default ProjectCard;
