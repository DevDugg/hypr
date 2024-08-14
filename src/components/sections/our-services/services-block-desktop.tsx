"use client";

import Image from "next/image";
import { ServiceCardDesktop } from "./service-card-desktop";
import { motion } from "framer-motion";
import { servicesData } from "@/database/services.data";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useState } from "react";

const ServicesBlockDesktop = () => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { mousePosition, box, handleMouseMove, smoothMousePosition } = useMousePosition({ offsetX: 100 });

  return (
    <motion.div
      className="flex flex-col gap-[0.83vw] xl:gap-[2.08vw] pt-[0.416vw] xl:pt-[1.25vw] relative w-full cursor-default"
      ref={box}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseLeave={() => setActiveItem(null)}
    >
      {servicesData.map((item, i) => {
        return (
          <div key={i} className="w-full" onMouseOver={() => setActiveItem(i)}>
            <ServiceCardDesktop i={i} position={mousePosition} active={activeItem === i} {...item} />
          </div>
        );
      })}
      <motion.div
        className="absolute z-10 w-[20.83vw] h-[16.6vw] overflow-hidden pointer-events-none grayscale"
        style={{
          left: smoothMousePosition.x,
          top: smoothMousePosition.y,
        }}
        initial={{ height: 0 }}
        animate={activeItem !== null ? { height: "16.6vw" } : {}}
      >
        <motion.div
          className="flex flex-col"
          initial={{ y: `${-(((activeItem || 0) / servicesData.length) * 100)}%` }}
          animate={{ y: `${-(((activeItem || 0) / servicesData.length) * 100)}%` }}
        >
          {servicesData.map((item, i) => (
            <div key={i} className="overflow-hidden w-[20.83vw] h-[16.6vw]">
              <Image src={item.img} width={256} height={320} alt="service image" />
            </div>
          ))}
        </motion.div>
      </motion.div>
      <motion.div
        className="absolute z-20 w-[20.83vw] h-[16.6vw] overflow-hidden pointer-events-none left-full"
        style={{
          x: 30,
          y: 30,
          left: smoothMousePosition.x,
          top: smoothMousePosition.y,
        }}
        initial={{ height: 0 }}
        animate={activeItem !== null ? { height: "16.6vw" } : {}}
      >
        <motion.div
          className="flex flex-col"
          initial={{ y: `${-(((activeItem || 0) / servicesData.length) * 100)}%` }}
          animate={{ y: `${-(((activeItem || 0) / servicesData.length) * 100)}%` }}
        >
          {servicesData.map((item, i) => (
            <div key={i} className="overflow-hidden w-[20.83vw] h-[16.6vw]">
              <Image src={item.img} width={256} height={320} alt="service image" />
            </div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServicesBlockDesktop;
