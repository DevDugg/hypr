"use client";

import { FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";

import { Category } from "../pages/contacts/use-contact-form";
import { Label } from "@radix-ui/react-label";
import React from "react";
import { cn } from "@/lib/utils";
import { grotesk } from "@/lib/fonts";

interface Props {
  control: any;
  name: string;
  label: string;
  items: string[];
}

const CustomRadio = ({ control, name, label, items }: Props) => {
  return (
    <div className="flex gap-[5.2vw]">
      <Label className={cn("text-WHITE text-[1.25vw] leading-[140%]", grotesk.className)}>{label}</Label>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormControl className={cn("text-WHITE flex flex-wrap gap-[2.08vw]", grotesk.className)}>
            <RadioGroup defaultValue={Category.BRAND_CAMPAIGN} onValueChange={field.onChange}>
              {items.map((item, index) => (
                <FormItem key={index} className="pl-6 flex items-center">
                  <FormControl>
                    <RadioGroupItem value={item} id={`category${index + 1}`} />
                  </FormControl>
                  <FormLabel
                    htmlFor={`category${index + 1}`}
                    className="text-GRAY leading-[140%] text-[1.25vw] ml-[0.83vw]"
                  >
                    {item}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
        )}
      />
    </div>
  );
};

export default CustomRadio;
