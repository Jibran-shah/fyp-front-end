import { Chip } from "@mui/material";

export default function PriceBadge({ price }) {
  return (
    <Chip
      label={`₨ ${price}`}
      color="success"
      size="small"
    />
  );
}