import { Chip } from "@mui/material";

export default function SellerOrderStatusBadge({ status }) {
  return <Chip label={status} size="small" />;
}