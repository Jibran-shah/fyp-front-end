import { Chip } from "@mui/material";

export default function StatusChip({ status }) {
  return (
    <Chip
      label={status}
      color={
        status === "available" ? "success" :
        status === "sold_out" ? "error" : "default"
      }
      size="small"
    />
  );
}