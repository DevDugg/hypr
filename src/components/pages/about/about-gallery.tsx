import Container from "@/components/layout/container";
import CustomButton from "@/components/shared/custom-button";
import Image from "next/image";

const AboutGallery = () => {
  return (
    <section className="mb-[25.62vw] sm:mb-[13.02vw]">
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
              no need to be shy.
            </h2>
            <CustomButton>Contact us</CustomButton>
          </div>

          <Image
            src={"/images/case/1.png"}
            alt="image"
            width={211}
            height={316}
            className="w-[10.98vw] hidden h-[16.45vw] sm:absolute top-0 right-0"
          />
        </div>

        <div className="relative h-[39.68vw]">
          <Image
            src={"/images/case/gallery/1.png"}
            alt={"gallery image"}
            width={524}
            height={350}
            className="absolute top-0 left-0 h-[18.22vw] w-[27.29vw] hover:cursor-grab"
          />

          <Image
            src={"/images/case/gallery/2.png"}
            alt={""}
            width={524}
            height={350}
            className="absolute bottom-0 left-0 h-[18.22vw] w-[27.29vw] z-[4]"
          />
          <Image
            src={"/images/case/gallery/3.png"}
            alt={""}
            width={413}
            height={620}
            className="absolute top-0 left-[24.58vw] z-[3] h-[32.29vw] w-[21.51vw]"
          />
          <Image
            src={"/images/case/gallery/4.png"}
            alt={""}
            width={709}
            height={398}
            className="absolute top-0 right-[14.68vw] z-[3] h-[20.41vw] w-[36.92vw]"
          />
          <Image
            src={"/images/case/gallery/5.png"}
            alt={""}
            width={600}
            height={452}
            className="absolute bottom-0 right-[18.22vw] z-[2] h-[23.54vw] w-[31.25vw]"
          />
          <Image
            src={"/images/case/gallery/6.png"}
            alt={""}
            width={392}
            height={586}
            className="absolute top-0 right-0 z-[1] h-[30.52vw] w-[20.41vw]"
          />
        </div>
      </Container>
    </section>
  );
};

export default AboutGallery;
