"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { navData } from "@/database/navigation.data";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import Container from "../layout/container";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Button } from "../ui/button";

interface Props {
  burger: boolean;
  setBurger: (value: boolean) => void;
}

const Burger = ({ burger, setBurger }: Props) => {
  const pathname = usePathname();

  useEffect(() => {}, [burger]);

  return (
    <motion.div
      initial={{ translateY: "-100%", pointerEvents: "none" }}
      animate={burger ? { translateY: 0, pointerEvents: "none" } : {}}
      transition={{ duration: 0.6, ease: [0.55, 0, 0.1, 1] }}
      className={cn(
        "bg-BACKGROUND absolute left-0 top-0 right-0 z-20 h-screen",
        grotesk.className
      )}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={burger ? { opacity: 1 } : {}}
        transition={
          burger
            ? { delay: 0.6, ease: [0.55, 0, 0.1, 1] }
            : { delay: 0, duration: 0.1 }
        }
        className="flex flex-col h-screen container"
      >
        <motion.ul
          initial={{ opacity: 0 }}
          animate={burger ? { opacity: 1 } : {}}
          transition={burger ? { delay: 0.6 } : { delay: 0, duration: 0.1 }}
          className="flex flex-col gap-[6.15vw] mt-[38vw] flex-auto h-full"
        >
          {navData.map((item, i) => (
            <li
              onClick={() => setBurger(false)}
              className={clsx("text-[12.3vw] font-semibold leading-none", {
                "text-ACCENT": item.path === pathname,
                "text-WHITE": item.path !== pathname,
              })}
              key={i}
            >
              <Link href={item.path}>{item.view}</Link>
            </li>
          ))}
        </motion.ul>
        <Button className="w-full mb-[12.3vw]">Contact us</Button>
      </motion.div>
    </motion.div>
  );
};

export default Burger;
