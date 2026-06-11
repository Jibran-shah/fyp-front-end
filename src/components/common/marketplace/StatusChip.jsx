import { Chip } from "@mui/material";

export default function StatusChip({ status }) {
  const getStyles = (theme) => {
    switch (status) {
      case "available":
        return {
          bgcolor: "rgba(34, 197, 94, 0.12)",
          color: theme.palette.success.dark,
          border: "1px solid rgba(34, 197, 94, 0.25)",
        };

      case "sold_out":
        return {
          bgcolor: "rgba(239, 68, 68, 0.12)",
          color: theme.palette.error.dark,
          border: "1px solid rgba(239, 68, 68, 0.25)",
        };

      default:
        return {
          bgcolor: theme.palette.grey[100],
          color: theme.palette.text.secondary,
          border: "1px solid rgba(0,0,0,0.08)",
        };
    }
  };

  return (
    <Chip
      label={status}
      size="small"
      sx={(theme) => ({
        fontWeight: 600,
        fontSize: 11,
        height: 22,
        textTransform: "capitalize",
        borderRadius: 1.5,
        ...getStyles(theme),
      })}
    />
  );
}