"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { NewsCard } from "./news-card";
import { newsData } from "@/database/news.data";

const NewsBlock = () => {
  return (
    <div className="mt-[3.33vw] text-WHITE cursor-grab">
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
              <NewsCard
                w={400}
                h={480}
                {...item}
                className="w-[20.83vw] h-auto"
                imgClassName="h-[25vw] w-auto"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default NewsBlock;
