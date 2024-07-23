import Image from "next/image";
import React from "react";

interface IProps {
  title: string;
  img: string;
}

export const ServiceCard = ({ title, img }: IProps) => {
  return (
    <div>
      <h4 className="text-[24px] leading-none font-bold">{title}</h4>

      {/* <Image src={img} width={256} height={320} alt="service image" /> */}
    </div>
  );
};
