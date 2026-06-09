import {
  Box,
  Paper,
  Typography,
  Button,
  Stack,
  Chip
} from "@mui/material";

export default function ProviderProfilePage() {
  return (
    <Box sx={{ p: 4 }}>
      <Paper sx={{ p: 4 }}>
        <Stack spacing={3}>
          <Typography variant="h4">
            Professional Title
          </Typography>

          <Typography>
            Provider description goes here
          </Typography>

          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Chip label="React" />
            <Chip label="Node.js" />
            <Chip label="MongoDB" />
          </Stack>

          <Typography>
            Experience: 0 Years
          </Typography>

          <Typography>
            Rating: 0
          </Typography>

          <Typography>
            Address
          </Typography>

          <Typography>
            Approved: No
          </Typography>

          <Stack direction="row" spacing={2}>
            <Button variant="contained">
              Edit Profile
            </Button>

            <Button
              color="error"
              variant="outlined"
            >
              Delete Profile
            </Button>
          </Stack>
        </Stack>
      </Paper>
    </Box>
  );
}