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
            (i === 0 && { translateY: '18.75vw' }) ||
            (i === 1 && { translateY: '12.5vw' }) ||
            (i === 2 && { translateY: '6.25vw' })
          }
          animate={
            (i === 0 && { translateY: '18.75vw' }) ||
            (i === 1 && { translateY: '12.5vw' }) ||
            (i === 2 && { translateY: '6.25vw' })
          }
          className={clsx('size160 rounded-[40px_40px_0_0] py-[4vw] relative -z-10', {
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
