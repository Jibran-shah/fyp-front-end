import { Paper, Stack, Typography, Box, Button } from "@mui/material";

export default function PaymentTransactionCard() {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Box>
          <Typography fontWeight={600}>
            Transaction #123
          </Typography>

          <Typography variant="body2">
            Status: Pending
          </Typography>

          <Typography variant="body2">
            Amount: 2500
          </Typography>
        </Box>

        <Button variant="outlined">
          View
        </Button>
      </Stack>
    </Paper>
  );
}