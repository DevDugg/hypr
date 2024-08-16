"use client";

import { footerList, footerList2 } from "@/database/footer.data";
import Container from "../layout/container";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { ArrowUpIcon } from "lucide-react";
import Logo from "../layout/logo";

export const Footer = () => {
  return (
    <footer className="text-WHITE bg-BLACK pt-[5vw] pb-[2.5vw] relative z-10">
      <Container className="flex flex-col gap-[10vw]">
        <div className={cn("flex gap-[24.27vw]", grotesk.className)}>
          <div>
            <p className="mb-[2vw] font-bold size24">(Sitemap)</p>

            <div className="flex size24 flex-col gap-[1.25vw] font-bold">
              {footerList.map((item, i) => (
                <Link key={i} href={item.link} className="size40">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-[2vw] font-bold size24">(Socials)</p>

            <div className="flex size24 flex-col gap-[1.25vw] font-bold">
              {footerList2.map((item, i) => (
                <Link key={i} href={item.link} className="size40">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end gap-[12.29vw]">
          <Logo className="flex-[1_0_46.87vw]" />

          <div className="flex gap-[13.69vw] flex-[1_0_34.58vw]">
            <div
              className={cn(
                "flex items-center flex-[0_1_auto] cursor-pointer font-bold size24 justify-center gap-[0.2vw]",
                grotesk.className
              )}
            >
              Back to top <ArrowUpIcon className="-mb-[0.2vw] size-[1.25vw]" />
            </div>

            <div
              className={cn(
                grotesk.className,
                "font-bold size24 flex-[0_1_auto]"
              )}
            >
              Copyright © hypr 2023
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
