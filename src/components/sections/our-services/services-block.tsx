'use client';

import { servicesData } from '@/database/services.data';
import { ServiceCard } from './service-card';
import { useRef, useState } from 'react';
import { useScroll } from 'framer-motion';

const ServicesBlock = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const element = useRef(null);

  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['end end', 'start start'],
  });

  return (
    <div className="flex flex-col gap-[1.25vw] mt-[1.25vw]" ref={element}>
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
