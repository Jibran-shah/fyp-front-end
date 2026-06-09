import { Box } from "@mui/material";

export default function PageContainer({ children, center = false }) {
  return (
    <Box
      sx={{
        p: 4,
        minHeight: center ? "100vh" : "auto",
        display: center ? "flex" : "block",
        justifyContent: center ? "center" : "flex-start",
        alignItems: center ? "center" : "stretch"
      }}
    >
      {children}
    </Box>
  );
}