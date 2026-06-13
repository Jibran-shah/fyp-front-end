import {
  Box,
  Paper,
  Typography,
  Button,
  Stack
} from "@mui/material";

import {InputField} from "../../components/common/InputField";

export default function EditServicePage() {
  return (
    <Box
      sx={{
        p: 4,
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Paper
        component="form"
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 700
        }}
      >
        <Typography
          variant="h5"
          fontWeight={600}
          mb={3}
        >
          Edit Service
        </Typography>

        <Stack spacing={2}>
          <InputField
            label="Service Name"
            name="name"
          />

          <InputField
            label="Description"
            name="description"
          />

          <InputField
            label="Category"
            name="category"
          />

          <InputField
            label="Price"
            name="price"
            type="number"
          />

          <InputField
            label="Duration Hours"
            name="durationHours"
            type="number"
          />

          <InputField
            label="Address"
            name="fullAddress"
          />

          <InputField
            label="Latitude"
            name="latitude"
          />

          <InputField
            label="Longitude"
            name="longitude"
          />

          <Button
            variant="contained"
            type="submit"
          >
            Update Service
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}