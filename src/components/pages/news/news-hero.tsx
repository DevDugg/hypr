import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const NewsHero = () => {
  return (
    <section className="mb-[10.25vw] sm:mb-[7.81vw] mt-[10.25vw] sm:mt-0">
      <h1 className="text-[11.45vw] text-center text-ACCENT uppercase font-bold">
        insights
      </h1>
      <p
        className={cn(
          "text-center text-WHITE font-semibold text-[4.1vw] sm:size40",
          grotesk.className
        )}
      >
        Here, I share the behind-the-scenes stories of our projects, delving
        into the creative process, memorable moments from collaborative calls,
        and key insights from team discussions.
      </p>
    </section>
  );
};

export default NewsHero;
