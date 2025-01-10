"use client";

import { MotionConfig, motion } from "framer-motion";

import { Link } from "next-view-transitions";
import { defaultTransition } from "@/config/transitions";

export interface FooterListItem {
  name: string;
  href: string;
}

interface FooterListProps {
  items: FooterListItem[];
  className?: string;
  active: string | null;
  setActive: (index: string | null) => void;
}

const FooterList = ({ items, className, active, setActive }: FooterListProps) => {
  return (
    <MotionConfig transition={{ ...defaultTransition, duration: 0.4 }}>
      <ul onMouseLeave={() => setActive(null)} className={className}>
        {items.map((item, i) => (
          <motion.li
            key={item.href}
            initial={{ opacity: 0.2 }}
            animate={active === item.href ? { opacity: 1 } : active !== null ? { opacity: 0.2 } : { opacity: 1 }}
            onMouseOver={() => setActive(item.href)}
          >
            <Link scroll={false} href={item.href}>
              {item.name}
            </Link>
          </motion.li>
        ))}
      </ul>
    </MotionConfig>
  );
};

export default FooterList;
