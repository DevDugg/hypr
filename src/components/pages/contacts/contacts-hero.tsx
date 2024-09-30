import AnimatedTitle from "@/components/animations/animated-title";
import Container from "@/components/layout/container";
import Form from "./form";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

const ContactsHero = () => {
  return (
    <section>
      <Container>
        <AnimatedTitle
          element="h1"
          className="!text-[11.45vw] font-bold uppercase text-ACCENT text-center mb-[1vw] sm:mb-[5vw]"
        >
          contacts
        </AnimatedTitle>

        <p
          className={cn(
            "text-WHITE sm:text-left mb-[20.5vw] text-center text-[3.7vw] sm:text-[4.1vw] sm:size40 sm:w-[50%] font-semibold sm:mb-[4vw]",
            grotesk.className
          )}
        >
          Let`s get this conversation started. Use the form below or send us an
          email. We will respond within 2 business days.
        </p>

        <Form />
      </Container>
    </section>
  );
};

export default ContactsHero;
