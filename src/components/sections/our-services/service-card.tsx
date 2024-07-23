import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

interface IProps {
  title: string;
  img: string;
  active: boolean;
  i: number;
}

export const ServiceCard = ({ title, img, active, i }: IProps) => {
  return (
    <div id={`element-${i}`} className="flex flex-col items-center">
      <h4 className="text-[24px] leading-none font-bold">{title}</h4>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={active ? { height: 320, opacity: 1 } : {}}
        className="overflow-hidden">
        <Image src={img} width={256} height={320} alt="service image" />
      </motion.div>
    </div>
  );
};
