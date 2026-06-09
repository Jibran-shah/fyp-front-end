import { Box, Typography, Button, Stack } from "@mui/material";

export default function HeroSection() {
  return (
    <Box
      sx={{
        p: 3,
        borderRadius: 2,
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
        color: "white"
      }}
    >
      <Typography variant="h4" fontWeight="bold">
        Welcome to Marketplace
      </Typography>

      <Typography variant="body2" sx={{ color: "gray", mt: 1 }}>
        Buy products, hire services, and manage everything in one place.
      </Typography>

      <Stack direction="row" spacing={2} mt={3}>
        <Button variant="contained">Browse Products</Button>
        <Button variant="outlined">Explore Services</Button>
      </Stack>
    </Box>
  );
}