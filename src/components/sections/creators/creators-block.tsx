"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { CreatorsCard } from "./creators-card";
import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";

interface CreatorsBlockProps {
  creators: NonNullable<HOME_PAGE_QUERYResult[number]["creators"]>["items"];
}

const CreatorsBlock = ({ creators }: CreatorsBlockProps) => {
  return (
    creators &&
    creators.length > 0 && (
      <>
        {/* <div className="mt-[3.33vw] hidden sm:flex gap-[2.56vw] sm:gap-[0.5vw]">
          {creators.map((item, i) => (
            // <Reveal key={i} animateOnView delay={i * 0.2} duration={1}>
            <CreatorsCard {...item} key={i} />
            // </Reveal>
          ))}
        </div> */}

        <Carousel opts={{ skipSnaps: true, breakpoints: {} }}>
          <CarouselContent>
            {creators.map((item, i) => (
              <CarouselItem key={i} className="basis-[1/4] max-sm:basis-[1/2]">
                <CreatorsCard {...item} key={i} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </>
    )
  );
};

export default CreatorsBlock;
