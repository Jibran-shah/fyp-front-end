import { Paper, Typography, Stack, Button } from "@mui/material";

export default function ReviewCard({ review }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography fontWeight={600}>
            Rating: {review?.rating || 5}/5
          </Typography>

          <Typography variant="body2">
            {review?.comment || "Sample review text"}
          </Typography>

          <Typography variant="caption">
            Entity: {review?.entityType || "Product"}
          </Typography>
        </div>

        <Button variant="outlined">View</Button>
      </Stack>
    </Paper>
  );
}