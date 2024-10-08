import ContactsHero from "@/components/pages/contacts/contacts-hero";
import Socials from "@/components/sections/socials";

const Contacts = async () => {
  return (
    <main>
      <ContactsHero />
      <Socials className="mt-[10vw]" />
    </main>
  );
};

export default Contacts;
