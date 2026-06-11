import { Paper, Stack, Typography } from "@mui/material";
import { StatCard } from "../../common/StatCard";

export default function BuyerStats() {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <Typography fontWeight={700} mb={2}>
        Overview
      </Typography>

      <Stack direction="row" spacing={2}>
        <StatCard label="Orders" value={0} />
        <StatCard label="Wishlist" value={0} />
        <StatCard label="Messages" value={0} />
      </Stack>
    </Paper>
  );
}