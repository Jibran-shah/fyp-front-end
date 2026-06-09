import { Paper, Typography } from "@mui/material";
import { useBuyerProfile } from "../../../hooks/api/profile/useBuyerProfile"

export default function HomeHeader() {
  const { data: profile } = useBuyerProfile();

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600}>
        Welcome back, {profile?.fullName || "User"}
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Manage your account, profile, and activity from here.
      </Typography>
    </Paper>
  );
}