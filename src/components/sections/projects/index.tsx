import { Button } from '@/components/ui/button';
import ProjectCard from './project-card';
import SectionLayout from '@/components/layout/section-layout';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';
import { projectsData } from '@/database/projects.data';

const Projects = () => {
  return (
    <SectionLayout
      id="projects"
      name="(Projects)"
      title="never miss a bit/"
      subtitle="From fast-growing brands to Fortune 50’s."
      className="text-WHITE">
      <div className="flex flex-col gap-[2.08vw]">
        <div className="grid grid-cols-1 gap-[1.66vw] xl:gap-x-[0.83vw] xl:grid-cols-2 mt-[4vw]">
          {projectsData.map((item, i) => (
            <ProjectCard {...item} key={i} />
          ))}
        </div>
        <Button
          className={cn(
            'w-full !py-[1vw] !px-[2.08vw] text-[1.25vw] h-auto leading-none',
            grotesk.className,
          )}>
          See all projects
        </Button>
      </div>
    </SectionLayout>
  );
};

export default Projects;
