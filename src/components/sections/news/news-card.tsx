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
      {main_image && (
        <Image
          src={urlFor(main_image!)
            .size(w * 2, h * 2)
            .url()}
          alt={`${display_title || "HYPR news"} image`}
          width={w * 2}
          height={h * 2}
          className={cn(imgClassName, "mb-[1.25vw] object-cover")}
        />
      )}
      {/* <MouseFollowerWrapper state="open"> */}
      <Link
        scroll={false}
        href={`/insights/${slug?.current}`}
        className="flex justify-between size18 mt-[6.15vw] sm:mt-[0.25vw]"
      >
        <div className="flex flex-col gap-[0.41vw]">
          <h3
            className={cn(
              "max-sm:text-[4.1vw] text-[1.25vw] mb-[2.05vw] sm:mb-[0.2vw] !leading-[120%] font-bold",
              grotesk.className,
            )}
          >
            {display_title}
          </h3>
          <p className={cn("leading-[140%] h5 font-normal", grotesk.className)}>{short_description}</p>
        </div>

        <div className="max-h-[1.67vw] max-w-[1.67vw] size-max">
          <Image
            src={"/images/arrow-up-right.svg"}
            alt=""
            width={32}
            height={32}
            className="max-h-[1.67vw] max-w-[1.67vw] size-max"
          />
        </div>
      </Link>
      {/* </MouseFollowerWrapper> */}
    </div>
  );
};
