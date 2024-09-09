"use client";

import Container from "@/components/layout/container";
import CaseTitle from "./case-title";
import Image from "next/image";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import clsx from "clsx";
import { useState } from "react";
import Bullets from "@/components/shared/bullets";

const CaseGallery = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  console.log(setApi);

  return (
    <section>
      <Container>
        <CaseTitle
          className="sm:ml-[11.66vw] mb-[6.15vw] sm:mb-[2.5vw]"
          title="gallery"
          num="(07)"
        />

        <div className="hidden sm:block relative h-[39.68vw]">
          <Image
            src={"/images/case/gallery/1.png"}
            alt={"gallery image"}
            width={524}
            height={350}
            className="absolute top-0 left-0 h-[18.22vw] w-[27.29vw]"
          />

          <Image
            src={"/images/case/gallery/2.png"}
            alt={""}
            width={524}
            height={350}
            className="absolute bottom-0 left-0 h-[18.22vw] w-[27.29vw] z-[4]"
          />
          <Image
            src={"/images/case/gallery/3.png"}
            alt={""}
            width={413}
            height={620}
            className="absolute top-0 left-[24.58vw] z-[3] h-[32.29vw] w-[21.51vw]"
          />
          <Image
            src={"/images/case/gallery/4.png"}
            alt={""}
            width={709}
            height={398}
            className="absolute top-0 right-[14.68vw] z-[3] h-[20.41vw] w-[36.92vw]"
          />
          <Image
            src={"/images/case/gallery/5.png"}
            alt={""}
            width={600}
            height={452}
            className="absolute bottom-0 right-[18.22vw] z-[2] h-[23.54vw] w-[31.25vw]"
          />
          <Image
            src={"/images/case/gallery/6.png"}
            alt={""}
            width={392}
            height={586}
            className="absolute top-0 right-0 z-[1] h-[30.52vw] w-[20.41vw]"
          />
        </div>

        <Carousel className="sm:hidden mb-[6.15vw]">
          <CarouselContent>
            {[...Array(5)].map((_, i) => (
              <CarouselItem key={i}>
                <Image
                  key={i}
                  src={"/images/case/1.png"}
                  alt="photo"
                  width={593}
                  height={787}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <Bullets size={5} active={activeSlide} />
      </Container>
    </section>
  );
};

export default CaseGallery;
