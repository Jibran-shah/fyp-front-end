import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

import { useBuyerProfile } from "../../hooks/api/profile/useBuyerProfile";

import ProfileCard from "../../components/page/profile/ProfileCard";
import ProfileActions from "../../components/page/profile/ProfileActions";

export default function ProfilePage() {
  const navigate = useNavigate();
  const { data: profile, isLoading, isError } = useBuyerProfile();

  if (isLoading) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography>Loading profile...</Typography>
      </Box>
    );
  }

  if (isError || !profile) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography color="error">Failed to load profile</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <ProfileCard profile={profile} />

        <ProfileActions
          onEdit={() => navigate("/profile/edit")}
          onDelete={() => navigate("/profile/delete")}
        />
      </Paper>
    </Box>
  );
}