import { useRef } from "react";
import { FaCamera } from "react-icons/fa";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

import Button from "../Button/Button";

interface FileFieldProps {
  field: ControllerRenderProps<FieldValues, string>;
  type: string;
}

function FileField({ field, type }: FileFieldProps) {
  const fileButton = useRef<HTMLInputElement | null>(null);

  const onUploadButtonClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (fileButton.current) fileButton.current.click();
  };

  return (
    <div className="flex w-40 bg-darker-white px-4 items-center py-3 gap-4">
      <input
        name={field.name}
        onChange={(e) => {
          if (fileButton.current) {
            if (
              e.target instanceof HTMLInputElement &&
              e.target.files &&
              e.target.files.length > 0
            ) {
              field.onChange(e.target.files[0]);
            }
          }
        }}
        type={type}
        accept="image/*"
        className="hidden"
        ref={fileButton}
      />
      {fileButton?.current?.files?.length ?? 0 > 0 ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="object-cover w-4 h-4"
          src={
            fileButton?.current?.files?.length
              ? URL.createObjectURL(fileButton.current.files[0])
              : undefined
          }
          alt="Image preview"
        />
      ) : (
        <FaCamera />
      )}
      <Button type="small" onClick={onUploadButtonClick}>
        Kies bestand
      </Button>
    </div>
  );
}

export default FileField;
