import { cn } from '@/lib/utils';

const SectionName = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn(className, 'text-ACCENT text-[14px] leading-none font-normal uppercase')}>
      {children}
    </h3>
  );
};

export default SectionName;
