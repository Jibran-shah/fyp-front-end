import { Chip } from "@mui/material";

export default function PriceBadge({ price }) {
  return (
    <Chip
      label={`₨ ${price}`}
      size="small"
      sx={(theme) => ({
        fontWeight: 700,
        fontSize: 12,
        height: 24,
        borderRadius: 1.5,
        bgcolor: "rgba(34, 197, 94, 0.12)",
        color: theme.palette.success.dark,
        border: "1px solid rgba(34, 197, 94, 0.25)",
      })}
    />
  );
}