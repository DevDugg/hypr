"use client";

import { HOME_PAGE_QUERYResult } from "../../../../sanity.types";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { useState } from "react";

interface IProps {
  title: NonNullable<NonNullable<HOME_PAGE_QUERYResult[0]["projects"]>["items"]>[any]["name"];
  subtitle: NonNullable<NonNullable<HOME_PAGE_QUERYResult[0]["projects"]>["items"]>[any]["short_description"];
  slug: NonNullable<NonNullable<HOME_PAGE_QUERYResult[0]["projects"]>["items"]>[any]["slug"];
  img: NonNullable<
    NonNullable<NonNullable<HOME_PAGE_QUERYResult[0]["projects"]>["items"]>[any]["key_visuals"]
  >[0]["image"];
}

const ProjectCard = ({ title, subtitle, img, slug }: IProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);
  return (
    title &&
    slug &&
    subtitle &&
    img && (
      <Link scroll={false} href={`/works/${slug.current}`}>
        <motion.div
          className="sm:text-[1.25vw] mob16"
          onMouseOver={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden">
            <motion.div
              initial={{ scale: 1 }}
              animate={isHovered ? { scale: 1.05 } : {}}
              transition={{ duration: 0.3 }}
            >
              <Image
                width={1780}
                height={1280}
                src={urlFor(img).size(1780, 1280).url()}
                alt={`${title || "HYPR project"} image`}
                className="w-full sm:h-[33.33vw] sm:w-auto"
              />
            </motion.div>
          </div>
          <h4 className="mt-[4.05vw] sm:mt-[1.25vw] mb-[2.02vw] sm:mb-[0.416vw] monument max-sm:text-[5vw]">{title}</h4>

          <p className={cn("block font-normal leading-[140%] max-sm:text-[4.375vw]", grotesk.className)}>{subtitle}</p>
        </motion.div>
      </Link>
    )
  );
};

export default ProjectCard;
