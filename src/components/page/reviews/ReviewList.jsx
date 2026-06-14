import { Stack, Typography } from "@mui/material";
import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews = [] }) {
  return (
    <Stack spacing={1}>
      <Typography fontWeight={700}>Other Reviews</Typography>

      {reviews.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          No reviews yet
        </Typography>
      ) : (
        reviews.map((review) => (
          <ReviewCard key={review._id} review={review} />
        ))
      )}
    </Stack>
  );
}