"use client";

import { Button } from "@/components/ui/button";
import { CreatorsCard } from "./creators-card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { creatorsData } from "@/database/creators.data";
import { grotesk } from "@/lib/fonts";

const CreatorsBlock = () => {
  return (
    <>
      <div className="mt-[3.33vw] flex gap-[0.5vw]">
        {creatorsData.map((item, i) => (
          <CreatorsCard {...item} key={i} />
        ))}
      </div>

      <Link href={"/creators"}>
        <Button
          className={cn(grotesk.className, "w-full mt-[1.66vw] sm:mt-[4.16vw]")}
        >
          See all creators
        </Button>
      </Link>
    </>
  );
};

export default CreatorsBlock;
