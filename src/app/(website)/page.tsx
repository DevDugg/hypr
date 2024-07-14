import Container from '@/components/layout/container';
import { Hero } from '@/components/sections/hero/hero';

export default function Home() {
  return (
    <main className="home flex flex-col gap-[400px] overflow-x-hidden">
      <Hero />
    </main>
  );
}
