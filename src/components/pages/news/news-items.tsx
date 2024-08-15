import { NewsCard } from '@/components/sections/news/news-card';
import { Button } from '@/components/ui/button';
import { newsData } from '@/database/news.data';
import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const NewsItems = () => {
  return (
    <section className="mb-[20vw]">
      <div className="grid grid-cols-3 gap-y-[1.25vw] gap-x-[0.9vw] mb-[2.4vw]">
        {newsData.map((item, i) => (
          <NewsCard
            key={i}
            {...item}
            className="text-WHITE !w-[30.67vw]"
            imgClassName="w-full !h-[33.33vw]"
          />
        ))}
      </div>

      <Button className={cn(grotesk.className, 'w-full')}>Load more</Button>
    </section>
  );
};

export default NewsItems;
