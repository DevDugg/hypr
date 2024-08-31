"use client";

import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";

import Container from "@/components/layout/container";
import Image from "next/image";
import React from "react";
import SectionTitle from "@/components/titles/section-title";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const teamData = [
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
  {
    img: "/images/about/team/1.png",
    name: "Nick Bobir",
    special: "Product manager",
  },
];

const AboutTeam = () => {
  return (
    <section className="my-[13.02vw]">
      <Container>
        <SectionTitle className="mb-[4.16vw]">meet out team/</SectionTitle>
        <Swiper slidesPerView={3} spaceBetween={"1.25vw"}>
          {teamData.map((item, i) => (
            <SwiperSlide key={i} className="text-[1.25vw] text-WHITE w-[30.41vw]">
              <Image
                src={item.img}
                alt="name"
                width={584}
                height={640}
                className="w-[30.41vw] h-[33.33vw] mb-[1.25vw]"
              />

              <h5>{item.name}</h5>
              <p className={cn("mt-[0.41vw]", grotesk.className)}>{item.special}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default AboutTeam;
