import { Box, Stack } from "@mui/material";

export default function DashboardLayout({ children }) {
  return (
    <Box sx={{ minHeight: "100vh", p: 3 }}>
      <Stack spacing={3} maxWidth={1000} mx="auto">
        {children}
      </Stack>
    </Box>
  );
}