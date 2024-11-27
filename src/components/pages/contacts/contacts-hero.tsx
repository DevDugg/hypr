import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import Form from "./form";
import { cn } from "@/lib/utils";
import { getContactPageData } from "@/sanity/schemas/contact-us";
import { grotesk } from "@/lib/fonts";

const ContactsHero = async () => {
  const data = await getContactPageData();
  return (
    <section>
      <Container>
        <AnimatedTitle
          element="h1"
          className="!text-[11.45vw] font-bold uppercase text-ACCENT text-center mb-[1vw] sm:mb-[5vw]"
        >
          contacts
        </AnimatedTitle>

        {data && (
          <p
            className={cn(
              "text-WHITE md:text-left mb-[20.5vw] text-center text-[3.7vw] md:text-[4.1vw] md:size40 md:w-[50%] font-semibold md:mb-[4vw]",
              grotesk.className,
            )}
          >
            {data.description}
          </p>
        )}

        <Form />
      </Container>
    </section>
  );
};

export default ContactsHero;
