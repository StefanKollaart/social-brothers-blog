import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface TextAreaProps {
  field: ControllerRenderProps<FieldValues, string>;
  placeholder?: string | undefined;
  className: string;
}

function TextArea({ field, placeholder, className }: TextAreaProps) {
  return (
    <textarea
      {...field}
      onChange={field.onChange}
      placeholder={placeholder}
      className={className}
    />
  );
}

export default TextArea;
