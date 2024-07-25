import SectionLayout from '@/components/layout/section-layout';
import NewsBlock from './news-block';

const News = () => {
  return (
    <section className="text-WHITE">
      <SectionLayout
        name="(News)"
        title="latest news/"
        subtitle="From fast-growing brands to Fortune 50’s.">
        <NewsBlock />
      </SectionLayout>
    </section>
  );
};

export default News;
