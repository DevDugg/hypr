import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import NewsBlock from "./news-block";
import SectionLayout from "@/components/layout/section-layout";

const News = () => {
  return (
    <div className="flex flex-col gap-[2.08vw]">
      <SectionLayout
        id="news"
        name="(News)"
        title="latest news/"
        subtitle="From fast-growing brands to Fortune 50’s."
        className="text-WHITE"
      ></SectionLayout>
      <MouseFollowerWrapper state="drag">
        <NewsBlock />
      </MouseFollowerWrapper>
    </div>
  );
};

export default News;
