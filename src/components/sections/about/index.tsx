'use client';

import SectionLayout from '@/components/layout/section-layout';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollText = document.querySelector('.scroll-text');
      if (scrollText instanceof HTMLElement) {
        const scrollPosition = window.scrollY;
        const windowHeight = window.innerHeight;
        const documentHeight = document.body.scrollHeight;

        // Calculate scroll percentage
        const scrollPercentage = scrollPosition / (documentHeight - windowHeight);

        // Update the background position based on scroll percentage
        scrollText.style.backgroundPosition = `${scrollPercentage * 100}% 0`;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <SectionLayout name="(about)">
      <p className="about-text bg-clip-text TEXT text-transparent bg-gradient-to-r from-GRAY to-white bg-[length:200%_100%] transition-all duration-200">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis minima hic excepturi
        consequuntur unde! Maiores, obcaecati illum. Suscipit iste sit, deserunt saepe excepturi
        minus maiores labore ad optio tempore nesciunt.
      </p>
    </SectionLayout>
  );
};

export default About;
