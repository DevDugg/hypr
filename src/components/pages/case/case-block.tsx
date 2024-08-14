"use client";

import Image from "next/image";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";

const keys = [
  { title: "key visual 1", img: "/images/case/1.png" },
  { title: "key visual 1", img: "/images/case/1.png" },
  { title: "key visual 1", img: "/images/case/1.png" },
];

const infoData = [
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

const CaseBlock = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex">
      <div className="flex flex-col flex-[1_0_11.66vw] gap-[0.83vw] mr-[0.83vw]">
        {keys.map((item, i) => (
          <div key={i} className="flex items-center">
            <div onMouseMove={() => setActive(i)} className="size18 w-[7vw] uppercase text-WHITE">
              {item.title}
            </div>

            <motion.span
              initial={active === i ? { opacity: 1 } : { opacity: 0 }}
              animate={active === i ? { opacity: 1 } : { opacity: 0 }}
              className="w-[5vw] h-[1px] bg-GRAY"
            />
          </div>
        ))}
      </div>

      <div className="flex-[1_0_16.66vw] mr-[7.18vw]">
        <Image src={keys[active].img} alt="image" width={320} height={480} className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-[1_0_57.29vw]">
        <div className="flex gap-[7.29vw]">
          <div className="flex flex-col gap-[4vw]">
            <div className="flex text-GRAY gap-[1.25vw] font-medium leading-[140%] size18 w-full">
              <p className="size18 flex-[1_0_24.53vw]">
                HYPR agency is a branding and digital marketing studio from Australia. Partnering with companies that
                need to transform their brand, attract the right audience, and radically stand out. We’re a nimble team
                of designers and creative developers, focused on creating uniquely human and culturally informed. Read
                more
              </p>
              <p className="flex-[1_0_24.53vw]">
                HYPR agency is a branding and digital marketing studio from Australia. Partnering with companies that
                need to transform their brand, attract the right audience, and radically stand out. We’re a nimble team
                of designers and creative developers, focused on creating uniquely human and culturally informed. Read
                more
              </p>
              <p className="uppercase ml-[1.25vw]">storyline</p>
            </div>

            <div className="border-y border-STROKE w-[21vw]">
              {infoData.map((item, i) => (
                <div
                  key={i}
                  className={clsx("flex items-start py-[0.83vw] font-semibold", {
                    "border-b border-STROKE": i !== 3,
                  })}
                >
                  <h5 className="text-WHITE w-[10vw] size18">{item.title}</h5>
                  <p className="text-GRAY w-[11vw] text-[0.83vw]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseBlock;
