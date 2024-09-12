"use client";

import { MotionValue, useMotionValueEvent, useTransform } from "framer-motion";

import { IImage } from ".";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface IProps {
  scrollProgress: MotionValue<number>;
  image: IImage;
}

const FlyingBlock = ({ scrollProgress, image }: IProps) => {
  const x = useTransform(scrollProgress, [0, 1], [image.position.left, 0]);
  const y = useTransform(scrollProgress, [0, 1], [image.position.top, 0]);

  // useMotionValueEvent(scrollProgress, "change", (latest) => {
  //   console.log(latest);
  // });

  return (
    <motion.div className={cn(image.className, "h-fit")} style={{ x, y }}>
      <Image src={image.src} alt="photo" width={image.width} height={image.height} />
    </motion.div>
  );
};

export default FlyingBlock;
