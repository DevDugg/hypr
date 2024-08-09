'use client';

import { ReactNode, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

export default function Paragraph({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start 0.9', 'start 0.2'],
  });

  const words = value.split('');

  return (
    <p className="text-[20px]" ref={element}>
      {words.map((item, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word range={[start, end]} progress={scrollYProgress} key={i}>
            {item}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  range,
  progress,
}: {
  children: ReactNode;
  range: number[];
  progress: any;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);

  return (
    <motion.span style={{ opacity }} className="about-text first:ml-[40%] mr-[0.5px]">
      {children}
    </motion.span>
  );
};
