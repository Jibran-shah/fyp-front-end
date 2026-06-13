import {
  Paper,
  Stack,
  Button
} from "@mui/material";

import {InputField} from "../../common/InputField";

export default function ReviewForm({
  register,
  errors,
  onSubmit,
  isLoading = false
}) {
  return (
    <Paper
      component="form"
      onSubmit={onSubmit}
      sx={{ p: 3 }}
    >
      <Stack spacing={2}>
        <InputField
          label="Rating"
          name="rating"
          type="number"
          register={register}
          error={errors?.rating}
        />

        <InputField
          label="Comment"
          name="comment"
          register={register}
          error={errors?.comment}
        />

        <Button
          type="submit"
          variant="contained"
          disabled={isLoading}
        >
          Submit Review
        </Button>
      </Stack>
    </Paper>
  );
}