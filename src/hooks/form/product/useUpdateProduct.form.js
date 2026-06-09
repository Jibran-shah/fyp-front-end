import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateProduct } from "../../api/products/useUpdateProduct";
import { toFormData } from "../../../utils/formData";

export const useUpdateProductForm = (schema, product) => {
  const mutation = useUpdateProduct();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: product || {}
  });

  const onSubmit = form.handleSubmit((values) => {
    const files = {
      images: values.images
    };

    const payload = toFormData(values, files);

    mutation.mutate({
      id: product.id,
      data: payload
    });
  });

  return {
    ...form,
    onSubmit,
    isLoading: mutation.isPending
  };
};