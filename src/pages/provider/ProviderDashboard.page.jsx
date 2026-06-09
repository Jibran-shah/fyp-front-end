import { Box, Stack } from "@mui/material";

import ProviderHeader from "../../components/page/provider/ProviderHeader";
import ProviderStats from "../../components/page/provider/ProviderStats";
import ProviderQuickActions from "../../components/page/provider/ProviderQuickActions";


export default function ProviderDashboardPage() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "#0f172a",
        p: 3
      }}
    >
      <Stack spacing={3} maxWidth={1000} mx="auto">
        <ProviderHeader />
        <ProviderStats />
        <ProviderQuickActions />
      </Stack>
    </Box>
  );
}