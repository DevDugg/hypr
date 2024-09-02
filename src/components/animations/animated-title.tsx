"use client";

import { Variants, motion } from "framer-motion";

import { cn } from "@/lib/utils";
import { defaultTransition } from "@/config/transitions";
import { useInView } from "react-intersection-observer";

interface AnimatedTitleProps {
  className?: string;
  children: string;
  element?: `h1` | `h2` | `h3` | `h4` | `h5` | `h6`;
}

const variants: Variants = {
  hiddenBlock: { y: "0%" },
  visibleBlock: { y: "100%" },
  hiddenChar: { y: "100%" },
  visibleChar: { y: "0%" },
};

const AnimatedTitle = ({ children, className, element = "h3" }: AnimatedTitleProps) => {
  const characters = children.split("");

  const [ref, inView] = useInView({
    threshold: 0.2,
    fallbackInView: true,
    initialInView: false,
    triggerOnce: true,
  });
  switch (element) {
    case "h1":
      return (
        <motion.h1
          ref={ref}
          className={cn(className, "size48 text-WHITE leading-none uppercase monument h-min overflow-hidden relative")}
        >
          {characters.map((char, i) => (
            <AnimatedCharacter key={i} inView={inView} delay={0.05 * i}>
              {char}
            </AnimatedCharacter>
          ))}
          <motion.div
            className="bg-BACKGROUND absolute top-0 left-0 size-full"
            variants={variants}
            initial="hiddenBlock"
            animate={inView ? "visibleBlock" : "hiddenBlock"}
            transition={defaultTransition}
          ></motion.div>
        </motion.h1>
      );
    case "h2":
      return (
        <motion.h2
          ref={ref}
          className={cn(className, "size48 text-WHITE leading-none uppercase monument h-min overflow-hidden relative")}
        >
          {characters.map((char, i) => (
            <AnimatedCharacter key={i} inView={inView} delay={0.05 * i}>
              {char}
            </AnimatedCharacter>
          ))}
          <motion.div
            className="bg-BACKGROUND absolute top-0 left-0 size-full"
            variants={variants}
            initial="hiddenBlock"
            animate={inView ? "visibleBlock" : "hiddenBlock"}
            transition={defaultTransition}
          ></motion.div>
        </motion.h2>
      );
    case "h3":
      return (
        <motion.h3
          ref={ref}
          className={cn(className, "size48 text-WHITE leading-none uppercase monument h-min overflow-hidden relative")}
        >
          {characters.map((char, i) => (
            <AnimatedCharacter key={i} inView={inView} delay={0.05 * i}>
              {char}
            </AnimatedCharacter>
          ))}
          <motion.div
            className="bg-BACKGROUND absolute top-0 left-0 size-full"
            variants={variants}
            initial="hiddenBlock"
            animate={inView ? "visibleBlock" : "hiddenBlock"}
            transition={defaultTransition}
          ></motion.div>
        </motion.h3>
      );
    case "h4":
      return (
        <motion.h4
          ref={ref}
          className={cn(className, "size48 text-WHITE leading-none uppercase monument h-min overflow-hidden relative")}
        >
          {characters.map((char, i) => (
            <AnimatedCharacter key={i} inView={inView} delay={0.05 * i}>
              {char}
            </AnimatedCharacter>
          ))}
          <motion.div
            className="bg-BACKGROUND absolute top-0 left-0 size-full"
            variants={variants}
            initial="hiddenBlock"
            animate={inView ? "visibleBlock" : "hiddenBlock"}
            transition={defaultTransition}
          ></motion.div>
        </motion.h4>
      );
    case "h5":
      return (
        <motion.h5
          ref={ref}
          className={cn(className, "size48 text-WHITE leading-none uppercase monument h-min overflow-hidden relative")}
        >
          {characters.map((char, i) => (
            <AnimatedCharacter key={i} inView={inView} delay={0.05 * i}>
              {char}
            </AnimatedCharacter>
          ))}
          <motion.div
            className="bg-BACKGROUND absolute top-0 left-0 size-full"
            variants={variants}
            initial="hiddenBlock"
            animate={inView ? "visibleBlock" : "hiddenBlock"}
            transition={defaultTransition}
          ></motion.div>
        </motion.h5>
      );
    case "h6":
      return (
        <motion.h6
          ref={ref}
          className={cn(className, "size48 text-WHITE leading-none uppercase monument h-min overflow-hidden relative")}
        >
          {characters.map((char, i) => (
            <AnimatedCharacter key={i} inView={inView} delay={0.05 * i}>
              {char}
            </AnimatedCharacter>
          ))}
          <motion.div
            className="bg-BACKGROUND absolute top-0 left-0 size-full"
            variants={variants}
            initial="hiddenBlock"
            animate={inView ? "visibleBlock" : "hiddenBlock"}
            transition={defaultTransition}
          ></motion.div>
        </motion.h6>
      );
    default:
      return (
        <motion.h3
          ref={ref}
          className={cn(className, "size48 text-WHITE leading-none uppercase monument h-min overflow-hidden relative")}
        >
          {characters.map((char, i) => (
            <AnimatedCharacter key={i} inView={inView} delay={0.05 * i}>
              {char}
            </AnimatedCharacter>
          ))}
          <motion.div
            className="bg-BACKGROUND absolute top-0 left-0 size-full"
            variants={variants}
            initial="hiddenBlock"
            animate={inView ? "visibleBlock" : "hiddenBlock"}
            transition={defaultTransition}
          ></motion.div>
        </motion.h3>
      );
  }
};

interface AnimatedCharacterProps {
  children: string;
  inView: boolean;
  delay: number;
}

const AnimatedCharacter = ({ children, inView, delay }: AnimatedCharacterProps) => {
  return (
    <motion.span
      className="inline-block overflow-hidden h-full"
      variants={variants}
      initial="hiddenChar"
      animate={inView ? "visibleChar" : "hiddenChar"}
      transition={{ ...defaultTransition, delay, duration: 0.7 }}
    >
      {children === " " ? "\u00A0" : children}
    </motion.span>
  );
};

export default AnimatedTitle;