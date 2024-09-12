import CreatorsBlock from "./creators-block";
import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";
import SectionLayout from "@/components/layout/section-layout";

interface CreatorsProps {
  creators: NonNullable<HOME_PAGE_QUERYResult[number]["creators"]>;
}

const Creators = ({ creators }: CreatorsProps) => {
  const { description, items, subtitle, title } = creators;
  return (
    <SectionLayout id="creators" name={subtitle} title={title} subtitle={description} className="text-WHITE">
      {items && <CreatorsBlock creators={items} />}
    </SectionLayout>
  );
};

export default Creators;
