import {
  Box,
  Paper,
  Typography,
  Button,
  Stack
} from "@mui/material";

import { useState } from "react";
import {InputField} from "../../components/common/InputField";
import { useCreateService } from "../../hooks/api/services/useCreateService";

export default function CreateServicePage() {
  const { mutate: createService, isLoading } = useCreateService();

  const [form, setForm] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    durationHours: "",
    fullAddress: "",
    latitude: "",
    longitude: ""
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createService(
      {
        ...form,
        price: Number(form.price),
        durationHours: Number(form.durationHours),
        latitude: form.latitude ? Number(form.latitude) : null,
        longitude: form.longitude ? Number(form.longitude) : null
      },
      {
        onSuccess: () => {
          setForm({
            name: "",
            description: "",
            category: "",
            price: "",
            durationHours: "",
            fullAddress: "",
            latitude: "",
            longitude: ""
          });
        }
      }
    );
  };

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
        onSubmit={handleSubmit}
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 700
        }}
      >
        <Typography variant="h5" fontWeight={600} mb={3}>
          Create Service
        </Typography>

        <Stack spacing={2}>
          <InputField
            label="Service Name"
            name="name"
            value={form.name}
            onChange={handleChange}
          />

          <InputField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
          />

          <InputField
            label="Category"
            name="category"
            value={form.category}
            onChange={handleChange}
          />

          <InputField
            label="Price"
            name="price"
            type="number"
            value={form.price}
            onChange={handleChange}
          />

          <InputField
            label="Duration Hours"
            name="durationHours"
            type="number"
            value={form.durationHours}
            onChange={handleChange}
          />

          <InputField
            label="Address"
            name="fullAddress"
            value={form.fullAddress}
            onChange={handleChange}
          />

          <InputField
            label="Latitude"
            name="latitude"
            value={form.latitude}
            onChange={handleChange}
          />

          <InputField
            label="Longitude"
            name="longitude"
            value={form.longitude}
            onChange={handleChange}
          />

          <Button
            variant="contained"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Creating..." : "Create Service"}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}