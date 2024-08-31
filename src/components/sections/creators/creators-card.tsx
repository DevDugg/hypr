import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface IProps {
  img: string;
  title: string;
  nickname: string;
  socials: {
    social: string;
  }[];
}

export const CreatorsCard = ({ img, title, nickname, socials }: IProps) => {
  return (
    <div className="w-[51.25vw] sm:w-[17.7vw]">
      <Image
        src={img}
        alt="news image"
        width={342}
        height={480}
        className="w-full h-[66.62vw] sm:h-[25vw]"
      />

      <div className="mt-[4.05vw] sm:mt-[1.66vw] mb-[4.05vw] sm:mb-[1.25vw] text-[4.05vw] sm:text-[0.9375vw] monument">
        {title}
      </div>
      <p
        className={cn(
          "leading-[140%] text-[4.05vw] sm:text-[0.83vw] mb-[1.02vw] sm:mb-[0.416vw] font-normal",
          grotesk.className
        )}
      >
        {nickname}
      </p>

      <div
        className={cn(
          "flex flex-col text-[4.05vw] sm:text-[0.83vw] gap-[1.02vw] sm:gap-[0.41vw] leading-[140%]",
          grotesk.className
        )}
      >
        {socials.map((item, i) => (
          <div key={i}>{item.social}</div>
        ))}
      </div>
    </div>
  );
};
