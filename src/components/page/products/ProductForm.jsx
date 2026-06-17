import { Paper, Stack, Button } from "@mui/material";
import { Controller } from "react-hook-form";

import { InputField } from "../../common/InputField";
import CategoryTreeSelect from "../categories/CategoryTreeSelect";
import FileInputField from "../../common/FileInputField";
import FileListManager from "../../common/FileListManager";

export default function ProductForm({
  onSubmit,
  register,
  control,
  loading = false,
  mode = "create",
}) {
  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      elevation={0}
      sx={{
        p: 0,
        width: "100%",
      }}
    >
      <Stack spacing={2}>
        {/* ===================== */}
        {/* BASIC INPUTS */}
        {/* ===================== */}
        <InputField
          label="Product Name"
          name="name"
          register={register}
        />

        <InputField
          label="Description"
          name="description"
          register={register}
        />

        <InputField
          label="Price"
          type="number"
          name="price"
          register={register}
        />

        <InputField
          label="Quantity Available"
          type="number"
          name="quantityAvailable"
          register={register}
        />

        {/* ===================== */}
        {/* CATEGORY */}
        {/* ===================== */}
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

        {/* ===================== */}
        {/* EXISTING IMAGES */}
        {/* Only for edit mode */}
        {/* ===================== */}
        {mode === "edit" && (
          <Controller
            name="oldImages"
            control={control}
            defaultValue={[]}
            render={({ field }) => (
              <FileListManager
                label="Existing Images"
                value={field.value || []}
                onChange={field.onChange}
              />
            )}
          />
        )}

        {/* ===================== */}
        {/* NEW IMAGES */}
        {/* ===================== */}
        <Controller
          name="images"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <FileInputField
              label={
                mode === "edit"
                  ? "Upload New Images"
                  : "Product Images"
              }
              multiple
              maxFiles={10}
              maxSizeMB={10}
              accept="image/*"
              value={field.value || []}
              onChange={field.onChange}
            />
          )}
        />

        {/* ===================== */}
        {/* SUBMIT */}
        {/* ===================== */}
        <Button
          type="submit"
          variant="contained"
          disabled={loading}
          size="large"
        >
          {loading
            ? "Processing..."
            : mode === "create"
            ? "Create Product"
            : "Update Product"}
        </Button>
      </Stack>
    </Paper>
  );
}