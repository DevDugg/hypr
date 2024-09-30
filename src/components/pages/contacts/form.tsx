"use client";

import CustomField from "@/components/shared/custom-field";
import { Form } from "@/components/ui/form";
import SectionName from "@/components/titles/section-name";
import { ToastAction } from "@/components/ui/toast";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { useContactForm } from "./use-contact-form";
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
        action: (
          <ToastAction
            altText="Try again"
            onClick={form.handleSubmit(onSubmit)}
          >
            Try again
          </ToastAction>
        ),
        variant: "destructive",
      });
    }
  }, [error, success, toast, form, onSubmit]);

  return (
    <Form {...form}>
      <Toaster />
      <div className="flex sm:flex-row flex-col sm:items-start justify-between">
        <SectionName className="sm:flex-[1_1_40%] sm:text-left text-center sm:mx-0 mx-auto mb-[10.25vw] sm:mb-[2vw]">
          (Contact form)
        </SectionName>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-[1_1_60%]">
          <div className="flex flex-col gap-[4.05vw] sm:gap-[0.8vw]">
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

            <div className="flex mt-[6.15vw] sm:mt-[1.9vw] w-full justify-end sm:mb-0 mb-[25.62vw]">
              <button
                type="submit"
                className={cn(
                  grotesk.className,
                  "font-bold  mx-0 py-[4vw] w-full text-[4.61vw] sm:size24 sm:w-[44.63vw] bg-ACCENT sm:py-[1.04vw] rounded-[51.25vw] sm:rounded-[10.41vw]"
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
