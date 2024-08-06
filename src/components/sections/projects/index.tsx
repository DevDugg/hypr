import SectionLayout from '@/components/layout/section-layout';
import { projectsData } from '@/database/projects.data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <SectionLayout
      id="projects"
      name="(Projects)"
      title="never miss a bit/"
      subtitle="From fast-growing brands to Fortune 50’s."
      className="text-WHITE">
      <div className="grid grid-cols-1 gap-8 mt-8 xl:gap-y-6 xl:gap-x-4 xl:grid-cols-2 xl:mt-20">
        {projectsData.map((item, i) => (
          <ProjectCard {...item} key={i} />
        ))}
      </div>
    </SectionLayout>
  );
};

export default Projects;
