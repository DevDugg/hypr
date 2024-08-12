import Container from '@/components/layout/container';
import { grotesk } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Form from './form';

const ContactsHero = () => {
  return (
    <section>
      <Container>
        <h1 className="text-[18.5vw] text-ACCENT text-center mb-[15vw]">contacts</h1>

        <p className={cn('text-WHITE size40 w-[50%] font-semibold mb-[4vw]', grotesk.className)}>
          Let's get this conversation started. Use the form below or send us an email. We will
          respond within 2 business days.
        </p>

        <Form />
      </Container>
    </section>
  );
};

export default ContactsHero;
