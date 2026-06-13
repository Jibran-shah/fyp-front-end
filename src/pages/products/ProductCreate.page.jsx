import { Box } from "@mui/material";



import ProductForm from "../../components/page/products/ProductForm";
import { useCreateProductForm } from "../../hooks/form/product/useCreateProduct.form";
import { useCreateProduct } from "../../hooks/api/products/products.hooks";
import { toFormData } from "../../utils/form/toFromData";

import { productSchema } from "../../schemas/product.schema";

export default function ProductCreatePage() {
  console.log("profile page mounted")
  const form = useCreateProductForm(productSchema);
  const mutation = useCreateProduct();

  const handleSubmit = form.handleSubmit(
    (values) => {
      console.log("[ProductCreatePage] Submit triggered:", values);
      const files = {
        images: values.images
      };
      const payload = toFormData(values, files);
      console.log("[ProductCreatePage] Final payload:", payload);
      mutation.mutate(payload, {
        onSuccess: (res) => {
          console.log("[ProductCreatePage] Success:", res);
          form.reset(); // optional but recommended
        },
        onError: (err) => {
          console.error("[ProductCreatePage] Error:", err);
        }
      })},
  (errors) => {
    console.log("[VALIDATION FAILED]", errors);
  });

  return (
    <Box sx={{ p: 4, display: "flex", justifyContent: "center" }}>
      <ProductForm
        mode="create"
        onSubmit={handleSubmit}
        register={form.register}
        control={form.control}
        errors={form.formState.errors}
        loading={mutation.isPending}
      />
    </Box>
  );
}