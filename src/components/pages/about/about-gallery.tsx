"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import { ABOUT_PAGE_QUERYResult } from "../../../../sanity.types";
import Bullets from "@/components/shared/bullets";
import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import Reveal from "@/components/animations/reveal";
import { urlFor } from "@/sanity/lib/image";

interface AboutGalleryProps {
  data: NonNullable<ABOUT_PAGE_QUERYResult[0]>;
}

const AboutGallery = ({ data }: AboutGalleryProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [activeSlide, setActiveSlide] = useState(0);

  const { gallery, call_to_action } = data;

  useEffect(() => {
    if (!api) return;

    api.on("scroll", (carousel) => setActiveSlide(carousel.slidesInView()[0]));
  }, [api]);

  return (
    <section>
      <Container>
        {call_to_action && (
          <div className="relative text-WHITE">
            <Image
              src={"/images/case/1.png"}
              alt="image"
              width={211}
              height={316}
              className="w-[10.98vw] sm:absolute h-[16.45vw] hidden top-0 left-0"
            />

            <div className="sm:w-[43.07vw] mx-auto mb-[10.25vw] sm:mb-[4.16vw]">
              <h2 className="text-center leading-none mb-[6.15vw] sm:mb-[2vw] uppercase font-bold text-[10.27vw] sm:text-[5.20vw]">
                {call_to_action.title}
              </h2>
              {call_to_action.button_text && (
                <CustomButton fullWidth>
                  <Link href={"/contact-us"}>{call_to_action.button_text}</Link>
                </CustomButton>
              )}
            </div>

            <Image
              src={"/images/case/1.png"}
              alt="image"
              width={211}
              height={316}
              className="w-[10.98vw] hidden h-[16.45vw] sm:absolute top-0 right-0"
            />
          </div>
        )}

        <Reveal animateOnView type="opacity">
          {gallery && (
            <div className="hidden sm:block relative h-[39.68vw]">
              {gallery.image_1 && (
                <Image
                  data-img="img-1"
                  src={urlFor(gallery.image_1).url()}
                  alt={"gallery image"}
                  width={1048}
                  height={700}
                  className="object-cover absolute top-0 left-0 h-[18.22vw] w-[27.29vw]"
                />
              )}
              {gallery.image_2 && (
                <Image
                  data-img="img-2"
                  src={urlFor(gallery.image_2).url()}
                  alt={"gallery image"}
                  width={1048}
                  height={700}
                  className="object-cover absolute bottom-0 left-0 h-[18.22vw] w-[27.29vw] z-[4]"
                />
              )}
              {gallery.image_3 && (
                <Image
                  data-img="img-3"
                  src={urlFor(gallery.image_3).url()}
                  alt={"gallery image"}
                  width={816}
                  height={1240}
                  className="object-cover absolute top-0 left-[24.58vw] z-[3] h-[32.29vw] w-[21.51vw]"
                />
              )}
              {gallery.image_4 && (
                <Image
                  data-img="img-4"
                  src={urlFor(gallery.image_4).url()}
                  alt={"gallery image"}
                  width={1418}
                  height={796}
                  className="object-cover absolute top-0 right-[14.68vw] z-[3] h-[20.41vw] w-[36.92vw]"
                />
              )}
              {gallery.image_5 && (
                <Image
                  data-img="img-5"
                  src={urlFor(gallery.image_5).url()}
                  alt={"gallery image"}
                  width={1200}
                  height={904}
                  className="object-cover absolute bottom-0 right-[18.22vw] z-[2] h-[23.54vw] w-[31.25vw]"
                />
              )}
              {gallery.image_6 && (
                <Image
                  data-img="img-6"
                  src={urlFor(gallery.image_6).url()}
                  alt={"gallery image"}
                  width={784}
                  height={1172}
                  className="object-cover absolute top-0 right-0 z-[1] h-[30.52vw] w-[20.41vw]"
                />
              )}
            </div>
          )}
        </Reveal>
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
                  <Image
                    key={i}
                    src={urlFor(image).size(1186, 1674).url()}
                    alt="photo"
                    width={1186}
                    height={1674}
                    className="size-full"
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

export default AboutGallery;
