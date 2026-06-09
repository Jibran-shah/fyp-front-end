import { Paper, Typography } from "@mui/material";

export default function WithdrawRequestCard({ request = {} }) {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography>
        Amount: {request.amount || 2000}
      </Typography>

      <Typography>
        Status: {request.status || "Pending"}
      </Typography>

      <Typography>
        Note: {request.note || "---"}
      </Typography>
    </Paper>
  );
}