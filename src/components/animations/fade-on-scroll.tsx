"use client";

import { PropsWithChildren, useRef } from "react";
import { useScroll, useTransform } from "framer-motion";

import { motion } from "framer-motion";

interface Props extends PropsWithChildren {
  className?: string;
  range?: number[];
  yRange?: number[];
  opacityRange?: number[];
}

const FadeOnScroll = ({
  children,
  className,
  range = [0, 1],
  yRange = [0, 0],
  opacityRange = [0, 0],
}: Props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    smooth: 0.5,
  });

  const y = useTransform(scrollYProgress, range, yRange);
  const opacity = useTransform(scrollYProgress, range, opacityRange);
  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y, opacity }}>{children}</motion.div>
    </div>
  );
};

export default FadeOnScroll;
