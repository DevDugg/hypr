"use client";

import { Button } from "@/components/ui/button";
import CustomField from "@/components/shared/custom-field";
import { Form } from "@/components/ui/form";
import SectionName from "@/components/titles/section-name";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useContactForm } from "./use-contact-form";

const ContactsForm = () => {
  const { form, onSubmit } = useContactForm();

  return (
    <Form {...form}>
      <div className="flex sm:flex-row flex-col sm:items-start justify-between">
        <SectionName className="sm:flex-[1_1_40%] sm:text-left text-center sm:mx-0 mx-auto mb-[2vw]">
          (Contact form)
        </SectionName>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-[1_1_60%]">
          <div className="flex flex-col gap-[0.6vw]">
            <CustomField
              control={form.control}
              label="Full Name"
              name={"fullName"}
              placeholder={"Full name here*"}
              error={form.formState.errors.fullName}
            />
            <CustomField
              control={form.control}
              label="Email"
              name={"email"}
              placeholder={"example@provider.com*"}
              error={form.formState.errors.email}
            />
            <CustomField
              control={form.control}
              label="Subject"
              name={"subject"}
              placeholder={"Enter your subject*"}
              error={form.formState.errors.subject}
            />
            <CustomField
              textArea
              control={form.control}
              label="Message"
              name={"message"}
              placeholder={"Start typing here..."}
            />

            <div className="flex justify-end mt-[1.9vw]">
              <Button
                type="submit"
                className={cn(grotesk.className, "font-bold w-[80%]")}
              >
                Submit form
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default ContactsForm;
