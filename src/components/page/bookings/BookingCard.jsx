import { Paper, Stack, Typography, Button, Chip } from "@mui/material";

import { useCancelBooking, useUpdateBookingStatus } from "../../../hooks/api/bookings/bookings.hooks";

export default function BookingCard({ booking, onView }) {
  const { mutate: cancelBooking, isLoading: isCancelling } =
    useCancelBooking();

  const { mutate: updateStatus, isLoading: isUpdating } =
    useUpdateBookingStatus();

  const handleCancel = (e) => {
    e.stopPropagation();
    cancelBooking(booking._id);
  };

  const handleStatus = (e) => {
    e.stopPropagation();

    // simple toggle example (you can replace with modal later)
    const nextStatus =
      booking.status === "PENDING"
        ? "CONFIRMED"
        : booking.status === "CONFIRMED"
        ? "COMPLETED"
        : "PENDING";

    updateStatus({
      id: booking._id,
      data: { status: nextStatus },
    });
  };

  return (
    <Paper sx={{ p: 2 }}>
      <Stack spacing={1}>

        <Typography fontWeight={600}>
          {booking.serviceName}
        </Typography>

        <Typography>
          Date: {booking.scheduledAt}
        </Typography>

        <Chip
          label={booking.status || "PENDING"}
          color={
            booking.status === "COMPLETED"
              ? "success"
              : booking.status === "CONFIRMED"
              ? "info"
              : "warning"
          }
        />

        <Typography>
          Price: Rs. {booking.price}
        </Typography>

        <Stack direction="row" spacing={1}>
          <Button size="small" onClick={onView}>
            View
          </Button>

          <Button
            size="small"
            onClick={handleStatus}
            disabled={isUpdating}
          >
            Status
          </Button>

          <Button
            size="small"
            color="error"
            onClick={handleCancel}
            disabled={isCancelling}
          >
            Cancel
          </Button>
        </Stack>

      </Stack>
    </Paper>
  );
}