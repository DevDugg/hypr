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
      freeMode={true}
      spaceBetween={16}
      slidesPerView={1.5}
      className="mt-8">
      {newsData.map((item, i) => (
        <SwiperSlide key={i}>
          <NewsCard {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsBlock;
