import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import NewsBlock from "./news-block";
import SectionLayout from "@/components/layout/section-layout";
import SectionName from "@/components/titles/section-name";
import SectionSubtitle from "@/components/titles/section-subtitle";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const News = () => {
  return (
    <section className="flex flex-col" id="news">
      <Container className="text-WHITE">
        <div className="sm:hidden mb-[8.1vw]">
          <SectionName className="mb-[4.05vw]">(News)</SectionName>
          <AnimatedTitle className="mb-[2.02vw]">latest news/</AnimatedTitle>
          <SectionSubtitle>From fast-growing brands to Fortune 50’s.</SectionSubtitle>
        </div>

        <div className="hidden mb-[3.33vw] sm:flex items-end justify-between gap-[2.08vw]">
          <AnimatedTitle>latest news/</AnimatedTitle>
          <SectionName>(News)</SectionName>
          <SectionSubtitle>From fast-growing brands to Fortune 50’s.</SectionSubtitle>
        </div>
      </Container>
      <MouseFollowerWrapper state="drag">
        <NewsBlock />
      </MouseFollowerWrapper>
      <Container>
        <CustomButton className="w-full mt-[8.1vw] sm:mt-[2.08vw]">See all news</CustomButton>
      </Container>
    </section>
  );
};

export default News;
