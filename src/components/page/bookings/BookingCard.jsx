import { Paper, Stack, Typography, Button, Chip } from "@mui/material";
import ActionPanel from "../common/ActionPanel";

export default function BookingCard({ booking, onView }) {
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
          color="warning"
        />

        <Typography>
          Price: Rs. {booking.price}
        </Typography>

        <ActionPanel>
          <Button size="small" onClick={onView}>
            View
          </Button>

          <Button size="small">
            Status
          </Button>

          <Button size="small" color="error">
            Cancel
          </Button>
        </ActionPanel>

      </Stack>
    </Paper>
  );
}