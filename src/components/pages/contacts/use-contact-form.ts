import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

export enum Category {
  TALENT_MANAGEMENT = "Talent Management",
  BRAND_CAMPAIGN = "Brand Campaign",
  CREATIVE_DEPARTMENT = "Creative Department",
  GENERAL_INQUIRY = "General Inquiry",
}

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
  message: z.string().min(1, { message: "Message is required" }),
  category: z.enum([...Object.values(Category)] as unknown as [string, ...string[]], {
    required_error: "Category is required",
  }),
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
      category: Category.TALENT_MANAGEMENT,
    },
  });

  // States to manage loading, error, and success
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormTypes) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log(data);

      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          subject: data.subject,
          message: data.message,
          category: data.category,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setSuccess(true);
      window?.datafast("form_submit", { description: "Submit lead form" });
      form.reset();
    } catch (err) {
      setError("There was an error submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    onSubmit,
    loading,
    error,
    success,
  };
};
