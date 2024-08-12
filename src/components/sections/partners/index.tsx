import SectionLayout from '@/components/layout/section-layout';
import { partnersData } from '@/database/partners.data';
import PartnerIcon from './partner-icon';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';

const Partners = () => {
  return (
    <SectionLayout id="partners" name="(partners)" title="our clients/" className="text-WHITE">
      <div className="grid grid-cols-2 mt-[4vw] lg:grid-cols-4 gap-[0.4vw] my-[1.5vw] mb-[2vw]">
        {partnersData.map((item, i) => (
          <PartnerIcon key={i} {...item} active={i === i} />
        ))}
      </div>

      <Button className={cn('w-full', grotesk.className)}>Contact us</Button>
    </SectionLayout>
  );
};

export default Partners;
