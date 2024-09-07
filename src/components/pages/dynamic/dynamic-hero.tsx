import Container from "@/components/layout/container";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import DynamicInfo from "./dynamic-info";
import DynamicText from "./dynamic-text";
import DynamicImage from "./dynamic-image";

const DynamicHero = () => {
  return (
    <section className="relative">
      <Container>
        <h2 className="text-ACCENT font-bold uppercase text-[6.15vw] sm:size80 mb-[6.15vw] sm:mb-[2.08vw]">
          How Subscriptions End Agency Excess.
        </h2>
      </Container>
      <div className="sm:px-[3.51vw] mb-[12.3vw] sm:mb-[4.16vw]">
        <Image
          src={"/images/case/case-pattern.png"}
          width={1800}
          height={1044}
          alt="image"
          className="w-full sm:h-[54.37vw] h-[62.52vw]  object-cover"
        />
      </div>

      <Container
        className={cn(
          grotesk.className,
          "text-WHITE flex flex-col gap-[10.25vw] sm:gap-[4.16vw]"
        )}
      >
        <DynamicText>
          After working at global and national ad agencies, as well as our own
          studios, we can tell you that much of the creative business is built
          around bloat.
        </DynamicText>

        <DynamicInfo
          textBlock={[
            "Agencies love shrouding the branding process in mystery. Fancy it up. Drag it out. Layer it with sign-offs and check-in meetings. But much of what happens behind the curtain is merely process for the sake of process. It’s the fluff that inflates fees.",
            "The complexity is built into the architecture, and clients are paying for it with every billable hour.",
          ]}
          className=""
        />

        <DynamicInfo
          title="Subscriptions slash waste."
          textBlock={[
            "By offering continuous creative for a flat fee, the subscription model is incentivized to include only what’s essential to produce great work. Excess steps decrease profitability",
            "Agencies also underestimate their clients’ intelligence. They presumptuously think these savvy businesspeople need their hands held. Whether it’s a series of overblown meetings, or a firewall of account team handlers who rack up hours based on the fictitious idea that allowing clients access to fragile and sensitive creatives will undermine the precious work.",
            "The only thing it would undermine is their profit structure.",
            "Subscriptions treat clients like adults. Marketers have direct access to their team. Work is shared electronically. Feedback flows freely. Relationships flourish and strengthen. This intimate bond improves the quality of the creative and reduces the waste from unnecessary intermediaries that hike fees.",
          ]}
        />

        <div className="sm:px-[18.75vw] flex flex-col gap-[4.05vw] sm:size48 text-[4.61vw] leading-[110%] font-medium">
          <p>
            “Nobody intentionally orchestrated the excess. Agencies are
            inhabited by people who inherited the system from those before them.
            Associates learned it coming up through the ranks. As directors,
            they simply carried on as they were taught.”
          </p>
          <span className="text-[3.58vw] sm:text-[1.25vw] leading-[120%]">
            - Tiffany Hsu, New York Times
          </span>
        </div>

        <DynamicInfo
          title="The pandemic sounded the alarm bell on a broken model."
          textBlock={[
            "Agencies have a history of clustering in expensive metropolitan cities, of splurging on designer furniture and splashy artwork in offices with ping-pong tables and private brainstorming dens. Which is cool for the creatives. But clients are really the ones who pay for that overhead in every invoice.",
            "The forced adaptation during the pandemic jolted us awake. We realized that subscription-based creative could trim the fat by opting for a decentralized network of A-list talent from international hotbeds of creativity, where the work is exceptional but the salaries are reasonable. We found that creatives are even more productive working from their own spaces rather than opulent decors inside glass buildings downtown.   ",
            "Whether it’s elimination of overblown processes, client coddling, or ostentatious expenses, subscriptions offer a new solution to creative services that signals the end of agency excess.",
          ]}
        />

        <DynamicImage
          img="/images/news/dynamic.png"
          text="Design subscriptions as the simple prescription for what's ailing your brand."
        />
      </Container>
    </section>
  );
};

export default DynamicHero;
