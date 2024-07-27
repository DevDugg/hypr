'use client';

import SectionLayout from '@/components/layout/section-layout';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const textElement = document.querySelector('.about-text');
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Устанавливаем порог прокрутки для изменения цвета
      const threshold = windowHeight / 2;

      console.log(scrollPosition);

      if (scrollPosition > threshold) {
        textElement?.classList.add('text-WHITE');
        textElement?.classList.remove('text-BLACK');
      } else {
        textElement?.classList.add('text-BLACK');
        textElement?.classList.remove('text-WHITE');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SectionLayout id="about" name="(about)">
      <p className="about-text transition-colors text-WHITE duration-200">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis minima hic excepturi
        consequuntur unde! Maiores, obcaecati illum. Suscipit iste sit, deserunt saepe excepturi
        minus maiores labore ad optio tempore nesciunt.
      </p>
    </SectionLayout>
  );
};

export default About;
