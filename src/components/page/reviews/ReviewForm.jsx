import { useEffect, useState } from "react";
import {
  Paper,
  Stack,
  Typography,
  TextField,
  Button,
  Rating,
} from "@mui/material";

import {
  useUpdateReview,
  useCreateReview,
} from "../../../hooks/api/reviews/reviews.hooks";

export default function ReviewForm({
  entityType,
  entityId,
  myReview,
}) {
  const { mutate: createReview, isPending: creating } =
    useCreateReview();

  const { mutate: updateReview, isPending: updating } =
    useUpdateReview();

  const loading = creating || updating;

  const [draft, setDraft] = useState({
    rating: 0,
    comment: "",
  });

  // Hydrate form when review changes
  // Do NOT clear form when myReview becomes undefined
  // during query refetches.
  useEffect(() => {
    if (!myReview) return;

    setDraft({
      rating: myReview.rating ?? 0,
      comment: myReview.comment ?? "",
    });
  }, [myReview?._id]);

  const handleSubmit = () => {
    if (draft.rating < 1) return;

    if (myReview) {
      updateReview({
        id: myReview._id,
        data: draft,
      });

      return;
    }

    createReview({
      entityType,
      entityId,
      rating: draft.rating,
      comment: draft.comment,
    });
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Stack spacing={2}>
        <Typography fontWeight={700}>
          {myReview ? "Your Review" : "Write a Review"}
        </Typography>

        <Rating
          value={draft.rating}
          onChange={(_, value) => {
            setDraft((prev) => ({
              ...prev,
              rating: value ?? 0,
            }));
          }}
        />

        <TextField
          fullWidth
          multiline
          minRows={3}
          value={draft.comment}
          onChange={(e) => {
            setDraft((prev) => ({
              ...prev,
              comment: e.target.value,
            }));
          }}
          placeholder="Write your review..."
        />

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading || draft.rating < 1}
        >
          {myReview ? "Update Review" : "Submit Review"}
        </Button>
      </Stack>
    </Paper>
  );
}