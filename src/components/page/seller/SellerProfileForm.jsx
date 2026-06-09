import {
  Paper,
  Stack,
  Button
} from "@mui/material";

import InputField from "../../common/InputField";

export default function SellerProfileForm({
  register,
  errors,
  onSubmit,
  submitText = "Save",
  isLoading = false
}) {
  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      sx={{
        p: 4,
        width: "100%",
        maxWidth: 600
      }}
    >
      <Stack spacing={2}>
        <InputField
          label="Shop Name"
          name="shopName"
          register={register}
          error={errors?.shopName}
        />

        <InputField
          label="Shop Description"
          name="shopDescription"
          register={register}
          error={errors?.shopDescription}
        />

        <InputField
          label="Shop Logo"
          name="shopLogo"
          type="file"
          register={register}
          error={errors?.shopLogo}
        />

        <InputField
          label="Full Address"
          name="fullAddress"
          register={register}
          error={errors?.fullAddress}
        />

        <InputField
          label="Latitude"
          name="latitude"
          register={register}
          error={errors?.latitude}
        />

        <InputField
          label="Longitude"
          name="longitude"
          register={register}
          error={errors?.longitude}
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