import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface TextField {
  field: ControllerRenderProps<FieldValues, string>;
  placeholder?: string | undefined;
  className: string;
}

function TextField({ field, placeholder, className }: TextField) {
  return (
    <input
      {...field}
      onChange={field.onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default TextField;
