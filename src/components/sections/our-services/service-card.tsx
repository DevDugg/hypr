'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from 'usehooks-ts';
interface IProps {
  title: string;
  img: string;
  active: boolean;
  i: number;
  setActiveIndex: (num: number) => void;
}

export const ServiceCard = ({ title, img, active, i, setActiveIndex }: IProps) => {
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <div id={`element-${i}`} className="flex flex-col items-center">
      <h4 className={cn('leading-none font-bold text-[calc(2.1vw+2.1vh)]')}>{title}</h4>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={active ? { height: 320, opacity: 1 } : {}}
        className="overflow-hidden">
        <Image src={img} width={256} height={320} alt="service image" />
      </motion.div>
    </div>
  );
};
