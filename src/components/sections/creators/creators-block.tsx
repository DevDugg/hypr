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
      <Swiper modules={[FreeMode]} freeMode spaceBetween={10} slidesPerView={1.8} className="mt-8">
        {creatorsData.map((item, i) => (
          <SwiperSlide key={i}>
            <CreatorsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className={cn(grotesk.className, 'w-full mt-8')}>See all creators</Button>
    </>
  );
};

export default CreatorsBlock;
