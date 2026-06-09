import { Box, Typography } from "@mui/material";

export default function HomeFooter() {
  return (
    <Box
      sx={{
        mt: 6,
        p: 3,
        textAlign: "center",
        color: "gray",
        borderTop: "1px solid #1e293b"
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Marketplace Platform
      </Typography>
    </Box>
  );
}