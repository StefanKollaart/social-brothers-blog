import { ControllerFieldState } from "react-hook-form";

interface FormErrorProps {
  fieldState: ControllerFieldState;
}

function FormError({ fieldState }: FormErrorProps) {
  if (fieldState?.error) {
    return (
      <p className="text-end text-xs text-social-brothers-orange">
        {fieldState.error.message}
      </p>
    );
  }
}

export default FormError;
