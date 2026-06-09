import { Stack, Button } from "@mui/material";
import InputField from "../../common/InputField";

export default function ProfileForm({
  form,
  onSubmit,
  isLoading,
  mode = "create"
}) {
  return (
    <Stack component="form" spacing={2} onSubmit={form.handleSubmit(onSubmit)}>
      <InputField
        label="Full Name"
        name="fullName"
        register={form.register}
        error={form.formState.errors.fullName}
      />

      <InputField
        label="Phone"
        name="phone"
        register={form.register}
        error={form.formState.errors.phone}
      />

      <InputField
        label="Bio"
        name="bio"
        register={form.register}
        error={form.formState.errors.bio}
      />

      <InputField
        label="Country"
        name="country"
        register={form.register}
        error={form.formState.errors.country}
      />

      <InputField
        label="City"
        name="city"
        register={form.register}
        error={form.formState.errors.city}
      />

      <InputField
        label="Address"
        name="address"
        register={form.register}
        error={form.formState.errors.address}
      />

      <Button type="submit" variant="contained" disabled={isLoading}>
        {mode === "edit"
          ? isLoading
            ? "Updating..."
            : "Update Profile"
          : isLoading
            ? "Creating..."
            : "Create Profile"}
      </Button>
    </Stack>
  );
}