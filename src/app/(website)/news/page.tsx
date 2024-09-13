import Container from "@/components/layout/container";
import NewsHero from "@/components/pages/news/news-hero";
import NewsItems from "@/components/pages/news/news-items";
import { getNewsData } from "@/sanity/schemas/news";

const News = async () => {
  const { news } = await getNewsData(1, 9);
  return (
    <main>
      <Container>
        <NewsHero />
        <NewsItems news={news} />
      </Container>
    </main>
  );
};

export default News;
