"use client";

import React from "react";
import { useForm } from "react-hook-form";
import FormGroup from "./FormGroup";
import Button from "../Button/Button";
import SpinnerOrChildren from "../Spinner/SpinnerOrChildren";
import { PostFields, PostForm } from "@/types/Post";
import { SubmitHandler } from "react-hook-form";

interface FormProps {
  fields: PostFields[];
  submitText: string;
  onSubmit: (data: PostForm) => void;
  isSubmitting: boolean;
}

function Form({ fields, submitText, onSubmit, isSubmitting }: FormProps) {
  const { handleSubmit, control } = useForm();

  const onSubmitWrapper: SubmitHandler<Record<string, unknown>> = async (
    formData
  ) => {
    const postFormData: PostForm = {
      category_id: formData.category_id as string,
      content: formData.content as string,
      image: formData.image as File,
      title: formData.title as string,
    };

    onSubmit(postFormData);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitWrapper)}
      className="flex flex-col gap-6"
    >
      {fields.map((field) => (
        <FormGroup
          key={`form-${field.name}`}
          label={field.label}
          name={field.name}
          placeholder={field.placeholder}
          type={field.type}
          defaultValue={field.defaultValue}
          rules={field.rules}
          selectOptions={field.selectOptions}
          control={control}
        />
      ))}

      <div className="flex justify-center w-full">
        <SpinnerOrChildren isLoading={isSubmitting}>
          <Button>{submitText}</Button>
        </SpinnerOrChildren>
      </div>
    </form>
  );
}

export default Form;
