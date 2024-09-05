import Container from "@/components/layout/container";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
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
          className="w-full sm:h-[54.37vw] h-[62.52vw] overflow-hidden object-cover"
        />
      </div>

      <Container className={cn(grotesk.className, "text-WHITE")}>
        <p className="mb-[10.25vw] text-[5.12] font-bold">
          After working at global and national ad agencies, as well as our own
          studios, we can tell you that much of the creative business is built
          around bloat.
        </p>
        <div className="paragraph flex flex-col gap-[4.05vw] mb-[10.25vw]">
          <div>
            Agencies love shrouding the branding process in mystery. Fancy it
            up. Drag it out. Layer it with sign-offs and check-in meetings. But
            much of what happens behind the curtain is merely process for the
            sake of process. It’s the fluff that inflates fees.
          </div>
          <div>
            The complexity is built into the architecture, and clients are
            paying for it with every billable hour.
          </div>
        </div>

        <h5 className="paragraph !text-WHITE">Subscriptions slash waste.</h5>
        <div className="flex flex-col gap-[4.02vw]"></div>
      </Container>
    </section>
  );
};

export default DynamicHero;
