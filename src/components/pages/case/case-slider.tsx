'use client';

import React, { useState } from 'react';
import CaseTitle from './case-title';
import Container from '@/components/layout/container';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SwiperCore from 'swiper';

import 'swiper/css';
import { colors } from '@/config/colors';

const sliderData = [
  {
    title: 'project name',
    img: '/images/case/slider/1.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/2.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/3.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/4.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/5.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/1.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/2.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/3.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/4.png',
  },
  {
    title: 'project name',
    img: '/images/case/slider/5.png',
  },
];

const CaseSlider = () => {
  const [active, setActive] = useState(0);

  const handleSlideChange = (swiper: SwiperCore) => {
    setActive(swiper.realIndex);
  };
  return (
    <section className="mb-[15.62vw]">
      <Container>
        <div className="flex justify-between">
          <CaseTitle title="similar projects" num="(07)" className="ml-[11.66vw] mb-[2.5vw]" />

          <a
            className={cn(
              'uppercase flex gap-[0.2vw] items-center text-GRAY text-[0.93vw] font-semibold',
              grotesk.className,
            )}>
            see all projects <ArrowUpRight className="size-[1vw]" />
          </a>
        </div>

        <Swiper
          modules={[Pagination]}
          slidesPerView={4.5}
          spaceBetween={'0.83vw'}
          loop
          onSlideChange={handleSlideChange}>
          {sliderData.map((item, i) => (
            <SwiperSlide key={i}>
              <div
                className={cn(
                  grotesk.className,
                  'text-WHITE uppercase flex flex-col gap-[0.83vw]',
                )}>
                <motion.div
                  initial={{ height: '24.47vw', width: '17.70vw', opacity: 0.5, marginRight: 0 }}
                  animate={
                    active + 1 === i
                      ? { height: '31.25vw', width: '22.91vw', opacity: 1, marginRight: 30 }
                      : {}
                  }
                  className="">
                  <Image
                    src={item.img}
                    alt="image"
                    width={340}
                    height={470}
                    className="w-full h-full"
                  />
                </motion.div>
                <p>{item.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default CaseSlider;
