import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateProductSeller } from "../../api/productSeller/useUpdateProductSeller";
import { toFormData } from "../../../utils/formData";

export const useUpdateProductSellerForm = (schema, seller) => {
  const mutation = useUpdateProductSeller();

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: seller || {}
  });

  const onSubmit = form.handleSubmit((values) => {
    const payload = toFormData(values, {
      shopLogoFile: values.shopLogoFile
    });

    mutation.mutate({
      id: seller.id,
      data: payload
    });
  });

  return {
    ...form,
    onSubmit,
    isLoading: mutation.isPending
  };
};