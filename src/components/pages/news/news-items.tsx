import { NewsCard } from "@/components/sections/news/news-card";
import { Button } from "@/components/ui/button";
import { newsData } from "@/database/news.data";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const NewsItems = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-[6.15vw] sm:gap-y-[1.25vw] sm:gap-x-[0.9vw] mb-[2.4vw]">
        {newsData.map((item, i) => (
          <NewsCard
            w={640}
            h={680}
            key={i}
            {...item}
            className="text-WHITE w-[93vw] sm:w-[30.6vw]"
            imgClassName="w-full h-[100.96vw] sm:h-[33.33vw]"
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
