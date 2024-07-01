"use client";

import { motion, useScroll } from "framer-motion";

import { ReactNode } from "react";
import { colors } from "@/config/colors";
import { interactions } from "@/config/interactions";

interface IProps {
  children: ReactNode;
}

const ScrollProgress = ({ children }: IProps) => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          display: interactions.useProgressBar ? "block" : "none",
          scaleX: scrollYProgress,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          background: colors["PRIMARY"],
          transformOrigin: "0%",
          zIndex: 100,
          height: 3,
          mixBlendMode: "exclusion",
        }}
      ></motion.div>
      {children}
    </>
  );
};

export default ScrollProgress;
