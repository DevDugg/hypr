"use client";

import { footerList, footerList2 } from "@/database/footer.data";

import Container from "../layout/container";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useScrollToTarget } from "@/lib/use-scroll-to-target";

export const Footer = () => {
  const date = new Date();
  const { handleOnClick } = useScrollToTarget("#hero");
  return (
    <footer className="text-WHITE mt-[25.62vw] sm:mt-[10.41vw] pb-[2.5vw] relative z-10">
      <Container className="flex flex-col gap-[20.05vw] sm:gap-[10vw]">
        <div className={cn("flex gap-[30.27vw]", grotesk.className)}>
          <div>
            <p className="mb-[6.15vw] sm:mb-[2vw] font-medium text-[4.05vw] sm:size24">(Sitemap)</p>

            <div className="flex text-[4.61vw] sm:size24 flex-col gap-[4.05vw] sm:gap-[1.25vw] font-bold">
              {footerList.map((item, i) => (
                <Link key={i} href={item.link} className="">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-[6.15vw] sm:mb-[2vw] font-medium text-[4.05vw] sm:size24">(Socials)</p>

            <div className="flex text-[4.61vw] sm:size24 flex-col gap-[4.05vw] sm:gap-[1.25vw] font-bold">
              {footerList2.map((item, i) => (
                <Link key={i} href={item.link} className="">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex sm:flex-row flex-col justify-between items-start sm:items-end gap-[5vw]">
          <p className="monument text-[24.5vw] sm:flex-[0_0_46.87vw] sm:text-[11.63vw] leading-none">HYPR</p>

          <div className="flex sm:flex-[0_0_34.58vw] w-full justify-between">
            <div
              onClick={handleOnClick}
              className={cn(
                "flex items-center cursor-pointer sm:font-bold font-medium text-[3.58vw] sm:size24 justify-center gap-[0.2vw]",
                grotesk.className,
              )}
            >
              Back to top ↑
            </div>

            <div className={cn(grotesk.className, "text-[3.58vw] sm:size24 sm:font-bold font-medium")}>
              Copyright © HYPR {date.getFullYear()}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
