import { navData } from '@/database/navigation.data';
import Container from '../layout/container';
import Link from 'next/link';
import { Button } from '../ui/button';

export const Header = () => {
  return (
    <Container className="">
      <header className="pt-6 pb-10 lg:py-[26px] flex items-center justify-between text-WHITE">
        <div className="uppercase text-[40px] leading-none">HYPR</div>

        <nav className="hidden lg:flex gap-10 border-WHITE border-[1px] text-[18px] leading-none px-6 py-4 rounded-full">
          {navData.map((item, i) => (
            <Link key={i} href={''}>
              {item.view}
            </Link>
          ))}
        </nav>

        <Button className="hidden lg:flex">Contact us</Button>

        <div className="size-6 flex flex-col justify-center items-center gap-1 cursor-pointer lg:hidden">
          <div className="w-[18px] h-0.5 bg-WHITE" />
          <div className="w-[18px] h-0.5 bg-WHITE" />
        </div>
      </header>
    </Container>
  );
};
