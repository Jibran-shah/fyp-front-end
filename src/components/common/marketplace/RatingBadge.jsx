import { Chip } from "@mui/material";

export default function RatingBadge({ rating }) {
  return (
    <Chip
      label={`⭐ ${rating || 0}`}
      color="warning"
      size="small"
    />
  );
}