import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Divider
} from "@mui/material";

import { useDeleteServiceProvider } from "../../hooks/api/serviceProvider/serviceProvider.hooks";

export default function DeleteProviderProfilePage() {
  const navigate = useNavigate();
  const mutation = useDeleteServiceProvider();

  const [confirmed, setConfirmed] = useState(false);

  const handleDelete = () => {
    mutation.mutate(undefined, {
      onSuccess: () => {
        navigate("/dashboard"); // adjust route if needed
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
        p: 2,
        backgroundColor: "#fafafa"
      }}
    >
      <Paper
        elevation={5}
        sx={{
          p: 4,
          maxWidth: 520,
          width: "100%",
          borderRadius: 3
        }}
      >
        <Stack spacing={2.5}>

          {/* HEADER */}
          <Typography variant="h5" fontWeight={700} color="error">
            Delete Provider Profile
          </Typography>

          <Typography variant="body2" color="text.secondary">
            This action will permanently remove your service provider profile,
            including all associated data.
          </Typography>

          <Divider />

          {/* WARNING BOX */}
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              backgroundColor: "#fff4f4",
              border: "1px solid #ffcccc"
            }}
          >
            <Typography variant="body2" color="error">
              ⚠️ This action cannot be undone.
            </Typography>
          </Box>

          {/* FIRST STEP */}
          {!confirmed && (
            <Button
              color="error"
              variant="outlined"
              onClick={() => setConfirmed(true)}
            >
              I understand, continue
            </Button>
          )}

          {/* CONFIRM STEP */}
          {confirmed && (
            <Stack spacing={1.5}>
              <Typography variant="body2" fontWeight={500}>
                Are you absolutely sure?
              </Typography>

              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  onClick={() => setConfirmed(false)}
                  disabled={mutation.isPending}
                >
                  Cancel
                </Button>

                <Button
                  color="error"
                  variant="contained"
                  onClick={handleDelete}
                  disabled={mutation.isPending}
                >
                  {mutation.isPending
                    ? "Deleting..."
                    : "Yes, Delete Profile"}
                </Button>
              </Stack>
            </Stack>
          )}

        </Stack>
      </Paper>
    </Box>
  );
}