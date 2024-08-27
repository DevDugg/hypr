import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import React from "react";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface IProps {
  title: string;
  img: string;
  text: string;
  className?: string;
  imgClassName?: string;
  w: number;
  h: number;
}

export const NewsCard = ({
  title,
  img,
  text,
  className,
  imgClassName,
  w,
  h,
}: IProps) => {
  return (
    <div className={cn(className, "")}>
      <Image
        src={img}
        alt="news image"
        width={w}
        height={h}
        className={cn(imgClassName, "")}
      />
      <MouseFollowerWrapper state="open">
        <Link
          href={"/news/1"}
          className="flex justify-between items-center size18"
        >
          <div>
            <div className="mt-[1.25vw] mb-[0.2vw]  monument">{title}</div>
            <p className={cn("leading-[140%] ", grotesk.className)}>{text}</p>
          </div>

          <ArrowUpRight className=" text-GRAY size-[3vw]" />
        </Link>
      </MouseFollowerWrapper>
    </div>
  );
};
