"use client";

import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function Paragraph({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.9", "start 0.2"],
  });

  const words = value.split("");

  return (
    <p className="text-[3.33vw]" ref={element}>
      {words.map((item, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word range={[start, end]} progress={scrollYProgress} key={i} i={i}>
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
  i,
}: {
  children: ReactNode;
  range: number[];
  progress: MotionValue<number>;
  i: number;
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return i === 0 ? (
    <motion.span
      style={{ opacity }}
      className="sm:size64 mob24 ml-[32vw] mr-[0.5px]"
    >
      {children}
    </motion.span>
  ) : (
    <motion.span style={{ opacity }} className="sm:size64 mob24 mr-[0.5px]">
      {children}
    </motion.span>
  );
};
