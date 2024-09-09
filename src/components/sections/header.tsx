"use client";

import Container from "../layout/container";
import CustomButton from "../shared/custom-button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import NavLinkAnimated from "./header/nav-link-animated";
import Reveal from "../animations/reveal";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { navData } from "@/database/navigation.data";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header
      className={clsx("py-[6.14vw] sm:py-[1.25vw]", {
        "absolute top-0 left-0 right-0": pathname === "/case",
      })}
    >
      <Container className="flex items-center justify-between text-WHITE">
        <Link href={"/"} className="uppercase text-[6.15vw] sm:text-[2.08vw] leading-none font-bold">
          <Reveal>
            <Image
              src={"/images/main-logo.svg"}
              alt="Logo"
              width={150}
              height={40}
              className="w-[4.8125vw] h-[2.0833vw]"
            />
          </Reveal>
        </Link>

        <Reveal type="opacity">
          <nav
            className={cn(
              "hidden lg:flex gap-[2.08vw] font-medium border-WHITE border-[1px] text-[0.9375vw] leading-none px-[1.25vw] py-[0.83vw] rounded-full",
              grotesk.className,
            )}
          >
            {navData.map((item, i) => (
              <NavLinkAnimated
                key={i}
                {...item}
                className={clsx("text-[0.9375vw] leading-[120%] py-[0.83vw]", {
                  // "text-ACCENT": item.path === pathname,
                })}
              />
            ))}
          </nav>
        </Reveal>
        <Reveal>
          <Link
            href={"/"}
            // href={"/contacts"}
          >
            <CustomButton className="flex font-bold !text-[0.9375vw] !px-[2.08vw] leading-[100%] rounded-[10.41vw] max-md:hidden">
              Contact us
            </CustomButton>
          </Link>
        </Reveal>

        <div className="size-[6.15vw] flex flex-col justify-center items-center gap-[1vw] cursor-pointer lg:hidden">
          <div className="w-[4.6vw] h-[0.5vw] rounded-[1.27vw] bg-WHITE" />
          <div className="w-[4.6vw] h-[0.5vw] rounded-[1.27vw] bg-WHITE" />
        </div>
      </Container>
    </header>
  );
};
