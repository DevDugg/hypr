"use client";

import { Button } from "@/components/ui/button";
import { CreatorsCard } from "./creators-card";
import { cn } from "@/lib/utils";
import { creatorsData } from "@/database/creators.data";
import { grotesk } from "@/lib/fonts";

const CreatorsBlock = () => {
  return (
    <>
      <div className="mt-[1.66vw] flex gap-[0.5vw]">
        {creatorsData.map((item, i) => (
          <CreatorsCard {...item} key={i} />
        ))}
      </div>

      <Button className={cn(grotesk.className, "w-full mt-[1.66vw] xl:mt-[4.16vw]")}>See all creators</Button>
    </>
  );
};

export default CreatorsBlock;
