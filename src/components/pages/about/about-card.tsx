import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

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
        "p-[2.08vw] w-[59.45vw] sm:w-[28.12vw] h-fit font-bold rounded-[0.41vw] backdrop-blur-[40px] bg-[#F6F4E8]/70 shadow-[0_0_40px_0_rgba(0,0,0,0.25)] overflow-hidden",
        grotesk.className,
      )}
    >
      <div className="flex sm:flex-row flex-col-reverse justify-between items-start sm:items-center mb-[1.25vw]">
        <h5 className="sm:text-[2.08vw] text-[18px] leading-none">{title}</h5>
        <span className="text-sm sm:text-[1.25vw]">({num})</span>
      </div>

      <p className="text-BLACK font-normal leading-[140%] text-[1.04vw] mb-[2.08vw]">{text}</p>

      <div className="w-[23,95vw] h-[20,83vw]">
        <Image src={img} width={920} height={800} className="size-full object-cover" alt="" />
      </div>
    </article>
  );
};

export default AboutCard;
