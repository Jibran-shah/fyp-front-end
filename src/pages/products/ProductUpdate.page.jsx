import {
  Box,
  Paper,
  Typography,
  Stack,
  CircularProgress,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

import ProductForm from "../../components/page/products/ProductForm";
import {
  useGetProductById,
  useUpdateProduct,
} from "../../hooks/api/products/products.hooks";
import { toFormData } from "../../utils/form/toFromData";
import { useProductForm } from "../../hooks/form/product/useProduct.form";
import { updateProductSchema } from "../../schemas/product.schema";
import PageContainer from "../../components/common/layout/pageContainer/PageContainer";

export default function ProductUpdatePage() {
  const { id } = useParams();

  const navigate = useNavigate();

  const {
    data,
    isLoading,
    isError,
  } = useGetProductById(id);

  const {
    mutate: updateProduct,
    isPending,
  } = useUpdateProduct();

  const form = useProductForm(updateProductSchema);

    useEffect(() => {
    if (!data) return;

    form.reset({
        name: data.name || "",
        description: data.description || "",
        price: data.price || 0,
        quantityAvailable: data.quantityAvailable || 0,
        category: data.category?._id || null,
        images: [],
        oldImages:
        data.images?.map((image) => ({
            id: image._id,
            name: image.title,
            url: image.file?.url,
        })) || [],
    });
    }, [data]); // REMOVE form

  /* =========================
     DETECT CHANGES
  ========================= */
  const isDirty = form.formState.isDirty;

  /* =========================
     SUBMIT
  ========================= */
  const handleSubmit = form.handleSubmit(
    (values) => {
      const { oldImages = [], ...rest } = values;

      console.log("updateProduct:values",values.images)

      // Convert everything except oldImages
      const payload = toFormData(rest, {
        images: values.images || [],
      });

      console.log("updateProduct images",payload.images);

      // Send remaining image IDs
      oldImages.forEach((img) => {
        if (img?.id) {
          payload.append("imageIds", img.id);
        }
      });

      updateProduct({
          id,
          data: payload,
        },{
          onSuccess:(data)=>{
            console.log("product update success",data._id)
            navigate(`/products/${data._id||data.id}`)
          }
        });
    },
    (errors) => {
      console.log("❌ VALIDATION ERRORS:", errors);
    }
  );

  /* =========================
     LOADING STATE
  ========================= */
  if (isLoading) {
    return (
      <Box
        sx={{
          minHeight: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  /* =========================
     ERROR STATE
  ========================= */
  if (isError || !data) {
    return (
      <Box sx={{ p: 4 }}>
        <Typography color="error">
          Failed to load product
        </Typography>
      </Box>
    );
  }

  /* =========================
     RENDER
  ========================= */
  return (
    <PageContainer center={true}>
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
          }}
        >
          <Stack spacing={0.5}>
            <Typography variant="h5" fontWeight={700}>
              Edit Product
            </Typography>

            <Typography
              variant="body2"
              color="text.secondary"
            >
              Update your product details
            </Typography>
          </Stack>
        </Box>

        {/* FORM */}
        <Box sx={{ p: 3 }}>
          <ProductForm
            mode="edit"
            onSubmit={handleSubmit}
            register={form.register}
            control={form.control}
            loading={isPending}
          />

          {!isDirty && (
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                mt: 2,
                display: "block",
              }}
            >
              No changes detected
            </Typography>
          )}
        </Box>
      </Paper>
    </PageContainer>
  );
}