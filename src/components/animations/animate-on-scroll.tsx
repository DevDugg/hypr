"use client";

import {
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";

import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { useAnimationContext } from "@/hooks/use-animation-context";

interface AnimatedOnScrollProps extends PropsWithChildren {
  className?: string;
  property?: string;
  duration?: number;
  delay?: number;
  scrollRange?: number[];
  propertyRange?: number[];
  scrollRef?: React.RefObject<HTMLElement>;
  type?: "cover";
}

const AnimatedOnScroll = ({
  children,
  className,
  delay,
  duration,
  property,
  propertyRange = [0, 1],
  scrollRange = [0, 1],
  scrollRef,
  type = "cover",
}: AnimatedOnScrollProps) => {
  const { screenRef } = useAnimationContext();
  const { scrollYProgress } = useScroll({
    target: (scrollRef || screenRef || undefined) as
      | React.RefObject<HTMLElement>
      | undefined,
    offset: ["start start", "end end"],
  });

  const top = useTransform(scrollYProgress, scrollRange, [100, 0]);
  const topPercent = useMotionTemplate`${top}%`;

  return (
    <motion.div
      transition={{ delay, duration }}
      className={cn("relative", className)}
    >
      {children}
      {type === "cover" && (
        <motion.div
          className="absolute top-full left-0 size-full bg-BACKGROUND"
          style={{ top: topPercent }}
        ></motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedOnScroll;
