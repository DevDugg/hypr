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
    <section id="need" className="text-WHITE">
      <Container className="px-[5.23vw]">
        <div
          ref={container}
          className="h-[62.19vw] flex flex-col gap-[2.5vw] justify-center relative"
        >
          {/* <FlyingBlock scrollProgress={scrollYProgress} container={container}> */}
          <Image
            src={"/images/need/1.png"}
            alt="photo"
            width={333}
            height={348}
            className="fly-item w-[17.34vw] h-auto top-[20.83vw] right-0 rotate-[2.42deg] "
          />
          {/* </FlyingBlock> */}
          <Image
            src={"/images/need/2.png"}
            alt="photo"
            width={273}
            height={341}
            className="fly-item w-[14.22vw] h-auto top-[41.71vw] left-[54.58vw] rotate-[17.99deg]"
          />
          <Image
            src={"/images/need/3.png"}
            alt="photo"
            width={325}
            height={406}
            className="fly-item w-[16.92vw] h-auto top-[40vw] left-[10.06vw] rotate-[-17.49deg]"
          />
          <Image
            src={"/images/need/4.png"}
            alt="photo"
            width={294}
            height={368}
            className="fly-item w-[15.31vw] h-auto left-0 top-[14.29vw] rotate-[3.68deg]"
          />
          <Image
            src={"/images/need/5.png"}
            alt="photo"
            width={217}
            height={249}
            className="fly-item w-[11.3vw] h-auto left-[21.35vw] top-[2.23vw] rotate-[2.42deg]"
          />
          <Image
            src={"/images/need/6.png"}
            alt="photo"
            width={314}
            height={314}
            className="fly-item w-[16.35vw] h-auto left-[48.02vw] top-[0.34vw] rotate-[2.42deg] "
          />
          <h1 className="text-center  mx-auto leading-none text-[8.33vw]">
            no need <br /> to be shy.
          </h1>
          <Button
            className={cn(
              grotesk.className,
              "w-[820px] mx-auto flex justify-center"
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
