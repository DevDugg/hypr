"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import { Button } from "@/components/ui/button";
import { CreatorsCard } from "./creators-card";
import { FreeMode } from "swiper/modules";
import { cn } from "@/lib/utils";
import { creatorsData } from "@/database/creators.data";
import { grotesk } from "@/lib/fonts";

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
        className="mt-[1.66vw]"
      >
        {creatorsData.map((item, i) => (
          <SwiperSlide key={i}>
            <CreatorsCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>

      <Button className={cn(grotesk.className, "w-full mt-[1.66vw] xl:mt-[4.16vw]")}>See all creators</Button>
    </>
  );
};

export default CreatorsBlock;
