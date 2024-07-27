import Container from '@/components/layout/container';
import About from '@/components/sections/about';
import Creators from '@/components/sections/creators';
import Hero from '@/components/sections/hero';
import News from '@/components/sections/news';
import Services from '@/components/sections/our-services';
import Partners from '@/components/sections/partners';
import Projects from '@/components/sections/projects';

export default function Home() {
  return (
    <main className="home flex flex-col gap-[100px] overflow-x-hidden">
      <Hero />

      <Services />

      <Projects />

      <About />

      <News />

      <Partners />

      <Creators />
    </main>
  );
}
