import { Paper, Typography, Stack, Chip, Button } from "@mui/material";
import PageContainer from "../../components/common/PageContainer";
import ActionPanel from "../../components/common/ActionPanel";

export default function BookingDetailsPage() {
  return (
    <PageContainer>
      <Paper sx={{ p: 3 }}>
        <Stack spacing={2}>

          <Typography variant="h4">
            Booking Details
          </Typography>

          <Typography>Service: Cleaning</Typography>
          <Typography>Provider: John</Typography>
          <Typography>Date: 2026-06-10</Typography>
          <Typography>Duration: 60 min</Typography>
          <Typography>Price: Rs. 1200</Typography>

          <Chip label="PENDING" color="warning" />

          <Typography>Notes: None</Typography>

          <ActionPanel>
            <Button variant="contained">
              Update Status
            </Button>

            <Button color="error">
              Cancel
            </Button>

            <Button>
              Delete
            </Button>
          </ActionPanel>

        </Stack>
      </Paper>
    </PageContainer>
  );
}