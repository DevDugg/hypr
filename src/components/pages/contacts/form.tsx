"use client";

import { Category, useContactForm } from "./use-contact-form";

import CustomField from "@/components/shared/custom-field";
import CustomRadio from "@/components/shared/custom-radio";
import { Form } from "@/components/ui/form";
import SectionName from "@/components/titles/section-name";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const ContactsForm = () => {
  const { form, onSubmit, error, loading, success } = useContactForm();
  const { toast } = useToast();

  useEffect(() => {
    if (success) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully.",
      });
      return;
    }
    if (error) {
      toast({
        title: "Uh oh! Something went wrong",
        description: "An error occurred while sending your message.",
        variant: "destructive",
      });
    }
  }, [error, success, toast]);

  return (
    <Form {...form}>
      <Toaster />
      <div className="flex md:flex-row flex-col md:items-start justify-between">
        <SectionName className="md:flex-[1_1_40%] md:text-left text-center md:mx-0 mb-[10.25vw] md:mb-[2vw] max-md:!text-[3.58vw]">
          (Contact form)
        </SectionName>

        <form onSubmit={form.handleSubmit(onSubmit)} name="lead-form" className="flex-[1_1_60%]">
          <div className="flex flex-col gap-[4.05vw] md:gap-[0.8vw]">
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
            <CustomRadio
              control={form.control}
              label="Category"
              name={"category"}
              items={[...Object.values(Category)]}
            />

            <div className="flex mt-[6.15vw] md:mt-[1.9vw] w-full justify-end md:mb-0 mb-[25.62vw]">
              <button
                type="submit"
                className={cn(
                  grotesk.className,
                  "font-bold mx-0 py-[1.04vw] max-sm:py-[4vw] w-full text-[1.25vw] max-md:text-[3.125vw] max-[390px]:text-[4.61vw] md:w-[44.63vw] bg-ACCENT rounded-[51.25vw] md:rounded-[10.41vw]",
                )}
              >
                Submit form
              </button>
            </div>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default ContactsForm;
