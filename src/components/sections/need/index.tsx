"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/layout/container";
import FlyingBlock from "./flying-block";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useRef } from "react";
import { useScroll } from "framer-motion";

const Need = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
  });

  return (
    <section id="need" className="text-WHITE mb-[38.43vw]">
      <Container className="px-[5.23vw]">
        <div
          ref={container}
          className="h-[102vw] sm:h-[62.19vw] flex flex-col justify-center relative"
        >
          {/* <FlyingBlock scrollProgress={scrollYProgress} container={container}> */}
          <Image
            src={"/images/need/1.png"}
            alt="photo"
            width={333}
            height={348}
            className="fly-item w-[17.34vw] h-auto bottom-[7.68vw] sm:bottom-0 sm:top-[20.83vw] right-0 rotate-[2.42deg] "
          />
          {/* </FlyingBlock> */}
          <Image
            src={"/images/need/2.png"}
            alt="photo"
            width={273}
            height={341}
            className="fly-item w-[14.22vw] h-auto bottom-0 sm:top-[41.71vw] left-1/2 -translate-x-1/2 sm:left-[54.58vw] rotate-[17.99deg]"
          />
          <Image
            src={"/images/need/3.png"}
            alt="photo"
            width={325}
            height={406}
            className="fly-item w-[16.92vw] h-auto bottom-[10.25vw] sm:bottom-0 sm:top-[40vw] left-[1.02vw] sm:left-[10.06vw] rotate-[-17.49deg]"
          />
          <Image
            src={"/images/need/4.png"}
            alt="photo"
            width={294}
            height={368}
            className="fly-item w-[15.31vw] h-auto left-0 top-[8.96vw] sm:top-[14.29vw] rotate-[3.68deg]"
          />
          <Image
            src={"/images/need/5.png"}
            alt="photo"
            width={217}
            height={249}
            className="fly-item w-[11.3vw] h-auto right-[42.79vw] sm:left-[21.35vw] top-0 sm:top-[2.23vw] rotate-[2.42deg]"
          />
          <Image
            src={"/images/need/6.png"}
            alt="photo"
            width={314}
            height={314}
            className="fly-item w-[16.35vw] h-auto right-[8.45vw] sm:right-0 sm:left-[48.02vw] sm:top-[0.34vw] top-[3.33vw] rotate-[2.42deg] "
          />
          <h1 className="text-center mx-auto leading-none text-[11.27vw] sm:size100 monument">
            no need <br /> to be shy.
          </h1>
          <Button
            className={cn(
              grotesk.className,
              "w-full sm:w-[43.07vw] mt-[6.15vw] sm:mt-[2.5vw] mx-auto flex justify-center"
            )}
          >
            Contact us
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Need;
