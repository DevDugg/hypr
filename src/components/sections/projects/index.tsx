import CustomButton from "@/components/shared/custom-button";
import { Link } from "next-view-transitions";
import MouseFollowerWrapper from "@/components/animations/mouse-follower-wrapper";
import ProjectCard from "./project-card";
import Reveal from "@/components/animations/reveal";
import SectionLayout from "@/components/layout/section-layout";
import { projectsData } from "@/database/projects.data";

const Projects = () => {
  return (
    <SectionLayout
      id="projects"
      name="(Projects)"
      title="never miss a bit/"
      subtitle="From fast-growing brands to Fortune 50's."
      className="text-WHITE"
    >
      <div className="flex flex-col gap-[8.1vw] sm:gap-[1.66vw]">
        <div className="grid grid-cols-1 gap-[8.1vw] sm:gap-x-[1.25vw] sm:gap-y-[2.08vw] sm:grid-cols-2">
          {projectsData.map((item, i) => (
            // <Reveal animateOnView key={i} delay={i * 0.2} duration={0.6}>
            <MouseFollowerWrapper key={i} state="open">
              <ProjectCard {...item} />
            </MouseFollowerWrapper>
            // </Reveal>
          ))}
        </div>
        <CustomButton fullWidth type="button">
          <Link href={"/works"}>See all projects</Link>
        </CustomButton>
      </div>
    </SectionLayout>
  );
};

export default Projects;
