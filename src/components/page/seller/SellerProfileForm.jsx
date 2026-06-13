import {
  Paper,
  Stack,
  Button,
  Typography
} from "@mui/material";

import { InputField } from "../../common/InputField";

export default function SellerProfileForm({
  form,
  onSubmit,
  submitText = "Save",
  isLoading = false,
  locationStatus,
  locationError
}) {
  return (
    <Paper
      component="form"
      onSubmit={form.handleSubmit(
        onSubmit,
        (errors) => {
          console.log("VALIDATION ERRORS", errors);
        }
      )}
      sx={{
        p: 4,
        width: "100%",
        maxWidth: 600
      }}
    >
      <Stack spacing={2}>

        {locationStatus === "requesting" && (
          <Typography variant="body2" color="text.secondary">
            Detecting your location...
          </Typography>
        )}

        {locationStatus === "granted" && (
          <Typography variant="body2" color="success.main">
            Location detected successfully
          </Typography>
        )}

        {locationError && (
          <Typography variant="body2" color="error">
            {locationError}
          </Typography>
        )}

        <InputField
          label="Shop Name"
          name="shopName"
          register={form.register}
          error={form.formState.errors.shopName}
        />

        <InputField
          label="Shop Description"
          name="shopDescription"
          register={form.register}
          error={form.formState.errors.shopDescription}
        />

        <InputField
          label="Shop Logo"
          name="shopLogoFile"
          type="file"
          register={form.register}
          error={form.formState.errors.shopLogoFile}
        />

        <InputField
          label="Full Address"
          name="fullAddress"
          register={form.register}
          error={form.formState.errors.fullAddress}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
        >
          {submitText}
        </Button>
      </Stack>
    </Paper>
  );
}