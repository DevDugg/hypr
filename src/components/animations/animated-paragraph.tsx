"use client";

import { Variants, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { defaultTransition } from "@/config/transitions";
import { useInView } from "react-intersection-observer";

interface AnimatedParagraphProps {
  className?: string;
  children: string;
  delay?: number;
  type?: "default" | "opacity";
}

const defaultVariants: Variants = {
  hiddenWord: { rotateX: 90, opacity: 0 },
  visibleWord: { rotateX: 0, opacity: 1 },
};
const opacityVariants: Variants = {
  hiddenWord: { opacity: 0 },
  visibleWord: { opacity: 1 },
};

const AnimatedParagraph = ({
  children,
  className,
  delay = 0,
  type = "default",
}: AnimatedParagraphProps) => {
  const words = children.split(" ");

  const [ref, inView] = useInView({
    threshold: 0.2,
    fallbackInView: true,
    initialInView: false,
    triggerOnce: true,
  });

  return (
    <motion.p
      ref={ref}
      className={cn(
        "animated-paragraph",
        "relative overflow-hidden",
        className
      )}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block overflow-hidden"
          variants={type === "default" ? defaultVariants : opacityVariants}
          initial="hiddenWord"
          animate={inView ? "visibleWord" : "hiddenWord"}
          transition={{
            ...defaultTransition,
            delay: delay + 0.1 * i,
            duration: 0.7,
          }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </motion.p>
  );
};

export default AnimatedParagraph;
