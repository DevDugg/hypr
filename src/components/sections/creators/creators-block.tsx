'use client';

import { creatorsData } from '@/database/creators.data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CreatorsCard } from './creators-card';

import 'swiper/css';
import { FreeMode } from 'swiper/modules';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';

const CreatorsBlock = () => {
  return (
    <>
      <Swiper
        modules={[FreeMode]}
        freeMode
        spaceBetween={10}
        slidesPerView={1.8}
        breakpoints={{
          640: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        className="mt-[4vw]">
        {creatorsData.map((item, i) => (
          <SwiperSlide key={i}>
            <CreatorsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className={cn(grotesk.className, 'w-full mt-[4vw]')}>See all creators</Button>
    </>
  );
};

export default CreatorsBlock;
