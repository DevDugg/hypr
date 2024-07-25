import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

interface IProps {
  title: string;
  img: string;
  text: string;
}

export const NewsCard = ({ title, img, text }: IProps) => {
  return (
    <div>
      <Image src={img} alt="news image" width={240} height={288} />

      <div className="mt-8 mb-2">{title}</div>
      <p className={cn('leading-[140%] text-[16px]', grotesk.className)}>{text}</p>
    </div>
  );
};
