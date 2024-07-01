"use client";

import { PropsWithChildren, useEffect } from "react";

import validateConfig from "@/lib/validate-config";

const CheckConfig = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    validateConfig();
  }, []);
  return children;
};
export default CheckConfig;
