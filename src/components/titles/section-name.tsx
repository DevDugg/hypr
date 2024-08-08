import { cn } from '@/lib/utils';

const SectionName = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4
      className={cn(
        className,
        'text-ACCENT text-[10px] lg:text-[24px] leading-none font-normal uppercase',
      )}>
      {children}
    </h4>
  );
};

export default SectionName;
