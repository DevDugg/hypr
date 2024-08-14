import { cn } from '@/lib/utils';

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h3 className={cn(className, 'size80 text-WHITE leading-none font-normal uppercase')}>
      {children}
    </h3>
  );
};

export default SectionTitle;
