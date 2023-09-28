interface FormLabelProps {
  name: string;
  children: React.ReactNode;
}

function FormLabel({ name, children }: FormLabelProps) {
  return (
    <label className="block text-xs mb-2" htmlFor={name}>
      {children}
    </label>
  );
}

export default FormLabel;
