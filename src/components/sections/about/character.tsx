"use client";

import { MotionValue, motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export default function Paragraph({ value }: { value: string }) {
  const element = useRef(null);
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.5", "start 0.2"],
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
  const paddingLeft = useTransform(progress, [0, 1], [0, 24]);
  return i === 0 ? (
    <motion.span style={{ opacity, paddingLeft }} className="size64 ml-[25vw] mr-[0.5px]">
      {children}
    </motion.span>
  ) : (
    <motion.span style={{ opacity }} className="size64 mr-[0.5px]">
      {children}
    </motion.span>
  );
};
