import { Chip } from "@mui/material";

export default function RatingBadge({ rating }) {
  return (
    <Chip
      label={`⭐ ${rating || "0.0"}`}
      size="small"
      sx={(theme) => ({
        fontWeight: 700,
        fontSize: 12,
        height: 24,
        borderRadius: 1.5,
        bgcolor: "rgba(245, 158, 11, 0.12)",
        color: theme.palette.warning.dark,
        border: "1px solid rgba(245, 158, 11, 0.25)",
      })}
    />
  );
}