"use client";

import AnimationContextProvider from "@/context/animation-context";
import CheckConfig from "./check-config";
import { MotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";
import SmoothScroll from "@/components/animations/smooth-scroll";
import { ViewTransitions } from "next-view-transitions";
import { defaultTransition } from "./transitions";

const Provider = ({ children }: PropsWithChildren) => {
  return (
    <SmoothScroll>
      <MotionConfig transition={defaultTransition}>
        {/* <ScrollProgress> */}
        <AnimationContextProvider>
          <ViewTransitions>
            <CheckConfig>{children}</CheckConfig>
          </ViewTransitions>
        </AnimationContextProvider>
        {/* </ScrollProgress> */}
      </MotionConfig>
    </SmoothScroll>
  );
};
export default Provider;
