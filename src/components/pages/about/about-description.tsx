import AboutCard from "./about-card";
import Container from "@/components/layout/container";
import SectionName from "@/components/titles/section-name";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const cardsData = [
  {
    title: "Brand Visibility",
    num: "01",
    text: "By partnering with top-tier influencers and bloggers, we significantly boost your brand's visibility across various social media platforms, reaching a wider and more engaged audience.",
    img: "/images/about/2.png",
  },
];

const AboutDescription = () => {
  return (
    <section className={"bg-ACCENT"}>
      <Container>
        <div className="relative py-[10.25vw] sm:py-[5.20vw]">
          <SectionName className="sm:absolute sm:top-[7.70vw] mb-[4.05vw] sm:mb-0 !text-[3.58vw] sm:!text-[0.93vw] !text-WHITE left-0">
            (about)
          </SectionName>

          <p className={cn(grotesk.className, "sm:first-letter:ml-[31.77vw] text-[6.15vw] sm:size64 font-semibold")}>
            HYPR agency is a branding and digital marketing studio from Australia. Partnering with companies that need
            to transform their brand, attract the right audience, and radically stand out. We’re a nimble team of
            designers and creative developers, focused on creating uniquely human and culturally informed. Read more
          </p>
        </div>

        <div className="h-screen w-full relative">
          <h2 className="absolute text-[10.25vw] sm:text-[10.41vw] uppercase font-bold top-1/2 -translate-y-1/2 text-center left-1/2 -translate-x-1/2">
            our features
          </h2>

          <div className="relative z-[5] flex top-1/2 -translate-y-1/2 justify-center">
            {cardsData.map((item, i) => (
              <AboutCard {...item} key={i} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutDescription;
