import { cn } from '@/lib/utils';
import SectionName from '../titles/section-name';
import SectionTitle from '../titles/section-title';

const SectionLayout = ({
  className,
  children,
  title,
  name,
}: {
  className?: string;
  children: React.ReactNode;
  title?: string;
  name: string;
}) => {
  return (
    <section className={cn(className, 'text-WHITE')}>
      <div className="flex flex-col gap-2">
        {name && <SectionName>{name}</SectionName>}
        {title && <SectionTitle>{title}</SectionTitle>}
      </div>

      <div className="">{children}</div>
    </section>
  );
};

export default SectionLayout;
