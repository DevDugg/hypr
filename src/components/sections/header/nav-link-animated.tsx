"use client";

import { MotionConfig, motion } from "framer-motion";

import Link from "next/link";
import { useState } from "react";

interface NavLinkAnimatedProps {
  path: string;
  view: string;
  className?: string;
}

const NavLinkAnimated = ({ path, view, className }: NavLinkAnimatedProps) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <MotionConfig
      transition={{
        duration: "0.4",
      }}
    >
      <Link
        href={path}
        className="nav-link-animated h-fit relative pointer"
        onMouseOver={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={(e) => setHovered(true)}
        onBlur={() => setHovered(false)}
      >
        <div className="overflow-hidden relative">
          <motion.div
            initial={{
              y: "0%",
              rotateX: 0,
            }}
            animate={
              hovered
                ? {
                    y: "-100%",
                    rotateX: -45,
                  }
                : {}
            }
          >
            <span className={className}>{view}</span>
          </motion.div>
          <motion.div
            className="h-fit w-fit absolute top-0 left-0"
            onMouseOver={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            initial={{
              y: "100%",
              rotateX: 45,
            }}
            animate={
              hovered
                ? {
                    y: "0%",
                    rotateX: 0,
                  }
                : {}
            }
          >
            <span className={className}>{view}</span>
          </motion.div>
        </div>
        <motion.div
          className="w-full h-0.5 bg-WHITE absolute top-[150%] left-0"
          initial={{ top: "150%", opacity: 0 }}
          animate={hovered ? { top: "115%", opacity: 1 } : {}}
        ></motion.div>
      </Link>
    </MotionConfig>
  );
};
export default NavLinkAnimated;
