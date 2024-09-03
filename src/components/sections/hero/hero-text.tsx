"use client";

import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import { colors } from "@/config/colors";
import { motion } from "framer-motion";

const HeroText = () => {
  return (
    <motion.div
      className="overflow-hidden"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="bg-ACCENT overflow-hidden pt-[3.07vw] sm:pt-[1.25vw] pb-[2.05vw] sm:pb-0">
        <Container>
          <AnimatedTitle
            block={colors.ACCENT}
            className="inline-block w-full leading-none size260 text-center whitespace-nowrap monument text-BLACK"
          >
            we build
          </AnimatedTitle>
        </Container>
      </div>
    </motion.div>
  );
};
export default HeroText;
