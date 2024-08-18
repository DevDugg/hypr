import AboutDescription from '@/components/pages/about/about-description';
import AboutGallery from '@/components/pages/about/about-gallery';
import AboutHero from '@/components/pages/about/about-hero';
import AboutTeam from '@/components/pages/about/about-team';

const About = () => {
  return (
    <main>
      <AboutHero />

      <AboutDescription />

      <AboutTeam />

      <AboutGallery />
    </main>
  );
};

export default About;
