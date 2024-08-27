import { NewsCard } from "@/components/sections/news/news-card";
import { Button } from "@/components/ui/button";
import { newsData } from "@/database/news.data";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const NewsItems = () => {
  return (
    <section className="mb-[20vw]">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-[1.25vw] gap-x-[0.9vw] mb-[2.4vw]">
        {newsData.map((item, i) => (
          <NewsCard
            w={640}
            h={680}
            key={i}
            {...item}
            className="text-WHITE"
            imgClassName=""
          />
        ))}
      </div>

      <Button className={cn(grotesk.className, "hidden sm:blockw-full")}>
        Load more
      </Button>
    </section>
  );
};

export default NewsItems;
