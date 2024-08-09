'use client';

import Image from 'next/image';
import { motion, MotionValue, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useEffect } from 'react';
interface IProps {
  title: string;
  img: string;
  active: boolean;
  i: number;
  setActiveIndex: (num: number) => void;
  progress: MotionValue<number>;
  range: number[];
}

export const ServiceCard = ({ title, img, active, i, setActiveIndex, progress, range }: IProps) => {
  useMotionValueEvent(progress, 'change', (value) => {
    if (!(value >= range[0] && value <= range[1])) return;

    return setActiveIndex(i);
  });
  return (
    <div id={`element-${i}`} className="flex flex-col items-center">
      <h4 className={cn('leading-none font-bold text-[calc(2.1vw+2.1vh)]')}>{title}</h4>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          active
            ? {
                height: 320,
                opacity: 1,
              }
            : {}
        }
        className="overflow-hidden">
        <Image src={img} width={256} height={320} alt="service image" />
      </motion.div>
    </div>
  );
};
