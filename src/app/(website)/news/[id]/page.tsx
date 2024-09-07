import DynamicArticles from "@/components/pages/dynamic/dynamic-articles";
import DynamicHero from "@/components/pages/dynamic/dynamic-hero";

const page = () => {
  return (
    <main className="flex flex-col gap-[20.5vw] sm:gap-[5.2vw] mt-[10.25vw] sm:mt-[5.2vw]">
      <DynamicHero />
      <DynamicArticles />
    </main>
  );
};

export default page;
