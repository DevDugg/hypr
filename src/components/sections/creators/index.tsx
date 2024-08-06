import SectionLayout from '@/components/layout/section-layout';
import CreatorsBlock from './creators-block';

const Creators = () => {
  return (
    <SectionLayout
      id="creators"
      name="(news)"
      title="our creators/"
      subtitle="From fast-growing brands to Fortune 50’s."
      className="text-WHITE">
      <CreatorsBlock />
    </SectionLayout>
  );
};

export default Creators;
