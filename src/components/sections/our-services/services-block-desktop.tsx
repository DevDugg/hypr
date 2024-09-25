"use client";

import { MotionConfig, motion } from "framer-motion";

import { Home_page } from "../../../../sanity.types";
import Image from "next/image";
import Reveal from "@/components/animations/reveal";
import Scene from "@/components/3d/scene";
import { ServiceCardDesktop } from "./service-card-desktop";
import { defaultTransition } from "@/config/transitions";
import { servicesData } from "@/database/services.data";
import { urlFor } from "@/sanity/lib/image";
import { useMousePosition } from "@/hooks/use-mouse-position";
import { useState } from "react";

interface ServicesBlockDesktopProps {
  items: NonNullable<NonNullable<Home_page["services"]>["items"]>;
}

const ServicesBlockDesktop = ({ items }: ServicesBlockDesktopProps) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);
  const { box, handleMouseMove, smoothMousePosition } = useMousePosition({
    offsetX: 400,
  });

  const images = items.map((item) => item.image);

  return (
    <MotionConfig transition={{ ...defaultTransition }}>
      {/* <Scene activeMenu={activeItem} images={images} /> */}
      <div
        className="flex flex-col gap-[4.05vw] sm:gap-[2.08vw] pt-[0.416vw] sm:pt-[1.66vw] relative w-full cursor-default"
        ref={box}
        onMouseMove={(e) => handleMouseMove(e)}
        onMouseLeave={() => setActiveItem(null)}
      >
        {items.map((item, i) => {
          return (
            <Reveal
              key={i}
              animateOnView
              // duration={0.3}
              threshold={0.4}
            >
              <div className="w-full" onMouseOver={() => setActiveItem(i)}>
                <ServiceCardDesktop
                  i={i}
                  activeItem={activeItem}
                  name={item.name!}
                  image={item.image}
                />
              </div>
            </Reveal>
          );
        })}
        <motion.div
          className="absolute z-10 h-[20.83vw] w-[16.6vw] overflow-hidden pointer-events-none grayscale max-md:hidden"
          style={{
            left: smoothMousePosition.x,
            top: smoothMousePosition.y,
          }}
          initial={{ height: 0 }}
          animate={activeItem !== null ? { height: "20.83vw" } : {}}
        >
          <motion.div
            className="flex flex-col"
            initial={{
              y: `${-(((activeItem || 0) / servicesData.length) * 100)}%`,
            }}
            animate={{
              y: `${-(((activeItem || 0) / servicesData.length) * 100)}%`,
            }}
          >
            {images.map(
              (item, i) =>
                item && (
                  <div
                    key={i}
                    className="overflow-hidden h-[20.83vw] w-[16.6vw]"
                  >
                    <Image
                      src={urlFor(item).size(768, 960).url()}
                      width={768}
                      height={960}
                      alt="service image"
                    />
                  </div>
                )
            )}
          </motion.div>
        </motion.div>
        <motion.div
          className="absolute z-20 h-[20.83vw] w-[16.6vw] overflow-hidden pointer-events-none left-full max-md:hidden"
          style={{
            x: 30,
            y: 30,
            left: smoothMousePosition.x,
            top: smoothMousePosition.y,
          }}
          initial={{ height: 0 }}
          animate={activeItem !== null ? { height: "20.83vw" } : {}}
        >
          <motion.div
            className="flex flex-col"
            initial={{
              y: `${-(((activeItem || 0) / servicesData.length) * 100)}%`,
            }}
            animate={{
              y: `${-(((activeItem || 0) / servicesData.length) * 100)}%`,
            }}
          >
            {images.map(
              (item, i) =>
                item && (
                  <div
                    key={i}
                    className="overflow-hidden h-[20.83vw] w-[16.6vw]"
                  >
                    <Image
                      className="object-cover"
                      src={urlFor(item).size(768, 960).url()}
                      width={768}
                      height={960}
                      alt="service image"
                    />
                  </div>
                )
            )}
          </motion.div>
        </motion.div>
      </div>
    </MotionConfig>
  );
};

export default ServicesBlockDesktop;
