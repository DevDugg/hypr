"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { NewsCard } from "./news-card";
import { newsData } from "@/database/news.data";

const NewsBlock = () => {
  return (
    <div className="mt-[4vw] text-WHITE cursor-grab">
      <Carousel
        opts={{
          // loop: true,
          align: "start",
          skipSnaps: true,
          duration: 500,
        }}
      >
        <CarouselContent className="ml-[4px] md:-ml[22px] lg:ml-[50px]">
          {newsData.map((item, i) => (
            <CarouselItem key={i} className="pl-[10px] basis-[4.5]">
              <NewsCard {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewsBlock;
