"use client";

import { Home_page, SanityImageAsset } from "../../../../sanity.types";

import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface IProps {
  name: string | undefined;
  i: number;
  activeItem: number | null;
  image: any;
}

export const ServiceCardDesktop = ({ name, i, activeItem, image }: IProps) => {
  const itemState = activeItem !== null ? (activeItem === i ? { opacity: "100%" } : { opacity: "30%" }) : {};
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        id={`element-${i}`}
        className="relative overflow-hidden h-[3.75vw] w-full"
        initial={{ opacity: "100%" }}
        animate={itemState}
      >
        <motion.h4
          className="leading-none monument uppercase w-full text-[4.61vw] sm:size72 absolute top-0 text-center origin-bottom tracking-tight"
          initial={{ top: "100%", rotateX: 45, transformOrigin: "top" }}
          animate={activeItem === i ? { top: "0%", rotateX: 0, transformOrigin: "bottom" } : {}}
        >
          {name}
        </motion.h4>
        <motion.span
          className="leading-none monument uppercase w-full text-[4.61vw] sm:size72 absolute top-0 text-center origin-bottom tracking-tight"
          initial={{ top: "0%", rotateX: 0, transformOrigin: "bottom" }}
          animate={activeItem === i ? { top: "-100%", rotateX: 45, transformOrigin: "top" } : {}}
        >
          {name}
        </motion.span>
      </motion.div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={i === activeItem ? { height: "fit-content", opacity: 1 } : {}}
        className="hidden max-md:flex max-md:justify-center"
      >
        <Image
          src={urlFor(image).size(256, 320).url()}
          width={256}
          height={320}
          alt="service image"
          className="size-full w-1/2 object-cover"
        />
      </motion.div>
    </div>
  );
};
