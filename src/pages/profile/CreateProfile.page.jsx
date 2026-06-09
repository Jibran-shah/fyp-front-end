import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography } from "@mui/material";

useCreateBuyerProfile
import { useCreateBuyerProfile } from "../../hooks/api/profile/useCreateBuyerProfile";
import { useCreateProfileForm } from "../../hooks/form/profile/useCreateProfileForm";
import ProfileForm from "../../components/page/profile/ProfileForm";

export default function CreateProfilePage() {
  const navigate = useNavigate();

  const form = useCreateProfileForm();
  const createMutation = useCreateBuyerProfile();

  const onSubmit = (data) => {
    createMutation.mutate(data, {
      onSuccess: () => navigate("/profile")
    });
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Paper sx={{ p: 4, width: "100%", maxWidth: 500 }}>
        <Typography variant="h5" mb={2}>
          Create Profile
        </Typography>

        <ProfileForm
          form={form}
          onSubmit={onSubmit}
          isLoading={createMutation.isPending}
          mode="create"
        />
      </Paper>
    </Box>
  );
}