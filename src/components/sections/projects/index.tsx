import { Button } from "@/components/ui/button";
import ProjectCard from "./project-card";
import SectionLayout from "@/components/layout/section-layout";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { projectsData } from "@/database/projects.data";

const Projects = () => {
  return (
    <SectionLayout
      id="projects"
      name="(Projects)"
      title="never miss a bit/"
      subtitle="From fast-growing brands to Fortune 50’s."
      className="text-WHITE"
    >
      <div className="flex flex-col gap-[2.08vw]">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:gap-y-6 xl:gap-x-4 xl:grid-cols-2 xl:mt-20">
          {projectsData.map((item, i) => (
            <ProjectCard {...item} key={i} />
          ))}
        </div>
        <Button className={cn("w-full !py-[1vw] !px-[2.08vw] text-[1.25vw] h-auto leading-none", grotesk.className)}>
          See all projects
        </Button>
      </div>

      <Button className={cn(grotesk.className, "w-full mt-[1.25vw]")}>See all projects</Button>
    </SectionLayout>
  );
};

export default Projects;
