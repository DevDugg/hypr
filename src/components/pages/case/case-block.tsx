"use client";

import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import { PROJECT_ITEM_QUERYResult } from "../../../../sanity.types";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";

const keys = [
  { title: "key visual 1", img: "/images/case/1.png" },
  { title: "key visual 1", img: "/images/case/slider/1.png" },
  { title: "key visual 1", img: "/images/case/slider/4.png" },
];

export const infoData = [
  {
    title: "Type",
    text: "Agency",
  },
  {
    title: "Services",
    text: "Marketing, Brand identity, Visual identity, Videography",
  },
  {
    title: "Generated over",
    text: "200$+",
  },
  {
    title: "Label",
    text: "Pony canyon Inc",
  },
];

interface CaseBlockProps {
  className: string;
  project: PROJECT_ITEM_QUERYResult[number];
}

const CaseBlock = ({ className, project }: CaseBlockProps) => {
  const [active, setActive] = useState(0);

  return (
    project && (
      <div className={cn(className)}>
        {project.key_visuals && (
          <div className="flex flex-col flex-[1_0_11.66vw] gap-[0.83vw] mr-[0.83vw] cursor-default">
            {project.key_visuals.map((item, i) => (
              <div key={i} className="flex items-center">
                <div
                  onMouseMove={() => setActive(i)}
                  className={clsx(
                    "size18 w-[7vw] uppercase transition-all duration-300",

                    active !== i ? "text-GRAY" : "text-WHITE"
                  )}
                >
                  {item.name}
                </div>

                <motion.span
                  initial={
                    active === i
                      ? { width: "4.5vw", opacity: 1 }
                      : { width: 0, opacity: 0 }
                  }
                  animate={
                    active === i
                      ? { width: "4.5vw", opacity: 1 }
                      : { width: 0, opacity: 0 }
                  }
                  className="w-[4.5vw] h-[1px] bg-GRAY origin-left"
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            ))}
          </div>
        )}

        <div className="flex-[1_0_16.66vw] mr-[7.18vw] h-[25vw] relative overflow-hidden">
          {project.key_visuals && (
            <AnimatePresence>
              {project.key_visuals.map(
                (item, i) =>
                  i === active && (
                    <motion.div
                      key={i}
                      initial={{
                        height: 0,
                        zIndex: 5,
                        opacity: 0,
                      }}
                      animate={{
                        height: "100%",
                        zIndex: 10,
                        opacity: 1,
                      }}
                      exit={{ height: 0, zIndex: 5 }}
                      // transition={{ duration: 0.3 }}
                      className="w-full h-full absolute"
                    >
                      {item.image && (
                        <Image
                          src={urlFor(item.image).size(320, 480).url()}
                          alt="image"
                          width={320}
                          height={480}
                          className="h-full w-full object-cover"
                        />
                      )}
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          )}
        </div>

        <div className="flex flex-[1_0_57.29vw]">
          <div className="flex gap-[7.29vw]">
            <div className="flex flex-col gap-[4vw]">
              <div className="flex text-GRAY gap-[1.25vw] font-medium leading-[140%] size18 w-full">
                {project.description_1 && (
                  <p className="size18 flex-[1_0_24.53vw]">
                    {project.description_1}
                  </p>
                )}
                {project.description_1 && (
                  <p className="flex-[1_0_24.53vw]">{project.description_2}</p>
                )}

                <p className="uppercase ml-[1.25vw]">storyline</p>
              </div>

              <div className="border-y border-STROKE w-[21vw]">
                {infoData.map((item, i) => (
                  <div
                    key={i}
                    className={clsx(
                      "flex items-start py-[0.83vw] font-semibold",
                      {
                        "border-b border-STROKE": i !== 3,
                      }
                    )}
                  >
                    <h5 className="text-WHITE w-[10vw] size18">{item.title}</h5>
                    <p className="text-GRAY w-[11vw] text-[0.83vw]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default CaseBlock;
