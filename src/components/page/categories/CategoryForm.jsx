import { Stack, Button } from "@mui/material";
import InputField from "../common/InputField";

export default function CategoryForm({ mode = "create" }) {
  return (
    <Stack spacing={2}>
      <InputField label="Name" name="name" />
      <InputField label="Description" name="description" />
      <InputField label="Parent Category" name="parentCategory" />
      <InputField label="Applies To (product/service)" name="appliesTo" />

      <Button variant="contained">
        {mode === "create" ? "Create" : "Update"}
      </Button>

      {mode === "edit" && (
        <Button color="error" variant="outlined">
          Cancel
        </Button>
      )}
    </Stack>
  );
}