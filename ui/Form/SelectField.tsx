import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface SelectFieldProps {
  field: ControllerRenderProps<FieldValues, string>;
  placeholder?: string | undefined;
  selectOptions: { value: number; name: string }[];
  defaultClasses?: string | undefined;
}

function SelectField({
  field,
  placeholder,
  selectOptions,
  defaultClasses,
}: SelectFieldProps) {
  return (
    <select
      {...field}
      onChange={field.onChange}
      className={`${
        field.value === "" || !field.value ? "opacity-40 italic" : ""
      } ${defaultClasses}`}
    >
      <option value="">{placeholder}</option>
      {selectOptions.map((option) => (
        <option key={option.name} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

export default SelectField;
