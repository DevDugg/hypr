"use client";

import { PropsWithChildren, useRef } from "react";

import { FollowerState } from "@/context/animation-context";
import { useAnimationContext } from "@/hooks/use-animation-context";

interface MouseFollowerWrapperProps extends PropsWithChildren {
  state: FollowerState;
}

const MouseFollowerWrapper = ({ state, children }: MouseFollowerWrapperProps) => {
  const { setFollowerState, followerState } = useAnimationContext();
  const previousState = useRef<FollowerState>(followerState);
  return (
    <div
      onMouseOverCapture={() => setFollowerState(state)}
      onMouseLeave={() => setFollowerState(previousState.current)}
    >
      {children}
    </div>
  );
};
export default MouseFollowerWrapper;
