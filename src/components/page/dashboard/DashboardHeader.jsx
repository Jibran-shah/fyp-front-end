import { Paper, Typography, Stack, Chip } from "@mui/material";

export default function DashboardHeader({
  title,
  name,
  roles = [],
}) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <Stack spacing={1}>
        <Typography variant="h5" fontWeight={700}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Welcome back, {name}
        </Typography>

        <Stack direction="row" spacing={1}>
          {roles.map((r) => (
            <Chip key={r} label={r} size="small" />
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}