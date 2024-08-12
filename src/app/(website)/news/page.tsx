import Container from '@/components/layout/container';
import NewsHero from '@/components/pages/news/news-hero';
import NewsItems from '@/components/pages/news/news-items';

const News = () => {
  return (
    <main className="mt-[5.41vw]">
      <Container>
        <NewsHero />
        <NewsItems />
      </Container>
    </main>
  );
};

export default News;