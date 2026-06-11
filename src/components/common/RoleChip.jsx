import { Chip } from "@mui/material";

export default function RoleChip({ role }) {
  return (
    <Chip
      label={role}
      size="small"
      sx={{
        fontSize: 11,
        height: 22,
        bgcolor: "#374151",
        color: "white",
        fontWeight: 600,
      }}
    />
  );
}