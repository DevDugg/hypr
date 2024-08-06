'use client';

import { servicesData } from '@/database/services.data';
import { ServiceCard } from './service-card';
import { useEffect, useState } from 'react';

const ServicesBlock = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

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
    <div className="flex flex-col gap-4 xl:gap-6 mt-2 xl:mt-6">
      {servicesData.map((item, i) => (
        <ServiceCard i={i} active={activeIndex === i} key={i} {...item} />
      ))}
    </div>
  );
};

export default ServicesBlock;
