import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";

export const CreatorsCard = ({
  creator_name,
  handle,
  image,
  social_media_1,
  social_media_2,
}: NonNullable<NonNullable<HOME_PAGE_QUERYResult[number]["creators"]>["items"]>[number]) => {
  return (
    <div className="w-[51.25vw] sm:w-full">
      {image && (
        <Image
          src={urlFor(image).size(342, 480).url()}
          alt="news image"
          width={342}
          height={480}
          className="w-full h-[66.62vw] sm:h-[25vw] object-cover"
        />
      )}

      <div className="mt-[4.05vw] sm:mt-[1.66vw] mb-[4.05vw] sm:mb-[1.25vw] text-[4.05vw] sm:text-[0.9375vw] monument">
        {creator_name}
      </div>
      <p
        className={cn(
          "leading-[140%] text-[4.05vw] sm:text-[0.83vw] mb-[1.02vw] sm:mb-[0.416vw] font-normal",
          grotesk.className,
        )}
      >
        {handle}
      </p>

      <div
        className={cn(
          "flex flex-col text-[4.05vw] sm:text-[0.83vw] gap-[1.02vw] sm:gap-[0.41vw] leading-[140%]",
          grotesk.className,
        )}
      >
        {social_media_1 && <div>{social_media_1}</div>}
        {social_media_2 && <div>{social_media_2}</div>}
      </div>
    </div>
  );
};
