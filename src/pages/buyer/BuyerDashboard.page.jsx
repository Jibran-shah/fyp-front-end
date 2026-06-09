import { Box, Stack } from "@mui/material";

import BuyerHeader from "../../components/page/buyer/BuyerHeader";
import BuyerStats from "../../components/page/buyer/BuyerStats";
import BuyerQuickActions from "../../components/page/buyer/BuyerQuickActions";

export default function BuyerDashboardPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        p: 3
      }}
    >
      <Stack spacing={3} maxWidth={1000} mx="auto">
        <BuyerHeader />
        <BuyerStats />
        <BuyerQuickActions />
      </Stack>
    </Box>
  );
}