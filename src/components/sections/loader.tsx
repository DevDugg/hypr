"use client";

import Image from "next/image";
import { PropsWithChildren } from "react";
import { defaultTransition } from "@/config/transitions";
import { general } from "@/config/general";
import { interactions } from "@/config/interactions";
import { motion } from "framer-motion";

const Loader = ({ children }: PropsWithChildren) => {
  return (
    <>
      <motion.div
        className="loader fixed top-0 left-0 z-50 w-full h-full flex items-center gap-6 justify-center pointer-events-none bg-LOADER"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 0, y: "5%" }}
        transition={{
          ...defaultTransition,
          delay: 1,
        }}
        style={interactions.useEntryAnimation ? {} : { display: "none" }}
      >
        <Image alt="App Logo" src="/images/logo.svg" width={80} height={80} loading="eager" priority />
        <span className="text-[60px]">{general.appName}</span>
      </motion.div>
      {children}
    </>
  );
};
export default Loader;
