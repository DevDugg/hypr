"use client";

import { Dispatch, PropsWithChildren, SetStateAction, createContext, useMemo, useState } from "react";

export type FollowerState = "default" | "play" | "open" | "disabled" | "drag";

interface IAnimationContext {
  followerState: FollowerState;
  setFollowerState: Dispatch<SetStateAction<IAnimationContext["followerState"]>>;
}

export const AnimationContext = createContext<IAnimationContext>({} as IAnimationContext);

const AnimationContextProvider = ({ children }: PropsWithChildren) => {
  const [followerState, setFollowerState] = useState<FollowerState>("disabled");

  const memo = useMemo(() => ({ followerState, setFollowerState }), [followerState, setFollowerState]);

  return <AnimationContext.Provider value={memo}>{children}</AnimationContext.Provider>;
};

export default AnimationContextProvider;
