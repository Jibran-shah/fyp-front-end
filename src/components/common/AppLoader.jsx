import { Box, Typography, CircularProgress } from "@mui/material";

export default function AppLoader() {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <CircularProgress />

      <Typography sx={{ mt: 2 }}>
        Loading application...
      </Typography>
    </Box>
  );
}