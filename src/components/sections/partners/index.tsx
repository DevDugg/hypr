import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";
import PartnerIcon from "./partner-icon";
import Reveal from "@/components/animations/reveal";
import SectionLayout from "@/components/layout/section-layout";
import { partnersData } from "@/database/partners.data";

interface PartnersProps {
  clients: NonNullable<HOME_PAGE_QUERYResult[number]["clients"]>;
}

const Partners = ({ clients }: PartnersProps) => {
  const { items, subtitle, title } = clients;
  return (
    subtitle &&
    title && (
      <SectionLayout id="partners" name={subtitle} title={title} className="text-WHITE">
        {items && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-[2.02vw] sm:gap-[0.52vw] lg:gap-0 mt-[3.33vw mb-[1.66vw] lg:gap-x-[0.416vw]">
            {items.map(
              (item, i) =>
                item && (
                  <Reveal key={i} animateOnView type="opacity" delay={i * 0.05}>
                    <PartnerIcon image={item.image} active={i === i} />
                  </Reveal>
                ),
            )}
          </div>
        )}
      </SectionLayout>
    )
  );
};

export default Partners;
