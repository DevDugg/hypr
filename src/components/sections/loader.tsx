"use client";

import { useEffect, useRef, useState } from "react";

import Reveal from "../animations/reveal";
import { cn } from "@/lib/utils";
import { defaultTransition } from "@/config/transitions";
import { motion } from "framer-motion";

const Loader = () => {
  const splitText = "HYPR".split("");
  const [isFirstLoaded, setIsFirstLoaded] = useState(
    window.sessionStorage.getItem("isFirstLoaded") === "true"
  );
  useEffect(() => {
    setTimeout(() => {
      setIsFirstLoaded(true);
      window.sessionStorage.setItem("isFirstLoaded", "true");
    }, 5000);
  }, []);
  return (
    <motion.div
      className={cn(
        "loader fixed top-0 left-0 w-dvw h-dvh bg-BACKGROUND flex items-center justify-center z-20 pointer-events-none",
        isFirstLoaded && "hidden"
      )}
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ ...defaultTransition, duration: 0.5, delay: 4 }}
    >
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 20 }}
        transition={{
          ...defaultTransition,
          delay: 2,
          duration: 2,
          damping: 0.4,
          ease: "easeIn",
        }}
      >
        <div className="text-[19.2vw] text-center text-WHITE flex">
          {splitText.map((letter, i) => (
            <Reveal
              key={i}
              delay={i * 0.1}
              // duration={0.6}
            >
              <span>{letter}</span>
            </Reveal>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
export default Loader;
