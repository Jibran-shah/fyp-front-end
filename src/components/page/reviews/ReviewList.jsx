import { Stack, Typography } from "@mui/material";

import ReviewCard from "./ReviewCard";

export default function ReviewList({ reviews = [] }) {
  if (!reviews.length) {
    return (
      <Typography>
        No reviews found
      </Typography>
    );
  }

  return (
    <Stack spacing={2}>
      {reviews.map((review) => (
        <ReviewCard
          key={review._id}
          review={review}
        />
      ))}
    </Stack>
  );
}