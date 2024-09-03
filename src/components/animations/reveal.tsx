"use client";

import { Variants, motion } from "framer-motion";

import { PropsWithChildren } from "react";
import { colors } from "@/config/colors";
import { useInView } from "react-intersection-observer";

interface RevealProps extends PropsWithChildren {
  blockColor?: (typeof colors)[any];
  delay?: number;
  duration?: number;
  type?: "opacity" | "y" | "both";
  animateOnView?: boolean; // New prop to control animation on view
}

const Reveal = ({
  children,
  blockColor = colors.BACKGROUND,
  delay,
  type = "y",
  animateOnView = false,
  duration = 0.4,
}: RevealProps) => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    fallbackInView: true,
    initialInView: false,
    triggerOnce: true,
  });

  const variants: Record<string, Variants> = {
    opacity: {
      initial: { opacity: 1 },
      animate: { opacity: 0 },
    },
    y: {
      initial: { y: "0%" },
      animate: { y: "101%" },
    },
  };

  const shouldAnimate = animateOnView ? inView : true;

  return (
    <div ref={animateOnView ? ref : undefined} className="overflow-hidden relative">
      {children}
      <motion.div
        style={{
          background: blockColor,
        }}
        variants={variants[type]}
        className="absolute size-full left-0 top-0 z-10"
        initial={"initial"}
        animate={shouldAnimate ? "animate" : "initial"}
        transition={{ duration, delay }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
