import Container from "@/components/layout/container";
import WorkHero from "@/components/pages/work/work-hero";
import { getProjectsData } from "@/sanity/schemas/projects";

const Work = async () => {
  const { projects } = await getProjectsData(1, 2);
  return (
    <main>
      <Container>
        <WorkHero projects={projects} />
      </Container>
    </main>
  );
};

export default Work;
