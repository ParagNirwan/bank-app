import React from "react";
import { FormField, FormLabel, FormControl, FormMessage } from "./form";
import { Input } from "./input";
import { Control, FieldPath } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

interface CustomInput {
  control: Control<z.infer<typeof authFormSchema>>;
  type: string;
  name: FieldPath<z.infer<typeof authFormSchema>>;
  label: string;
  placeholder: string;
  id: string;
}

const CustomInput = ({
  control,
  name,
  type,
  label,
  placeholder,
  id,
}: CustomInput) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                id={id}
                type={type}
                placeholder={placeholder}
                className="input-class"
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomInput;
