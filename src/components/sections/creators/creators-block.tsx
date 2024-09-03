"use client";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

import { Button } from "@/components/ui/button";
import { CreatorsCard } from "./creators-card";
import CustomButton from "@/components/shared/custom-button";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { creatorsData } from "@/database/creators.data";
import { grotesk } from "@/lib/fonts";

const CreatorsBlock = () => {
  return (
    <>
      <div className="mt-[3.33vw] hidden sm:flex gap-[2.56vw] sm:gap-[0.5vw]">
        {creatorsData.map((item, i) => (
          <CreatorsCard {...item} key={i} />
        ))}
      </div>

      <Carousel className="sm:hidden">
        <CarouselContent>
          {creatorsData.map((item, i) => (
            <CarouselItem key={i} className="basis-[1/2]">
              <CreatorsCard {...item} key={i} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <Link href={"/creators"}>
        <CustomButton className={cn(grotesk.className, "w-full mt-[8.1vw] sm:mt-[2.08vw]")}>
          See all creators
        </CustomButton>
      </Link>
    </>
  );
};

export default CreatorsBlock;
