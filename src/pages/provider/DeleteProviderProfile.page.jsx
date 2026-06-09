import {
  Box,
  Paper,
  Typography,
  Button,
  Stack
} from "@mui/material";

export default function DeleteProviderProfilePage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Paper
        sx={{
          p: 4,
          maxWidth: 500
        }}
      >
        <Stack spacing={3}>
          <Typography variant="h5">
            Delete Provider Profile
          </Typography>

          <Typography>
            This action cannot be undone.
          </Typography>

          <Button
            color="error"
            variant="contained"
          >
            Delete Provider Profile
          </Button>
        </Stack>
      </Paper>
    </Box>
  );
}