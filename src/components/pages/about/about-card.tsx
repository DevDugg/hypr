import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  title: string;
  num: string;
  text: string;
  img: string;
}

const AboutCard = ({ title, num, text, img }: Props) => {
  return (
    <article
      className={cn(
        "p-[2.08vw] mb-[1.25vw] w-[59.45vw] sm:w-[28.12vw] font-bold rounded-[0.41vw] backdrop-blur-[40px] bg-[#F6F4E8]/70 shadow-[0_0_40px_0_rgba(0,0,0,0.25)]",
        grotesk.className
      )}
    >
      <div className="flex sm:flex-row flex-col-reverse justify-between items-start sm:items-center mb-[1.25vw]">
        <h5 className="sm:size40 text-[4.61vw]">{title}</h5>
        <span className="text-[3.58vw] sm:text-[1.25vw]">({num})</span>
      </div>

      <p className="text-GRAY leading-[140%] text-[0.98vw] mb-[2.08vw]">
        {text}
      </p>

      <Image
        src={img}
        width={460}
        height={400}
        className="w-full opacity-70 h-auto"
        alt="image"
      />
    </article>
  );
};

export default AboutCard;
