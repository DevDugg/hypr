'use client';

import { servicesData } from '@/database/services.data';
import { ServiceCard } from './service-card';
import { useTransform, useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

const ServicesBlock = () => {
  const { scrollY } = useViewportScroll();

  const height = useTransform(scrollY, [300, 600, 900], [0, 100, 0]);

  const [activeIndex, setActiveIndex] = useState<number>();

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      servicesData.forEach((_, index) => {
        const element = document.getElementById(`element-${index}`);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementCenter = rect.top + rect.height / 2;
          if (
            elementCenter >= viewportHeight / 2 - 50 &&
            elementCenter <= viewportHeight / 2 + 50
          ) {
            setActiveIndex(index);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [servicesData]);

  return (
    <div className="flex flex-col gap-4 mt-2">
      {servicesData.map((item, i) => (
        <ServiceCard i={i} active={activeIndex === i} key={i} {...item} />
      ))}
    </div>
  );
};

export default ServicesBlock;
