import { CREATORS_QUERYResult, Creators } from "../../../../sanity.types";

import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";

interface Props {
  creator: NonNullable<CREATORS_QUERYResult>[number];
  type: "small" | "large";
}

const Divider = () => {
  return <span className={cn("text-[1.04vw] text-[#4C4C4C]", grotesk)}>|</span>;
};

const Creator = ({ creator, type }: Props) => {
  const isLarge = type === "large";

  const imgSize = {
    width: 584,
    height: isLarge ? 640 : 480,
  };

  return (
    creator && (
      <div className="flex flex-col gap-[1.25vw]">
        {creator.image && (
          <Image
            width={imgSize.width * 2}
            height={imgSize.height * 2}
            src={urlFor(creator.image)
              .size(imgSize.width * 2, imgSize.height * 2)
              .url()}
            alt={creator.creator_name!}
          />
        )}
        <div className="flex flex-col gap-[0.83vw] text-WHITE">
          <h2 className={cn("font-extrabold text-[1.67vw] leading-none", grotesk.className)}>{creator.creator_name}</h2>
          <p className={cn("flex items-center gap-[0.83vw] font-semibold text-[1.04vw]", grotesk.className)}>
            <span>{creator.handle}</span> {creator.social_media_1 && <Divider />} {creator.social_media_1}{" "}
            {creator.social_media_2 && <Divider />} {creator.social_media_2}
            <span></span>
          </p>
        </div>
      </div>
    )
  );
};
export default Creator;
