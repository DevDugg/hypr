import CaseGallery from '@/components/pages/case/case-gallery';
import CaseHero from '@/components/pages/case/case-hero';
import CaseSlider from '@/components/pages/case/case-slider';
import CaseVideos from '@/components/pages/case/case-videos';

const Case = () => {
  return (
    <main className="flex flex-col gap-[13.02vw]">
      <CaseHero />

      <CaseVideos />

      <CaseGallery />

      <CaseSlider />
    </main>
  );
};

export default Case;
