import { PropsWithChildren } from "react";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const DynamicText = ({ children }: PropsWithChildren) => {
  return (
    <p
      className={cn(
        "font-medium leading-[140%] text-[3.589vw] sm:text-[1.25vw] text-GRAY sm:px-[18.75vw] mb-[10.25vw] sm:mb-[4.16vw]",
        grotesk.className,
      )}
    >
      {children}
    </p>
  );
};

export default DynamicText;
