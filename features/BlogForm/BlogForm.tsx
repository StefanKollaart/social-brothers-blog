"use client";

import { usePosts } from "@/context/PostContext";
import useCategories from "@/hooks/useCategories";
import { Category } from "@/types/Category";
import { PostForm } from "@/types/Post";
import Form from "@/ui/Form/Form";
import SpinnerOrChildren from "@/ui/Spinner/SpinnerOrChildren";

function BlogForm() {
  const postsContext = usePosts();
  const { create: createPost, isCreating } = postsContext;
  const { categories, isLoading: isLoadingCategories } = useCategories();

  const categoryOptions: { value: number; name: string }[] = categories.map(
    (category: Category) => ({
      value: category.id,
      name: category.name,
    })
  );

  const fields = [
    {
      label: "Berichtnaam",
      placeholder: "Geen titel",
      name: "title",
      type: "input",
      defaultValue: "",
      rules: { required: "Dit veld is verplicht" },
    },
    {
      label: "Categorie",
      placeholder: "Geen categorie",
      name: "category_id",
      type: "select",
      selectOptions: categoryOptions,
      rules: { required: "Dit veld is verplicht" },
    },
    {
      label: "Header afbeelding",
      name: "image",
      type: "file",
      defaultValue: "",
      rules: { required: "Upload een afbeelding" },
    },
    {
      label: "Bericht",
      name: "content",
      type: "textarea",
      defaultValue: "",
      rules: { required: "Schrijf een bericht" },
    },
  ];

  const onSubmit = (data: PostForm) => {
    const formData = new FormData();

    for (const key in data) {
      formData.append(key, data[key as keyof PostForm]);
    }

    createPost(formData);
  };

  return (
    <SpinnerOrChildren isLoading={isLoadingCategories || isCreating}>
      <h2 className="font-bold text-2xl mb-6">Plaats een blog bericht</h2>
      <Form
        fields={fields}
        submitText="Bericht aanmaken"
        onSubmit={onSubmit}
        isSubmitting={isCreating}
      />
    </SpinnerOrChildren>
  );
}

export default BlogForm;
