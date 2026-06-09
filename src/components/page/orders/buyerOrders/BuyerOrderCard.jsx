import { Paper, Typography, Stack, Button } from "@mui/material";

export default function BuyerOrderCard({ order }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <div>
          <Typography fontWeight={600}>
            Order #{order?._id || "123"}
          </Typography>

          <Typography variant="body2">
            Status: {order?.status || "PENDING"}
          </Typography>

          <Typography variant="body2">
            Total: {order?.totalAmount || 0}
          </Typography>
        </div>

        <Button variant="outlined">View</Button>
      </Stack>
    </Paper>
  );
}