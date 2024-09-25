"use client";

import React, { useState } from "react";
import { footerList, footerList2 } from "@/database/footer.data";

import FooterList from "./footer-list";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const PreFooter = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("flex gap-[24.27vw]", grotesk.className)}>
      <div>
        <p className="mb-[6.15vw] sm:mb-[2vw] font-medium text-[4.05vw] sm:size24">
          (Sitemap)
        </p>

        <FooterList
          active={active}
          setActive={setActive}
          items={footerList}
          className="flex text-[4.61vw] sm:size40 flex-col gap-[4.05vw] sm:gap-[1.25vw] font-bold leading-none"
        />
      </div>

      <div>
        <p className="mb-[6.15vw] sm:mb-[2vw] font-medium text-[4.05vw] sm:size24">
          (Socials)
        </p>

        <FooterList
          active={active}
          setActive={setActive}
          items={footerList2}
          className="flex text-[4.61vw] sm:size40 flex-col gap-[4.05vw] sm:gap-[1.25vw] font-bold leading-none"
        />
      </div>
    </div>
  );
};

export default PreFooter;
