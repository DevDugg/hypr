import SectionLayout from "@/components/layout/section-layout";
import { projectsData } from "@/database/projects.data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <SectionLayout
      name="(Projects)"
      title="never miss a bit/"
      subtitle="From fast-growing brands to Fortune 50’s."
    >
      <div className="flex flex-col gap-8 mt-8">
        {projectsData.map((item, i) => (
          <ProjectCard {...item} key={i} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Projects;
