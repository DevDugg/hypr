"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

import { NewsCard } from "./news-card";
import Reveal from "@/components/animations/reveal";
import { newsData } from "@/database/news.data";
import Container from "@/components/layout/container";

const NewsBlock = () => {
  return (
    <Container className="text-WHITE cursor-grab">
      <Carousel
        opts={{
          // loop: true,
          align: "start",
          skipSnaps: true,
          duration: 500,
        }}
      >
        <CarouselContent className="">
          {newsData.map((item, i) => (
            <CarouselItem
              key={i}
              className="pl-[2.56vw] sm:pl-[0.52vw] basis-[4.5]"
            >
              <Reveal animateOnView delay={i * 0.1} duration={1}>
                <NewsCard
                  w={800}
                  h={960}
                  {...item}
                  className="w-[61.53vw] sm:w-[20.83vw] h-auto"
                  imgClassName="h-[73.84vw] sm:h-[25vw] w-auto"
                />
              </Reveal>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  );
};

export default NewsBlock;
