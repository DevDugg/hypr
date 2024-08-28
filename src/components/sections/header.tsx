"use client";

import { Button } from "../ui/button";
import Container from "../layout/container";
import { Link } from "next-view-transitions";
import MouseFollowerWrapper from "../animations/mouse-follower-wrapper";
import NavLinkAnimated from "./header/nav-link-animated";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { navData } from "@/database/navigation.data";
import { usePathname } from "next/navigation";

export const Header = () => {
  const pathname = usePathname();

  return (
    <header className="absolute top-0 left-0 right-0">
      <Container className="flex items-center pt-[1.25vw] justify-between text-WHITE">
        <Link href={"/"} className="uppercase text-[2.08vw] leading-none font-bold">
          HYPR
        </Link>

        <MouseFollowerWrapper state="disabled">
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
                  "text-ACCENT": item.path === pathname,
                })}
              />
            ))}
          </nav>
        </MouseFollowerWrapper>

        <Link href={"/contacts"}>
          <Button
            className={cn(
              "hidden lg:flex font-bold !text-[0.9375vw] !px-[2.08vw] leading-[100%] rounded-[10.41vw]",
              grotesk.className,
            )}
          >
            Contact us
          </Button>
        </Link>

        <div className="size-6 flex flex-col justify-center items-center gap-1 cursor-pointer lg:hidden">
          <div className="w-[18px] h-0.5 bg-WHITE" />
          <div className="w-[18px] h-0.5 bg-WHITE" />
        </div>
      </Container>
    </header>
  );
};
