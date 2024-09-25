"use client";

import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import gsap from "gsap";
import { start } from "repl";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

interface INeedProps {
  gallery: NonNullable<HOME_PAGE_QUERYResult[number]["gallery"]>;
}

const Need = ({ gallery }: INeedProps) => {
  const generateRows = () => {
    const rows = [];

    for (let i = 1; i <= 3; i++) {
      rows.push(
        <div className="row relative m-[1em] flex justify-center gap-[2em]">
          <div className="card w-[45.83vw] h-[29.17vw] overflow-hidden will-change-transform card-left">
            <Image
              src={`/images/need/${2 * i - 1}.png`}
              alt=""
              width={1760}
              height={1120}
              className="size-full object-cover"
            />
          </div>
          <div className="card w-[45.83vw] h-[29.17vw] overflow-hidden will-change-transform card-right">
            <Image
              src={`/images/need/${2 * i}.png`}
              alt=""
              width={1760}
              height={1120}
              className="size-full object-cover"
            />
          </div>
        </div>
      );
    }
    return rows;
  };

  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scrollTriggerSettings = {
        trigger: container.current,
        start: "top 25%",
        toggleActions: "play reverse plat reverse",
      };

      const xValues = [1000, 1100, 600];
      const yValues = [100, -150, -400];
      const rotationValues = [30, 20, 35];

      gsap.utils.toArray(".row").forEach((row, index) => {
        const cardLeft = (row as HTMLElement).querySelector(".card-left");
        const cardRight = (row as HTMLElement).querySelector(".card-right");

        gsap.to(cardLeft, {
          x: -xValues[index],
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "150% bottom",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              (cardLeft as HTMLElement).style.transform =
                `translateX(${progress * -xValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * -rotationValues[index]}deg)`;
              (cardRight as HTMLElement).style.transform =
                `translateX(${progress * xValues[index]}px) translateY(${progress * yValues[index]}px) rotate(${progress * rotationValues[index]}deg)`;
            },
          },
        });

        gsap.to(".main-content", {
          scrollTrigger: {
            trigger: container.current,
            start: "top center",
            end: "85% bottom",
            scrub: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const scale = 1 - progress * 0.1;
              const mainContent = document.querySelector(
                ".main-content"
              ) as HTMLElement;

              mainContent.style.opacity = `${progress}`;
              mainContent.style.scale = `${scale}`;
            },
          },
        });
      });
    },
    { scope: container }
  );

  const { title } = gallery;

  return (
    <section
      id="need"
      className="text-WHITE mb-[0.83vw] relative"
      ref={container}
    >
      <Container className="px-[5.23vw]">
        <div className="h-[81.51vw] flex flex-col justify-center relative">
          <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            {generateRows()}
          </div>
          <div className="main-content z-0">
            {title && (
              <h2 className="text-center mx-auto leading-none text-[11.27vw] sm:text-[3.54vw] monument max-w-3xl">
                {title}
              </h2>
            )}

            <Link href={"/contacts"}>
              <CustomButton
                className={cn(
                  grotesk.className,
                  "w-full sm:w-[43.07vw] mt-[6.15vw] sm:mt-[2.5vw] mx-auto flex justify-center"
                )}
              >
                Contact us
              </CustomButton>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Need;
