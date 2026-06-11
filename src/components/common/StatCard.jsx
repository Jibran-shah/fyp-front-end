import { Paper, Typography } from "@mui/material";

export function StatCard({ label, value }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        flex: 1,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <Typography variant="h6" fontWeight={700}>
        {value}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {label}
      </Typography>
    </Paper>
  );
}