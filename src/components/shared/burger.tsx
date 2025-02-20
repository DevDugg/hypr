"use client";

import CustomButton from "./custom-button";
import Link from "next/link";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";
import { navData } from "@/database/navigation.data";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

interface Props {
  burger: boolean;
  setBurger: (value: boolean) => void;
}

const Burger = ({ burger, setBurger }: Props) => {
  const pathname = usePathname();

  useEffect(() => {}, [burger]);

  return (
    <motion.div
      initial={{ translateY: "-100%" }}
      animate={burger ? { translateY: 0 } : {}}
      transition={{ duration: 0.6 }}
      style={{ pointerEvents: burger ? "auto" : "none" }}
      className={cn("bg-BACKGROUND absolute left-0 top-0 right-0 z-20 h-dvh", grotesk.className)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={burger ? { opacity: 1 } : {}}
        transition={burger ? { delay: 0.6 } : { delay: 0, duration: 0.1 }}
        className="flex flex-col h-dvh container"
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
              <Link scroll={false} href={item.path}>
                {item.view}
              </Link>
            </li>
          ))}
        </motion.ul>
        {/* <CustomButton className="w-full mb-[12.3vw]">
          <Link scroll={false} href={"/contact-us"}>Contact us</Link>
        </CustomButton> */}
      </motion.div>
    </motion.div>
  );
};

export default Burger;
