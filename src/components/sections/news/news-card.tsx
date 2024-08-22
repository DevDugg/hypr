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
}

export const NewsCard = ({
  title,
  img,
  text,
  className,
  imgClassName,
}: IProps) => {
  return (
    <div className={cn(className, "w-[20.83vw] h-auto")}>
      <Image
        src={img}
        alt="news image"
        width={400}
        height={480}
        className={cn(imgClassName, "w-full h-[25vw]")}
      />
      <MouseFollowerWrapper state="open">
        <Link href={"/news/1"} className="flex justify-between items-center">
          <div>
            <div className="mt-[1.25vw] mb-[0.2vw] size18 monument">
              {title}
            </div>
            <p className={cn("leading-[140%] size18", grotesk.className)}>
              {text}
            </p>
          </div>

          <ArrowUpRight className="size-[1.25vw] text-GRAY" />
        </Link>
      </MouseFollowerWrapper>
    </div>
  );
};
