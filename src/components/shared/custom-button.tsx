"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";
import { colors } from "@/config/colors";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";

interface CustomButtonProps extends PropsWithChildren {
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const CustomButton = ({
  children,
  onClick,

  fullWidth,
  className,
}: CustomButtonProps) => {
  return (
    <motion.div
      onClick={onClick}
      className={clsx(
        "p-[1.25vw] text-[1.25vw] text-BLACK font-bold bg-ACCENT rounded-[10.416vw] leading-none flex justify-center max-md:!text-base max-sm:p-3",
        grotesk.className,
        fullWidth && "w-full",
        className,
      )}
      initial={{ color: colors.BLACK, background: colors.ACCENT }}
      whileHover={{
        color: colors.BLACK,
        background: `${colors.WHITE}`,
      }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};
export default CustomButton;
