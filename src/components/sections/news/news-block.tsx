'use client';

import { newsData } from '@/database/news.data';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import { NewsCard } from './news-card';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const NewsBlock = () => {
  return (
    <Swiper
      modules={[FreeMode]}
      // freeMode={true}
      spaceBetween={20}
      slidesPerView={1.5}
      slidesPerGroup={1}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
          slidesPerGroup: 2,
        },
      }}
      className="mt-8 xl:mt-20 flex items-center justify-between">
      {newsData.map((item, i) => (
        <SwiperSlide className="w-[400px]" key={i}>
          <NewsCard className="w-full" {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsBlock;
