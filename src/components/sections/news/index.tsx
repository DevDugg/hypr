import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import { Home_page } from "../../../../sanity.types";
import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import NewsBlock from "./news-block";
import SectionName from "@/components/titles/section-name";
import SectionSubtitle from "@/components/titles/section-subtitle";

interface NewsProps {
  news: Home_page["latest_news"];
}

const News = ({ news }: NewsProps) => {
  const { description, items, subtitle, title } = news!;
  return (
    <section className="flex flex-col" id="news">
      <Container className="text-WHITE">
        <div className="sm:hidden mb-[8.1vw]">
          <SectionName className="mb-[4.05vw]">{subtitle}</SectionName>
          <AnimatedTitle className="mb-[2.02vw]">{title!}</AnimatedTitle>
          <SectionSubtitle>{description}</SectionSubtitle>
        </div>

        <div className="hidden mb-[3.33vw] sm:flex items-end justify-between gap-[2.08vw]">
          <AnimatedTitle>{title!}</AnimatedTitle>
          <SectionName>{subtitle}</SectionName>
          <SectionSubtitle>{description}</SectionSubtitle>
        </div>
      </Container>
      {items && (
        <MouseFollowerWrapper state="drag">
          <NewsBlock news={items} />
        </MouseFollowerWrapper>
      )}
      <Container>
        <CustomButton className="w-full mt-[8.1vw] sm:mt-[2.08vw]">See all news</CustomButton>
      </Container>
    </section>
  );
};

export default News;
