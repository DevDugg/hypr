'use client';

import { footerList, footerList2 } from '@/database/footer.data';
import Container from '../layout/container';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';
import { ArrowUpIcon } from 'lucide-react';
import Logo from '../layout/logo';

export const Footer = () => {
  return (
    <footer className="text-WHITE bg-BLACK pt-[100px] pb-9">
      <Container className="flex flex-col gap-[100px]">
        <div className={cn('flex gap-[25%]', grotesk.className)}>
          <div>
            <p className="mb-10 font-bold">(Sitemap)</p>

            <div className="flex flex-col gap-2 font-bold h5">
              {footerList.map((item, i) => (
                <Link key={i} href={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-10 font-bold">(Socials)</p>

            <div className="flex h5 flex-col gap-2 font-bold">
              {footerList2.map((item, i) => (
                <Link key={i} href={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between items-end">
          <Logo w={900} h={350} className="flex-[0_1_45%]" />

          <div
            className={cn(
              'flex items-center flex-[0_1_20%] cursor-pointer font-bold h5 justify-center gap-1',
              grotesk.className,
            )}>
            Back to top <ArrowUpIcon size={20} className="-mb-1" />
          </div>

          <div className={cn(grotesk.className, 'font-bold h5 flex-[0_1_20%]')}>
            Copyright © hypr 2023
          </div>
        </div>
      </Container>
    </footer>
  );
};
