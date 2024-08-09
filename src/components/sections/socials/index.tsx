'use client';

import Container from '@/components/layout/container';
import { socialsData } from '@/database/socials.data';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Socials = () => {
  return (
    <div>
      {socialsData.map((item, i) => (
        <motion.div
          key={i}
          initial={
            (i === 0 && { translateY: 360 }) ||
            (i === 1 && { translateY: 240 }) ||
            (i === 2 && { translateY: 120 })
          }
          className={clsx('text-[calc(4.5vw+4.5vh)] rounded-[40px_40px_0_0] pt-20', {
            'bg-OFF_WHITE ': i === 0,
            'bg-[#87ADF9]': i === 1,
            'bg-SECONDARY': i === 2,
          })}>
          <Container>{item.name}</Container>
        </motion.div>
      ))}
    </div>
  );
};

export default Socials;
