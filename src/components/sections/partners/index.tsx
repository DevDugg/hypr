import PartnerIcon from "./partner-icon";
import Reveal from "@/components/animations/reveal";
import SectionLayout from "@/components/layout/section-layout";
import { partnersData } from "@/database/partners.data";

const Partners = () => {
  return (
    <SectionLayout id="partners" name="(partners)" title="our clients/" className="text-WHITE">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2.02vw] sm:gap-[0.52vw] lg:gap-0 mt-[3.33vw mb-[1.66vw] lg:gap-x-[0.416vw]">
        {partnersData.map((item, i) => (
          <Reveal key={i} animateOnView type="opacity" delay={i * 0.2}>
            <PartnerIcon {...item} active={i === i} />
          </Reveal>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Partners;
