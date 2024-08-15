import { AnimationContext } from "@/context/animation-context";
import { useContext } from "react";

export const useAnimationContext = () => {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimationContext must be used within a AnimationContextProvider");
  }
  return context;
};
