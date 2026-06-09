import { Box, Stack } from "@mui/material";

import SellerHeader from "../../components/page/seller/SellerHeader";
import SellerStats from "../../components/page/seller/SellerStats";
import SellerQuickActions from "../../components/page/seller/SellerQuickActions";

export default function SellerDashboardPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        p: 3
      }}
    >
      <Stack spacing={3} maxWidth={1000} mx="auto">
        <SellerHeader />
        <SellerStats />
        <SellerQuickActions />
      </Stack>
    </Box>
  );
}