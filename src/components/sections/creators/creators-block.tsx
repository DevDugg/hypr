"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { CreatorsCard } from "./creators-card";
import CustomButton from "@/components/shared/custom-button";
import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";
import { Link } from "next-view-transitions";

interface CreatorsBlockProps {
  creators: NonNullable<HOME_PAGE_QUERYResult[number]["creators"]>["items"];
}

const CreatorsBlock = ({ creators }: CreatorsBlockProps) => {
  return (
    creators &&
    creators.length > 0 && (
      <>
        <div className="mt-[3.33vw] hidden sm:flex gap-[2.56vw] sm:gap-[0.5vw]">
          {creators.map((item, i) => (
            // <Reveal key={i} animateOnView delay={i * 0.2} duration={1}>
            <CreatorsCard {...item} key={i} />
            // </Reveal>
          ))}
        </div>

        <Carousel opts={{ skipSnaps: true, breakpoints: {} }}>
          <CarouselContent>
            {creators.map((item, i) => (
              <CarouselItem key={i} className="hidden basis-[1/2] max-sm:block">
                <CreatorsCard {...item} key={i} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <CustomButton fullWidth className="mt-[2.08vw]">
          <Link href={"/creators"} className="uppercase">
            More creators
          </Link>
        </CustomButton>
      </>
    )
  );
};

export default CreatorsBlock;
