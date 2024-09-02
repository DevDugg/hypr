"use client";

import { PropsWithChildren } from "react";
import clsx from "clsx";
import { colors } from "@/config/colors";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";

interface CustomButtonProps extends PropsWithChildren {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  fullWidth?: boolean;
  className?: string;
}

const CustomButton = ({ children, onClick, type, fullWidth, className }: CustomButtonProps) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={clsx(
        "p-[1.04vw] text-[0.9375vw] text-BLACK font-bold bg-ACCENT border border-ACCENT rounded-[10.416vw] leading-none flex justify-center",
        grotesk.className,
        fullWidth && "w-full",
        className,
      )}
      initial={{ color: colors.BLACK, background: colors.ACCENT }}
      whileHover={{ color: colors.ACCENT, background: `${colors.ACCENT}00` }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.button>
  );
};
export default CustomButton;
