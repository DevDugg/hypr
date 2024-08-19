"use client";

import { FollowerState } from "@/context/animation-context";
import { PropsWithChildren } from "react";
import { useAnimationContext } from "@/hooks/use-animation-context";

interface MouseFollowerWrapperProps extends PropsWithChildren {
  state: FollowerState;
}

const MouseFollowerWrapper = ({ state, children }: MouseFollowerWrapperProps) => {
  const { setFollowerState } = useAnimationContext();
  return (
    <div onMouseOver={() => setFollowerState(state)} onMouseLeave={() => setFollowerState("default")}>
      {children}
    </div>
  );
};
export default MouseFollowerWrapper;
