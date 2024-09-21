"use client";

import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useRef } from "react";
import { useScroll } from "framer-motion";

export interface IImage {
  src: string;
  width: number;
  height: number;
  className: string;
  position: {
    top: number;
    left: number;
  };
}

interface INeedProps {
  gallery: NonNullable<HOME_PAGE_QUERYResult[number]["gallery"]>;
}

const Need = ({ gallery }: INeedProps) => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  const images: IImage[] = [
    {
      src: "/images/need/1.png",
      width: 999, // 333 * 3
      height: 1044, // 348 * 3
      className:
        "fly-item w-[17.34vw] h-auto bottom-[7.68vw] sm:bottom-0 sm:top-[20.83vw] right-0 rotate-[2.42deg]",
      position: {
        top: 20.83,
        left: 65.15,
      },
    },
    {
      src: "/images/need/2.png",
      width: 819, // 273 * 3
      height: 1023, // 341 * 3
      className:
        "fly-item w-[14.22vw] h-auto bottom-0 sm:top-[41.71vw] left-1/2 -translate-x-1/2 sm:left-[54.58vw] rotate-[17.99deg]",
      position: {
        top: 41.71,
        left: 54.58,
      },
    },
    {
      src: "/images/need/3.png",
      width: 975, // 325 * 3
      height: 1218, // 406 * 3
      className:
        "fly-item w-[16.92vw] h-auto bottom-[10.25vw] sm:bottom-0 sm:top-[40vw] left-[1.02vw] sm:left-[10.06vw] rotate-[-17.49deg]",
      position: {
        top: 40,
        left: 10.06,
      },
    },
    {
      src: "/images/need/4.png",
      width: 882, // 294 * 3
      height: 1104, // 368 * 3
      className:
        "fly-item w-[15.31vw] h-auto left-0 top-[8.96vw] sm:top-[14.29vw] rotate-[3.68deg]",
      position: {
        top: 14.29,
        left: 0,
      },
    },
    {
      src: "/images/need/5.png",
      width: 651, // 217 * 3
      height: 747, // 249 * 3
      className:
        "fly-item w-[11.3vw] h-auto right-[42.79vw] sm:left-[21.35vw] top-0 sm:top-[2.23vw] rotate-[2.42deg]",
      position: {
        top: 2.23,
        left: 21.35,
      },
    },
    {
      src: "/images/need/6.png",
      width: 942, // 314 * 3
      height: 942, // 314 * 3
      className:
        "fly-item w-[16.35vw] h-auto right-[8.45vw] sm:right-0 sm:left-[48.02vw] sm:top-[0.34vw] top-[3.33vw] rotate-[2.42deg]",
      position: {
        top: 0.34,
        left: 48.02,
      },
    },
  ];

  const { title } = gallery;

  return (
    <section
      id="need"
      className="text-WHITE mb-[0.83vw] relative"
      ref={container}
    >
      <Container className="px-[5.23vw]">
        <div className="h-[102vw] sm:h-[62.19vw] flex flex-col justify-center relative">
          {images.map((image, index) => (
            // <FlyingBlock image={image} scrollProgress={scrollYProgress} key={index} />
            <Image
              src={image.src}
              alt="photo"
              width={image.width}
              height={image.height}
              key={index}
              className={image.className}
            />
          ))}
          {title && (
            <h1 className="text-center mx-auto leading-none text-[11.27vw] sm:size100 monument max-w-3xl">
              {title}
            </h1>
          )}

          <CustomButton
            className={cn(
              grotesk.className,
              "w-full sm:w-[43.07vw] mt-[6.15vw] sm:mt-[2.5vw] mx-auto flex justify-center"
            )}
          >
            <Link href={"/contacts"}>Contact us</Link>
          </CustomButton>
        </div>
      </Container>
    </section>
  );
};

export default Need;
