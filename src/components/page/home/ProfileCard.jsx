import { Paper, Typography, Stack, Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBuyerProfile } from "../../../hooks/api/profile/useBuyerProfile"

export default function ProfileCard() {
  const navigate = useNavigate();
  const { data: profile } = useBuyerProfile();

  return (
    <Paper sx={{ p: 3 }}>
      <Stack direction="row" spacing={2} alignItems="center">
        <Avatar
          src={profile?.profileAvatar?.url}
          sx={{ width: 60, height: 60 }}
        />

        <Stack>
          <Typography fontWeight={600}>
            {profile?.fullName}
          </Typography>

          <Typography variant="body2">
            {profile?.email}
          </Typography>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
        <Button variant="contained" onClick={() => navigate("/profile")}>
          View Profile
        </Button>

        <Button variant="outlined" onClick={() => navigate("/profile/edit")}>
          Edit
        </Button>
      </Stack>
    </Paper>
  );
}