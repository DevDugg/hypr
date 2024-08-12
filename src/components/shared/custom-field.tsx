import React from 'react';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { FieldError } from 'react-hook-form';
import { cn } from '@/lib/utils';
import { grotesk } from '@/lib/fonts';
import { Textarea } from '../ui/textarea';

interface Props {
  control: any;
  name: string;
  placeholder: string;
  label: string;
  error?: any;
  textArea?: boolean;
}

const CustomField = ({ control, name, placeholder, label, error, textArea }: Props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(grotesk.className, 'text-WHITE')}>
          <div className="flex items-start gap-[4.9vw]">
            <FormLabel className="flex-[1_1_15%] size24">{label}</FormLabel>
            <div className="w-full">
              <FormControl>
                {textArea ? (
                  <Textarea placeholder="Start typing here..." />
                ) : (
                  <Input {...field} placeholder={placeholder} className="outline-none" />
                )}
              </FormControl>
              <FormMessage className="mt-[0.4vw]">{error}</FormMessage>
            </div>
          </div>
        </FormItem>
      )}
    />
  );
};

export default CustomField;
