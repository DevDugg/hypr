import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Fullname is required" }),
  email: z.string().email(),
  subject: z.string().min(5, { message: "Subject is required" }),
  message: z.string().optional(),
});

type FormTypes = z.infer<typeof formSchema>;

export const useContactForm = () => {
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
    form.reset();
  };

  return { form, onSubmit };
};
