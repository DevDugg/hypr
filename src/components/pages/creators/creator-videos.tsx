"use client";

import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

import { ArrowUpRight } from "lucide-react";
import Bullets from "@/components/shared/bullets";
import { CREATOR_ITEM_QUERYResult } from "../../../../sanity.types";
import CaseTitle from "../case/case-title";
import Container from "@/components/layout/container";
import VideoPlayer from "@/components/video-player";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface CreatorVideosProps {
  creator: CREATOR_ITEM_QUERYResult;
}

const CreatorVideos = ({ creator }: CreatorVideosProps) => {
  const [api, setApi] = useState<CarouselApi>();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (!api) return;

    api.on("scroll", (carousel) => setActive(carousel.slidesInView()[0]));
  }, [api]);

  return (
    creator &&
    creator.videos && (
      <section>
        <Container className={cn("text-WHITE", grotesk.className)}>
          <div className="hidden sm:flex gap-[0.83vw] items-center">
            <div className="flex-[0_0_11.66vw] -translate-y-[10vw] text-[0.93vw] text-WHITE font-semibold">
              <span className="">01/</span>
              <span className="text-GRAY">
                {creator.videos.length >= 10 ? creator.videos.length : "0" + creator.videos.length}
              </span>
            </div>

            <div className="flex flex-col flex-[0_1_84.97vw]">
              <div className="flex justify-between mb-[2.5vw] items-end">
                <CaseTitle
                  title="videos"
                  num={`(${creator.videos.length >= 10 ? creator.videos.length : "0" + creator.videos.length})`}
                />
                {creator.youtube_link && (
                  <a
                    href={creator.youtube_link}
                    rel="noreferrer noopener"
                    className="uppercase flex gap-[0.2vw] items-center text-GRAY text-[0.93vw] font-semibold"
                  >
                    youtube <ArrowUpRight className="size-[1vw] " />
                  </a>
                )}
              </div>

              <div className="flex gap-[0.83vw] relative">
                <div className="w-[59.58vw] h-full touch-pan-y">
                  <VideoPlayer src={creator.videos[active].video || ""} width="100%" height="100%" />
                </div>

                <div className="border border-GRAY rounded-md flex-[1_1_20.83vw] h-fit">
                  {creator.videos.map((video, i) => (
                    <div
                      onClick={() => setActive(i)}
                      key={i}
                      className={clsx(
                        "p-[1.25vw] font-medium cursor-pointer text-[0.93vw] transition-all duration-300 text-GRAY uppercase",
                        {
                          "border-b border-GRAY": i + 1 !== creator.videos!.length,
                          "!text-BLACK bg-ACCENT !border-opacity-0": active === i,
                        },
                      )}
                    >
                      {video.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex justify-between w-[59.58vw] mt-[0.83vw]">
                <div className="uppercase font-medium text-[0.93vw] leading-[140%]">{creator.videos[active].name}</div>
                <div className="text-[0.93vw] leading-[140%]">{/* [{project.videos[active].duration}] */}</div>
              </div>
            </div>
          </div>

          <div className="block sm:hidden">
            <div className="flex justify-between mb-[6.15vw] items-end">
              <CaseTitle title="videos" num="(07)" className="text-[6.15vw]" />
              <a className="uppercase flex gap-[0.2vw] items-center text-GRAY text-[4.61vw] font-semibold">
                youtube <ArrowUpRight className="size-[5vw]" />
              </a>
            </div>

            <Carousel setApi={setApi}>
              <CarouselContent>
                {creator.videos.map(
                  (video, i) =>
                    video.name &&
                    video.name && (
                      <CarouselItem key={i}>
                        <VideoPlayer src={video.video || ""} width="auto" height="auto" />
                      </CarouselItem>
                    ),
                )}
              </CarouselContent>
            </Carousel>

            <div className="flex justify-between text-[4.05vw] font-medium items-center uppercase">
              <div>{creator.videos[active].name}</div>
              <div className="font-normal">{/* [{creator.videos[active].duration}] */}</div>
            </div>

            {creator.videos && creator.videos.length > 1 && <Bullets size={creator.videos.length} active={active} />}
          </div>
        </Container>
      </section>
    )
  );
};

export default CreatorVideos;
