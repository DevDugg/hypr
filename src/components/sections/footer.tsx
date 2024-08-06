import { footerList, footerList2 } from '@/database/footer.data';
import Container from '../layout/container';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';
import { ArrowBigUp, ArrowUp10Icon, ArrowUpIcon, ArrowUpToLine } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="text-WHITE bg-BLACK pt-[100px] pb-9 mt-[100px] xl:mt-[400px]">
      <Container className="flex flex-col gap-[100px]">
        <div className={cn('flex justify-between', grotesk.className)}>
          <div>
            <p className="mb-10 font-bold text-[20px]">(Sitemap)</p>

            <div className="flex flex-col gap-2 font-bold text-[30px]">
              {footerList.map((item, i) => (
                <Link key={i} href={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-10 font-bold text-[20px]">(Socials)</p>

            <div className="flex flex-col gap-2 font-bold text-[30px]">
              {footerList2.map((item, i) => (
                <Link key={i} href={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className=""></div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-[15vw] mb-20">hypr</div>

          <div className={cn('flex items-center justify-center gap-1', grotesk.className)}>
            Back to top <ArrowUpIcon size={12} className="-mb-1" />
          </div>

          <div className={cn(grotesk.className, 'font-bold')}>Copyright © hypr 2023</div>
        </div>
      </Container>
    </footer>
  );
};
