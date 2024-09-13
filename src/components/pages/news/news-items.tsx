import CustomButton from "@/components/shared/custom-button";
import { NEWS_QUERYResult } from "../../../../sanity.types";
import { NewsCard } from "@/components/sections/news/news-card";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface Props {
  news: NEWS_QUERYResult;
}

const NewsItems = ({ news }: Props) => {
  return (
    news && (
      <section>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[6.15vw] sm:gap-y-[1.25vw] sm:gap-x-[0.9vw] mb-[2.4vw]">
          {news.map((item, i) => (
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

        <CustomButton className={cn(grotesk.className, "hidden sm:block w-full")}>Load more</CustomButton>
      </section>
    )
  );
};

export default NewsItems;
