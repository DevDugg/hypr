"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

import { FieldError } from "react-hook-form";
import { Input } from "../ui/input";
import React from "react";
import { Textarea } from "../ui/textarea";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";
import { motion } from "framer-motion";

interface Props {
  control: any;
  name: string;
  placeholder: string;
  label: string;
  error?: FieldError | undefined;
  textArea?: boolean;
}

const CustomField = ({
  control,
  name,
  placeholder,
  label,
  error,
  textArea,
}: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem
          className={cn(grotesk.className, "text-WHITE outline-ACCENT")}
        >
          <div className="flex sm:flex-row flex-col items-start gap-[0.4vw] sm:gap-[4.9vw]">
            <FormLabel className="w-full sm:flex-[1_1_15%] size24">
              {label}
            </FormLabel>
            <div className="w-full">
              <FormControl>
                {textArea ? (
                  <Textarea
                    {...field}
                    rows={4}
                    placeholder="Start typing here..."
                    className="outline-none"
                  />
                ) : (
                  <Input
                    {...field}
                    placeholder={placeholder}
                    className="outline-none"
                  />
                )}
              </FormControl>
              <motion.div
                initial={{ height: 0 }}
                animate={error ? { height: "fit-content" } : {}}
                transition={{ duration: 0.3 }}
              >
                <FormMessage className="mt-[0.4vw] size18">
                  {error?.message}
                </FormMessage>
              </motion.div>
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomField;
