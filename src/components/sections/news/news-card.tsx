import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import { News } from "../../../../sanity.types";
import React from "react";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";

type IProps = News & {
  className?: string;
  imgClassName?: string;
  w: number;
  h: number;
};

export const NewsCard = ({
  h,
  slug,
  w,
  className,
  imgClassName,
  short_description,
  display_title,
  main_image,
}: IProps) => {
  return (
    <div className={cn(className)}>
      <Image
        src={urlFor(main_image!)
          .size(w * 2, h * 2)
          .url()}
        alt="news image"
        width={w * 2}
        height={h * 2}
        className={cn(imgClassName, "mb-[1.25vw] object-cover")}
      />
      <MouseFollowerWrapper state="open">
        <Link
          href={`/news/${slug?.current}`}
          className="flex justify-between items-center size18 mt-[6.15vw] sm:mt-[0.25vw]"
        >
          <div className="">
            <div className="h5 mb-[2.05vw] sm:mb-[0.2vw] monument">
              {display_title}
            </div>
            <p
              className={cn("leading-[140%] h5 font-normal", grotesk.className)}
            >
              {short_description}
            </p>
          </div>

          <ArrowUpRight className="text-GRAY hidden sm:block size-[10vw] sm:size-[2vw]" />
        </Link>
      </MouseFollowerWrapper>
    </div>
  );
};
