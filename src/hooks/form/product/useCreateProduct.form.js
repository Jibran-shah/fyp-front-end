import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProduct } from "../../api/products/useCreateProduct";
import { toFormData } from "../../../utils/formData";

export const useCreateProductForm = (schema) => {
  const mutation = useCreateProduct();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      quantityAvailable: 0,
      category: "",
      images: []
    }
  });

  const onSubmit = form.handleSubmit((values) => {
    const files = {
      images: values.images // FileList or File[]
    };

    const payload = toFormData(values, files);

    mutation.mutate(payload);
  });

  return {
    ...form,
    onSubmit,
    isLoading: mutation.isPending
  };
};