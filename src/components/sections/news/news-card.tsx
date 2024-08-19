import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
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

export const NewsCard = ({ title, img, text, className, imgClassName }: IProps) => {
  return (
    <div className={cn(className, "w-[20.83vw] h-auto")}>
      <Image src={img} alt="news image" width={400} height={480} className={cn(imgClassName, "w-full h-[25vw]")} />

      <div className="flex justify-between items-center">
        <div>
          <div className="mt-[1.25vw] mb-[0.2vw] size24 monument">{title}</div>
          <p className={cn("leading-[140%] size18", grotesk.className)}>{text}</p>
        </div>

        <ArrowUpRight className="size-[1.25vw] text-GRAY" />
      </div>
    </div>
  );
};
