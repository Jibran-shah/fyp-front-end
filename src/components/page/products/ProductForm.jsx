import { Paper, Stack, Button, Typography } from "@mui/material";
import { Controller } from "react-hook-form";

import { InputField } from "../../common/InputField";
import CategoryTreeSelect from "../categories/CategoryTreeSelect";
import FileInputField from "../../common/FileInputField";

export default function ProductForm({
  mode = "create",
  onSubmit,
  register,
  control,
  loading = false
}) {
  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      sx={{ p: 4, width: "100%", maxWidth: 700 }}
    >
      <Typography variant="h5" fontWeight={600} mb={3}>
        {mode === "create" ? "Create Product" : "Edit Product"}
      </Typography>

      <Stack spacing={2}>

        {/* NORMAL INPUTS */}
<InputField label="Product Name" name="name" register={register} />
<InputField label="Description" name="description" register={register} />
<InputField label="Price" type="number" name="price" register={register} />
<InputField label="Quantity Available" type="number" name="quantityAvailable" register={register} />
<InputField label="Full Address" name="fullAddress" register={register} />

        {/* CATEGORY */}
        <Controller
          name="category"
          control={control}
          render={({ field }) => (
            <CategoryTreeSelect
              value={field.value}
              onChange={field.onChange}
              label="Category"
            />
          )}
        />

        {/* IMAGES */}
        <Controller
          name="images"
          control={control}
          render={({ field }) => (
            <FileInputField
              label="Product Images"
              multiple
              maxFiles={10}
              maxSizeMB={10}
              accept="image/*"
              value={field.value || []}
              onChange={field.onChange}
            />
          )}
        />

        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? "Processing..." : mode === "create" ? "Create Product" : "Update Product"}
        </Button>

      </Stack>
    </Paper>
  );
}