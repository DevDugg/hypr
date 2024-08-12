"use client";

import { Button } from "../ui/button";
import Container from "../layout/container";
import Link from "next/link";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import localFont from "next/font/local";
import { navData } from "@/database/navigation.data";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <Container>
      <header className="py-[1.25vw] lg:py-[1.35vw] flex items-center justify-between text-WHITE">
        <Link href={"/"} className="uppercase text-[2.08vw] leading-none">
          HYPR
        </Link>

        <nav
          className={cn(
            "hidden lg:flex gap-[2.08vw] font-medium border-WHITE border-[1px] text-[0.9375vw] leading-none px-[1.25vw] rounded-full",
            grotesk.className,
          )}
        >
          {navData.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={clsx("text-[0.9375vw] py-[0.83vw]", {
                "text-ACCENT": item.path === pathname,
              })}
            >
              {item.view}
            </Link>
          ))}
        </nav>

        <Button
          className={cn(
            "hidden lg:flex font-bold !text-[0.9375vw] !py-[1.25vw] !px-[2.08vw] leading-[100%] rounded-[10.41vw]",
            grotesk.className,
          )}
        >
          Contact us
        </Button>

        <div className="size-6 flex flex-col justify-center items-center gap-1 cursor-pointer lg:hidden">
          <div className="w-[18px] h-0.5 bg-WHITE" />
          <div className="w-[18px] h-0.5 bg-WHITE" />
        </div>
      </header>
    </Container>
  );
};
