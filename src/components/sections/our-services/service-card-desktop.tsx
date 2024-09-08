"use client";

import { motion } from "framer-motion";

interface IProps {
  title: string;
  i: number;
  activeItem: number | null;
}

export const ServiceCardDesktop = ({ title, i, activeItem }: IProps) => {
  const itemState = activeItem !== null ? (activeItem === i ? { opacity: "100%" } : { opacity: "30%" }) : {};
  return (
    <motion.div
      id={`element-${i}`}
      className="relative overflow-hidden h-[3.75vw] w-full"
      initial={{ opacity: "100%" }}
      animate={itemState}
    >
      <motion.h4
        className="leading-none monument uppercase w-full text-[4.61vw] sm:size72 absolute top-0 text-center origin-bottom tracking-tight"
        initial={{ top: "100%", rotateX: 45, transformOrigin: "top" }}
        animate={activeItem === i ? { top: "0%", rotateX: 0, transformOrigin: "bottom" } : {}}
      >
        {title}
      </motion.h4>
      <motion.span
        className="leading-none monument uppercase w-full text-[4.61vw] sm:size72 absolute top-0 text-center origin-bottom tracking-tight"
        initial={{ top: "0%", rotateX: 0, transformOrigin: "bottom" }}
        animate={activeItem === i ? { top: "-100%", rotateX: 45, transformOrigin: "top" } : {}}
      >
        {title}
      </motion.span>
    </motion.div>
  );
};
