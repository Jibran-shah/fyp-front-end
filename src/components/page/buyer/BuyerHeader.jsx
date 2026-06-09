import { Paper, Typography } from "@mui/material";
import { useBuyerProfile } from "../../../hooks/api/profile/useBuyerProfile";

export default function BuyerHeader() {
  const { data: profile } = useBuyerProfile();

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" fontWeight={600}>
        Buyer Dashboard
      </Typography>

      <Typography variant="body2" color="text.secondary">
        Welcome back, {profile?.fullName}
      </Typography>
    </Paper>
  );
}