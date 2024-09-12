import AnimatedParagraph from "@/components/animations/animated-paragraph";
import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import Image from "next/image";
import { Link } from "next-view-transitions";
import Reveal from "@/components/animations/reveal";

const AboutGallery = () => {
  const images = [
    {
      src: "/images/case/gallery/1.png",
      alt: "gallery image",
      width: 524,
      height: 350,
      className: "absolute top-0 left-0 h-[18.22vw] w-[27.29vw] hover:cursor-grab",
    },
    {
      src: "/images/case/gallery/2.png",
      alt: "",
      width: 524,
      height: 350,
      className: "absolute bottom-0 left-0 h-[18.22vw] w-[27.29vw] z-[4]",
    },
    {
      src: "/images/case/gallery/3.png",
      alt: "",
      width: 413,
      height: 620,
      className: "absolute top-0 left-[24.58vw] z-[3] h-[32.29vw] w-[21.51vw]",
    },
    {
      src: "/images/case/gallery/4.png",
      alt: "",
      width: 709,
      height: 398,
      className: "absolute top-0 right-[14.68vw] z-[3] h-[20.41vw] w-[36.92vw]",
    },
    {
      src: "/images/case/gallery/5.png",
      alt: "",
      width: 600,
      height: 452,
      className: "absolute bottom-0 right-[18.22vw] z-[2] h-[23.54vw] w-[31.25vw]",
    },
    {
      src: "/images/case/gallery/6.png",
      alt: "",
      width: 392,
      height: 586,
      className: "absolute top-0 right-0 z-[1] h-[30.52vw] w-[20.41vw]",
    },
  ];
  return (
    <section>
      <Container>
        <div className="relative text-WHITE">
          <Image
            src={"/images/case/1.png"}
            alt="image"
            width={211}
            height={316}
            className="w-[10.98vw] sm:absolute h-[16.45vw] hidden top-0 left-0"
          />

          <div className="sm:w-[43.07vw] mx-auto mb-[10.25vw] sm:mb-[4.16vw]">
            <h2 className="text-center leading-none mb-[6.15vw] sm:mb-[2vw] uppercase font-bold text-[10.27vw] sm:text-[5.20vw]">
              <AnimatedParagraph>no need</AnimatedParagraph> <AnimatedParagraph>to be shy.</AnimatedParagraph>
            </h2>
            <CustomButton fullWidth>
              <Link href={"/contact"}>Contact us</Link>
            </CustomButton>
          </div>

          <Image
            src={"/images/case/1.png"}
            alt="image"
            width={211}
            height={316}
            className="w-[10.98vw] hidden h-[16.45vw] sm:absolute top-0 right-0"
          />
        </div>

        <Reveal animateOnView type="opacity">
          <div className="relative h-[39.68vw]">
            {images.map((item, i) => (
              <Image key={i} {...item} alt="" />
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default AboutGallery;
