import About from "@/components/sections/about";
import AnimatedTitle from "@/components/animations/animated-title";
import Creators from "@/components/sections/creators";
import { Hero } from "@/components/sections/hero";
import Need from "@/components/sections/need";
import News from "@/components/sections/news";
import Partners from "@/components/sections/partners";
import Projects from "@/components/sections/projects";
import Services from "@/components/sections/our-services";
import Socials from "@/components/sections/socials";

export default function Home() {
  return (
    <main className="home flex flex-col gap-[25.62vw] sm:gap-[20vw]">
      <Hero />

      <Services />

      <Projects />

      <About />

      <News />

      <Partners />

      <Creators />

      <Need />

      <Socials />

      <AnimatedTitle children="HYPR" />
    </main>
  );
}
