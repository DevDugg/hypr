import About from "@/components/sections/about";
import Creators from "@/components/sections/creators";
import Need from "@/components/sections/need";
import News from "@/components/sections/news";
import Services from "@/components/sections/our-services";
import Partners from "@/components/sections/partners";
import Projects from "@/components/sections/projects";
import Socials from "@/components/sections/socials";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="home flex flex-col gap-[100px] xl:gap-[400px]">
      <Hero />

      <Services />

      <Projects />

      <About />

      <News />

      <Partners />

      <Creators />

      <Need />

      <Socials />
    </main>
  );
}
