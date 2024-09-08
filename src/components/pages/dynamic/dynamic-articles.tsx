import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import Container from "@/components/layout/container";
import { NewsCard } from "@/components/sections/news/news-card";
import React from "react";
import SectionTitle from "@/components/titles/section-title";

const DynamicArticles = () => {
  return (
    <section>
      <Container className="text-WHITE">
        <SectionTitle className="mb-[8.1vw] sm:mb-[3.33vw]">Next articles/</SectionTitle>

        <div className="hidden sm:flex items-center gap-[4.05vw] sm:gap-[0.83vw]">
          {[...Array(3)].map((_, i) => (
            <NewsCard
              key={i}
              title={"News title"}
              img={"/images/news/1.png"}
              text={"Short description"}
              w={590}
              h={640}
              className="w-1/3"
              imgClassName="sm:h-[33.33vw] w-full"
            />
          ))}
        </div>

        <Carousel className="block sm:hidden">
          <CarouselContent className="">
            {[...Array(3)].map((_, i) => (
              <CarouselItem className="basis-[61vw] mr-[4.05vw]" key={i}>
                <NewsCard
                  title={"News title"}
                  img={"/images/news/1.png"}
                  text={"Short description"}
                  w={393}
                  h={472}
                  className="w-[61.5vw]"
                  imgClassName="h-[73.8vw] w-full"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </Container>
    </section>
  );
};

export default DynamicArticles;
