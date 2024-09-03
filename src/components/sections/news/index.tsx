import CustomButton from "@/components/shared/custom-button";
import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import NewsBlock from "./news-block";
import SectionLayout from "@/components/layout/section-layout";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const News = () => {
  return (
    <div className="flex flex-col gap-[2.08vw]">
      <SectionLayout
        id="news"
        name="(News)"
        title="latest news/"
        subtitle="From fast-growing brands to Fortune 50’s."
        className="text-WHITE"
      >
        <MouseFollowerWrapper state="drag">
          <NewsBlock />
        </MouseFollowerWrapper>
        <CustomButton className={cn(grotesk.className, "w-full mt-[8.1vw] sm:mt-[2.08vw]")}>See all news</CustomButton>
      </SectionLayout>
    </div>
  );
};

export default News;
