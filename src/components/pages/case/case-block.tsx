"use client";

import Image from "next/image";
import { useState } from "react";
import { caseData } from "@/database/case.data";

const keys = ["key visual 1", "key visual 2", "key visual 3"];

const CaseBlock = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex">
      <div className="flex flex-col gap-[0.83vw]">
        {keys.map((item) => (
          <div className="size18 uppercase text-WHITE">{item}</div>
        ))}
      </div>

      <div className="flex">
        <div className="flex gap-[7.29vw]">
          <Image
            src={caseData[active].img}
            alt="image"
            width={320}
            height={480}
          />

          <div className="flex flex-col gap-[4vw]">
            <div className="flex text-GRAY gap-[1.25vw] font-medium leading-[140%] size18">
              <p>{caseData[active].texts[0].text}</p>
              <p>{caseData[active].texts[1].text}</p>
              <p className="uppercase ml-[1.25vw]">
                {caseData[active].texts[2].text}
              </p>
            </div>

            <div className="border-y w-fit border-STROKE">
              {caseData[active].block.map((item) => (
                <div className="flex items-start py-[0.83vw] font-semibold">
                  <h5 className="text-WHITE w-[10vw] size18">{item.title}</h5>
                  <p className="text-GRAY w-[10vw] text-[0.83vw]">
                    {item.text}
                  </p>
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
