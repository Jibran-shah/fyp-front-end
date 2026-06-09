import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateProductSeller } from "../../api/productSeller/useCreateProductSeller";
import { toFormData } from "../../../utils/formData";

export const useCreateProductSellerForm = (schema) => {
  const mutation = useCreateProductSeller();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      shopName: "",
      shopDescription: "",
      locationLat: null,
      locationLn: null
    }
  });

  const onSubmit = form.handleSubmit((values) => {
    const payload = toFormData(values, {
      shopLogoFile: values.shopLogoFile
    });

    mutation.mutate(payload);
  });

  return {
    ...form,
    onSubmit,
    isLoading: mutation.isPending
  };
};