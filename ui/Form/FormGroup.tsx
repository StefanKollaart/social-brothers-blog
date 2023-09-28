import React from "react";
import { Controller } from "react-hook-form";
import FileField from "./FileField";
import SelectField from "./SelectField";
import FormError from "./FormError";
import TextArea from "./TextArea";
import TextField from "./TextField";
import FormLabel from "./FormLabel";

interface FormGroupProps {
  label: string;
  name: string;
  placeholder?: string | undefined;
  control: any;
  rules: any;
  selectOptions?: { value: number; name: string }[];
  type: string;
  defaultValue?: any;
}

function FormGroup({
  label,
  name,
  placeholder,
  control,
  rules,
  selectOptions,
  type,
  defaultValue,
}: FormGroupProps) {
  const defaultClasses =
    "bg-darker-white w-full py-4 px-3 text-xs outline-0 placeholder-italic";

  return (
    <div>
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field, fieldState }) => (
          <div>
            <div className="flex justify-between">
              <FormLabel name={field.name}>{label}</FormLabel>
              <FormError fieldState={fieldState} />
            </div>
            <div
              className={
                fieldState?.error ? "border border-social-brothers-orange" : ""
              }
            >
              {type === "input" && (
                <TextField
                  field={field}
                  placeholder={placeholder}
                  className={defaultClasses}
                />
              )}
              {type === "textarea" && (
                <TextArea
                  field={field}
                  placeholder={placeholder}
                  className={`${defaultClasses} h-52`}
                />
              )}
              {type === "file" && <FileField field={field} type={type} />}
              {type === "select" && (
                <SelectField
                  defaultClasses={defaultClasses}
                  placeholder={placeholder}
                  field={field}
                  selectOptions={selectOptions || []}
                />
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default FormGroup;
