"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { useMediaQuery } from "usehooks-ts";

interface IProps {
  name: string | undefined;
  i: number;
  activeItem: number | null;
  image: any;
}

export const ServiceCardDesktop = ({ name, i, activeItem, image }: IProps) => {
  const itemState =
    activeItem !== null
      ? activeItem === i
        ? { opacity: "100%" }
        : { opacity: "30%" }
      : {};

  const mobile = useMediaQuery("(max-width: 640px)");
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        id={`element-${i}`}
        className="relative overflow-hidden h-[5vw] w-full max-sm:overflow-auto"
        initial={{ opacity: "100%" }}
        animate={itemState}
      >
        <motion.span
          className="leading-none monument uppercase w-full text-[4.5vw] sm:size72 absolute top-0 text-center origin-bottom tracking-tight max-sm:hidden"
          initial={{ top: "100%", rotateX: 45, transformOrigin: "top" }}
          animate={
            activeItem === i && !mobile
              ? { top: "0%", rotateX: 0, transformOrigin: "bottom" }
              : {}
          }
        >
          {name}
        </motion.span>
        <motion.h4
          className="leading-none monument uppercase w-full text-[4.5vw] sm:size72 absolute top-0 text-center origin-bottom tracking-tight"
          initial={{ top: "0%", rotateX: 0, transformOrigin: "bottom" }}
          animate={
            activeItem === i && !mobile
              ? { top: "-100%", rotateX: 45, transformOrigin: "top" }
              : {}
          }
        >
          {name}
        </motion.h4>
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
