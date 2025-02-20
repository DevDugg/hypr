"use client";

import { useEffect, useState } from "react";

import Burger from "../shared/burger";
import Container from "../layout/container";
import CustomButton from "../shared/custom-button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import NavLinkAnimated from "./header/nav-link-animated";
import Reveal from "../animations/reveal";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";
import { navData } from "@/database/navigation.data";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();
  const [burger, setBurger] = useState(false);

  useEffect(() => {
    if (burger) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [burger]);

  return (
    <>
      <Burger burger={burger} setBurger={setBurger} />

      <header
        className={clsx("py-[6.14vw] sm:py-[1.25vw] relative z-30", {
          "absolute top-0 left-0 right-0": pathname === "/case",
        })}
      >
        <Container className="flex items-center justify-between text-WHITE">
          <Link
            scroll={false}
            href={"/"}
            className="uppercase text-[6.15vw] sm:text-[2.08vw] leading-none font-bold w-fit"
          >
            <Reveal>
              <Image
                src={"/images/main-logo.svg"}
                alt="HYPR logo"
                width={150}
                height={40}
                className="w-[6.8125vw] h-[3.0833vw] max-lg:w-[14.8125vw] max-lg:h-[7.0833vw] max-sm:w-[20vw] max-sm:h-[10vw]"
              />
            </Reveal>
          </Link>

          <Reveal type="opacity">
            <nav
              className={cn(
                "hidden lg:flex gap-[2.08vw] font-medium text-[0.9375vw] leading-none px-[1.25vw] py-[0.83vw] rounded-full",
                grotesk.className,
              )}
            >
              {navData.map((item, i) => (
                <NavLinkAnimated
                  key={i}
                  {...item}
                  className={clsx("text-[0.9375vw] leading-[120%] py-[0.83vw] uppercase font-semibold", {
                    // "text-ACCENT": item.path === pathname,
                  })}
                />
              ))}
            </nav>
          </Reveal>
          <Reveal>
            <CustomButton className="hidden lg:flex font-bold !text-[1.25vw] !px-[2.08vw] leading-[100%] rounded-[10.41vw] max-md:hidden uppercase">
              <Link scroll={false} href={"/contact-us"}>
                Contact us
              </Link>
            </CustomButton>
          </Reveal>

          <div
            onClick={() => setBurger(!burger)}
            className="size-[8.2vw] flex flex-col justify-center items-center gap-[1vw] cursor-pointer lg:hidden"
          >
            <motion.div
              initial={{ rotate: "0deg", translateY: 0 }}
              animate={burger ? { rotate: "45deg", translateY: "1.25vw" } : {}}
              transition={{ duration: 0.5 }}
              className="w-[8.2vw] h-[0.5vw] rounded-[1.27vw] bg-WHITE"
            />
            <motion.div
              initial={{ rotate: "0deg", translateY: 0 }}
              animate={burger ? { rotate: "-45deg" } : {}}
              transition={{ duration: 0.5 }}
              className="w-[8.2vw] h-[0.5vw] rounded-[1.27vw] bg-WHITE"
            />
          </div>
        </Container>
      </header>
    </>
  );
};
