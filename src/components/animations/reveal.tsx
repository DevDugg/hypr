"use client";

import { Variants, motion } from "framer-motion";

import { PropsWithChildren } from "react";
import { colors } from "@/config/colors";

interface RevealProps extends PropsWithChildren {
  blockColor?: (typeof colors)[any];
  delay?: number;
  type?: "opacity" | "y";
}

const Reveal = ({ children, blockColor = colors.BACKGROUND, delay, type = "y" }: RevealProps) => {
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

  return (
    <div className="overflow-hidden relative">
      {children}
      <motion.div
        style={{
          background: blockColor,
        }}
        variants={variants[type]}
        className="absolute size-full left-0 top-0 z-10"
        initial={"initial"}
        animate={"animate"}
        transition={{ duration: 0.4, delay }}
      ></motion.div>
    </div>
  );
};
export default Reveal;
