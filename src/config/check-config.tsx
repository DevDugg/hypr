"use client";

import { PropsWithChildren, useEffect } from "react";

import { useLenis } from "@studio-freight/react-lenis";
import { usePathname } from "next/navigation";
import validateConfig from "@/lib/validate-config";

const CheckConfig = ({ children }: PropsWithChildren) => {
  const path = usePathname();
  const lenisInstance = useLenis();
  useEffect(() => {
    if (!lenisInstance) {
      return window.scrollTo(0, 0);
    }
    lenisInstance.scrollTo(0, { immediate: true, force: true });
  }, [path]);

  useEffect(() => {
    validateConfig();
  }, []);
  return children;
};
export default CheckConfig;
