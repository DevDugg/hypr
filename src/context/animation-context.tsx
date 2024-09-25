"use client";

import {
  Dispatch,
  PropsWithChildren,
  RefObject,
  SetStateAction,
  createContext,
  useMemo,
  useRef,
  useState,
} from "react";

export type FollowerState = "default" | "play" | "open" | "disabled" | "drag";

interface IAnimationContext {
  followerState: FollowerState;
  setFollowerState: Dispatch<
    SetStateAction<IAnimationContext["followerState"]>
  >;
  screenRef: RefObject<HTMLDivElement | null>;
}

export const AnimationContext = createContext<IAnimationContext>(
  {} as IAnimationContext
);

const AnimationContextProvider = ({ children }: PropsWithChildren) => {
  const [followerState, setFollowerState] = useState<FollowerState>("disabled");
  const screenRef = useRef<HTMLDivElement>(null);

  const memo = useMemo(
    () => ({ followerState, setFollowerState, screenRef }),
    [followerState, setFollowerState, screenRef]
  );

  return (
    <AnimationContext.Provider value={memo}>
      <div ref={screenRef}>{children}</div>
    </AnimationContext.Provider>
  );
};

export default AnimationContextProvider;
