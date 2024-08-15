"use client";

import { MotionValue, useTransform } from "framer-motion";
import { RefObject, useEffect, useRef, useState } from "react";

import { getRelativePosition } from "@/lib/get-relative-position";
import { motion } from "framer-motion";

interface IProps {
  children: React.ReactNode;
  scrollProgress: MotionValue<number>;
  container: RefObject<HTMLElement>;
}

const FlyingBlock = ({ children, scrollProgress, container }: IProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const [relativePosition, setRelativePosition] = useState({ relativeX: 0, relativeY: 0 });

  useEffect(() => {
    if (container.current && ref.current) {
      const position = getRelativePosition(container, ref);
      setRelativePosition(position || { relativeX: 0, relativeY: 0 });
    }
  }, [container]);

  const translateX = useTransform(scrollProgress, [0, 1], [relativePosition.relativeX, 0]);
  const translateY = useTransform(scrollProgress, [0, 1], [relativePosition.relativeY, 0]);

  return (
    relativePosition && (
      <motion.div
        ref={ref}
        // className="size-fit"
        style={{
          x: translateX,
          y: translateY,
        }}
      >
        {children}
      </motion.div>
    )
  );
};

export default FlyingBlock;
