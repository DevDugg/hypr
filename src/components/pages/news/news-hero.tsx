import { cn } from "@/lib/utils";
import { getNewsPageData } from "@/sanity/schemas/news-page";
import { grotesk } from "@/lib/fonts";

const NewsHero = async () => {
  const data = await getNewsPageData();
  return (
    <section className="mb-[10.25vw] sm:mb-[7.81vw] mt-[10.25vw] sm:mt-0">
      <h2 className="text-[11.45vw] text-center text-ACCENT uppercase font-bold">insights</h2>
      {data && (
        <h1 className={cn("text-center text-WHITE font-semibold text-[4.1vw] sm:size40", grotesk.className)}>
          {data.description}
        </h1>
      )}
    </section>
  );
};

export default NewsHero;
