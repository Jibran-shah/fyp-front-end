import { useNavigate } from "react-router-dom";

import { Box, Paper, Typography, Button, Stack } from "@mui/material";

import { useDeleteBuyerProfile } from "../../hooks/api/profile/buyerProfile.hooks";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth.slice";

export default function DeleteProfilePage() {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const deleteMutation = useDeleteBuyerProfile();

  const handleDelete = () => {
    deleteMutation.mutate(undefined, {
      onSuccess: (res) => {
        console.log("logout res",res);
        dispatch(logout());
        console.log("navigating to login");
        navigate("/login");
      }
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          p: 4,
          width: "100%",
          maxWidth: 450,
          textAlign: "center"
        }}
      >
        <Typography variant="h5" fontWeight={600} color="error">
          Delete Profile
        </Typography>

        <Typography sx={{ mt: 2, color: "text.secondary" }}>
            This action is permanent. Your profile and associated data will be removed.
        </Typography>

        <Stack direction="row" spacing={2} sx={{ mt: 4, justifyContent: "center" }}>
          <Button
            variant="outlined"
            onClick={() => navigate("/profile")}
          >
            Cancel
          </Button>

          <Button
            variant="contained"
            color="error"
            disabled={deleteMutation.isPending}
            onClick={handleDelete}
          >
            {deleteMutation.isPending ? "Deleting..." : "Delete"}
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}