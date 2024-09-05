import Container from "@/components/layout/container";
import Image from "next/image";
import React from "react";

const DynamicHero = () => {
  return (
    <section>
      <Container>
        <h2 className="text-ACCENT font-bold uppercase text-[6.15vw] sm:size80 mb-[6.15vw] sm:mb-[2.08vw]">
          How Subscriptions End Agency Excess.
        </h2>
      </Container>
      <div className="sm:container mb-[12.3vw] sm:mb-[4.16vw]">
        <Image
          src={"/images/case/case-pattern.png"}
          width={1800}
          height={1044}
          alt="image"
          className="w-full h-[54.37vw]"
        />
      </div>
    </section>
  );
};

export default DynamicHero;
