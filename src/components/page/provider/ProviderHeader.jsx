import { Paper, Typography } from "@mui/material";
import { useBuyerProfile } from "../../../hooks/api/profile/useBuyerProfile";

export default function ProviderHeader() {
  const { data: profile } = useBuyerProfile();

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600}>
        Service Provider Dashboard
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Welcome back, {profile?.fullName}
      </Typography>
    </Paper>
  );
}