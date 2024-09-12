import About from "@/components/sections/about";
import Creators from "@/components/sections/creators";
import { Hero } from "@/components/sections/hero";
import Need from "@/components/sections/need";
import News from "@/components/sections/news";
import Partners from "@/components/sections/partners";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/our-services";
import Socials from "@/components/sections/socials";
import { getHomePageData } from "@/sanity/schemas/home";

export default async function Home() {
  const homeData = await getHomePageData();

  const { latest_news, hero, services, projects, about, clients, creators } = homeData[0];
  return (
    <main className="home flex flex-col gap-[25.62vw] sm:gap-[20vw] overflow-hidden">
      {hero && <Hero hero={hero} />}

      {services && <Services services={services} />}

      {projects && <Projects projects={projects} />}

      {about && <About about={about} />}

      {latest_news && <News news={latest_news} />}

      {clients && <Partners clients={clients} />}

      {creators && <Creators creators={creators} />}

      <Need />

      <Socials />
    </main>
  );
}
