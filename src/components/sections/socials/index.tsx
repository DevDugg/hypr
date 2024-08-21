"use client";

import Container from "@/components/layout/container";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { socialsData } from "@/database/socials.data";

const Socials = ({ className }: { className?: string }) => {
  return (
    <section className={cn("h-[33vw] relative", className)}>
      {socialsData.map((item, i) => (
        <motion.a
          key={i}
          // animate={
          //   (i === 0 && { bottom: "18.75vw" }) ||
          //   (i === 1 && { bottom: "12.5vw" }) ||
          //   (i === 2 && { bottom: "6.25vw" })
          // }
          href={item.link}
          rel="noopener noreferrer"
          className={clsx(
            "rounded-[2.08vw_2.08vw_0_0] left-0 transition-all duration-300 ease-in-out right-0 py-[4vw] absolute z-[5] monument text-[5.98vw]",
            {
              "bg-OFF_WHITE bottom-[13vw] hover:bottom-[15vw]": i === 0,
              "bg-[#87ADF9] bottom-[5vw] hover:bottom-[8vw]": i === 1,
              "bg-SECONDARY -bottom-[3vw]": i === 2,
            },
          )}
        >
          <Container>
            <span className="size-full">{item.name}</span>
          </Container>
        </motion.a>
      ))}
    </section>
  );
};

export default Socials;
