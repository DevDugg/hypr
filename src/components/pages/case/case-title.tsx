import SectionTitle from '@/components/titles/section-title';
import { frick } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React from 'react';

const CaseTitle = ({
  title,
  num,
  className,
}: {
  title: string;
  num: string;
  className?: string;
}) => {
  return (
    <div className={cn('flex', className)}>
      <SectionTitle className={cn(frick.className, 'mt-[1vw]')}>{title}</SectionTitle>
      <p className="font-bold size24 leading-[140%] text-WHITE">{num}</p>
    </div>
  );
};

export default CaseTitle;
