"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import Bullets from "@/components/shared/bullets";
import CaseTitle from "./case-title";
import Container from "@/components/layout/container";
import Image from "next/image";
import { PROJECT_ITEM_QUERYResult } from "../../../../sanity.types";
import { urlFor } from "@/sanity/lib/image";

interface CaseGalleryProps {
  project: PROJECT_ITEM_QUERYResult[number];
}

const CaseGallery = ({ project }: CaseGalleryProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  const { gallery } = project;

  useEffect(() => {
    if (!api) return;

    api.on("scroll", (carousel) => setActiveSlide(carousel.slidesInView()[0]));
  }, [api]);
  return (
    <section>
      <Container>
        <CaseTitle className="sm:ml-[11.66vw] mb-[6.15vw] sm:mb-[2.5vw]" title="gallery" num="(07)" />
        {gallery && (
          <div className="hidden sm:block relative h-[39.68vw]">
            {gallery.image_1 && (
              <Image
                data-img="img-1"
                src={urlFor(gallery.image_1).url()}
                alt={"gallery image"}
                width={524}
                height={350}
                className="object-cover absolute top-0 left-0 h-[18.22vw] w-[27.29vw]"
              />
            )}
            {gallery.image_2 && (
              <Image
                data-img="img-2"
                src={urlFor(gallery.image_2).url()}
                alt={"gallery image"}
                width={524}
                height={350}
                className="object-cover absolute bottom-0 left-0 h-[18.22vw] w-[27.29vw] z-[4]"
              />
            )}
            {gallery.image_3 && (
              <Image
                data-img="img-3"
                src={urlFor(gallery.image_3).url()}
                alt={"gallery image"}
                width={413}
                height={620}
                className="object-cover absolute top-0 left-[24.58vw] z-[3] h-[32.29vw] w-[21.51vw]"
              />
            )}
            {gallery.image_4 && (
              <Image
                data-img="img-4"
                src={urlFor(gallery.image_4).url()}
                alt={"gallery image"}
                width={709}
                height={398}
                className="object-cover absolute top-0 right-[14.68vw] z-[3] h-[20.41vw] w-[36.92vw]"
              />
            )}
            {gallery.image_5 && (
              <Image
                data-img="img-5"
                src={urlFor(gallery.image_5).url()}
                alt={"gallery image"}
                width={600}
                height={452}
                className="object-cover absolute bottom-0 right-[18.22vw] z-[2] h-[23.54vw] w-[31.25vw]"
              />
            )}
            {gallery.image_6 && (
              <Image
                data-img="img-6"
                src={urlFor(gallery.image_6).url()}
                alt={"gallery image"}
                width={392}
                height={586}
                className="object-cover absolute top-0 right-0 z-[1] h-[30.52vw] w-[20.41vw]"
              />
            )}
          </div>
        )}
        <Carousel className="sm:hidden mb-[6.15vw]" setApi={setApi}>
          <CarouselContent>
            {gallery &&
              gallery.image_1 &&
              gallery.image_2 &&
              gallery.image_3 &&
              gallery.image_4 &&
              gallery.image_5 &&
              gallery.image_6 &&
              [
                gallery.image_1,
                gallery.image_2,
                gallery.image_3,
                gallery.image_4,
                gallery.image_5,
                gallery.image_6,
              ].map((image, i) => (
                <CarouselItem key={i}>
                  <Image key={i} src={urlFor(image).size(593, 787).url()} alt="photo" width={593} height={787} />
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
