import { Paper, Typography, Button, Stack } from "@mui/material";

export default function DeleteServiceModal({
  onConfirm,
  onCancel,
  loading
}) {
  return (
    <Paper sx={{ p: 4, maxWidth: 500 }}>
      <Stack spacing={3}>
        <Typography variant="h5">
          Delete Service
        </Typography>

        <Typography>
          This action cannot be undone.
        </Typography>

        <Stack direction="row" spacing={2}>
          <Button
            color="error"
            variant="contained"
            onClick={onConfirm}
            disabled={loading}
          >
            Delete Service
          </Button>

          <Button
            variant="outlined"
            onClick={onCancel}
          >
            Cancel
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}