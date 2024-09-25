"use client";

import { cubicBezier } from "framer-motion";
import { useLenis } from "@studio-freight/react-lenis";

// Function for smooth scrolling
export const useScrollToTarget = (
  targetElement: string | number | HTMLElement | null
) => {
  const lenisInstance = useLenis();
  const handleOnClick = () => {
    if (targetElement) {
      const scrollToOptions = {
        // Customize scroll options if needed
        lerp: 0.08,
        duration: 0.8,
        easing: cubicBezier(0.55, 0, 0.1, 1),
        direction: "vertical",
        gestureDirection: "vertical",
        smooth: true,
        smoothTouch: true,
        touchMultiplier: 2,
        infinite: false,

        __experimental__naiveDimensions: true,
      };

      lenisInstance!.scrollTo(targetElement, scrollToOptions);
    }
  };
  return { handleOnClick };
};
