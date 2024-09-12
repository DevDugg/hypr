import { PortableText, PortableTextComponents } from "next-sanity";

import Container from "@/components/layout/container";
import DynamicImage from "./dynamic-image";
import DynamicInfo from "./dynamic-info";
import DynamicText from "./dynamic-text";
import DynamicTitle from "./dynamic-title";
import Image from "next/image";
import { NEWS_ITEM_QUERYResult } from "../../../../sanity.types";
import React from "react";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { urlFor } from "@/sanity/lib/image";

interface DynamicHeroProps {
  item: NEWS_ITEM_QUERYResult[number];
}

const components: PortableTextComponents = {
  hardBreak: () => <br />,
  block: {
    h2: ({ children }) => <DynamicTitle>{children}</DynamicTitle>,
    h5: ({ children }) => (
      <DynamicTitle className="sm:px-[18.75vw] text-[3.589vw] sm:text-[1.25vw]">{children}</DynamicTitle>
    ),
    normal: ({ children }) => <DynamicText>{children}</DynamicText>,
  },
  list: ({ children }) => <DynamicInfo textBlock={children as string[]} />,

  types: {
    image: ({ value }) => <DynamicImage img={value} />,
  },
};

const DynamicHero = ({ item }: DynamicHeroProps) => {
  const { content, main_image, title } = item;
  return (
    <section className="relative">
      <Container>
        {title && (
          <h1 className="text-ACCENT font-bold uppercase text-[6.15vw] sm:size80 mb-[6.15vw] sm:mb-[2.08vw]">
            {title}
          </h1>
        )}
      </Container>
      <div className="sm:px-[3.51vw] mb-[12.3vw] sm:mb-[4.16vw]">
        {main_image && (
          <Image
            src={urlFor(main_image).size(1800, 1044).url()}
            width={1800}
            height={1044}
            alt="image"
            className="w-full sm:h-[54.37vw] h-[62.52vw] object-cover"
          />
        )}
      </div>

      <Container className={cn(grotesk.className, "text-WHITE")}>
        {content && <PortableText value={content} components={components} />}
      </Container>
    </section>
  );
};

export default DynamicHero;
