"use client";

import { useRef, useState } from "react";

import { ServiceCard } from "./service-card";
import { servicesData } from "@/database/services.data";
import { useScroll } from "framer-motion";

const ServicesBlock = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    smooth: 1,
    axis: "y",
    // offset: [],
  });

  return (
    <div className="flex flex-col gap-4 xl:gap-10 mt-2 xl:mt-6" ref={element}>
      {servicesData.map((item, i) => {
        const start = i / servicesData.length;
        const end = start + 1 / servicesData.length;
        return (
          <ServiceCard
            i={i}
            range={[start, end]}
            setActiveIndex={setActiveIndex}
            progress={scrollYProgress}
            active={activeIndex === i}
            key={i}
            {...item}
          />
        );
      })}
    </div>
  );
};

export default ServicesBlock;
