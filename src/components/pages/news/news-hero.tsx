import { cn } from "@/lib/utils";
import { getNewsPageData } from "@/sanity/schemas/news-page";
import { grotesk } from "@/lib/fonts";

const NewsHero = async () => {
  const data = await getNewsPageData();
  return (
    <section className="mb-[10.25vw] sm:mb-[7.81vw] mt-[10.25vw] sm:mt-0">
      <h1 className="text-[11.45vw] text-center text-ACCENT uppercase font-bold">insights</h1>
      {data && (
        <p className={cn("text-center text-WHITE font-semibold text-[4.1vw] sm:size40", grotesk.className)}>
          {data.description}
        </p>
      )}
    </section>
  );
};

export default NewsHero;
