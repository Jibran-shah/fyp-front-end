import { Box, Paper, Typography, Stack, CircularProgress } from "@mui/material";
import ProductForm from "../../components/page/products/ProductForm";
import { useProductForm } from "../../hooks/form/product/useProduct.form";
import { useCreateProduct } from "../../hooks/api/products/products.hooks";
import { toFormData } from "../../utils/form/toFromData";
import { createProductSchema } from "../../schemas/product.schema";

export default function ProductCreatePage() {
  const form = useProductForm(createProductSchema);
  const mutation = useCreateProduct();

  const handleSubmit = form.handleSubmit(
    (values) => {
      const files = {
        images: values.images,
      };

      const payload = toFormData(values, files);

      mutation.mutate(payload, {
        onSuccess: () => {
          form.reset();
        },
        onError: (err) => {
          console.error("Create Product Error:", err);
        },
      });
    },
    (errors) => {
      console.log("[VALIDATION FAILED]", errors);
    }
  );

  const isLoading = mutation.isPending;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        p: 2
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 900,
          borderRadius: 4,
          border: "1px solid",
          borderColor: "divider",
          overflow: "hidden",
        }}
      >
        {/* HEADER */}
        <Box
          sx={{
            p: 3,
            borderBottom: "1px solid",
            borderColor: "divider",
            bgcolor: "background.paper",
          }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5" fontWeight={700}>
              Create Product
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Add a new product to your marketplace
            </Typography>
          </Stack>
        </Box>

        {/* FORM BODY */}
        <Box sx={{ p: 3 }}>
          {isLoading ? (
            <Box
              sx={{
                minHeight: 400,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <CircularProgress />
              <Typography variant="body2" color="text.secondary">
                Creating product...
              </Typography>
            </Box>
          ) : (
            <ProductForm
              mode="create"
              onSubmit={handleSubmit}
              register={form.register}
              control={form.control}
              errors={form.formState.errors}
              loading={isLoading}
            />
          )}
        </Box>
      </Paper>
    </Box>
  );
}