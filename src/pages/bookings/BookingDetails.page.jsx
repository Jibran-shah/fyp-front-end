import { useState } from "react";

import {
  Paper,
  Typography,
  Stack,
  Chip,
  Button,
  CircularProgress,
  Box,
} from "@mui/material";

import PageContainer from "../../components/common/PageContainer";
import ActionPanel from "../../components/common/ActionPanel";

import { useParams, useNavigate } from "react-router-dom";

import {
  useBooking,
  useCancelBooking,
  useDeleteBooking,
  useUpdateBookingStatus,
} from "../../hooks/api/bookings/booking.hooks";

export default function BookingDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: booking, isLoading } = useBooking(id);

  const { mutate: cancelBooking, isPending: canceling } =
    useCancelBooking();

  const { mutate: deleteBooking, isPending: deleting } =
    useDeleteBooking();

  const { mutate: updateStatus, isPending: updating } =
    useUpdateBookingStatus();

  const handleCancel = () => {
    cancelBooking(id);
  };

  const handleDelete = () => {
    deleteBooking(id, {
      onSuccess: () => navigate(-1),
    });
  };

  const handleStatusUpdate = () => {
    updateStatus({
      id,
      data: { status: "COMPLETED" }, // example
    });
  };

  if (isLoading) {
    return (
      <PageContainer>
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      </PageContainer>
    );
  }

  if (!booking) {
    return (
      <PageContainer>
        <Typography>Booking not found</Typography>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2}>
          {/* TITLE */}
          <Typography variant="h4">
            Booking Details
          </Typography>

          {/* INFO */}
          <Typography>
            Service: {booking.service?.name || "N/A"}
          </Typography>

          <Typography>
            Provider: {booking.provider?.name || "N/A"}
          </Typography>

          <Typography>
            Date: {booking.date}
          </Typography>

          <Typography>
            Duration: {booking.duration} min
          </Typography>

          <Typography>
            Price: Rs. {booking.price}
          </Typography>

          {/* STATUS */}
          <Chip
            label={booking.status}
            color={
              booking.status === "PENDING"
                ? "warning"
                : booking.status === "COMPLETED"
                ? "success"
                : "default"
            }
          />

          {/* NOTES */}
          <Typography>
            Notes: {booking.notes || "None"}
          </Typography>

          {/* ACTIONS */}
          <ActionPanel>
            <Button
              variant="contained"
              disabled={updating}
              onClick={handleStatusUpdate}
            >
              {updating ? "Updating..." : "Update Status"}
            </Button>

            <Button
              color="error"
              disabled={canceling}
              onClick={handleCancel}
            >
              {canceling ? "Cancelling..." : "Cancel"}
            </Button>

            <Button
              color="error"
              disabled={deleting}
              onClick={handleDelete}
            >
              {deleting ? "Deleting..." : "Delete"}
            </Button>
          </ActionPanel>
        </Stack>
      </Paper>
    </PageContainer>
  );
}