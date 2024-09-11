"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Container from "@/components/layout/container";
import { Home_page } from "../../../../sanity.types";
import { NewsCard } from "./news-card";

interface NewsBlockProps {
  news: NonNullable<Home_page["latest_news"]>["items"];
}

const NewsBlock = ({ news }: NewsBlockProps) => {
  return (
    <Container className="text-WHITE cursor-grab">
      {news && (
        <Carousel
          opts={{
            align: "start",
            skipSnaps: true,
            duration: 500,
          }}
        >
          <CarouselContent>
            {news.map((item, i) => {
              console.log(item);
              return (
                <CarouselItem key={i} className="pl-[2.56vw] sm:pl-[0.52vw] basis-[4.5]">
                  {/* <Reveal animateOnView delay={i * 0.1} duration={1}> */}
                  {/* @ts-ignore */}
                  <NewsCard
                    key={i}
                    w={800}
                    h={960}
                    {...item}
                    className="w-[61.53vw] sm:w-[20.83vw] h-auto"
                    imgClassName="h-[73.84vw] sm:h-[25vw] w-auto"
                  />
                  {/* </Reveal> */}
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      )}
    </Container>
  );
};

export default NewsBlock;
