import Container from "@/components/layout/container";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Form from "./form";

const ContactsHero = () => {
  return (
    <section>
      <Container>
        <h1 className="text-[calc(7.5vh+15vw)] text-ACCENT text-center mb-[100px]">
          contacts
        </h1>

        <p
          className={cn(
            "text-WHITE text-[40px] w-[50%] font-semibold mb-20",
            grotesk.className
          )}
        >
          Let's get this conversation started. Use the form below or send us an
          email. We will respond within 2 business days.
        </p>

        <Form />
      </Container>
    </section>
  );
};

export default ContactsHero;
