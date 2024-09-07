import Image from "next/image";
import React from "react";

interface Props {
  img: string;
  text: string;
}

const DynamicImage = ({ img, text }: Props) => {
  return (
    <div className="sm:px-[10.41vw] flex flex-col gap-[4.05vw] sm:gap-[1.25vw]">
      <Image
        src={img}
        alt="image"
        width={1400}
        height={780}
        className="sm:w-[72.91vw] h-auto "
      />
      <p className="sm:mx-[8.33vw] sm:text-[1.25vw] text-[3.58vw]">{text}</p>
    </div>
  );
};

export default DynamicImage;
