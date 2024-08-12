import { frick } from '@/lib/fonts';
import { cn } from '@/lib/utils';

const SectionTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h3 className={cn(className, 'text-WHITE size80 leading-none uppercase')}>{children}</h3>;
};

export default SectionTitle;
