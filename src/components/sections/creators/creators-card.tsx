import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';

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

      <div className="mt-3 mb-2 size24">{title}</div>
      <p className={cn('leading-[140%] text-[0.8vw] mb-[0.4vw]', grotesk.className)}>{nickname}</p>

      <div className={cn('flex flex-col gap-[0.2vw] leading-[140%]', grotesk.className)}>
        {socials.map((item, i) => (
          <div key={i} className="">
            {item.social}
          </div>
        ))}
      </div>
    </div>
  );
};
