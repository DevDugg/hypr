import { HOME_PAGE_QUERYResult, Home_page } from "../../../../sanity.types";

import CustomButton from "@/components/shared/custom-button";
import { Link } from "next-view-transitions";
import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import ProjectCard from "./project-card";
import SectionLayout from "@/components/layout/section-layout";

interface ProjectsProps {
  projects: NonNullable<HOME_PAGE_QUERYResult[number]["projects"]>;
}

const Projects = ({ projects }: ProjectsProps) => {
  const { description, items, subtitle, title } = projects;
  return (
    title &&
    subtitle &&
    description &&
    items && (
      <SectionLayout id="projects" name={subtitle} title={title} subtitle={description} className="text-WHITE">
        <div className="flex flex-col gap-[8.1vw] sm:gap-[1.66vw]">
          <div className="grid grid-cols-1 gap-[8.1vw] sm:gap-x-[1.25vw] sm:gap-y-[2.08vw] sm:grid-cols-2">
            {items.map((item, i) =>
              i < 2 ? (
                <ProjectCard
                  key={item._id}
                  img={item.key_visuals![0].image}
                  slug={item.slug}
                  subtitle={item.short_description}
                  title={item.name}
                />
              ) : null,
            )}
          </div>
          <CustomButton fullWidth>
            <Link scroll={false} href={"/works"}>
              See all projects
            </Link>
          </CustomButton>
        </div>
      </SectionLayout>
    )
  );
};

export default Projects;
