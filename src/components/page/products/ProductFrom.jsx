import { Paper, Stack, Button, Typography } from "@mui/material";
import InputField from "../common/InputField";

export default function ProductForm({
  mode = "create",
  onSubmit
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
        <InputField label="Product Name" name="name" />
        <InputField label="Description" name="description" />
        <InputField label="Category" name="category" />
        <InputField label="Price" name="price" type="number" />
        <InputField label="Quantity Available" name="quantityAvailable" type="number" />
        <InputField label="Images" name="images" type="file" />
        <InputField label="Full Address" name="fullAddress" />
        <InputField label="Latitude" name="latitude" />
        <InputField label="Longitude" name="longitude" />

        <Button type="submit" variant="contained">
          {mode === "create" ? "Create Product" : "Update Product"}
        </Button>
      </Stack>
    </Paper>
  );
}