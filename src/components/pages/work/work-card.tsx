import Image from 'next/image';
import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface Props {
  img: string;
  title: string;
  text: string;
  w: number;
  h: number;
  imgClassName: string;
  className?: string;
}

const WorkCard = ({ img, title, text, w, h, imgClassName, className }: Props) => {
  return (
    <article className={cn('text-[1.25vw] text-WHITE', className)}>
      <Image
        src={img}
        alt="image"
        width={w}
        height={h}
        className={cn(imgClassName, 'mb-[1.25vw] w-full')}
      />

      <h5>{title}</h5>
      <p className={cn('--grotesk-font leading-[140%]', grotesk.className)}>{text}</p>
    </article>
  );
};

export default WorkCard;
