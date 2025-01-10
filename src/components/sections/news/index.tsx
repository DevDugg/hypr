import { HOME_PAGE_QUERYResult, Home_page } from "../../../../sanity.types";

import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import { Link } from "next-view-transitions";
import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import NewsBlock from "./news-block";
import SectionName from "@/components/titles/section-name";
import SectionSubtitle from "@/components/titles/section-subtitle";

interface NewsProps {
  news: HOME_PAGE_QUERYResult[number]["latest_news"];
}

const News = ({ news }: NewsProps) => {
  const { description, items, subtitle, title } = news!;
  return (
    <section className="flex flex-col" id="news">
      <Container className="text-WHITE">
        <div className="sm:hidden mb-[8.1vw]">
          <SectionName className="mb-[4.05vw]">{subtitle}</SectionName>
          <AnimatedTitle className="mb-[2.02vw] max-sm:text-[6.25vw]">{title!}</AnimatedTitle>
          <SectionSubtitle>{description}</SectionSubtitle>
        </div>

        <div className="hidden mb-[3.33vw] sm:flex items-end justify-between gap-[2.08vw]">
          <AnimatedTitle>{title!}</AnimatedTitle>
          <SectionName>{subtitle}</SectionName>
          <SectionSubtitle>{description}</SectionSubtitle>
        </div>
      </Container>
      {items && <NewsBlock news={items} />}
      <Container>
        <CustomButton className="w-[92.84vw] mt-[8.1vw] sm:mt-[2.08vw]">
          <Link scroll={false} href={"/insights"}>
            See all news
          </Link>
        </CustomButton>
      </Container>
    </section>
  );
};

export default News;
