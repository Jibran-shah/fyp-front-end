import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Chip
} from "@mui/material";

export default function ServiceDetailsPage() {
  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={2}>
          <Typography variant="h4">
            Service Name
          </Typography>

          <Chip label="Available" color="success" />

          <Typography>Category Path</Typography>

          <Typography>Service description here...</Typography>

          <Typography>Price: Rs. 1000</Typography>

          <Typography>Duration: 2 Hours</Typography>

          <Typography>Rating: 4.8</Typography>

          <Typography>Bookings: 25</Typography>

          <Typography>Address</Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained">
              Book Service
            </Button>

            <Button variant="outlined">
              Edit
            </Button>

            {/* DELETE SHOULD TRIGGER MODAL, NOT PAGE */}
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}