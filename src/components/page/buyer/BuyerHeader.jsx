import { Paper, Typography, Stack, Chip } from "@mui/material";
import { useBuyerProfile } from "../../../hooks/api/profile/useBuyerProfile";

export default function BuyerHeader() {
  const { data: profile } = useBuyerProfile();

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
          Dashboard
        </Typography>

        <Typography variant="body2" color="text.secondary">
          Welcome back, {profile?.fullName}
        </Typography>

        <Stack direction="row" spacing={1}>
          {profile?.role?.map((r) => (
            <Chip key={r} label={r} size="small" />
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
}