import SectionTitle from "@/components/titles/section-title";
import WorkCard from "./work-card";

const WorkHero = () => {
  return (
    <section>
      <h1 className="size360 text-ACCENT mb-[10vw]">our work</h1>

      <div className="flex gap-[1.25vw] mb-[10.41vw]">
        <div className="flex flex-col flex-[1_1_30.41vw]">
          <SectionTitle className="mb-[25.78vw]">never miss a bit/</SectionTitle>

          <WorkCard
            img={"/images/work/3.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={480}
            className="mb-[3.64vw] w-[30.41vw]"
            imgClassName="h-[25vw]"
          />
          <WorkCard
            img={"/images/work/6.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={292}
            h={332}
            className="w-[50%] mb-[18.22vw]"
            imgClassName="h-[17.29vw]"
          />
          <WorkCard
            img={"/images/work/4.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={640}
            className="w-[30.41vw]"
            imgClassName="h-[33.33vw]"
          />
        </div>

        <div className="flex flex-col flex-[1_1_30.41vw]">
          <WorkCard
            img={"/images/work/1.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={292}
            h={320}
            className="w-1/2 mb-[10.5vw]"
            imgClassName="h-[16.66vw]"
          />
          <WorkCard
            img={"/images/work/4.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={640}
            className="w-full mb-[11.87vw]"
            imgClassName="h-[33.33vw]"
          />
          <WorkCard
            img={"/images/work/7.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={480}
            className="w-full mb-[12.39vw]"
            imgClassName="h-[25vw]"
          />
          <WorkCard
            img={"/images/work/1.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={292}
            h={320}
            className="w-[50%]"
            imgClassName="h-[16.66vw]"
          />
        </div>

        <div className="flex flex-col flex-[1_1_30.41vw]">
          <WorkCard
            img={"/images/work/2.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={640}
            className="w-full mb-[11.35vw]"
            imgClassName="h-[33.33vw]"
          />
          <WorkCard
            img={"/images/work/5.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={292}
            h={332}
            className="w-1/2 mb-[2.18vw]"
            imgClassName="h-[17.29vw]"
          />
          <WorkCard
            img={"/images/work/8.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={640}
            className="w-full mb-[4.1vw]"
            imgClassName="h-[33.33vw]"
          />
          <WorkCard
            img={"/images/work/7.png"}
            title={"Project name"}
            text={"Short description of this project goes here"}
            w={584}
            h={480}
            className="w-full"
            imgClassName="h-[25vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default WorkHero;
