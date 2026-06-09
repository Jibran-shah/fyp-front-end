import { useNavigate } from "react-router-dom";
import { Box, Paper, Typography, Stack, CircularProgress } from "@mui/material";

import SellerProfileInfo from "../../components/page/seller/SellerProfileInfo";
import SellerProfileActions from "../../components/page/seller/SellerProfileActions";

import { useSellerProfile } from "../../hooks/api/seller/useSellerProfile";
import { useDeleteSellerProfile } from "../../hooks/api/seller/useDeleteSellerProfile";

export default function SellerProfilePage() {
  const navigate = useNavigate();

  const { data: profile, isLoading, isError } = useSellerProfile();
  const deleteMutation = useDeleteSellerProfile();

  const handleDelete = () => {
    deleteMutation.mutate(undefined, {
      onSuccess: () => {
        navigate("/");
      }
    });
  };

  const handleEdit = () => {
    navigate("/seller/profile/edit");
  };

  if (isLoading) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <CircularProgress />
      </Box>
    );
  }

  if (isError || !profile) {
    return (
      <Box sx={{ p: 4, textAlign: "center" }}>
        <Typography color="error">
          Failed to load seller profile
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={3}>
          
          {/* PROFILE INFO */}
          <SellerProfileInfo profile={profile} />

          {/* ACTIONS */}
          <SellerProfileActions
            onEdit={handleEdit}
            onDelete={handleDelete}
            isDeleting={deleteMutation.isPending}
          />

        </Stack>
      </Paper>
    </Box>
  );
}