import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  title?: string;
  num?: string;
  text?: string;
  img: any;
  rotate?: number;
}

const AboutCard = ({ title, num, text, img, rotate }: Props) => {
  return (
    <article
      style={{ transform: `rotate(${rotate}deg)` }}
      className={cn(
        "p-[2.08vw] mb-[1.25vw] w-[59.45vw] sm:w-[28.12vw] font-bold rounded-[0.41vw] backdrop-blur-[40px] bg-[#F6F4E8]/70 shadow-[0_0_40px_0_rgba(0,0,0,0.25)] overflow-hidden",
        grotesk.className,
      )}
    >
      <div className="flex sm:flex-row flex-col-reverse justify-between items-start sm:items-center mb-[1.25vw]">
        <h5 className="sm:size40 text-lg">{title}</h5>
        <span className="text-sm sm:text-[1.25vw]">({num})</span>
      </div>

      <p className="text-GRAY leading-[140%] text-sm mb-[2.08vw]">{text}</p>

      <Image
        src={urlFor(img).size(920, 800).url()}
        width={920}
        height={800}
        className="w-full opacity-70 h-auto"
        alt="image"
      />
    </article>
  );
};

export default AboutCard;
