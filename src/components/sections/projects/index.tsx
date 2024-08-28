import { Button } from "@/components/ui/button";
import { Link } from "next-view-transitions";
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
      <div className="flex flex-col gap-[1.66vw]">
        <div className="grid grid-cols-1 gap-[1.66vw] sm:gap-x-[0.83vw] sm:grid-cols-2 mt-[3.33vw]">
          {projectsData.map((item, i) => (
            <ProjectCard {...item} key={i} />
          ))}
        </div>
        <Button className={cn("w-full !py-[1vw] !px-[2.08vw] text-[1.25vw] h-auto leading-none", grotesk.className)}>
          <Link href={"/works"}>See all projects</Link>
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Projects;
