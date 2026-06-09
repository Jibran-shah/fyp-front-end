import {
  Stack,
  Typography,
  Divider
} from "@mui/material";

import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";

export default function ReviewSection({
  reviews = [],
  canReview = false,
  reviewFormProps
}) {
  return (
    <Stack spacing={3}>
      <Typography variant="h5">
        Reviews
      </Typography>

      {canReview && (
        <>
          <ReviewForm {...reviewFormProps} />
          <Divider />
        </>
      )}

      <ReviewList reviews={reviews} />
    </Stack>
  );
}