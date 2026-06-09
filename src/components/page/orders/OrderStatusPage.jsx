import { Chip } from "@mui/material";

export default function OrderStatusBadge({ status }) {
  return <Chip label={status} size="small" />;
}