"use client";

import AnimationContextProvider from "@/context/animation-context";
import CheckConfig from "./check-config";
import { MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import ScrollProgress from "@/components/ui/scroll-progress";
import SmoothScroll from "@/components/animations/smooth-scroll";
import { defaultTransition } from "./transitions";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <SmoothScroll>
      <MotionConfig transition={defaultTransition}>
        {/* <ScrollProgress> */}
          <AnimationContextProvider>
            <CheckConfig>{children}</CheckConfig>
          </AnimationContextProvider>
        {/* </ScrollProgress> */}
      </MotionConfig>
    </SmoothScroll>
  );
};
export default Provider;
