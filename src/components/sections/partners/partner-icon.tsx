import clsx from 'clsx';
import Image from 'next/image';

const PartnerIcon = ({ icon, active }: { icon: string; active: boolean }) => {
  return (
    <div
      className={clsx('px-3.5 transition-all py-[5px] border-[0.5px] border-[#4C4C4C]', {
        'hover:bg-ACCENT hover:border-opacity-0 rounded-md': active,
      })}>
      <Image width={300} height={300} className="mx-auto" src={icon} alt="partner icon" />
    </div>
  );
};

export default PartnerIcon;
