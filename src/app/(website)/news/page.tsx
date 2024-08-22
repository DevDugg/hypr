import Container from "@/components/layout/container";
import NewsHero from "@/components/pages/news/news-hero";
import NewsItems from "@/components/pages/news/news-items";
import { monument } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const News = () => {
  return (
    <main className={cn("mt-[5.41vw]")}>
      <Container>
        <NewsHero />
        <NewsItems />
      </Container>
    </main>
  );
};

export default News;
