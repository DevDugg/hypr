import { PortableText, PortableTextComponents } from "next-sanity";
import { grotesk, monument } from "@/lib/fonts";

import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import CreatorVideos from "@/components/pages/creators/creator-videos";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getCreatorItem } from "@/sanity/schemas/creators";
import { urlFor } from "@/sanity/lib/image";

interface PageParams {
  params: {
    slug: string;
  };
}

const components: PortableTextComponents = {
  hardBreak: () => <br />,
  block: {
    h1: ({ children }) => <p className="mb-[0.5vw]">{children}</p>,
    h2: ({ children }) => <p className="mb-[0.5vw]">{children}</p>,
    h3: ({ children }) => <p className="mb-[0.5vw]">{children}</p>,
    h4: ({ children }) => <p className="mb-[0.5vw]">{children}</p>,
    h5: ({ children }) => <p className="mb-[0.5vw]"> {children}</p>,
    h6: ({ children }) => <p className="mb-[0.5vw]"> {children}</p>,
    normal: ({ children }) => <p className="mb-[0.5vw]">{children}</p>,
  },
};

const CreatorPage = async ({ params }: PageParams) => {
  const { slug } = params;
  const creator = await getCreatorItem(slug);
  return (
    creator && (
      <section
        id="creator"
        className={cn("size-full flex flex-col justify-end text-WHITE mb-[10.25vw] sm:mb-[3.12vw]", grotesk.className)}
      >
        <div className="h-dvh w-dvw"></div>
        <div className="overflow-hidden absolute top-0 left-0 h-dvh w-dvw grid grid-cols-[43.9vw_46.93vw] gap-[6vw]  max-lg:flex max-lg:flex-col">
          {creator?.image && (
            <div className="w-full">
              <Image
                src={urlFor(creator.image).size(1686, 1860).url()}
                alt={`${creator.creator_name} Image`}
                width={1686}
                height={1860}
                className="size-full object-cover object-top"
                priority
                loading="eager"
              />
            </div>
          )}
          <div className="flex flex-col gap-[2.08vw] items-center justify-center max-lg:hidden">
            {creator.creator_description && (
              <div className="grid gap-[10.41vw] w-full grid-cols-[5.2vw_1fr]">
                <span className="text-[1.041vw] text-GRAY leading-none font-bold uppercase">(About)</span>
                <div className="flex flex-col text-[0.9375vw] font-medium leading-[140%] text-WHITE">
                  <PortableText value={creator.creator_description} components={components} />
                </div>
              </div>
            )}
            {(creator.social_media_1 || creator.social_media_2) && (
              <div className="grid gap-[10.41vw] w-full grid-cols-[5.2vw_1fr]">
                <span className="text-[1.041vw] text-GRAY leading-none font-bold uppercase">(Socials)</span>
                <div className="flex gap-[2.08vw] text-[0.9375vw]">
                  {creator.social_media_1 && (
                    <a href={creator.social_media_link_1} target="_blank" rel="noreferrer" className="text-WHITE">
                      {creator.social_media_1.split(":")[0]}
                    </a>
                  )}
                  {creator.social_media_2 && (
                    <a href={creator.social_media_link_2} target="_blank" rel="noreferrer" className="text-WHITE">
                      {creator.social_media_2.split(":")[0]}
                    </a>
                  )}
                </div>
              </div>
            )}
            {creator.creator_name && (
              <div className="flex flex-col gap-[1.25vw] w-full mt-[3.125vw]">
                <AnimatedTitle
                  className={cn("font-bold leading-none text-[3.33vw] text-ACCENT text-start", monument.className)}
                >
                  {creator.creator_name}
                </AnimatedTitle>
                <div className="flex justify-between text-[0.9375vw] text-WHITE leading-[140%] font-medium">
                  <span>{creator.handle}</span>
                  <div className="flex gap-[2.08vw]">
                    {creator.social_media_1 && <span>{creator.social_media_1}</span>}
                    {creator.social_media_2 && <span>{creator.social_media_2}</span>}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <Container>
          <div className="hidden max-lg:flex gap-[1.25vw]">
            <div className="flex flex-col gap-[0.833vw]"></div>
          </div>
          <CreatorVideos creator={creator} />
        </Container>
      </section>
    )
  );
};
export default CreatorPage;
