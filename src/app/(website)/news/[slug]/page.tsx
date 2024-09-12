import DynamicArticles from "@/components/pages/dynamic/dynamic-articles";
import DynamicHero from "@/components/pages/dynamic/dynamic-hero";
import { getNewsItemData } from "@/sanity/schemas/news";

interface NewsItemPageParams {
  params: {
    slug: string;
  };
}

const NewsItemPage = async ({ params }: NewsItemPageParams) => {
  const { slug } = params;
  const news = await getNewsItemData(slug);
  console.log(news);
  return (
    <main className="flex flex-col gap-[20.5vw] sm:gap-[5.2vw] mt-[10.25vw] sm:mt-[5.2vw]">
      <DynamicHero item={news} />
      {/* <DynamicArticles /> */}
    </main>
  );
};

export default NewsItemPage;
