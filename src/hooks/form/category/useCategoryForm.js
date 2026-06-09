import { useForm } from "react-hook-form";

export const useCategoryForm = (defaultValues = {}) => {
  return useForm({
    defaultValues: {
      name: "",
      description: "",
      parentCategory: null,
      ...defaultValues
    }
  });
};