import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Container from "@/components/layout/container";
import { NewsCard } from "@/components/sections/news/news-card";
import React from "react";
import SectionTitle from "@/components/titles/section-title";
import { getNewsData } from "@/sanity/schemas/news";

const DynamicArticles = async () => {
  const { news } = await getNewsData(1, 3);
  return (
    news && (
      <section>
        <Container className="text-WHITE">
          <SectionTitle className="mb-[8.1vw] sm:mb-[3.33vw]">Next articles/</SectionTitle>

          <div className="hidden sm:flex items-center gap-[4.05vw] sm:gap-[0.83vw]">
            {news.map((item, i) => (
              <NewsCard key={i} {...item} w={590} h={640} className="w-1/3" imgClassName="sm:h-[33.33vw] w-full" />
            ))}
          </div>

          <Carousel className="block sm:hidden" opts={{ skipSnaps: true }}>
            <CarouselContent className="">
              {news.map((item, i) => (
                <CarouselItem className="basis-[61vw] mr-[4.05vw]" key={i}>
                  <NewsCard {...item} w={393} h={472} className="w-[61.5vw]" imgClassName="h-[73.8vw] w-full" />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Container>
      </section>
    )
  );
};

export default DynamicArticles;
