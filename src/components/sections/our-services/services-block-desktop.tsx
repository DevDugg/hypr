"use client";

import { Coordinates, getRelativeCoordinates } from "@/lib/getRelativeCoordinates";
import { useRef, useState } from "react";

import { ServiceCardDesktop } from "./service-card-desktop";
import { servicesData } from "@/database/services.data";

const ServicesBlockDesktop = () => {
  const [activeItem, setActiveItem] = useState<number>(0);
  const [mousePosition, setMousePosition] = useState<Coordinates>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    centerX: 0,
    centerY: 0,
  });
  const box = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: MouseEvent) => {
    if (!box.current) return console.log("adasdas");
    setMousePosition(getRelativeCoordinates(e, box.current));
  };
  return (
    <div
      className="flex flex-col gap-[0.83vw] xl:gap-[2.08vw] mt-[0.416vw] xl:mt-[1.25vw]"
      ref={box}
      onMouseMove={(e) => handleMouseMove}
    >
      {servicesData.map((item, i) => {
        return (
          <div onMouseOver={() => setActiveItem(i)}>
            <ServiceCardDesktop i={i} key={i} position={mousePosition} active={activeItem === i} {...item} />
          </div>
        );
      })}
    </div>
  );
};

export default ServicesBlockDesktop;
