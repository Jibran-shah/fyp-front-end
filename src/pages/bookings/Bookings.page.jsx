import { Typography, Stack } from "@mui/material";
import BookingCard from "../../components/bookings/BookingCard";
import PageContainer from "../../components/common/PageContainer";

export default function BookingsPage() {
  const bookings = [];

  return (
    <PageContainer>
      <Typography variant="h4" mb={3}>
        My Bookings
      </Typography>

      <Stack spacing={2}>
        {bookings.length === 0 && (
          <Typography>No bookings found</Typography>
        )}

        {bookings.map((b, idx) => (
          <BookingCard
            key={idx}
            booking={b}
            onView={() => {}}
          />
        ))}
      </Stack>
    </PageContainer>
  );
}