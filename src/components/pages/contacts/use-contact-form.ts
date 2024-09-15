import { useForm } from "react-hook-form";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Fullname is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(1, { message: "Subject is required" }),
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

  // States to manage loading, error, and success
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: FormTypes) => {
    setLoading(true); // Set loading to true when submission starts
    setError(null); // Reset error state before submission
    setSuccess(false); // Reset success state before submission

    try {
      // Simulate API call or form submission
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.fullName,
          email: data.email,
          subject: data.subject,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      setSuccess(true); // Set success to true if submission was successful
      form.reset(); // Reset the form after successful submission
    } catch (err) {
      setError("There was an error submitting the form.");
    } finally {
      setLoading(false); // Set loading to false when submission is complete
    }
  };

  return {
    form, // Provides form methods from react-hook-form
    onSubmit, // Handles form submission
    loading, // Returns whether the form is submitting
    error, // Returns the error state, if any
    success, // Returns whether the form submission was successful
  };
};
