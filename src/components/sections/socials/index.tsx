import Container from "@/components/layout/container";
import clsx from "clsx";
import { cn } from "@/lib/utils";
import { getSocialsData } from "@/sanity/schemas/socials";

const Socials = async ({ className }: { className?: string }) => {
  const data = await getSocialsData();
  return (
    data && (
      <section className={cn("h-[33vw] relative sm:block hidden", className)}>
        <a
          href={data.twitter}
          rel="noopener noreferrer"
          className={clsx(
            "rounded-[2.08vw_2.08vw_0_0] left-0 transition-all duration-300 ease-in-out right-0 py-[4vw] absolute z-[5] monument text-[5.98vw]",
            "bg-OFF_WHITE bottom-[13vw] hover:bottom-[15vw]",
          )}
        >
          <Container>
            <span className="size-full">X/Twitter</span>
          </Container>
        </a>
        <a
          href={data.instagram}
          rel="noopener noreferrer"
          className={clsx(
            "rounded-[2.08vw_2.08vw_0_0] left-0 transition-all duration-300 ease-in-out right-0 py-[4vw] absolute z-[5] monument text-[5.98vw]",
            "bg-[#87ADF9] bottom-[5vw] hover:bottom-[8vw]",
          )}
        >
          <Container>
            <span className="size-full">Instagram</span>
          </Container>
        </a>
        <a
          href={data.linkedin}
          rel="noopener noreferrer"
          className={clsx(
            "rounded-[2.08vw_2.08vw_0_0] left-0 transition-all duration-300 ease-in-out right-0 py-[4vw] absolute z-[5] monument text-[5.98vw]",
            "bg-SECONDARY -bottom-[3vw]",
          )}
        >
          <Container>
            <span className="size-full">LinkedIn</span>
          </Container>
        </a>
      </section>
    )
  );
};

export default Socials;
