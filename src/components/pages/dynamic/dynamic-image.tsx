import Image from "next/image";
import React from "react";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  img: string;
}

const DynamicImage = ({ img }: Props) => {
  return (
    <div className="sm:px-[10.41vw] flex flex-col gap-[4.05vw] sm:gap-[1.25vw] mb-[4.1vw] sm:mb-[1.25vw]">
      <Image src={urlFor(img).url()} alt="image" width={1400} height={780} className="sm:w-[72.91vw] h-auto " />
    </div>
  );
};

export default DynamicImage;
