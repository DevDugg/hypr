"use client";

import { navData } from "@/database/navigation.data";
import Container from "../layout/container";
import Link from "next/link";
import { Button } from "../ui/button";
import localFont from "next/font/local";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const Header = () => {
  const pathname = usePathname();

  return (
    <Container>
      <header className="py-6 lg:py-[26px] flex items-center justify-between text-WHITE">
        <Link href={"/"} className="uppercase text-[40px] leading-none">
          HYPR
        </Link>

        <nav
          className={cn(
            "hidden lg:flex gap-10 font-medium border-WHITE border-[1px] text-[18px] leading-none px-6 py-4 rounded-full",
            grotesk.className
          )}
        >
          {navData.map((item, i) => (
            <Link
              key={i}
              href={item.path}
              className={clsx("", {
                "text-ACCENT": item.path === pathname,
              })}
            >
              {item.view}
            </Link>
          ))}
        </nav>

        <Button
          className={cn(
            "hidden lg:flex font-bold !text-[18px] !py-6 leading-[100%]",
            grotesk.className
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
