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
      <div className="flex flex-col gap-[8.1vw] sm:gap-[1.66vw]">
        <div className="grid grid-cols-1 gap-[8.1vw] sm:gap-x-[0.83vw] sm:gap-y-[1vw] sm:grid-cols-2">
          {projectsData.map((item, i) => (
            <ProjectCard {...item} key={i} />
          ))}
        </div>
        <Button className={cn("w-full leading-none", grotesk.className)}>
          <Link href={"/works"}>See all projects</Link>
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Projects;
