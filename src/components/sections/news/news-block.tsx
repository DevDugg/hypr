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
      spaceBetween={'21.87vw'}
      slidesPerView={2.5}
      breakpoints={{
        768: {
          slidesPerView: 2.5,
          slidesPerGroup: 2,
        },
      }}
      className="mt-[4vw]">
      {newsData.map((item, i) => (
        <SwiperSlide className="" key={i}>
          <NewsCard className="" {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default NewsBlock;
