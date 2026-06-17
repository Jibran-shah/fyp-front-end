import { Typography, Stack, CircularProgress, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import BookingCard from "../../components/bookings/BookingCard";
import PageContainer from "../../components/common/PageContainer";

import { useMyBookings } from "../../hooks/api/bookings/booking.hooks";

export default function BookingsPage() {
  const navigate = useNavigate();

  const {
    data: bookings,
    isLoading,
    isError,
  } = useMyBookings();

  const handleView = (id) => {
    navigate(`/bookings/${id}`);
  };

  return (
    <PageContainer>
      {/* TITLE */}
      <Typography variant="h4" mb={3}>
        My Bookings
      </Typography>

      {/* LOADING */}
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {/* ERROR */}
      {isError && (
        <Typography color="error">
          Failed to load bookings
        </Typography>
      )}

      {/* LIST */}
      {!isLoading && (
        <Stack spacing={2}>
          {bookings?.length === 0 && (
            <Typography>No bookings found</Typography>
          )}

          {bookings?.map((b) => (
            <BookingCard
              key={b._id || b.id}
              booking={b}
              onView={() => handleView(b._id || b.id)}
            />
          ))}
        </Stack>
      )}
    </PageContainer>
  );
}