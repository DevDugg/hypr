"use client";

import { Variants, motion } from "framer-motion";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { colors } from "@/config/colors";
import { useInView } from "react-intersection-observer";

interface RevealProps extends PropsWithChildren {
  className?: string;
  blockColor?: (typeof colors)[any];
  delay?: number;
  duration?: number;
  type?: "opacity" | "y" | "both";
  threshold?: number;
  animateOnView?: boolean; // New prop to control animation on view
}

const Reveal = ({
  children,
  blockColor = colors.BACKGROUND,
  delay,
  type = "y",
  animateOnView = false,
  duration = 0.4,
  className,
  threshold = 0.1,
}: RevealProps) => {
  const { ref, inView } = useInView({
    threshold: threshold,
    fallbackInView: true,
    initialInView: false,
    triggerOnce: true,
  });

  const yVariants: Variants = {
    initial: { y: "0%" },
    animate: { y: "101%" },
  };

  const opacityVariants: Variants = {
    initial: { opacity: 1 },
    animate: { opacity: 0 },
  };

  const bothVariants: Variants = {
    initial: { y: "0%", opacity: 1 },
    animate: { y: "101%", opacity: 0 },
  };

  const shouldAnimate = animateOnView ? inView : true;

  return (
    <div ref={animateOnView ? ref : undefined} className={cn("overflow-hidden relative", className)}>
      {children}
      <motion.div
        style={{
          background: blockColor,
        }}
        variants={type === "y" ? yVariants : type === "opacity" ? opacityVariants : bothVariants}
        className="absolute size-full left-0 top-0 z-10 pointer-events-none"
        initial={"initial"}
        animate={shouldAnimate ? "animate" : "initial"}
        transition={{ duration, delay }}
      ></motion.div>
    </div>
  );
};

export default Reveal;
