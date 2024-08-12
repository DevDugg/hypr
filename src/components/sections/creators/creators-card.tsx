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
    <div>
      <Image src={img} alt="news image" width={240} height={288} />

      <div className="mt-[0.625vw] mb-[0.416vw] text-[0.9375vw]">{title}</div>
      <p className={cn("leading-[140%] text-[0.83vw] mb-[0.416vw] font-normal", grotesk.className)}>{nickname}</p>

      <div className={cn("flex flex-col gap-[0.2vw] leading-[140%]", grotesk.className)}>
        {socials.map((item, i) => (
          <div key={i}>{item.social}</div>
        ))}
      </div>
    </div>
  );
};
