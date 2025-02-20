import Image from "next/image";
import clsx from "clsx";
import { url } from "inspector";
import { urlFor } from "@/sanity/lib/image";

interface PartnerIconProps {
  image: any;
  alt: string;
  active: boolean;
}

const PartnerIcon = ({ active, image, alt }: PartnerIconProps) => {
  return (
    image && (
      <div
        className={clsx(
          "px-[3.58vw] sm:px-[0.72vw] transition-all py-[1.25vw] sm:py-[0.26vw] border-[0.5px] border-[#4C4C4C]",
          {
            "hover:bg-ACCENT hover:border-opacity-0 hover:rounded-md": active,
          },
        )}
      >
        <Image
          width={900}
          height={900}
          className="mx-auto object-contain h-[37.66vw] sm:h-[15.625vw] w-[37.66vw] sm:w-[15.625]"
          src={urlFor(image).size(900, 900).url()}
          alt={alt}
        />
      </div>
    )
  );
};

export default PartnerIcon;
