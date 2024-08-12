import SectionLayout from '@/components/layout/section-layout';
import { projectsData } from '@/database/projects.data';
import ProjectCard from './project-card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';

const Projects = () => {
  return (
    <SectionLayout
      id="projects"
      name="(Projects)"
      title="never miss a bit/"
      subtitle="From fast-growing brands to Fortune 50’s."
      className="text-WHITE">
      <div className="grid grid-cols-1 gap-y-[1.25vw] gap-x-[0.8vw] xl:grid-cols-2 mt-[4vw]">
        {projectsData.map((item, i) => (
          <ProjectCard {...item} key={i} />
        ))}
      </div>

      <Button className={cn(grotesk.className, 'w-full mt-[1.25vw]')}>See all projects</Button>
    </SectionLayout>
  );
};

export default Projects;
