import CaseGallery from "@/components/pages/case/case-gallery";
import CaseHero from "@/components/pages/case/case-hero";
import CaseSlider from "@/components/pages/case/case-slider";
import CaseVideos from "@/components/pages/case/case-videos";
import Reveal from "@/components/animations/reveal";
import { getProjectItem } from "@/sanity/schemas/projects";

interface CaseParams {
  params: {
    slug: string;
  };
}

const Case = async ({ params }: CaseParams) => {
  const { slug } = params;
  const project = await getProjectItem(slug);
  return (
    <main className="flex flex-col sm:gap-[13.02vw] gap-[25.62vw]">
      {project ? (
        <>
          <CaseHero project={project} />

          <Reveal animateOnView>
            <CaseVideos project={project} />
          </Reveal>

          <CaseGallery project={project} />

          {/* <CaseSlider /> */}
        </>
      ) : (
        <h1>Not Found</h1>
      )}
    </main>
  );
};

export default Case;
