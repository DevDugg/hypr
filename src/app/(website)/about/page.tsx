import AboutDescription from "@/components/pages/about/about-description";
import AboutGallery from "@/components/pages/about/about-gallery";
import AboutHero from "@/components/pages/about/about-hero";
import AboutTeam from "@/components/pages/about/about-team";
import { getAboutPageData } from "@/sanity/schemas/about-us";

const About = async () => {
  const data = await getAboutPageData();

  return (
    <main>
      {data && <AboutHero data={data} />}

      {data && <AboutDescription data={data} />}

      {data && <AboutTeam data={data} />}
      {data && <AboutGallery data={data} />}
    </main>
  );
};

export default About;
