import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

import { useBuyerProfile } from "../../hooks/api/profile/buyerProfile.hooks";
import { useUpdateBuyerProfile } from "../../hooks/api/profile/buyerProfile.hooks";
import { useEditProfileForm } from "../../hooks/form/profile/useEditProfileForm";

import ProfileForm from "../../components/page/profile/ProfileForm";


export default function EditProfilePage() {
  const navigate = useNavigate();

  const { data: profile, isLoading } = useBuyerProfile();
  const updateMutation = useUpdateBuyerProfile();
  const form = useEditProfileForm();

  useEffect(() => {
    if (profile) {
      form.reset(profile);
    }
  }, [profile]);

  const onSubmit = (data) => {
    updateMutation.mutate(data, {
      onSuccess: () => navigate("/profile")
    });
  };

  if (isLoading) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography>Loading profile...</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" mb={2}>
          Edit Profile
        </Typography>

        <ProfileForm
          form={form}
          onSubmit={onSubmit}
          isLoading={updateMutation.isPending}
          mode="edit"
        />
      </Paper>
    </Box>
  );
}