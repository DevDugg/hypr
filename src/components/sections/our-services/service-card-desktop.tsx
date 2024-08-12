"use client";

import { Coordinates } from "@/lib/getRelativeCoordinates";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface IProps {
  title: string;
  img: string;
  i: number;
  position: Coordinates;
  active: boolean;
}

export const ServiceCardDesktop = ({ title, img, i, active, position }: IProps) => {
  return (
    <div id={`element-${i}`} className="flex flex-col items-center">
      <h4 className={cn("leading-none font-bold text-[4.16vw]")}>{title}</h4>

      <motion.div
        className="absolute z-10"
        animate={{
          x: position.x,
          y: position.y,
        }}
      >
        <motion.div
          className="overflow-hidden w-[20.83vw]"
          initial={{ height: 0, opacity: 0 }}
          animate={active ? { height: "16.6vw", opacity: 1 } : {}}
        >
          <Image src={img} width={256} height={320} alt="service image" />
        </motion.div>
      </motion.div>
    </div>
  );
};
