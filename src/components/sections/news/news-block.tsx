"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { HOME_PAGE_QUERYResult, Home_page } from "../../../../sanity.types";

import Container from "@/components/layout/container";
import { NewsCard } from "./news-card";

interface NewsBlockProps {
  news: NonNullable<HOME_PAGE_QUERYResult[any]["latest_news"]>["items"];
}

const NewsBlock = ({ news }: NewsBlockProps) => {
  return (
    <Container className="text-WHITE cursor-grab">
      {news && (
        <>
          <div className="mt-[3.33vw] hidden sm:flex gap-[2.56vw] sm:gap-[0.5vw]">
            {news.map((item, i) =>
              i < 4 ? (
                <NewsCard
                  key={i}
                  w={800}
                  h={960}
                  {...item}
                  className="w-[61.53vw] sm:w-full h-auto"
                  imgClassName="h-[73.84vw] sm:h-[25vw] w-full"
                />
              ) : null
            )}
          </div>
          <div className="hidden max-sm:block">
            <Carousel
              opts={{
                align: "start",
                skipSnaps: true,
                duration: 500,
              }}
            >
              <CarouselContent>
                {news.map((item, i) =>
                  i < 4 ? (
                    <CarouselItem
                      key={i}
                      className="pl-[2.56vw] sm:pl-[0.52vw] basis-[4.5]"
                    >
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
                  ) : null
                )}
              </CarouselContent>
            </Carousel>
          </div>
        </>
      )}
    </Container>
  );
};

export default NewsBlock;
