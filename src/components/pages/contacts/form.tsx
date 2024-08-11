"use client";

import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomField from "@/components/shared/custom-field";
import SectionName from "@/components/titles/section-name";
import { Button } from "@/components/ui/button";
import { grotesk } from "@/lib/fonts";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  subject: z.string(),
  message: z.string().optional(),
});

type FormTypes = z.infer<typeof formSchema>;

const ContactsForm = () => {
  const form = useForm<FormTypes>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      fullName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = (data: FormTypes) => {
    console.log(data);

    form.reset();
  };

  return (
    <Form {...form}>
      <div className="flex items-start justify-between">
        <SectionName className="flex-[1_1_40%]">(Contact form)</SectionName>

        <form onSubmit={form.handleSubmit(onSubmit)} className="flex-[1_1_60%]">
          <div className="flex flex-col gap-3">
            <CustomField
              control={form.control}
              label="Full Name"
              name={"fullName"}
              placeholder={"Full name here*"}
              error={
                form.formState.errors.fullName
                  ? form.formState.errors.fullName
                  : ""
              }
            />
            <CustomField
              control={form.control}
              label="Email"
              name={"email"}
              placeholder={"example@provider.com*"}
              error={
                form.formState.errors.email ? form.formState.errors.email : ""
              }
            />
            <CustomField
              control={form.control}
              label="Subject"
              name={"subject"}
              placeholder={"Enter your subject*"}
              error={
                form.formState.errors.email ? form.formState.errors.email : ""
              }
            />
            <CustomField
              textArea
              control={form.control}
              label="Message"
              name={"message"}
              placeholder={"Start typing here..."}
            />

            <div className="flex justify-end mt-9">
              <Button
                type="submit"
                className={cn(grotesk.className, "font-bold w-[85%]")}
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
