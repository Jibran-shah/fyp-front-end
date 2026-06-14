import {
  Box,
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { useCreateBooking } from "../../hooks/api/bookings/bookings.hooks";

export default function CreateBookingPage() {
  const { serviceId, serviceProviderId } = useParams();
  const navigate = useNavigate();

  const bookingMutation = useCreateBooking();

  const [form, setForm] = useState({
    description: "",
    scheduledAt: "",
    durationMinutes: 60,
    notes: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    bookingMutation.mutate(
      {
        serviceId,
        serviceProvider: serviceProviderId,
        ...form,
      },
      {
        onSuccess: () => navigate("/bookings"),
      }
    );
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 600 }}>
        <Typography variant="h5" fontWeight={600} mb={3}>
          Create Booking
        </Typography>

        <Stack spacing={2} component="form" onSubmit={handleSubmit}>
          {/* DESCRIPTION */}
          <TextField
            label="Description"
            name="description"
            value={form.description}
            onChange={handleChange}
            fullWidth
            multiline
            rows={3}
          />

          {/* SCHEDULE */}
          <TextField
            label="Scheduled At"
            name="scheduledAt"
            type="datetime-local"
            value={form.scheduledAt}
            onChange={handleChange}
            InputLabelProps={{ shrink: true }}
            fullWidth
          />

          {/* DURATION */}
          <TextField
            label="Duration (minutes)"
            name="durationMinutes"
            type="number"
            value={form.durationMinutes}
            onChange={handleChange}
            fullWidth
          />

          {/* NOTES */}
          <TextField
            label="Notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            fullWidth
            multiline
            rows={2}
          />

          <Button
            type="submit"
            variant="contained"
            disabled={bookingMutation.isPending}
          >
            {bookingMutation.isPending ? "Booking..." : "Confirm Booking"}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}