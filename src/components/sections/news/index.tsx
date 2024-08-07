import SectionLayout from '@/components/layout/section-layout';
import NewsBlock from './news-block';

const News = () => {
  return (
    <SectionLayout
      id="news"
      name="(News)"
      title="latest news/"
      subtitle="From fast-growing brands to Fortune 50’s."
      className="text-WHITE">
      <NewsBlock />
    </SectionLayout>
  );
};

export default News;
