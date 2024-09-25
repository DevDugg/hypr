"use client";

import { PropsWithChildren } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import { cubicBezier } from "framer-motion";

function SmoothScroll({ children }: PropsWithChildren) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 0.8,
        easing: cubicBezier(0.55, 0, 0.1, 1),
        touchMultiplier: 2,
        infinite: false,
        __experimental__naiveDimensions: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;
