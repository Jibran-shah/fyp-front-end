import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Paper, Stack } from "@mui/material";
import { useState } from "react";
import { useDeleteProductSeller } from "../../hooks/api/productSeller/productSeller.hooks";

export default function DeleteProductSellerPage() {
  const navigate = useNavigate();
  const { mutate, isPending } = useDeleteProductSeller();
  const [confirmed, setConfirmed] = useState(false);

  const handleDelete = () => {
    mutate(undefined, {
      onSuccess: () => {
        navigate("/dashboard"); // change route if needed
      }
    });
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          maxWidth: 500,
          width: "100%",
          borderRadius: 3
        }}
      >
        <Stack spacing={2}>
          <Typography variant="h5" fontWeight="bold">
            Delete Seller Profile
          </Typography>

          <Typography variant="body2" color="text.secondary">
            This action is permanent. Your seller profile, shop data, and
            related settings will be removed.
          </Typography>

          <Typography variant="body2" color="error">
            Are you sure you want to continue?
          </Typography>

          <Stack direction="row" spacing={2} mt={2}>
            <Button
              variant="outlined"
              onClick={() => navigate(-1)}
              fullWidth
              disabled={isPending}
            >
              Cancel
            </Button>

            <Button
              variant="contained"
              color="error"
              fullWidth
              disabled={isPending}
              onClick={() => setConfirmed(true)}
            >
              Delete
            </Button>
          </Stack>

          {confirmed && (
            <Stack spacing={1} mt={2}>
              <Typography variant="caption" color="error">
                Click confirm to permanently delete your seller profile.
              </Typography>

              <Button
                variant="contained"
                color="error"
                onClick={handleDelete}
                disabled={isPending}
              >
                {isPending ? "Deleting..." : "Confirm Delete"}
              </Button>
            </Stack>
          )}
        </Stack>
      </Paper>
    </Box>
  );
}