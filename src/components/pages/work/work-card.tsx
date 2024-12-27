import Image from "next/image";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface Props {
  img: string;
  title: string;
  text: string;
  w: number;
  h: number;
  imgClassName: string;
  className?: string;
  slug: string;
}

const WorkCard = ({ img, title, text, w, h, imgClassName, className, slug }: Props) => {
  return (
    <Link href={`/works/${slug}`}>
      <article className={cn("text-[1.25vw] text-WHITE", className)}>
        <Image
          src={img}
          alt={`${title} project image`}
          width={w}
          height={h}
          className={cn(imgClassName, "mb-[1.25vw] w-full")}
        />

        <h5 className="font-bold">{title}</h5>
        <p className={cn("--grotesk-font leading-[140%]", grotesk.className)}>{text}</p>
      </article>
    </Link>
  );
};

export default WorkCard;
