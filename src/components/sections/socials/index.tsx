"use client";

import Container from "@/components/layout/container";
import { socialsData } from "@/database/socials.data";
import { cn } from "@/lib/utils";
import clsx from "clsx";
import { motion } from "framer-motion";

const Socials = ({ className }: { className?: string }) => {
  return (
    <section className={cn("h-[33vw] relative", className)}>
      {socialsData.map((item, i) => (
        <motion.div
          key={i}
          // animate={
          //   (i === 0 && { bottom: "18.75vw" }) ||
          //   (i === 1 && { bottom: "12.5vw" }) ||
          //   (i === 2 && { bottom: "6.25vw" })
          // }
          className={clsx(
            "size160 rounded-[2.08vw_2.08vw_0_0] left-0 transition-all duration-300 ease-in-out right-0 py-[4vw] absolute z-[5]",
            {
              "bg-OFF_WHITE bottom-[10vw] hover:bottom-[15vw]": i === 0,
              "bg-[#87ADF9] bottom-0 hover:bottom-[5vw]": i === 1,
              "bg-SECONDARY -bottom-[10vw] hover:-bottom-[5vw]": i === 2,
            }
          )}
        >
          <Container>{item.name}</Container>
        </motion.div>
      ))}
    </section>
  );
};

export default Socials;
