import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface IProps {
  title: string;
  img: string;
  text: string;
  className?: string;
}

export const NewsCard = ({ title, img, text, className }: IProps) => {
  return (
    <div className={className}>
      <Image src={img} alt="news image" width={400} height={480} />

      <div className="mt-[1.5vw] mb-[0.4vw] size24">{title}</div>
      <p className={cn('leading-[140%] size18', grotesk.className)}>{text}</p>
    </div>
  );
};
