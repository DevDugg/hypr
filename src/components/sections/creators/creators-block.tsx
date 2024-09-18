"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { CreatorsCard } from "./creators-card";
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

        <Carousel className="sm:hidden" opts={{ skipSnaps: true }}>
          <CarouselContent>
            {creators.map((item, i) => (
              <CarouselItem key={i} className="basis-[1/2]">
                <CreatorsCard {...item} key={i} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <Link
          // href={"/creators"}
          href={"/"}
        >
          {/* <CustomButton className="w-full mt-[8.1vw] sm:mt-[2.08vw]">See all creators</CustomButton> */}
        </Link>
      </>
    )
  );
};

export default CreatorsBlock;
